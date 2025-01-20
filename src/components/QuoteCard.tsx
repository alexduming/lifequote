'use client';

import React from 'react';
import { Heart, Share2, BookmarkPlus } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

interface BilingualText {
  en: string;
  zh: string;
}

interface QuoteCardProps {
  quote: BilingualText;
  author: BilingualText;
  authorTitle?: BilingualText;
  category: CategoryKey;
  likes?: number;
  isLiked?: boolean;
}

export default function QuoteCard({
  quote,
  author,
  authorTitle,
  category,
  likes = 0,
  isLiked = false,
}: QuoteCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="card p-6 group">
      {/* Quote Content */}
      <blockquote className="text-xl font-display text-dark-800 mb-6 relative leading-relaxed">
        <span className="absolute -top-4 -left-2 text-6xl text-primary-200/50 font-display select-none">"</span>
        <span className="relative z-10">{quote[language]}</span>
      </blockquote>

      {/* Author Info */}
      <div className="flex items-start justify-between">
        <div>
          <Link 
            href={`/author/${author.en.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-display font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            {author[language]}
          </Link>
          {authorTitle && (
            <p className="text-sm text-dark-500 mt-1 font-light">{authorTitle[language]}</p>
          )}
        </div>

        {/* Category Tag */}
        <Link
          href={`/category/${category.toLowerCase()}`}
          className="text-sm px-3 py-1 rounded-full bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors font-medium"
        >
          {t.categories[category]}
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-dark-100">
        <button className="flex items-center space-x-1.5 text-dark-500 hover:text-primary-600 transition-colors">
          <Heart
            size={18}
            className={`transition-all duration-300 transform group-hover:scale-110 ${
              isLiked ? 'fill-current text-red-500' : ''
            }`}
          />
          <span className="text-sm font-medium">{likes}</span>
        </button>
        <div className="flex items-center space-x-4">
          <button className="text-dark-400 hover:text-primary-600 transition-colors relative group/btn">
            <BookmarkPlus size={18} className="transform group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity">
              {t.actions.save}
            </span>
          </button>
          <button className="text-dark-400 hover:text-primary-600 transition-colors relative group/btn">
            <Share2 size={18} className="transform group-hover:scale-110 transition-transform duration-300" />
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-dark-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/btn:opacity-100 transition-opacity">
              {t.actions.share}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
} 