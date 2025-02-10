'use client';

import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Settings, Share2, Globe, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import type { CategoryKey } from '@/config/translations';

/**
 * 收藏夹详情类型定义
 */
type CollectionDetail = {
  id: string;
  name: string;
  description: string | null;
  is_public: boolean;
  created_at: string;
  user_id: string;
};

/**
 * 语录类型定义
 */
interface Quote {
  id: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string | null;
  author_title_en: string | null;
  category: CategoryKey;
  likes: number;
}

/**
 * 数据库返回的语录类型
 */
type QuoteFromDB = {
  quotes: {
    id: number;
    quote_zh: string;
    quote_en: string;
    author_zh: string;
    author_en: string;
    author_title_zh: string;
    author_title_en: string;
    category: CategoryKey;
    likes: number;
  };
};

interface QuoteWithContent {
  id: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string | null;
  author_title_en: string | null;
  category: string;
  likes: number;
}

/**
 * 收藏夹详情页面组件
 * @param {object} params - 路由参数
 * @returns {JSX.Element} 收藏夹详情页面
 */
export default function CollectionDetailPage({
  params
}: {
  params: { id: string }
}) {
  const [collection, setCollection] = useState<CollectionDetail | null>(null);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { user, supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  // 加载收藏夹详情和语录
  useEffect(() => {
    async function loadCollectionDetail() {
      try {
        // 加载收藏夹信息
        const { data: collectionData, error: collectionError } = await supabase
          .from('collections')
          .select('*')
          .eq('id', params.id)
          .single();

        if (collectionError) throw collectionError;

        // 检查访问权限
        if (!collectionData.is_public && collectionData.user_id !== user?.id) {
          throw new Error('没有权限访问此收藏夹');
        }

        setCollection(collectionData);

        // 加载收藏夹中的语录
        const { data: quotesData, error: quotesError } = await supabase
          .from('collection_items')
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
          .eq('collection_id', params.id)
          .order('created_at', { ascending: false })
          .returns<QuoteFromDB[]>();

        if (quotesError) throw quotesError;

        // 转换数据结构
        const quotes = quotesData.map(item => ({
          id: item.quotes.id,
          quote_zh: item.quotes.quote_zh,
          quote_en: item.quotes.quote_en,
          author_zh: item.quotes.author_zh,
          author_en: item.quotes.author_en,
          author_title_zh: item.quotes.author_title_zh || '',
          author_title_en: item.quotes.author_title_en || '',
          category: item.quotes.category as CategoryKey,
          likes: item.quotes.likes || 0
        }));

        setQuotes(quotes);
      } catch (err: any) {
        console.error('加载收藏夹详情失败:', err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadCollectionDetail();
  }, [params.id, user, supabase]);

  // 从收藏夹中移除语录
  const handleRemoveQuote = async (quoteId: number) => {
    try {
      const { error } = await supabase
        .from('collection_items')
        .delete()
        .eq('collection_id', params.id)
        .eq('quote_id', quoteId);

      if (error) throw error;

      setQuotes(prev => prev.filter(q => q.id !== quoteId));
    } catch (err: any) {
      console.error('移除语录失败:', err.message);
      alert('移除语录失败，请重试');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
        <Navbar />
        <div className="container py-20 text-center text-white/60">
          加载中...
        </div>
      </div>
    );
  }

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
        <Navbar />
        <div className="container py-20 text-center text-red-500">
          {error || '收藏夹不存在'}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Navbar />
      <div className="container py-20">
        {/* 收藏夹信息 */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
                {collection.is_public ? (
                  <>
                    <Globe size={16} />
                    <span>公开收藏夹</span>
                  </>
                ) : (
                  <>
                    <Lock size={16} />
                    <span>私密收藏夹</span>
                  </>
                )}
              </div>
              <h1 className="text-4xl font-[oswald] font-bold text-white">
                {collection.name}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              {collection.user_id === user?.id && (
                <button
                  onClick={() => {/* TODO: 实现编辑功能 */}}
                  className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors"
                >
                  <Settings size={18} />
                  <span>设置</span>
                </button>
              )}
              <button
                onClick={() => {/* TODO: 实现分享功能 */}}
                className="flex items-center gap-2 px-4 py-2 text-white/60 hover:text-white transition-colors"
              >
                <Share2 size={18} />
                <span>分享</span>
              </button>
            </div>
          </div>
          {collection.description && (
            <p className="text-white/60 max-w-3xl">
              {collection.description}
            </p>
          )}
        </div>

        {/* 语录列表 */}
        {quotes.length === 0 ? (
          <div className="text-center text-white/60">
            收藏夹还没有任何语录
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                category={quote.category as CategoryKey}
                likes={quote.likes}
                onRemove={() => handleRemoveQuote(quote.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 