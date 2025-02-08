/**
 * 分享按钮组件
 * @module ShareButton
 */

'use client';

import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import ShareMenu from '@/components/ShareMenu';

interface ShareButtonProps {
  url: string;
  title: string;
  text: string;
  author: string;
  book?: string;
  disabled?: boolean;
}

/**
 * 分享按钮组件
 * @param props - 组件属性
 */
export default function ShareButton({ url, title, text, author, book, disabled = false }: ShareButtonProps) {
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { language } = useLanguage();
  const t = translations[language];

  const handleShare = () => {
    setShowShareMenu(true);
  };

  const handleCloseShareMenu = () => {
    setShowShareMenu(false);
  };

  return (
    <>
      <button
        onClick={handleShare}
        disabled={disabled}
        className="flex items-center space-x-1 text-sm text-dark-400 hover:text-[#D70050] transition-colors"
      >
        <Share2 size={18} />
        <span>{t.actions.share}</span>
      </button>

      {showShareMenu && (
        <ShareMenu
          url={url}
          title={title}
          text={text}
          author={author}
          book={book}
          onClose={handleCloseShareMenu}
        />
      )}
    </>
  );
} 