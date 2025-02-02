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
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  authorTitle: {
    zh: string;
    en: string;
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
            zh: f.quotes.content_zh,
            en: f.quotes.content_en,
          },
          author: {
            zh: f.quotes.author_zh,
            en: f.quotes.author_en,
          },
          authorTitle: {
            zh: f.quotes.author_title_zh,
            en: f.quotes.author_title_en,
          },
          category: f.quotes.category,
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
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
} 