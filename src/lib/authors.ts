/**
 * @file 作者数据处理模块
 * @description 提供作者相关的数据处理函数
 */

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

// 创建 Supabase 客户端
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * @description 根据slug获取作者详细信息
 * @param slug 作者标识
 */
export async function getAuthorBySlug(slug: string) {
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
    .or(`author_en.ilike.${slug},author_en.ilike.%${slug}%`)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('获取作者数据失败:', error);
    return null;
  }

  if (!quotes || quotes.length === 0) {
    console.error('未找到作者数据:', slug);
    return null;
  }

  // 构建作者数据
  const firstQuote = quotes[0];
  const categories = Array.from(new Set(quotes.map(q => q.category)));
  const books = Array.from(new Set(quotes.map(q => q.book_en).filter(Boolean)));

  return {
    name: {
      zh: firstQuote.author_zh,
      en: firstQuote.author_en,
    },
    title: {
      zh: firstQuote.author_title_zh || '',
      en: firstQuote.author_title_en || '',
    },
    bio: {
      zh: '这位作者的生平介绍暂时缺失。',
      en: 'Biography of this author is currently missing.',
    },
    period_zh: firstQuote.period_zh || undefined,
    period_en: firstQuote.period_en || undefined,
    stats: {
      quotes: quotes.length,
      books: books.length,
    },
    categories,
    quotes,
  };
} 