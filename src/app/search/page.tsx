'use client';

import React, { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import type { Database } from '@/lib/database.types';
import Navbar from '@/components/Navbar';

type Quote = Database['public']['Tables']['quotes']['Row'];

// 配置页面选项
export const dynamic = 'force-dynamic';
export const runtime = 'edge';
export const revalidate = 0;

/**
 * 搜索结果加载状态组件
 */
function SearchResultsSkeleton() {
  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-100 h-32 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 搜索结果组件
 */
function SearchResults() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language];
  const query = searchParams?.get('q') || '';
  const highlightId = searchParams?.get('highlight');
  
  const [results, setResults] = React.useState<{ results: Quote[]; total: number } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // 处理高亮滚动
  useEffect(() => {
    if (highlightId && results?.results) {
      const element = document.getElementById(`quote-${highlightId}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // 添加临时高亮效果
        element.classList.add('highlight-quote');
        setTimeout(() => {
          element.classList.remove('highlight-quote');
        }, 2000);
      }
    }
  }, [highlightId, results]);

  React.useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults(null);
        setIsLoading(false);
        return;
      }

      try {
        const params = new URLSearchParams({
          q: query,
          lang: language,
          limit: '100'
        });
        
        const response = await fetch(`/api/search?${params}`, {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        });
        
        if (!response.ok) {
          throw new Error('搜索请求失败');
        }
        
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('搜索失败:', error);
        setResults(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, language]);

  if (isLoading) {
    return <SearchResultsSkeleton />;
  }

  if (!results || results.total === 0) {
    return (
      <div className="container py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">{t.search.noResults}</h1>
          <p className="text-gray-500">{t.search.tryDifferent}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {t.search.resultsFor?.replace('%s', query) || `"${query}" 的搜索结果`}
          </h1>
          <p className="text-gray-500">
            {t.search.results?.replace('%d', results.total.toString()) || `找到 ${results.total} 条结果`}
          </p>
        </div>
        
        <div className="space-y-6">
          {results.results.map((quote) => (
            <div 
              key={quote.id}
              id={`quote-${quote.id}`}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <blockquote className="text-xl text-gray-800 mb-4">
                "{language === 'zh' ? quote.quote_zh : quote.quote_en}"
              </blockquote>
              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-primary-600 font-medium">
                      {language === 'zh' ? quote.author_zh : quote.author_en}
                    </span>
                    {(quote.author_title_zh || quote.author_title_en) && (
                      <span className="text-gray-500 ml-2">
                        {language === 'zh' ? quote.author_title_zh : quote.author_title_en}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500">
                    {language === 'zh' ? quote.book : quote.book_en}
                  </div>
                </div>
                {quote.book_en && (
                  <a
                    href={`/books/${encodeURIComponent(quote.book_en.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="btn btn-primary btn-sm"
                  >
                    {t.actions.viewDetails}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * 搜索页面组件
 */
export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<SearchResultsSkeleton />}>
        <SearchResults />
      </Suspense>
    </>
  );
} 