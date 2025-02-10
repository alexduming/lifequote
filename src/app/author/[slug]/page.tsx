/**
 * 作者详情页面
 * @module AuthorPage
 */

'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import { Globe2, Quote, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { useSupabase } from '@/contexts/SupabaseContext';
import type { Database } from '@/lib/database.types';

type Quote = Database['public']['Tables']['quotes']['Row'];

/**
 * 作者详情页面组件
 */
export default function AuthorPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { language } = useLanguage();
  const t = translations[language];
  const { supabase } = useSupabase();
  const [author, setAuthor] = useState<any>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAuthorData() {
      try {
        // 从 slug 中获取作者名
        const authorName = decodeURIComponent(params.slug).replace(/-/g, ' ');
        
        // 获取作者信息
        const { data: authorData, error: authorError } = await supabase
          .from('authors')
          .select('*')
          .eq('name_en', authorName)
          .single();

        if (authorError) throw authorError;
        setAuthor(authorData);

        // 获取作者的语录
        const { data: quotesData, error: quotesError } = await supabase
          .from('quotes')
          .select('*')
          .eq('author_en', authorName);

        if (quotesError) throw quotesError;
        setQuotes(quotesData);
      } catch (error) {
        console.error('加载作者数据失败:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAuthorData();
  }, [params.slug, supabase]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container py-20">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </>
    );
  }

  if (!author) {
    return (
      <>
        <Navbar />
        <div className="container py-20">
          <div className="text-center text-gray-500">
            作者不存在
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <main className="container py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Author Info */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Author Image */}
                <div className="aspect-square bg-dark-100 rounded-xl overflow-hidden relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center text-primary-500">
                    <Globe2 size={64} className="opacity-20" />
                  </div>
                </div>

                {/* Author Info */}
                <h1 className="text-3xl font-[oswald] font-bold text-dark-900 mb-2">
                  {language === 'zh' ? author.name_zh : author.name_en}
                </h1>
                <p className="text-dark-500 mb-4">
                  {language === 'zh' ? author.title_zh : author.title_en}
                </p>
                <p className="text-dark-600 mb-6">
                  {language === 'zh' ? author.description_zh : author.description_en}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-6 text-sm text-dark-500 mb-6">
                  <div className="flex items-center gap-2">
                    <Quote size={16} />
                    <span>{quotes.length} {t.actions.quotes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{author.categories?.length || 0} {language === 'en' ? 'categories' : '个类别'}</span>
                  </div>
                </div>

                {/* Categories */}
                {author.categories && (
                  <div className="flex flex-wrap gap-2">
                    {author.categories.map((category: string) => (
                      <span
                        key={category}
                        className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700"
                      >
                        {t.categories[category as CategoryKey]}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Quotes */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-medium text-gray-900 mb-6">{t.author.quotes}</h2>
              <div className="space-y-6">
                {quotes.map((quote) => (
                  <QuoteCard
                    key={quote.id}
                    id={quote.id}
                    quote={{
                      zh: quote.quote_zh,
                      en: quote.quote_en
                    }}
                    author={{
                      zh: quote.author_zh,
                      en: quote.author_en
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
    </div>
  );
} 