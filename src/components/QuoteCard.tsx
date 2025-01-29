/**
 * 语录卡片组件
 * @module QuoteCard
 */

'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Bookmark, Share2 } from 'lucide-react';
import { CategoryKey, translations } from '@/config/translations';

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
  quote: {
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  authorTitle: {
    zh: string;
    en: string;
  };
  category: CategoryKey;
  likes: number;
  isLiked?: boolean;
  isFavorited?: boolean;
  quoteStyle?: keyof typeof QUOTE_STYLES;
  onLike?: () => void;
  onFavorite?: () => void;
  onShare?: () => void;
}

/**
 * 语录卡片组件
 * @param props - 组件属性，包含语录的所有信息
 */
export default function QuoteCard(props: QuoteCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const { 
    quote, 
    author, 
    authorTitle, 
    category,
    likes, 
    isLiked = false,
    isFavorited = false,
    quoteStyle = 'default',
    onLike,
    onFavorite,
    onShare 
  } = props;

  // 获取选择的引号样式
  const selectedQuoteStyle = QUOTE_STYLES[quoteStyle];

  // 获取分类的翻译名称
  const categoryName = t.categories[category];

  // 分类标签的背景色映射
  const categoryColors: Record<CategoryKey, string> = {
    philosophy: 'bg-[#fdf2f2] text-[#D70050]',
    literature: 'bg-[#fdf2f2] text-[#D70050]',
    science: 'bg-[#fdf2f2] text-[#D70050]',
    art: 'bg-[#fdf2f2] text-[#D70050]',
    history: 'bg-[#fdf2f2] text-[#D70050]',
    politics: 'bg-[#fdf2f2] text-[#D70050]',
    economics: 'bg-[#fdf2f2] text-[#D70050]',
    education: 'bg-[#fdf2f2] text-[#D70050]',
    motivation: 'bg-[#fdf2f2] text-[#D70050]',
    life: 'bg-[#fdf2f2] text-[#D70050]',
    love: 'bg-[#fdf2f2] text-[#D70050]',
    success: 'bg-[#fdf2f2] text-[#D70050]',
    wisdom: 'bg-[#fdf2f2] text-[#D70050]'
  };

  return (
    <div className="relative bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col h-full">
        {/* 语录内容区域 */}
        <div className="relative mb-6">
          {/* 装饰性引号 */}
          <div className={`absolute leading-none ${selectedQuoteStyle.className}`}>
            {selectedQuoteStyle.char}
          </div>
          <blockquote className="relative z-10 pl-4">
            <p className="text-lg text-dark-900 leading-relaxed">
              {language === 'zh' ? quote.zh : quote.en}
            </p>
          </blockquote>
        </div>

        {/* 作者信息和分类 */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <cite className="not-italic font-medium text-[#D70050] block">
              {language === 'zh' ? author.zh : author.en}
            </cite>
            {authorTitle && (
              <p className="text-sm text-dark-500 mt-1">
                {language === 'zh' ? authorTitle.zh : authorTitle.en}
              </p>
            )}
          </div>
          <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${categoryColors[category]}`}>
            {categoryName}
          </span>
        </div>

        {/* 分割线 */}
        <div className="border-t border-gray-100 my-4"></div>

        {/* 交互按钮 */}
        <div className="flex items-center justify-between">
          {/* 点赞按钮 */}
          <button 
            onClick={onLike}
            className="flex items-center gap-1 text-dark-500 hover:text-[#D70050] transition-colors"
          >
            <Heart 
              size={18} 
              className={isLiked ? 'fill-[#D70050] text-[#D70050]' : ''} 
            />
            <span className="text-sm">{likes}</span>
          </button>

          {/* 收藏和分享按钮 */}
          <div className="flex items-center gap-4">
            <button 
              onClick={onFavorite}
              className="flex items-center text-dark-500 hover:text-[#D70050] transition-colors"
            >
              <Bookmark 
                size={18} 
                className={isFavorited ? 'fill-[#D70050] text-[#D70050]' : ''} 
              />
            </button>
            <button 
              onClick={onShare}
              className="flex items-center text-dark-500 hover:text-[#D70050] transition-colors"
            >
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 