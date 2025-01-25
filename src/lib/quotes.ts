/**
 * @file 语录数据处理模块
 * @description 提供从 Supabase 数据库读取和处理语录数据的功能
 */

import { createClient } from '@supabase/supabase-js';
import { CategoryKey } from '@/config/translations';

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
const CACHE_DURATION = 30 * 60 * 1000;

/**
 * 从 Supabase 读取语录数据
 * @description 从数据库读取语录数据，并使用缓存机制优化性能
 * @returns Promise<Quote[]> 返回语录数据数组
 */
export async function readQuotesFromCsv(): Promise<Quote[]> {
  const currentTime = Date.now();
  
  // 如果缓存有效，直接返回缓存数据
  if (quotesCache && (currentTime - lastFetchTime < CACHE_DURATION)) {
    console.log('Using cached quotes data');
    return quotesCache;
  }

  console.log('Fetching quotes from Supabase');
  const startTime = Date.now();

  try {
    // 从 Supabase 获取数据
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('id', { ascending: true });

    if (error) {
      throw error;
    }

    // 转换数据格式
    const quotes: Quote[] = data.map(row => ({
      id: row.id,
      quote: {
        zh: row.quote_zh,
        en: row.quote_en,
      },
      author: {
        zh: row.author_zh,
        en: row.author_en,
      },
      authorTitle: {
        zh: row.author_title_zh || '',
        en: row.author_title_en || '',
      },
      category: row.category as CategoryKey,
      period: {
        zh: row.period_zh || '',
        en: row.period_en || '',
      },
      likes: row.likes || 0,
      views: row.views || 0,
      created_at: row.created_at,
      book: row.book || '',
      book_en: row.book_en || '',
    }));

    const endTime = Date.now();
    console.log(`Fetched ${quotes.length} quotes in ${endTime - startTime}ms`);

    // 更新缓存
    quotesCache = quotes;
    lastFetchTime = currentTime;

    return quotes;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    throw error;
  }
}

/**
 * 按分类获取语录
 * @param category 分类
 * @returns Promise<Quote[]>
 */
export async function getQuotesByCategory(category: CategoryKey): Promise<Quote[]> {
  const quotes = await readQuotesFromCsv();
  return quotes.filter(quote => quote.category === category);
}

/**
 * 获取分类统计信息
 * @returns Promise<{ [key: string]: number }>
 */
export async function getCategoryStats(): Promise<{ [key: string]: number }> {
  const quotes = await readQuotesFromCsv();
  const stats: { [key: string]: number } = {};
  
  quotes.forEach(quote => {
    stats[quote.category] = (stats[quote.category] || 0) + 1;
  });
  
  return stats;
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