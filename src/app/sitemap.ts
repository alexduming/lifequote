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
  try {
    console.log('开始生成站点地图...');
    
    // 获取所有作者
    const { data: authors, error: authorsError } = await supabase
      .from('quotes')
      .select('author_en')
      .order('author_en');

    if (authorsError) {
      console.error('获取作者数据失败:', authorsError);
      throw authorsError;
    }

    // 获取所有书籍
    const { data: books, error: booksError } = await supabase
      .from('quotes')
      .select('book_en')
      .order('book_en');

    if (booksError) {
      console.error('获取书籍数据失败:', booksError);
      throw booksError;
    }

    // 基础页面 URL
    const baseUrl = 'https://www.lifequote.club';
    const currentDate = new Date().toISOString();
    
    // 静态页面
    const staticPages = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 1,
      },
      {
        url: `${baseUrl}/about`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
      {
        url: `${baseUrl}/books`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/authors`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/daily`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.9,
      },
      {
        url: `${baseUrl}/search`,
        lastModified: currentDate,
        changeFrequency: 'daily' as const,
        priority: 0.8,
      },
    ];

    // 生成作者页面 URL
    const authorUrls = Array.from(new Set(authors?.map(a => a.author_en) || []))
      .filter(Boolean)
      .map(author => ({
        url: `${baseUrl}/author/${author.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    // 生成书籍页面 URL
    const bookUrls = Array.from(new Set(books?.map(b => b.book_en) || []))
      .filter(Boolean)
      .map(book => ({
        url: `${baseUrl}/books/${book.toLowerCase().replace(/\s+/g, '-')}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    // 生成分类页面 URL
    const categories = ['motivation', 'life', 'love', 'success', 'wisdom', 
      'philosophy', 'literature', 'science', 'art', 'history', 'politics', 
      'economics', 'education'];
    
    const categoryUrls = categories.map(category => ({
      url: `${baseUrl}/category/${category}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    const sitemapData = [
      ...staticPages,
      ...authorUrls,
      ...bookUrls,
      ...categoryUrls,
    ];

    console.log(`站点地图生成完成，共 ${sitemapData.length} 个 URL`);
    return sitemapData;
    
  } catch (error) {
    console.error('生成站点地图失败:', error);
    // 返回基本的站点地图，确保至少包含主要页面
    return [
      {
        url: 'https://www.lifequote.club',
        lastModified: new Date().toISOString(),
        changeFrequency: 'daily' as const,
        priority: 1,
      }
    ];
  }
} 