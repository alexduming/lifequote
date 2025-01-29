/**
 * @file 语录数据处理模块
 * @description 提供从 Supabase 数据库读取和处理语录数据的功能
 */

import { createClient } from '@supabase/supabase-js';
import { CategoryKey } from '@/config/translations';
import type { Database } from '@/types/database.types';

// 创建 Supabase 客户端
const supabase = createClient<Database>(
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
  id: string;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string | null;
  author_title_en: string | null;
  category: CategoryKey;
  period_zh: string | null;
  period_en: string | null;
  likes: number;
  views: number;
  book: string | null;
  book_en: string | null;
  created_at: string;
  updated_at: string;
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
    console.log('使用缓存的语录数据');
    return quotesCache;
  }

  console.log('从 Supabase 获取语录数据');
  const startTime = Date.now();

  try {
    // 从 Supabase 获取数据
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('获取语录数据失败:', error);
      throw error;
    }

    // 转换数据格式
    const quotes: Quote[] = data.map(row => ({
      id: row.id,
      quote_zh: row.quote_zh,
      quote_en: row.quote_en,
      author_zh: row.author_zh,
      author_en: row.author_en,
      author_title_zh: row.author_title_zh || null,
      author_title_en: row.author_title_en || null,
      category: row.category as CategoryKey,
      period_zh: row.period_zh || null,
      period_en: row.period_en || null,
      likes: row.likes || 0,
      views: row.views || 0,
      book: row.book || null,
      book_en: row.book_en || null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));

    const endTime = Date.now();
    console.log(`获取了 ${quotes.length} 条语录，耗时 ${endTime - startTime}ms`);

    // 更新缓存
    quotesCache = quotes;
    lastFetchTime = currentTime;

    return quotes;
  } catch (error) {
    console.error('获取语录数据时出错:', error);
    throw error;
  }
}

/**
 * 按分类获取语录
 * @param category 分类
 * @returns Promise<Quote[]>
 */
export async function getQuotesByCategory(category: CategoryKey): Promise<Quote[]> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('category', category)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(row => ({
      id: row.id,
      quote_zh: row.quote_zh,
      quote_en: row.quote_en,
      author_zh: row.author_zh,
      author_en: row.author_en,
      author_title_zh: row.author_title_zh || null,
      author_title_en: row.author_title_en || null,
      category: row.category as CategoryKey,
      period_zh: row.period_zh || null,
      period_en: row.period_en || null,
      likes: row.likes || 0,
      views: row.views || 0,
      book: row.book || null,
      book_en: row.book_en || null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));
  } catch (error) {
    console.error('按分类获取语录失败:', error);
    throw error;
  }
}

/**
 * 获取分类统计信息
 * @returns Promise<{ [key: string]: number }>
 */
export async function getCategoryStats(): Promise<{ [key: string]: number }> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('category');

    if (error) throw error;

    const stats: { [key: string]: number } = {};
    data.forEach(row => {
      stats[row.category] = (stats[row.category] || 0) + 1;
    });
    
    return stats;
  } catch (error) {
    console.error('获取分类统计失败:', error);
    throw error;
  }
}

/**
 * 按作者获取语录
 * @param authorEn 作者英文名
 * @returns Promise<Quote[]>
 */
export async function getQuotesByAuthor(authorEn: string): Promise<Quote[]> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('author_en', authorEn)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(row => ({
      id: row.id,
      quote_zh: row.quote_zh,
      quote_en: row.quote_en,
      author_zh: row.author_zh,
      author_en: row.author_en,
      author_title_zh: row.author_title_zh || null,
      author_title_en: row.author_title_en || null,
      category: row.category as CategoryKey,
      period_zh: row.period_zh || null,
      period_en: row.period_en || null,
      likes: row.likes || 0,
      views: row.views || 0,
      book: row.book || null,
      book_en: row.book_en || null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));
  } catch (error) {
    console.error('按作者获取语录失败:', error);
    throw error;
  }
}

/**
 * 获取随机语录
 * @param count 获取数量
 * @returns Promise<Quote[]>
 */
export async function getRandomQuotes(count: number = 1): Promise<Quote[]> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('*')
      .limit(count)
      .order('created_at', { ascending: false });

    if (error) throw error;

    return data.map(row => ({
      id: row.id,
      quote_zh: row.quote_zh,
      quote_en: row.quote_en,
      author_zh: row.author_zh,
      author_en: row.author_en,
      author_title_zh: row.author_title_zh || null,
      author_title_en: row.author_title_en || null,
      category: row.category as CategoryKey,
      period_zh: row.period_zh || null,
      period_en: row.period_en || null,
      likes: row.likes || 0,
      views: row.views || 0,
      book: row.book || null,
      book_en: row.book_en || null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));
  } catch (error) {
    console.error('获取随机语录失败:', error);
    throw error;
  }
}

/**
 * 获取所有作者
 * @returns Promise<Array<{ name: { zh: string; en: string }; title: { zh: string; en: string }; quoteCount: number }>>
 */
export async function getAllAuthors(): Promise<Array<{
  name: { zh: string; en: string };
  title: { zh: string; en: string };
  quoteCount: number;
}>> {
  try {
    const { data, error } = await supabase
      .from('quotes')
      .select('author_zh, author_en, author_title_zh, author_title_en');

    if (error) throw error;

    const authorMap = new Map();

    data.forEach(row => {
      const key = row.author_en;
      if (!authorMap.has(key)) {
        authorMap.set(key, {
          name: {
            zh: row.author_zh,
            en: row.author_en,
          },
          title: {
            zh: row.author_title_zh || '',
            en: row.author_title_en || '',
          },
          quoteCount: 1
        });
      } else {
        authorMap.get(key).quoteCount++;
      }
    });

    return Array.from(authorMap.values());
  } catch (error) {
    console.error('获取所有作者失败:', error);
    throw error;
  }
} 