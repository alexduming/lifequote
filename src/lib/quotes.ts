import fs from 'fs-extra';
import csv from 'csv-parser';
import path from 'path';
import { CategoryKey } from '@/config/translations';

// 定义数据类型
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
}

// 缓存机制
let quotesCache: Quote[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

// 读取CSV文件
export async function readQuotesFromCsv(): Promise<Quote[]> {
  const currentTime = Date.now();
  
  // 如果缓存有效，直接返回缓存数据
  if (quotesCache && (currentTime - lastFetchTime < CACHE_DURATION)) {
    return quotesCache;
  }

  return new Promise((resolve, reject) => {
    const results: Quote[] = [];
    const csvPath = path.join(process.cwd(), 'src', 'data', 'quotes.csv');

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
          likes: parseInt(data.likes),
          views: parseInt(data.views),
          created_at: data.created_at,
        };
        results.push(quote);
      })
      .on('end', () => {
        // 更新缓存
        quotesCache = results;
        lastFetchTime = currentTime;
        resolve(results);
      })
      .on('error', reject);
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