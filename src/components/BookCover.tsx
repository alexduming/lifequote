'use client';

import React from 'react';
import { Book } from 'lucide-react';
import Image from 'next/image';
import type { Language } from '@/config/translations';

interface BookCoverProps {
  coverImage?: string;
  title: {
    zh: string;
    en: string;
  };
  language: Language;
  quoteCount: number;
  quoteText: string;
  size?: 'sm' | 'lg';
  className?: string;
}

export default function BookCover({
  coverImage,
  title,
  language,
  quoteCount,
  quoteText,
  size = 'sm',
  className = ''
}: BookCoverProps) {
  const sizeClasses = {
    sm: {
      container: 'w-48',
      icon: 'w-16 h-16',
      title: 'text-lg',
      stats: 'text-xs'
    },
    lg: {
      container: 'w-64',
      icon: 'w-20 h-20',
      title: 'text-xl',
      stats: 'text-sm'
    }
  };

  const hasImage = coverImage !== undefined;

  return (
    <div 
      className={`flex-shrink-0 relative ${sizeClasses[size].container} ${className}`}
      style={{ aspectRatio: '3/4' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 overflow-hidden ${hasImage ? '' : 'rounded-xl'}`}>
        {coverImage ? (
          <Image
            src={coverImage}
            alt={title[language]}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 group-hover:bg-gray-50/50 transition-colors">
            <div className="flex-1 flex items-center justify-center">
              <Book 
                className={`${sizeClasses[size].icon} text-primary-500/30 group-hover:text-primary-500/40 transition-colors`} 
                strokeWidth={1} 
              />
            </div>
            <div className="text-center">
              <h3 className={`font-[oswald] ${sizeClasses[size].title} font-bold text-dark-900 mb-1 line-clamp-2`}>
                {title[language]}
              </h3>
              <div className={`${sizeClasses[size].stats} text-gray-500`}>
                {quoteCount} {quoteText}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 