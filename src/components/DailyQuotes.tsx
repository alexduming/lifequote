'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import QuoteCard from '@/components/QuoteCard';
import type { Quote } from '@/types/quote';
import { supabase } from '@/lib/supabase';

interface DailyQuotesData {
  dailyQuote: Quote | null;
  moreQuotes: Quote[];
  refreshTime: string;
}

/**
 * 每日推荐语录组件
 * 每天凌晨12点自动更新
 */
export default function DailyQuotes() {
  const { language } = useLanguage();
  const t = translations[language];
  const [quotesData, setQuotesData] = useState<DailyQuotesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [moreQuotes, setMoreQuotes] = useState<Quote[]>([]);

  // 获取格式化的日期
  const getFormattedDate = () => {
    return new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 从localStorage获取上次刷新时间
  const getLastRefreshTime = () => {
    return localStorage.getItem('lastQuoteRefreshTime');
  };

  // 保存刷新时间到localStorage
  const saveRefreshTime = () => {
    const today = new Date().toISOString().split('T')[0];
    localStorage.setItem('lastQuoteRefreshTime', today);
  };

  // 检查是否需要刷新数据
  const shouldRefreshData = () => {
    const lastRefreshTime = getLastRefreshTime();
    if (!lastRefreshTime) return true;
    
    const today = new Date().toISOString().split('T')[0];
    const lastRefreshDate = new Date(lastRefreshTime);
    const currentDate = new Date(today);
    
    return lastRefreshDate.getTime() < currentDate.getTime();
  };

  // 获取每日推荐数据
  const fetchDailyQuotes = async () => {
    try {
      // 获取每日一句
      const response = await fetch('/api/daily');
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      
      // 获取更多推荐语录
      const { data: moreData, error } = await supabase
        .from('quotes')
        .select('*')
        .limit(20);

      if (error) throw error;

      // 随机选择6条语录
      const randomQuotes = moreData ? 
        [...moreData].sort(() => Math.random() - 0.5).slice(0, 6) : 
        [];

      setQuotesData({
        ...data,
        moreQuotes: randomQuotes
      });
      setMoreQuotes(randomQuotes);
      saveRefreshTime();
    } catch (error) {
      console.error('获取每日推荐失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 仅更新更多推荐语录
  const refreshMoreQuotes = async () => {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .limit(20);

      if (error) throw error;

      // 随机选择6条语录
      const randomQuotes = data ? 
        [...data].sort(() => Math.random() - 0.5).slice(0, 6) : 
        [];

      setMoreQuotes(randomQuotes);
      if (quotesData) {
        setQuotesData({
          ...quotesData,
          moreQuotes: randomQuotes
        });
      }
    } catch (error) {
      console.error('更新更多推荐失败:', error);
    }
  };

  // 检查并更新数据
  const checkAndUpdateQuotes = () => {
    if (shouldRefreshData()) {
      fetchDailyQuotes();
    } else {
      refreshMoreQuotes();
    }
  };

  // 初始化数据
  useEffect(() => {
    const initializeData = () => {
      if (shouldRefreshData()) {
        fetchDailyQuotes();
      } else {
        // 从缓存加载每日语录
        const cachedData = localStorage.getItem('dailyQuotesData');
        if (cachedData) {
          const parsedData = JSON.parse(cachedData);
          setQuotesData(parsedData);
          refreshMoreQuotes();
          setIsLoading(false);
        } else {
          fetchDailyQuotes();
        }
      }
    };

    initializeData();

    // 设置定时器，检查是否需要更新
    const checkInterval = setInterval(() => {
      if (shouldRefreshData()) {
        fetchDailyQuotes();
      }
    }, 60000); // 每分钟检查一次

    return () => clearInterval(checkInterval);
  }, []);

  // 监听页面可见性变化
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        checkAndUpdateQuotes();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // 缓存数据
  useEffect(() => {
    if (quotesData) {
      localStorage.setItem('dailyQuotesData', JSON.stringify(quotesData));
    }
  }, [quotesData]);

  if (isLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!quotesData?.dailyQuote) {
    return null;
  }

  return (
    <section className="container py-20">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
          {language === 'en' ? 'Daily Picks' : '每日精选'}
        </h1>
        <div className="flex items-center justify-center gap-2 text-xl text-dark-600 mb-4">
          <span>{getFormattedDate()}</span>
        </div>
        <p className="text-xl text-dark-600">
          {language === 'en' 
            ? 'Hand-picked quotes to inspire your day'
            : '精心挑选的语录，激励你的每一天'}
        </p>
      </div>

      {/* Quote of the Day */}
      <div className="mb-16">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-[oswald] font-bold text-dark-900 mb-6 tracking-tight uppercase !leading-none">
              {language === 'en' ? 'Quote of the Day' : '今日金句'}
            </h2>
            <p className="text-lg md:text-xl text-dark-500 font-light max-w-3xl">
              {language === 'en' 
                ? 'A daily dose of inspiration'
                : '每日一句经典语录，激励你的一天'}
            </p>
          </div>
        </div>
        <QuoteCard
          id={quotesData.dailyQuote.id}
          quote={{
            zh: quotesData.dailyQuote.quote_zh,
            en: quotesData.dailyQuote.quote_en
          }}
          author={{
            zh: quotesData.dailyQuote.author_zh,
            en: quotesData.dailyQuote.author_en
          }}
          authorTitle={quotesData.dailyQuote.author_title_zh ? {
            zh: quotesData.dailyQuote.author_title_zh,
            en: quotesData.dailyQuote.author_title_en || ''
          } : undefined}
          category={quotesData.dailyQuote.category as CategoryKey}
          likes={quotesData.dailyQuote.likes}
          quoteStyle="elegant"
        />
      </div>

      {/* More Inspirations */}
      <div className="mb-16">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-[oswald] font-bold text-dark-900 mb-6 tracking-tight uppercase !leading-none">
              {language === 'en' ? 'More Inspirations' : '更多灵感'}
            </h2>
            <p className="text-lg md:text-xl text-dark-500 font-light max-w-3xl">
              {language === 'en'
                ? 'More hand-picked quotes to inspire your thoughts'
                : '更多精选语录，启发你的思考'}
            </p>
          </div>
          
          <Link 
            href="/quotes" 
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-dark-900 
              bg-white border border-dark-200 rounded-lg 
              hover:bg-pink-400 hover:border-pink-400 hover:text-white
              transition-all duration-200 group"
          >
            <span>{language === 'en' ? 'View More' : '查看更多'}</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreQuotes.map((quote) => (
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
              authorTitle={quote.author_title_zh ? {
                zh: quote.author_title_zh,
                en: quote.author_title_en || ''
              } : undefined}
              category={quote.category as CategoryKey}
              likes={quote.likes}
              quoteStyle="default"
            />
          ))}
        </div>
      </div>
    </section>
  );
} 