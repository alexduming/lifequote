'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import QuoteCard, { QUOTE_STYLES } from '@/components/QuoteCard';
import type { Quote } from '@/types/quote';
import { supabase } from '@/lib/supabase';

// 引号样式随机选择器
const quoteStyles = ['default', 'modern', 'minimal', 'elegant'] as const;
const getRandomStyle = () => quoteStyles[Math.floor(Math.random() * quoteStyles.length)];

export default function FeaturedQuotes() {
  const { language } = useLanguage();
  const t = translations[language];
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchQuotes() {
      try {
        // 获取更多的语录，然后随机选择6条
        const { data, error } = await supabase
          .from('quotes')
          .select('*')
          .limit(20);

        if (error) throw error;
        
        // 随机打乱数组并选择前6条
        const shuffledQuotes = data ? 
          [...data].sort(() => Math.random() - 0.5).slice(0, 6) : 
          [];
        
        setQuotes(shuffledQuotes);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchQuotes();
  }, []); // 依赖数组为空，只在组件挂载时执行一次

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  // 将引号分成三列
  const columns: Quote[][] = [[], [], []];
  quotes.forEach((quote, index) => {
    columns[index % 3].push(quote);
  });

  return (
    <section className="container py-20">
      <div className="mb-16">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-[oswald] font-bold text-dark-900 mb-6 tracking-tight uppercase !leading-none">
              {t.sections.featured.title}
            </h2>
            <p className="text-lg md:text-xl text-dark-500 font-light max-w-3xl">
              {t.sections.featured.subtitle}
            </p>
          </div>
          
          <Link 
            href="/quotes" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-dark-900 
              bg-white border border-dark-200 rounded-lg 
              hover:bg-[#D70050] hover:border-[#D70050] hover:text-white
              transition-all duration-200 group"
          >
            <span>View More</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-8">
            {column.map((quote) => (
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
                authorTitle={quote.author_title_zh ? {
                  zh: quote.author_title_zh,
                  en: quote.author_title_en || ''
                } : undefined}
                category={quote.category as CategoryKey}
                likes={quote.likes}
                quoteStyle="default"
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
} 