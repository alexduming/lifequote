'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import type { CategoryKey } from '@/config/translations';
import type { Quote } from '@/lib/database.types';

type FavoriteWithQuote = {
  quote_id: number;
  quotes: Quote;
};

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Quote[]>([]);
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
          .eq('user_id', user?.id)
          .order('created_at', { ascending: false })
          .returns<FavoriteWithQuote[]>();

        if (favoritesError) throw favoritesError;

        // 转换数据结构
        const quotes = (data || []).map(f => ({
          id: f.quotes.id,
          quote_zh: f.quotes.quote_zh,
          quote_en: f.quotes.quote_en,
          author_zh: f.quotes.author_zh,
          author_en: f.quotes.author_en,
          author_title_zh: f.quotes.author_title_zh || '',
          author_title_en: f.quotes.author_title_en || '',
          category: f.quotes.category,
          likes: f.quotes.likes || 0,
          views: 0,
          period_zh: null,
          period_en: null,
          book: null,
          book_en: null,
          created_at: new Date().toISOString()
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
                  quote={{
                    quote_zh: quote.quote_zh,
                    quote_en: quote.quote_en
                  }}
                  author={{
                    author_zh: quote.author_zh,
                    author_en: quote.author_en
                  }}
                  authorTitle={{
                    author_title_zh: quote.author_title_zh || '',
                    author_title_en: quote.author_title_en || ''
                  }}
                  category={quote.category as CategoryKey}
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