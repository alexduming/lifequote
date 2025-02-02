import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export function useQuoteActions(quoteId: number, initialLiked = false, initialFavorited = false) {
  const [isLiked, setIsLiked] = useState(initialLiked);
  const [isFavorited, setIsFavorited] = useState(initialFavorited);
  const [loading, setLoading] = useState(false);
  const { user, supabase } = useAuth();
  const router = useRouter();

  const handleLike = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    setLoading(true);
    try {
      if (isLiked) {
        // 取消点赞
        await supabase
          .from('likes')
          .delete()
          .eq('user_id', user.id)
          .eq('quote_id', quoteId);

        // 减少点赞数
        await supabase.rpc('decrement_likes', { quote_id: quoteId });
      } else {
        // 添加点赞
        await supabase
          .from('likes')
          .insert({ user_id: user.id, quote_id: quoteId });

        // 增加点赞数
        await supabase.rpc('increment_likes', { quote_id: quoteId });
      }

      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error toggling like:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFavorite = async () => {
    if (!user) {
      router.push('/login');
      return;
    }

    setLoading(true);
    try {
      if (isFavorited) {
        // 取消收藏
        await supabase
          .from('favorites')
          .delete()
          .eq('user_id', user.id)
          .eq('quote_id', quoteId);
      } else {
        // 添加收藏
        await supabase
          .from('favorites')
          .insert({ user_id: user.id, quote_id: quoteId });
      }

      setIsFavorited(!isFavorited);
    } catch (error) {
      console.error('Error toggling favorite:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'LifeQuote',
        text: '分享一条来自 LifeQuote 的名言',
        url: `${window.location.origin}/quotes/${quoteId}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return {
    isLiked,
    isFavorited,
    loading,
    handleLike,
    handleFavorite,
    handleShare,
  };
} 