'use client';

import React from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { User, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import type { Database } from '@/lib/database.types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteCard from '@/components/QuoteCard';
import { supabase } from '@/lib/supabase';

type Quote = Database['public']['Tables']['quotes']['Row'];

interface AuthorData {
  name: {
    zh: string;
    en: string;
  };
  title: {
    zh: string;
    en: string;
  };
  bio: {
    zh: string;
    en: string;
  };
  avatar?: string;
  period_zh?: string;
  period_en?: string;
  stats: {
    quotes: number;
    books: number;
  };
  categories: CategoryKey[];
  quotes: Quote[];
}

/**
 * 获取作者数据
 * @param authorSlug 作者的 URL slug
 */
async function getAuthorBySlug(authorSlug: string): Promise<AuthorData | null> {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    // 从 Supabase 获取作者的语录
    const { data: quotes, error } = await supabase
      .from('quotes')
      .select('*')
      .eq('author_en', decodeURIComponent(authorSlug).replace(/-/g, ' '))
      .order('created_at', { ascending: false });

    if (error) {
      console.error('获取作者数据失败:', error);
      return null;
    }

    if (!quotes || quotes.length === 0) {
      return null;
    }

    // 构建作者数据
    const firstQuote = quotes[0];
    const categories = Array.from(new Set(quotes.map((q: Quote) => q.category))) as CategoryKey[];
    const books = Array.from(new Set(quotes.map((q: Quote) => q.book_en).filter(Boolean)));

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
  } catch (error) {
    console.error('获取作者数据时出错:', error);
    return null;
  }
}

/**
 * @description 作者详情页面组件
 * @param {object} params - URL参数，包含作者slug
 */
export default function AuthorPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { language } = useLanguage();
  const t = translations[language];
  const [authorData, setAuthorData] = React.useState<AuthorData | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadAuthorData() {
      const data = await getAuthorBySlug(params.slug);
      setAuthorData(data);
      setIsLoading(false);
    }
    loadAuthorData();
  }, [params.slug]);

  if (isLoading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-xl w-48 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!authorData) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* 作者信息头部 */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="flex gap-8 items-start">
              {/* 作者头像 */}
              <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex-shrink-0 overflow-hidden">
                {authorData.avatar ? (
                  <Image
                    src={authorData.avatar}
                    alt={authorData.name[language]}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-16 h-16 text-primary-300" />
                  </div>
                )}
              </div>

              {/* 作者信息 */}
              <div className="flex-grow">
                <h1 className="text-4xl font-[oswald] font-bold text-gray-900 mb-2 tracking-wide">
                  {authorData.name[language]}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  {authorData.title[language]}
                </p>
                <p className="text-gray-600 mb-6 max-w-3xl">
                  {authorData.bio[language]}
                </p>

                {/* 统计信息 */}
                <div className="flex gap-8">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.quotes}
                    </div>
                    <div className="text-sm text-gray-500">{t.stats.quotes}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.books}
                    </div>
                    <div className="text-sm text-gray-500">{t.books.stats.books}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.period_zh || '-'}
                    </div>
                    <div className="text-sm text-gray-500">{language === 'zh' ? '时期' : 'Period'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 侧边栏过滤器 */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-gray-900">
                    {language === 'zh' ? '筛选' : 'Filters'}
                  </h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* 分类过滤 */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    {language === 'zh' ? '分类' : 'Categories'}
                  </h3>
                  <div className="space-y-2">
                    {authorData.categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input 
                          type="checkbox" 
                          className="rounded border-gray-300 text-primary-600" 
                        />
                        <span className="ml-2 text-sm text-gray-600">
                          {t.categories[category]}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 时期过滤 */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    {language === 'zh' ? '时期' : 'Period'}
                  </h3>
                  <div className="text-sm text-gray-600">
                    {language === 'zh' ? authorData.period_zh : authorData.period_en || '-'}
                  </div>
                </div>
              </div>
            </div>

            {/* 语录列表 */}
            <div className="flex-grow">
              <div className="space-y-6">
                {authorData.quotes.map((quote) => (
                  <QuoteCard
                    key={quote.id}
                    quote={{
                      zh: quote.quote_zh,
                      en: quote.quote_en
                    }}
                    author={{
                      zh: authorData.name.zh,
                      en: authorData.name.en
                    }}
                    authorTitle={{
                      zh: quote.author_title_zh || '',
                      en: quote.author_title_en || ''
                    }}
                    category={quote.category as CategoryKey}
                    likes={quote.likes}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 