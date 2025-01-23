'use client';

import React from 'react';
import Link from 'next/link';
import { Quote } from '@/lib/quotes';
import { Language, translations } from '@/config/translations';

interface SearchResultsProps {
  results: Quote[];
  total: number;
  language: Language;
  onClose: () => void;
}

export default function SearchResults({ results, total, language, onClose }: SearchResultsProps) {
  const t = translations[language];

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl z-50 max-h-[80vh] overflow-y-auto">
      <div className="sticky top-0 bg-gray-50 p-4 border-b">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">
            {total === 0 
              ? t.search.noResults 
              : t.search.results.replace('%d', total.toString())}
          </span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            {t.actions.close}
          </button>
        </div>
      </div>
      <div className="divide-y">
        {results.map((quote) => (
          <div key={quote.id} className="p-4 hover:bg-gray-50">
            <blockquote className="text-gray-800 mb-2">
              "{quote.quote[language]}"
            </blockquote>
            <div className="flex items-center justify-between text-sm">
              <div>
                <span className="text-primary-600">
                  {quote.author[language]}
                </span>
                <span className="text-gray-400 mx-2">•</span>
                <span className="text-gray-500">
                  {language === 'zh' ? quote.book : quote.book_en}
                </span>
              </div>
              <Link
                href={`/books/${encodeURIComponent(quote.book_en.toLowerCase().replace(/\s+/g, '-'))}`}
                className="text-primary-600 hover:text-primary-700"
              >
                {t.actions.viewDetails}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 