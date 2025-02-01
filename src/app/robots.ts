import { MetadataRoute } from 'next';

/**
 * 生成 robots.txt 配置
 * @returns {MetadataRoute.Robots} robots.txt 配置
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.lifequote.club';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/sitemap.xml'  // 明确允许抓取 sitemap.xml
        ],
        disallow: [
          '/api/',
          '/private/',
          '/*.json$',
          '/search?*',
          // 移除了 /*.xml$ 规则，避免影响 sitemap.xml
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 