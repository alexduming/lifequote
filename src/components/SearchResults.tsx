/**
 * 搜索结果组件
 * @module SearchResults
 */

'use client';

import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import type { Database } from '@/lib/database.types';

type Quote = Database['public']['Tables']['quotes']['Row'];

interface SearchResultsProps {
  results: Quote[];
  total: number;
  language: 'zh' | 'en';
  onClose: () => void;
  searchQuery: string;
}

/**
 * 搜索结果组件
 * @param props - 组件属性
 */
export default function SearchResults({ results, total, language, onClose, searchQuery }: SearchResultsProps) {
  const t = translations[language];

  return (
    <div className="absolute inset-x-0 top-full mt-2">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden">
        {results.length > 0 ? (
          <>
            {/* 搜索结果列表 */}
            <div className="divide-y">
              {results.map((quote) => (
                <a
                  key={quote.id}
                  href={`/quotes/${quote.id}`}
                  className="block p-4 hover:bg-gray-50 transition-colors"
                  onClick={onClose}
                >
                  <p className="text-dark-900 mb-2 line-clamp-2">
                    {language === 'zh' ? quote.quote_zh : quote.quote_en}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-500">
                      {language === 'zh' ? quote.author_zh : quote.author_en}
                    </span>
                    <span className="text-primary-500">
                      {t.categories[quote.category as CategoryKey]}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* 查看更多结果 */}
            {total > results.length && (
              <a
                href={`/search?q=${encodeURIComponent(searchQuery)}`}
                className="block p-4 bg-gray-50 text-center text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                onClick={onClose}
              >
                {language === 'zh' ? '查看全部结果' : 'View All Results'}
                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>
            )}
          </>
        ) : (
          // 无结果状态
          <div className="p-8 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <Search className="text-gray-400" size={24} />
            </div>
            <p className="text-dark-500">{t.search.noResults}</p>
          </div>
        )}
      </div>
    </div>
  );
} 