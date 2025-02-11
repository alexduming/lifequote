/**
 * 收藏页面
 * @module FavoritesPage
 */

'use client';

import React, { useEffect, useState } from 'react';
import { Bookmark } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { useSupabase } from '@/contexts/SupabaseContext';
import { translations, CategoryKey } from '@/config/translations';
import type { Quote } from '@/lib/database.types';
import { toast } from 'sonner';

interface FavoriteQuote {
  id: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string | null;
  author_title_en: string | null;
  category: CategoryKey;
  likes: number;
  views: number;
  period_zh: string | null;
  period_en: string | null;
  book_zh: string | null;
  book_en: string | null;
  isFavorited: boolean;
}

/**
 * 收藏页面组件
 */
export default function FavoritesPage() {
  const [quotes, setQuotes] = useState<FavoriteQuote[]>([]);
  const [loading, setLoading] = useState(true);
  
  const { language } = useLanguage();
  const { user } = useAuth();
  const { supabase } = useSupabase();
  const t = translations[language];

  // 加载收藏的语录
  useEffect(() => {
    const loadFavorites = async () => {
      if (!user || !supabase) return;

      try {
        const { data, error } = await supabase
          .from('quotes')
          .select(`
            id,
            quote_zh,
            quote_en,
            author_zh,
            author_en,
            author_title_zh,
            author_title_en,
            category,
            likes,
            views,
            period_zh,
            period_en,
            book_zh,
            book_en,
            quote_favorites!inner(user_id)
          `)
          .eq('quote_favorites.user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // 格式化数据
        const formattedQuotes: FavoriteQuote[] = data.map(quote => ({
          id: quote.id,
          quote_zh: quote.quote_zh,
          quote_en: quote.quote_en,
          author_zh: quote.author_zh,
          author_en: quote.author_en,
          author_title_zh: quote.author_title_zh,
          author_title_en: quote.author_title_en,
          category: quote.category as CategoryKey,
          likes: quote.likes,
          views: quote.views,
          period_zh: quote.period_zh,
          period_en: quote.period_en,
          book_zh: quote.book_zh,
          book_en: quote.book_en,
          isFavorited: true
        }));

        setQuotes(formattedQuotes);
      } catch (error) {
        console.error('加载收藏失败:', error);
        toast.error(t.favorites.loadError);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, [user, supabase, t]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container py-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Bookmark className="w-8 h-8 text-[#D70050]" />
            <h1 className="text-3xl font-bold text-gray-900">{t.favorites.title}</h1>
          </div>

          {loading ? (
            <div className="text-center text-gray-500 py-12">
              {t.favorites.loading}
            </div>
          ) : quotes.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              {t.favorites.noQuotes}
            </div>
          ) : (
            <div className="space-y-4">
              {quotes.map((quote) => (
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
                  category={quote.category}
                  likes={quote.likes}
                  isFavorited={true}
                  book={{
                    zh: quote.book_zh || undefined,
                    en: quote.book_en || undefined
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 