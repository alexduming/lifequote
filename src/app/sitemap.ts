import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 生成站点地图
 * @returns {Promise<MetadataRoute.Sitemap>} 站点地图配置
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取所有作者
  const { data: authors } = await supabase
    .from('quotes')
    .select('author_en')
    .order('author_en');

  // 获取所有书籍
  const { data: books } = await supabase
    .from('quotes')
    .select('book_en')
    .order('book_en');

  // 基础页面 URL - 使用实际部署的域名
  const baseUrl = 'https://www.lifequote.club';
  
  // 静态页面
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/books`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/authors`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/daily`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/search`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
  ] as const;

  // 生成作者页面 URL
  const authorUrls = Array.from(new Set(authors?.map(a => a.author_en) || []))
    .filter(Boolean)
    .map(author => ({
      url: `${baseUrl}/author/${author.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // 生成书籍页面 URL
  const bookUrls = Array.from(new Set(books?.map(b => b.book_en) || []))
    .filter(Boolean)
    .map(book => ({
      url: `${baseUrl}/books/${book.toLowerCase().replace(/\s+/g, '-')}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }));

  // 生成分类页面 URL
  const categories = ['motivation', 'life', 'love', 'success', 'wisdom', 
    'philosophy', 'literature', 'science', 'art', 'history', 'politics', 
    'economics', 'education'];
  
  const categoryUrls = categories.map(category => ({
    url: `${baseUrl}/category/${category}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...authorUrls,
    ...bookUrls,
    ...categoryUrls,
  ];
} 