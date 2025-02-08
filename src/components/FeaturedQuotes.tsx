'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import QuoteCard from '@/components/QuoteCard';
import { getRandomQuotes, type Quote } from '@/lib/quotes';

export default function FeaturedQuotes() {
  const { language } = useLanguage();
  const t = translations[language];
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const data = await getRandomQuotes(3);
        setQuotes(data);
      } catch (error) {
        console.error('获取推荐语录失败:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchQuotes();
  }, []);

  if (isLoading) {
    return (
      <section className="container py-20">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none">
              {t.sections.featured.title}
            </h2>
            <p className="mt-2 text-dark-500 font-light">
              {t.sections.featured.subtitle}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <div key={index} className="animate-pulse">
              <div className="bg-gray-200 h-48 rounded-lg"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none">
            {t.sections.featured.title}
          </h2>
          <p className="mt-2 text-dark-500 font-light">
            {t.sections.featured.subtitle}
          </p>
        </div>
        <a href="/quotes" className="btn btn-outline group font-display uppercase tracking-wide">
          {t.sections.featured.viewMore}
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quotes.map((quote, index) => (
          <div key={quote.id} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
            <QuoteCard
              quote={{
                quote_zh: quote.content_zh,
                quote_en: quote.content_en
              }}
              author={{
                author_zh: quote.author_zh,
                author_en: quote.author_en
              }}
              authorTitle={{
                author_title_zh: quote.author_title_zh || '',
                author_title_en: quote.author_title_en || ''
              }}
              category={quote.category as CategoryKey}
              likes={quote.likes}
            />
          </div>
        ))}
      </div>
    </section>
  );
} 