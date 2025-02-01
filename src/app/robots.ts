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
        allow: '/',
        disallow: [
          '/api/',
          '/private/',
          '/*.json$',
          '/*.xml$',
          '/search?*',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
} 