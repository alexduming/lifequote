/**
 * 点赞按钮组件
 * @module LikeButton
 */

'use client';

import React from 'react';
import { Heart } from 'lucide-react';
import { useQuoteActions } from '@/hooks/useQuoteActions';

interface LikeButtonProps {
  quoteId: number;
  likes: number;
  initialIsLiked?: boolean;
  disabled?: boolean;
}

/**
 * 点赞按钮组件
 * @param props - 组件属性
 */
export default function LikeButton({
  quoteId,
  likes,
  initialIsLiked = false,
  disabled = false
}: LikeButtonProps) {
  const { isLiked, loading, handleLike, likeCount } = useQuoteActions(quoteId, initialIsLiked, false, likes);

  return (
    <button
      onClick={handleLike}
      disabled={disabled || loading}
      className={`flex items-center space-x-1 text-sm ${
        isLiked ? 'text-[#D70050]' : 'text-dark-400 hover:text-[#D70050]'
      } transition-colors`}
    >
      <Heart size={18} className={isLiked ? 'fill-current' : ''} />
      <span>{likeCount}</span>
    </button>
  );
} 