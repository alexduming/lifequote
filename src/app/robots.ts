import { MetadataRoute } from 'next';

/**
 * 生成 robots.txt 配置
 * @returns {MetadataRoute.Robots} robots.txt 配置
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: 'https://lifequote.vercel.app/sitemap.xml',
  };
} 