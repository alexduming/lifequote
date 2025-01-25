import fs from 'fs-extra';
import csv from 'csv-parser';
import path from 'path';
import { CategoryKey } from '@/config/translations';

/**
 * 定义数据类型
 */
export interface Quote {
  id: number;
  quote: {
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  authorTitle: {
    zh: string;
    en: string;
  };
  category: CategoryKey;
  period: {
    zh: string;
    en: string;
  };
  likes: number;
  views: number;
  created_at: string;
  book: string;
  book_en: string;
}

/**
 * 缓存机制
 * @description 使用内存缓存存储已读取的语录数据
 * quotesCache: 存储语录数据的缓存
 * lastFetchTime: 最后一次获取数据的时间戳
 * CACHE_DURATION: 缓存有效期，默认30分钟
 */
let quotesCache: Quote[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 增加到30分钟

/**
 * 读取CSV文件
 * @description 从CSV文件中读取语录数据，并使用缓存机制优化性能
 * @returns Promise<Quote[]> 返回语录数据数组
 */
export async function readQuotesFromCsv(): Promise<Quote[]> {
  const currentTime = Date.now();
  
  // 如果缓存有效，直接返回缓存数据
  if (quotesCache && (currentTime - lastFetchTime < CACHE_DURATION)) {
    console.log('Using cached quotes data');
    return quotesCache;
  }

  console.log('Reading quotes from CSV files');
  
  return new Promise<Quote[]>((resolve, reject) => {
    const results: Quote[] = [];
    const csvPaths = [
      path.join(process.cwd(), 'src', 'data', 'quotes.csv'),
      path.join(process.cwd(), 'src', 'data', 'quotes_new.csv')
    ];

    let completedFiles = 0;
    const startTime = Date.now();

    csvPaths.forEach(csvPath => {
      fs.createReadStream(csvPath)
        .pipe(csv())
        .on('data', (data: any) => {
          // 转换CSV数据为Quote对象
          const quote: Quote = {
            id: parseInt(data.id),
            quote: {
              zh: data.quote_zh,
              en: data.quote_en,
            },
            author: {
              zh: data.author_zh,
              en: data.author_en,
            },
            authorTitle: {
              zh: data.author_title_zh,
              en: data.author_title_en,
            },
            category: data.category as CategoryKey,
            period: {
              zh: data.period_zh,
              en: data.period_en,
            },
            likes: parseInt(data.likes) || 0,
            views: parseInt(data.views) || 0,
            created_at: data.created_at,
            book: data.book || '',
            book_en: data.book_en || '',
          };
          results.push(quote);
        })
        .on('end', () => {
          completedFiles++;
          if (completedFiles === csvPaths.length) {
            const endTime = Date.now();
            console.log(`CSV reading completed in ${endTime - startTime}ms`);
            
            // 更新缓存
            quotesCache = results;
            lastFetchTime = currentTime;
            resolve(results);
          }
        })
        .on('error', (error) => {
          console.error(`Error reading ${csvPath}:`, error);
          completedFiles++;
          if (completedFiles === csvPaths.length) {
            resolve(results);
          }
        });
    });
  });
}

// 按分类获取引用
export async function getQuotesByCategory(category: CategoryKey): Promise<Quote[]> {
  const quotes = await readQuotesFromCsv();
  return quotes.filter(quote => quote.category === category);
}

// 按作者获取引用
export async function getQuotesByAuthor(authorEn: string): Promise<Quote[]> {
  const quotes = await readQuotesFromCsv();
  return quotes.filter(quote => quote.author.en.toLowerCase() === authorEn.toLowerCase());
}

// 获取随机引用
export async function getRandomQuotes(count: number = 1): Promise<Quote[]> {
  const quotes = await readQuotesFromCsv();
  const shuffled = [...quotes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// 获取所有作者
export async function getAllAuthors(): Promise<Array<{
  name: { zh: string; en: string };
  title: { zh: string; en: string };
  quoteCount: number;
}>> {
  const quotes = await readQuotesFromCsv();
  const authorMap = new Map();

  quotes.forEach(quote => {
    const key = quote.author.en;
    if (!authorMap.has(key)) {
      authorMap.set(key, {
        name: quote.author,
        title: quote.authorTitle,
        quoteCount: 1
      });
    } else {
      authorMap.get(key).quoteCount++;
    }
  });

  return Array.from(authorMap.values());
}

// 获取所有分类统计
export async function getCategoryStats(): Promise<Array<{
  category: CategoryKey;
  count: number;
}>> {
  const quotes = await readQuotesFromCsv();
  const categoryMap = new Map();

  quotes.forEach(quote => {
    const count = categoryMap.get(quote.category) || 0;
    categoryMap.set(quote.category, count + 1);
  });

  return Array.from(categoryMap.entries()).map(([category, count]) => ({
    category: category as CategoryKey,
    count: count as number
  }));
} 