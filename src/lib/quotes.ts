/**
 * @file 语录数据处理模块
 * @description 提供语录相关的数据处理函数
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';
import { CategoryKey } from '@/config/translations';

export type Quote = Database['public']['Tables']['quotes']['Row'];

// 创建 Supabase 客户端
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 获取随机语录
 * @param limit 返回的语录数量
 * @returns 语录数组
 */
export async function getRandomQuotes(limit: number = 3) {
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
    .limit(limit)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取随机语录失败:', error);
    return [];
  }

  return quotes || [];
}

/**
 * 获取分类统计信息
 */
export async function getCategoryStats() {
  const { data, error } = await supabase
    .from('quotes')
    .select('category');

  if (error) {
    console.error('获取分类统计失败:', error);
    return {};
  }

  const stats = (data || []).reduce((acc: Record<CategoryKey, number>, curr) => {
    const category = curr.category as CategoryKey;
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<CategoryKey, number>);

  return stats;
}

/**
 * 根据分类获取语录
 * @param category 分类
 * @returns 语录数组
 */
export async function getQuotesByCategory(category: CategoryKey) {
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取分类语录失败:', error);
    return [];
  }

  return quotes || [];
}

/**
 * 获取分页语录
 * @param page 页码
 * @param pageSize 每页数量
 * @returns 语录数组和总数
 */
export async function getQuotesByPage(page: number = 1, pageSize: number = 10) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data: quotes, count, error } = await supabase
    .from('quotes')
    .select('*', { count: 'exact' })
    .range(start, end)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取分页语录失败:', error);
    return { quotes: [], total: 0 };
  }

  return { 
    quotes: quotes || [], 
    total: count || 0 
  };
}

/**
 * 获取作者的所有语录
 * @param authorSlug 作者标识
 * @returns 语录数组
 */
export async function getQuotesByAuthor(authorSlug: string) {
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
    .eq('author_en', authorSlug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取作者语录失败:', error);
    return [];
  }

  return quotes || [];
}

/**
 * 获取书籍的所有语录
 * @param bookSlug 书籍标识
 * @returns 语录数组
 */
export async function getQuotesByBook(bookSlug: string) {
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
    .eq('book_en', bookSlug)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取书籍语录失败:', error);
    return [];
  }

  return quotes || [];
} 