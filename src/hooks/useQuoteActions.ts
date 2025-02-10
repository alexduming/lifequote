/**
 * Quote 交互功能 Hook
 * @module useQuoteActions
 */

'use client';

import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { useSupabase } from '@/contexts/SupabaseContext';
import { useAuth } from '@/contexts/AuthContext';

/**
 * Quote 交互功能 Hook
 * @param quoteId - Quote ID
 * @param initialLiked - 初始点赞状态
 * @param initialFavorited - 初始收藏状态
 * @param initialLikes - 初始点赞数
 */
export function useQuoteActions(
  quoteId: number, 
  initialLiked = false, 
  initialFavorited = false,
  initialLikes = 0
) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const { supabase } = useSupabase();
  const { user } = useAuth();
  const userId = user?.id;

  // 确保 quoteId 是数字类型
  const numericQuoteId = Number(quoteId);

  // 加载用户的点赞和收藏状态
  useEffect(() => {
    if (!userId || !numericQuoteId || isNaN(numericQuoteId)) return;

    const loadUserActions = async () => {
      try {
        // 检查是否已点赞
        const { data: likeData, error: likeError } = await supabase
          .from('quote_likes')
          .select('id')
          .eq('user_id', userId)
          .eq('quote_id', numericQuoteId)
          .maybeSingle();

        if (likeError) throw likeError;
        setIsLiked(!!likeData);

        // 检查是否已收藏
        const { data: favoriteData, error: favoriteError } = await supabase
          .from('quote_favorites')
          .select('id')
          .eq('user_id', userId)
          .eq('quote_id', numericQuoteId)
          .maybeSingle();

        if (favoriteError) throw favoriteError;
        setIsFavorited(!!favoriteData);
      } catch (error) {
        console.error('加载用户操作状态失败:', error);
      }
    };

    loadUserActions();
  }, [userId, numericQuoteId, supabase]);

  /**
   * 处理点赞
   */
  const handleLike = async () => {
    if (!userId) {
      toast.error('请先登录');
      return;
    }

    if (isNaN(numericQuoteId)) {
      console.error('无效的 quote ID');
      return;
    }

    setLoading(true);
    try {
      if (isLiked) {
        // 取消点赞
        const { error } = await supabase
          .from('quote_likes')
          .delete()
          .match({ user_id: userId, quote_id: numericQuoteId });

        if (error) throw error;
        setIsLiked(false);
        setLikeCount(prev => Math.max(0, prev - 1));
        toast.success('已取消点赞');
      } else {
        // 添加点赞
        const { error } = await supabase
          .from('quote_likes')
          .insert([
            {
              user_id: userId,
              quote_id: numericQuoteId
            }
          ]);

        if (error) throw error;
        setIsLiked(true);
        setLikeCount(prev => prev + 1);
        toast.success('已点赞');
      }
    } catch (error) {
      console.error('点赞操作失败:', error);
      toast.error('操作失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  /**
   * 处理收藏
   */
  const handleFavorite = async () => {
    if (!userId) {
      toast.error('请先登录');
      return;
    }

    if (isNaN(numericQuoteId)) {
      console.error('无效的 quote ID');
      return;
    }

    setLoading(true);
    try {
      if (isFavorited) {
        // 取消收藏
        const { error } = await supabase
          .from('quote_favorites')
          .delete()
          .match({ user_id: userId, quote_id: numericQuoteId });

        if (error) throw error;
        setIsFavorited(false);
        toast.success('已取消收藏');
      } else {
        // 添加收藏
        const { error } = await supabase
          .from('quote_favorites')
          .insert([
            {
              user_id: userId,
              quote_id: numericQuoteId
            }
          ]);

        if (error) throw error;
        setIsFavorited(true);
        toast.success('已收藏');
      }
    } catch (error) {
      console.error('收藏操作失败:', error);
      toast.error('操作失败，请重试');
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
    likeCount,
  };
} 