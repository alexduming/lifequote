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
export const QUOTE_STYLES = {
  default: {
    char: '"',
    className: 'text-7xl font-["Playfair_Display"] text-[#FFE5ED] absolute leading-none mix-blend-multiply'
  },
  modern: {
    char: '"',
    className: 'text-7xl font-["Playfair_Display"] text-pink-100 absolute -top-2 left-4 leading-none mix-blend-multiply'
  },
  minimal: {
    char: '❞',
    className: 'text-6xl font-["Noto_Serif"] text-pink-100 absolute -top-2 left-4 leading-none mix-blend-multiply'
  },
  elegant: {
    char: '❝',
    className: 'text-6xl font-["Cormorant"] text-pink-100 absolute -top-2 left-4 leading-none mix-blend-multiply'
  }
} as const;

/**
 * 语录卡片组件的属性类型定义
 */
export interface QuoteCardProps {
  id?: string | number;
  quote: {
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  authorTitle?: {
    zh: string;
    en: string;
  };
  category: CategoryKey;
  likes: number;
  isLiked?: boolean;
  isFavorited?: boolean;
  quoteStyle?: keyof typeof QUOTE_STYLES;
  onRemove?: () => void;
  book?: {
    zh?: string;
    en?: string;
  };
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
  onRemove,
  book
}: QuoteCardProps) {
  const { language } = useLanguage();
  const t = translations[language];
  const style = QUOTE_STYLES[quoteStyle];
  const [shareUrl, setShareUrl] = React.useState('');

  // 在客户端设置分享 URL
  React.useEffect(() => {
    if (id) {
      setShareUrl(`${window.location.origin}/quotes/${id}`);
    }
  }, [id]);

  // 获取分类的翻译名称
  const categoryName = t.categories[category];

  // 获取当前语言的文本
  const currentQuote = quote[language];
  const currentAuthor = author[language];
  const currentAuthorTitle = authorTitle?.[language];
  const currentBook = book?.[language];

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-[#D70050]/10 
      hover:shadow-lg hover:shadow-[#D70050]/5 transition-all duration-300 h-fit">
      {/* 主要内容 */}
      <div className="relative p-6 space-y-4">
        {/* 装饰性引号 - 移除了固定位置，您可以手动调整 top 和 left 的值 */}
        <div className={`${style.className} -top--2 left-3`}>
          {style.char}
        </div>


        {/* 语录内容 */}
        <p className="text-lg text-gray-800 leading-relaxed relative">
          {currentQuote}
        </p>

        {/* 作者信息和分类 */}
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#D70050]">
              {currentAuthor}
            </p>
            {currentAuthorTitle && (
              <p className="text-sm text-gray-500">
                {currentAuthorTitle}
              </p>
            )}
          </div>

          {/* 分类标签 */}
          <span className="px-3 py-1 text-sm bg-[#D70050]/5 text-[#D70050] rounded-full">
            {categoryName}
          </span>
        </div>

        {/* 操作按钮 */}
        <div className="flex items-center gap-4 pt-4 border-t border-[#D70050]/10">
          <LikeButton
            quoteId={id ? Number(id) : 0}
            likes={likes}
            initialIsLiked={isLiked}
          />
          <FavoriteButton
            quoteId={id ? Number(id) : 0}
            initialIsFavorited={isFavorited}
          />
          <ShareButton
            url={shareUrl}
            title={currentAuthor}
            text={currentQuote}
            author={currentAuthor}
            book={currentBook}
          />
        </div>
      </div>

      {onRemove && (
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 text-gray-400 hover:text-[#D70050] transition-colors"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
} 