'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import type { CategoryKey } from '@/config/translations';
import type { Database } from '@/types/supabase';

type QuoteData = {
  id: number;
  content: {
    quote_zh: string;
    quote_en: string;
  };
  author: {
    author_zh: string;
    author_en: string;
  };
  authorTitle: {
    author_title_zh: string;
    author_title_en: string;
  };
  category: CategoryKey;
  likes: number;
};

type FavoriteWithQuote = {
  quote_id: number;
  quotes: Database['public']['Tables']['quotes']['Row'];
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<QuoteData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user, supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  const handleRemoveFavorite = async (quoteId: number) => {
    try {
      const { error: removeError } = await supabase
        .from('favorites')
        .delete()
        .eq('user_id', user?.id)
        .eq('quote_id', quoteId);

      if (removeError) throw removeError;

      // 从状态中移除该语录
      setFavorites(prev => prev.filter(quote => quote.id !== quoteId));
    } catch (err: any) {
      console.error('Error removing favorite:', err.message);
      setError(err.message);
    }
  };

  useEffect(() => {
    async function loadFavorites() {
      try {
        const { data, error: favoritesError } = await supabase
          .from('favorites')
          .select(`
            quote_id,
            quotes (
              id,
              content_zh,
              content_en,
              author_zh,
              author_en,
              author_title_zh,
              author_title_en,
              category,
              likes
            )
          `)
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false })
          .returns<FavoriteWithQuote[]>();

        if (favoritesError) throw favoritesError;

        // 转换数据结构
        const quotes = (data || []).map(f => ({
          id: f.quotes.id,
          content: {
            quote_zh: f.quotes.content_zh,
            quote_en: f.quotes.content_en,
          },
          author: {
            author_zh: f.quotes.author_zh,
            author_en: f.quotes.author_en,
          },
          authorTitle: {
            author_title_zh: f.quotes.author_title_zh || '',
            author_title_en: f.quotes.author_title_en || '',
          },
          category: f.quotes.category as CategoryKey,
          likes: f.quotes.likes || 0,
        }));

        setFavorites(quotes);
      } catch (err: any) {
        console.error('Error loading favorites:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    if (user) {
      loadFavorites();
    }
  }, [user, supabase]);

  if (loading) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 pt-16">
          <div className="container mx-auto py-20 px-4">
            <div className="animate-pulse space-y-8">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/5 h-48 rounded-2xl" />
              ))}
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 pt-16">
        <div className="container mx-auto py-20 px-4">
          <h1 className="text-3xl font-[oswald] font-bold text-white mb-8">
            {t.favorites.title}
          </h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm mb-8">
              {error}
            </div>
          )}

          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-white/60">{t.favorites.empty}</p>
            </div>
          ) : (
            <div className="space-y-8">
              {favorites.map((quote) => (
                <QuoteCard
                  key={quote.id}
                  quote={quote.content}
                  author={quote.author}
                  authorTitle={quote.authorTitle}
                  category={quote.category}
                  likes={quote.likes}
                  isFavorited={true}
                  onFavorite={() => handleRemoveFavorite(quote.id)}
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
} 