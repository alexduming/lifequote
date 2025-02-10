import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Filter, ArrowDownUp } from 'lucide-react';
import { CategoryKey, translations } from '@/config/translations';
import { getQuotesByCategory, getCategoryStats } from '@/lib/quotes';
import type { Database } from '@/types/database.types';

type Quote = Database['public']['Tables']['quotes']['Row'];

// 获取页面数据
async function getCategoryPageData(category: CategoryKey) {
  const quotes = await getQuotesByCategory(category);
  const stats = await getCategoryStats();
  const categoryData = {
    name: translations.zh.categories[category],
    description: '探索人生的意义，思考存在的本质，追寻真理的智慧之言。',
    quoteCount: quotes.length,
    authors: Array.from(new Set(quotes.map(q => q.author_zh))),
  };
  
  return { quotes, categoryData };
}

export default async function CategoryPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const category = params.slug as CategoryKey;
  const { quotes, categoryData } = await getCategoryPageData(category);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Category Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-[oswald] font-bold text-gray-900 mb-4 tracking-wide">
              {categoryData.name}语录
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {categoryData.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{categoryData.quoteCount} 条语录</span>
              <span>•</span>
              <span>{categoryData.authors.length} 位作者</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-gray-900">筛选</h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* Time Period Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">时期</h3>
                  <div className="space-y-2">
                    {Array.from(new Set(quotes.map(q => q.period_zh))).map((period) => (
                      <label key={period} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{period}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quotes Grid */}
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  全部语录
                </h2>
                <button className="flex items-center gap-2 text-sm text-gray-500">
                  <ArrowDownUp size={16} />
                  <span>排序</span>
                </button>
              </div>

              <div className="space-y-6">
                {quotes.map((quote) => (
                  <QuoteCard
                    key={quote.id}
                    id={quote.id}
                    quote={{
                      zh: quote.quote_zh || quote.content_zh,
                      en: quote.quote_en || quote.content_en
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
    </>
  );
} 