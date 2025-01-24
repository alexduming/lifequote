'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Quote } from '@/lib/quotes';

export default function SearchPage() {
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language];
  const query = searchParams?.get('q') || '';
  
  const [results, setResults] = React.useState<{ results: Quote[]; total: number } | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchResults = async () => {
      if (!query) {
        setResults(null);
        setIsLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${language}&limit=100`);
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error('搜索失败:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, language]);

  if (isLoading) {
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
            <div key={quote.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
              <blockquote className="text-xl text-gray-800 mb-4">
                "{quote.quote[language]}"
              </blockquote>
              <div className="flex items-center justify-between text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-primary-600 font-medium">
                      {quote.author[language]}
                    </span>
                    {quote.authorTitle && (
                      <span className="text-gray-500 ml-2">
                        {quote.authorTitle[language]}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-500">
                    {language === 'zh' ? quote.book : quote.book_en}
                  </div>
                </div>
                <a
                  href={`/books/${encodeURIComponent(quote.book_en.toLowerCase().replace(/\s+/g, '-'))}`}
                  className="btn btn-primary btn-sm"
                >
                  {t.actions.viewDetails}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 