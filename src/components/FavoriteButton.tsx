/**
 * 收藏按钮组件
 * @module FavoriteButton
 */

'use client';

import React from 'react';
import { Bookmark } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { useQuoteActions } from '@/hooks/useQuoteActions';

interface FavoriteButtonProps {
  quoteId: number;
  initialIsFavorited?: boolean;
  disabled?: boolean;
}

/**
 * 收藏按钮组件
 * @param props - 组件属性
 */
export default function FavoriteButton({
  quoteId,
  initialIsFavorited = false,
  disabled = false
}: FavoriteButtonProps) {
  const { isFavorited, loading, handleFavorite } = useQuoteActions(quoteId, false, initialIsFavorited);
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <button
      onClick={handleFavorite}
      disabled={disabled || loading}
      className={`flex items-center space-x-1 text-sm ${
        isFavorited ? 'text-[#D70050]' : 'text-dark-400 hover:text-[#D70050]'
      } transition-colors`}
    >
      <Bookmark size={18} className={isFavorited ? 'fill-current' : ''} />
      <span>{t.actions.save}</span>
    </button>
  );
} 