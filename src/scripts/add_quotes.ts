/**
 * @file 添加语录脚本
 * @description 提供添加单条或批量导入语录到 Supabase 的功能
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs-extra';
import csv from 'csv-parser';
import path from 'path';
import dotenv from 'dotenv';
import { CategoryKey } from '@/config/translations';

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
  id?: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string;
  author_title_en: string;
  category: CategoryKey;
  period_zh: string;
  period_en: string;
  likes?: number;
  views?: number;
  book: string;
  book_en: string;
}

/**
 * 添加单条语录
 * @param quote 语录数据
 */
async function addSingleQuote(quote: QuoteData) {
  try {
    console.log('正在添加语录:', quote.quote_zh);
    
    const { data, error } = await supabase
      .from('quotes')
      .insert([{
        ...quote,
        likes: quote.likes || 0,
        views: quote.views || 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }]);
      
    if (error) {
      throw error;
    }
    
    console.log('语录添加成功!');
    return data;
  } catch (error) {
    console.error('添加语录失败:', error);
    throw error;
  }
}

/**
 * 从 CSV 文件批量导入语录
 * @param filePath CSV 文件路径
 */
async function importFromCsv(filePath: string) {
  try {
    console.log('开始从 CSV 导入语录...');
    const quotes: QuoteData[] = [];
    
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data: any) => {
          const quote: QuoteData = {
            quote_zh: data.quote_zh,
            quote_en: data.quote_en,
            author_zh: data.author_zh,
            author_en: data.author_en,
            author_title_zh: data.author_title_zh || '',
            author_title_en: data.author_title_en || '',
            category: data.category as CategoryKey,
            period_zh: data.period_zh || '',
            period_en: data.period_en || '',
            likes: parseInt(data.likes) || 0,
            views: parseInt(data.views) || 0,
            book: data.book || '',
            book_en: data.book_en || ''
          };
          
          // 数据验证
          if (!quote.quote_zh || !quote.quote_en || !quote.author_zh || !quote.author_en) {
            console.warn('警告: 跳过不完整的数据:', quote);
            return;
          }
          
          quotes.push(quote);
        })
        .on('end', () => resolve(quotes))
        .on('error', reject);
    });
    
    console.log(`读取到 ${quotes.length} 条记录，开始导入...`);
    
    // 批量插入数据
    const batchSize = 100;
    for (let i = 0; i < quotes.length; i += batchSize) {
      const batch = quotes.slice(i, i + batchSize).map(quote => ({
        ...quote,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }));
      
      const { error } = await supabase
        .from('quotes')
        .insert(batch);
        
      if (error) {
        throw error;
      }
      
      console.log(`成功导入 ${i + batch.length}/${quotes.length} 条记录`);
      
      // 添加延时，避免触发限制
      if (i + batchSize < quotes.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log('导入完成！');
  } catch (error) {
    console.error('导入失败:', error);
    throw error;
  }
}

// 导出函数供其他模块使用
export {
  addSingleQuote,
  importFromCsv
}; 