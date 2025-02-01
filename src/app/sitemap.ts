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
    
    // 获取所有作者和书籍（优化查询）
    const { data: quotes, error: quotesError } = await supabase
      .from('quotes')
      .select('author_en, book_en')
      .order('author_en');

    if (quotesError) {
      console.error('获取数据失败:', quotesError);
      throw quotesError;
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
    const authorUrls = Array.from(new Set(quotes?.map(q => q.author_en) || []))
      .filter(author => author && author.trim()) // 过滤空值
      .map(author => ({
        url: `${baseUrl}/authors/${encodeURIComponent(author.toLowerCase().replace(/\s+/g, '-'))}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    // 生成书籍页面 URL
    const bookUrls = Array.from(new Set(quotes?.map(q => q.book_en) || []))
      .filter(book => book && book.trim()) // 过滤空值
      .map(book => ({
        url: `${baseUrl}/books/${encodeURIComponent(book.toLowerCase().replace(/\s+/g, '-'))}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
      }));

    // 生成分类页面 URL
    const categories = ['motivation', 'life', 'love', 'success', 'wisdom', 
      'philosophy', 'literature', 'science', 'art', 'history', 'politics', 
      'economics', 'education'];
    
    const categoryUrls = categories.map(category => ({
      url: `${baseUrl}/category/${encodeURIComponent(category)}`,
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
    
    // 验证所有 URL 格式
    sitemapData.forEach(item => {
      try {
        new URL(item.url);
      } catch (e) {
        console.error(`无效的 URL: ${item.url}`);
      }
    });
    
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