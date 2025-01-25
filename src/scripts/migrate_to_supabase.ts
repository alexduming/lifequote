/**
 * @file 数据迁移脚本
 * @description 将多个 CSV 文件中的数据合并并迁移到 Supabase 数据库
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs-extra';
import csv from 'csv-parser';
import path from 'path';
import dotenv from 'dotenv';

// 加载环境变量
dotenv.config();

// 创建 Supabase 客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      persistSession: false
    }
  }
);

interface QuoteData {
  id: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string;
  author_title_en: string;
  category: string;
  period_zh: string;
  period_en: string;
  likes: number;
  views: number;
  book: string;
  book_en: string;
  created_at?: string;
  updated_at?: string;
}

/**
 * 从单个 CSV 文件读取数据
 */
async function readFromCsvFile(filePath: string): Promise<QuoteData[]> {
  return new Promise((resolve, reject) => {
    const results: QuoteData[] = [];
    console.log('正在读取文件:', filePath);

    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data: any) => {
        const quote: QuoteData = {
          id: parseInt(data.id),
          quote_zh: data.quote_zh || '',
          quote_en: data.quote_en || '',
          author_zh: data.author_zh || '',
          author_en: data.author_en || '',
          author_title_zh: data.author_title_zh || '',
          author_title_en: data.author_title_en || '',
          category: data.category || 'wisdom',
          period_zh: data.period_zh || '',
          period_en: data.period_en || '',
          likes: parseInt(data.likes) || 0,
          views: parseInt(data.views) || 0,
          book: data.book || '',
          book_en: data.book_en || '',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        // 数据验证
        if (!quote.quote_zh || !quote.quote_en || !quote.author_zh || !quote.author_en) {
          console.warn('警告: 跳过不完整的数据:', quote);
          return;
        }

        results.push(quote);
      })
      .on('end', () => {
        console.log(`成功从 ${path.basename(filePath)} 读取 ${results.length} 条记录`);
        resolve(results);
      })
      .on('error', (error) => {
        console.error(`读取文件 ${filePath} 失败:`, error);
        reject(error);
      });
  });
}

/**
 * 合并并去重数据
 */
function mergeAndDeduplicate(quotes: QuoteData[]): QuoteData[] {
  const uniqueQuotes = new Map<string, QuoteData>();
  let nextId = 1;

  quotes.forEach(quote => {
    // 使用中英文内容作为唯一键
    const key = `${quote.quote_zh}|${quote.quote_en}`;
    if (!uniqueQuotes.has(key)) {
      uniqueQuotes.set(key, { ...quote, id: nextId++ });
    }
  });

  return Array.from(uniqueQuotes.values());
}

/**
 * 将数据插入到 Supabase
 */
async function insertQuotesToSupabase(quotes: QuoteData[]) {
  console.log(`开始迁移数据到 Supabase，共 ${quotes.length} 条记录...`);
  
  // 每次插入 100 条记录
  const batchSize = 100;
  for (let i = 0; i < quotes.length; i += batchSize) {
    const batch = quotes.slice(i, Math.min(i + batchSize, quotes.length));
    console.log(`正在处理第 ${i + 1} 到 ${i + batch.length} 条记录...`);
    
    try {
      const { data, error } = await supabase
        .from('quotes')
        .upsert(batch, { 
          onConflict: 'id',
          ignoreDuplicates: false
        });
        
      if (error) {
        console.error('插入数据时出错:', error);
        throw error;
      }
      
      console.log(`成功插入 ${batch.length} 条记录`);
      
      // 添加延时，避免触发限制
      if (i + batchSize < quotes.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    } catch (error) {
      console.error('插入数据时出错:', error);
      throw error;
    }
  }
  
  console.log('数据迁移完成！');
}

/**
 * 主函数
 */
async function main() {
  try {
    console.log('开始数据迁移...');
    
    // 读取两个CSV文件
    const csvPaths = [
      path.join(process.cwd(), 'src', 'data', 'quotes.csv'),
      path.join(process.cwd(), 'src', 'data', 'quotes_new.csv')
    ];
    
    // 并行读取所有文件
    const quotesArrays = await Promise.all(
      csvPaths.map(filePath => readFromCsvFile(filePath))
    );
    
    // 合并所有数据
    const allQuotes = quotesArrays.flat();
    console.log('合并前总记录数:', allQuotes.length);
    
    // 去重
    const uniqueQuotes = mergeAndDeduplicate(allQuotes);
    console.log('去重后总记录数:', uniqueQuotes.length);
    
    // 迁移到 Supabase
    await insertQuotesToSupabase(uniqueQuotes);
    
  } catch (error) {
    console.error('迁移失败:', error);
    process.exit(1);
  }
}

// 执行迁移
main(); 