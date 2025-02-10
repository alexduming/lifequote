/**
 * 收藏页面
 * @module FavoritesPage
 */

'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/contexts/SupabaseContext';
import { translations, CategoryKey } from '@/config/translations';
import type { Quote } from '@/lib/database.types';

interface FavoriteWithQuote {
  quote_id: number;
  quotes: Quote;
}

/**
 * 收藏页面组件
 */
export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const { language } = useLanguage();
  const { user } = useAuth();
  const { supabase } = useSupabase();
  const router = useRouter();
  const t = translations[language];

  // 如果用户未登录，重定向到登录页面
  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  // 加载收藏的语录
  useEffect(() => {
    async function loadFavorites() {
      if (!user) return;

      try {
        const { data, error } = await supabase
          .from('favorites')
          .select(`
            quote_id,
            quotes (
              id,
              quote_zh,
              quote_en,
              author_zh,
              author_en,
              author_title_zh,
              author_title_en,
              category,
              likes
            )
          `)
          .eq('user_id', user.id)
          .order('favorited_at', { ascending: false })
          .returns<FavoriteWithQuote[]>();

        if (error) throw error;

        // 转换数据结构
        const quotes = data.map(item => item.quotes);
        setFavorites(quotes);
      } catch (error) {
        console.error('加载收藏失败:', error);
      } finally {
        setLoading(false);
      }
    }

    loadFavorites();
  }, [user, supabase]);

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <main className="container py-20">
        <div className="max-w-4xl mx-auto">
          {/* 页面标题 */}
          <div className="flex items-center gap-3 mb-12">
            <Bookmark size={32} className="text-white" />
            <h1 className="text-4xl font-[oswald] font-bold text-white">
              {t.favorites.title}
            </h1>
          </div>

          {/* 加载状态 */}
          {loading ? (
            <div className="text-center text-white/60 py-12">
              {t.common.loading}
            </div>
          ) : favorites.length === 0 ? (
            // 空状态
            <div className="text-center text-white/60 py-12">
              {t.favorites.empty}
            </div>
          ) : (
            // 收藏列表
            <div className="space-y-6">
              {favorites.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  id={quote.id}
                  quote={{
                    zh: quote.quote_zh,
                    en: quote.quote_en
                  }}
                  author={{
                    zh: quote.author_zh,
                    en: quote.author_en
                  }}
                  authorTitle={{
                    zh: quote.author_title_zh || '',
                    en: quote.author_title_en || ''
                  }}
                  category={quote.category as CategoryKey}
                  likes={quote.likes}
                  isFavorited={true}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 