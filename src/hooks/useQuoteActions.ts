/**
 * Quote 交互功能 Hook
 * @module useQuoteActions
 */

'use client';

import { useState } from 'react';
import { toast } from 'sonner';
import { useSupabase } from '@/contexts/SupabaseContext';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Quote 交互功能 Hook
 * @param quoteId - Quote ID
 * @param initialLiked - 初始点赞状态
 * @param initialFavorited - 初始收藏状态
 */
export function useQuoteActions(quoteId: number, initialLiked = false, initialFavorited = false) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const { supabase } = useSupabase();
  const { user } = useAuth();

  /**
   * 处理点赞
   */
  const handleLike = async () => {
    if (!user) {
      toast.error('请先登录');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('quote_likes')
        .upsert(
          {
            user_id: user.id,
            quote_id: quoteId,
            liked_at: new Date().toISOString()
          },
          {
            onConflict: 'user_id,quote_id'
          }
        );

      if (error) throw error;

      setIsLiked(true);
      toast.success('点赞成功');
    } catch (error) {
      console.error('点赞失败:', error);
      toast.error('点赞失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 处理收藏
   */
  const handleFavorite = async () => {
    if (!user) {
      toast.error('请先登录');
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from('favorites')
        .upsert(
          {
            user_id: user.id,
            quote_id: quoteId,
            favorited_at: new Date().toISOString()
          },
          {
            onConflict: 'user_id,quote_id'
          }
        );

      if (error) throw error;

      setIsFavorited(true);
      toast.success('收藏成功');
    } catch (error) {
      console.error('收藏失败:', error);
      toast.error('收藏失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 处理分享
   */
  const handleShare = () => {
    setShowShareMenu(true);
  };

  /**
   * 关闭分享菜单
   */
  const handleCloseShareMenu = () => {
    setShowShareMenu(false);
  };

  return {
    isLiked,
    isFavorited,
    loading,
    showShareMenu,
    handleLike,
    handleFavorite,
    handleShare,
    handleCloseShareMenu,
  };
} 