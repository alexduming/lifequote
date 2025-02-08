/**
 * 语录卡片组件
 * @module QuoteCard
 */

'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CategoryKey, translations } from '@/config/translations';
import LikeButton from '@/components/LikeButton';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import { X } from 'lucide-react';

// 引号样式选项
const QUOTE_STYLES = {
  default: {
    char: '❝',
    className: 'text-8xl text-[#fde8ee] -top-6 -left-3'
  },
  curly: {
    char: '"',
    className: 'font-["Playfair_Display"] text-8xl text-[#fde8ee]'
  },
  heavy: {
    char: '❝',
    className: 'text-7xl text-[#fde8ee]'
  },
  modern: {
    char: '„',
    className: 'font-["Noto_Serif"] text-8xl text-[#fde8ee]'
  },
  minimal: {
    char: '›',
    className: 'text-6xl text-[#fde8ee] rotate-45'
  }
};

/**
 * 语录卡片组件的属性类型定义
 */
export interface QuoteCardProps {
  id: number;
  quote: {
    quote_zh: string;
    quote_en: string;
  };
  author: {
    author_zh: string;
    author_en: string;
  };
  authorTitle: {
    author_title_zh: string;
    author_title_en: string;
  };
  category: CategoryKey;
  likes: number;
  isLiked?: boolean;
  isFavorited?: boolean;
  quoteStyle?: keyof typeof QUOTE_STYLES;
  onRemove?: () => void;
}

/**
 * 语录卡片组件
 * @param props - 组件属性，包含语录的所有信息
 */
export default function QuoteCard({
  id,
  quote,
  author,
  authorTitle,
  category,
  likes,
  isLiked = false,
  isFavorited = false,
  quoteStyle = 'default',
  onRemove
}: QuoteCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const style = QUOTE_STYLES[quoteStyle];

  // 获取分类的翻译名称
  const categoryName = t.categories[category];

  // 分类标签的背景色映射
  const categoryColors: Record<CategoryKey, string> = {
    wisdom: 'bg-[#fdf2f2] text-[#D70050]',
    inspiration: 'bg-[#fdf2f2] text-[#D70050]',
    life: 'bg-[#fdf2f2] text-[#D70050]',
    love: 'bg-[#fdf2f2] text-[#D70050]',
    success: 'bg-[#fdf2f2] text-[#D70050]',
    happiness: 'bg-[#fdf2f2] text-[#D70050]',
    friendship: 'bg-[#fdf2f2] text-[#D70050]',
    family: 'bg-[#fdf2f2] text-[#D70050]',
    literature: 'bg-[#fdf2f2] text-[#D70050]',
    art: 'bg-[#fdf2f2] text-[#D70050]',
    philosophy: 'bg-[#fdf2f2] text-[#D70050]',
    science: 'bg-[#fdf2f2] text-[#D70050]',
    history: 'bg-[#fdf2f2] text-[#D70050]',
    politics: 'bg-[#fdf2f2] text-[#D70050]',
    economics: 'bg-[#fdf2f2] text-[#D70050]',
    education: 'bg-[#fdf2f2] text-[#D70050]',
    motivation: 'bg-[#fdf2f2] text-[#D70050]'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 relative overflow-hidden">
      {/* Quote mark */}
      <div className="absolute -top-2 -left-2 opacity-10 pointer-events-none">
        <span className={style.className}>{style.char}</span>
      </div>

      <div className="relative z-10">
        <blockquote className="relative z-10 pl-4">
          <p className="text-lg text-dark-900 leading-relaxed">
            {language === 'zh' ? quote.quote_zh : quote.quote_en}
          </p>
        </blockquote>

        <div className="mt-4 pl-4">
          <div>
            <cite className="not-italic font-medium text-[#D70050] block">
              {language === 'zh' ? author.author_zh : author.author_en}
            </cite>
            {authorTitle && (
              <p className="text-sm text-dark-500 mt-1">
                {language === 'zh' ? authorTitle.author_title_zh : authorTitle.author_title_en}
              </p>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t">
          <div className="flex items-center space-x-4">
            <LikeButton
              quoteId={id}
              likes={likes}
              initialIsLiked={isLiked}
            />
            <FavoriteButton
              quoteId={id}
              initialIsFavorited={isFavorited}
            />
            <ShareButton
              url={`${window.location.origin}/quotes/${id}`}
              title="LifeQuote"
              text={`${language === 'zh' ? quote.quote_zh : quote.quote_en} - ${
                language === 'zh' ? author.author_zh : author.author_en
              }`}
            />
          </div>

          {onRemove && (
            <button
              onClick={onRemove}
              className="text-dark-400 hover:text-[#D70050] transition-colors"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
} 