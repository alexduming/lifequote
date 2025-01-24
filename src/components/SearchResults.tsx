'use client';

import React from 'react';
import Link from 'next/link';
import { Quote } from '@/lib/quotes';
import { Language, translations } from '@/config/translations';
import { ArrowRight } from 'lucide-react';

interface SearchResultsProps {
  results: Quote[];
  total: number;
  language: Language;
  onClose: () => void;
  searchQuery: string;
}

const MAX_PREVIEW_RESULTS = 5;

export default function SearchResults({ results, total, language, onClose, searchQuery }: SearchResultsProps) {
  const t = translations[language];
  const hasMoreResults = total > MAX_PREVIEW_RESULTS;
  const previewResults = results.slice(0, MAX_PREVIEW_RESULTS);

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl z-[9999] max-h-[60vh] overflow-y-auto backdrop-blur-sm border border-gray-100">
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
        {previewResults.map((quote) => (
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
      {hasMoreResults && (
        <Link
          href={`/search?q=${encodeURIComponent(results[0]?.quote[language] || '')}`}
          className="block p-4 text-center bg-gray-50 text-primary-600 hover:text-primary-700 font-medium border-t group"
          onClick={onClose}
        >
          <button className="btn btn-outline btn-sm w-full">
            <span className="inline-flex items-center gap-2">
              {t.search.viewAll}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </Link>
      )}
    </div>
  );
} 