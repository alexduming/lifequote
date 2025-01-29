'use client';

import React from 'react';
import { Calendar, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

// 示例数据
const dailyQuotes = [
  {
    quote_zh: "千里之行，始于足下。",
    quote_en: "The journey of a thousand miles begins with a single step.",
    author_zh: "老子",
    author_en: "Lao Tzu",
    author_title_zh: "中国古代哲学家",
    author_title_en: "Ancient Chinese Philosopher",
    category: "wisdom" as CategoryKey,
    likes: 2345,
    isLiked: false,
  },
  {
    quote_zh: "困难之中蕴藏着机遇。",
    quote_en: "In the middle of difficulty lies opportunity.",
    author_zh: "阿尔伯特·爱因斯坦",
    author_en: "Albert Einstein",
    author_title_zh: "理论物理学家",
    author_title_en: "Theoretical Physicist",
    category: "motivation" as CategoryKey,
    likes: 1876,
    isLiked: true,
  },
  {
    quote_zh: "生活本来很简单，是我们执意要把它变复杂。",
    quote_en: "Life is really simple, but we insist on making it complicated.",
    author_zh: "孔子",
    author_en: "Confucius",
    author_title_zh: "中国哲学家",
    author_title_en: "Chinese Philosopher",
    category: "life" as CategoryKey,
    likes: 1543,
    isLiked: false,
  },
];

export default function DailyPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const today = new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
            {language === 'en' ? 'Daily Picks' : '每日精选'}
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl text-dark-600 mb-4">
            <Calendar className="w-6 h-6" />
            <span>{today}</span>
          </div>
          <p className="text-xl text-dark-600">
            {language === 'en' 
              ? 'Hand-picked quotes to inspire your day'
              : '精心挑选的语录，激励你的每一天'}
          </p>
        </div>

        {/* Featured Quote of the Day */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl font-[oswald] font-bold text-dark-900 uppercase">
              {language === 'en' ? 'Quote of the Day' : '今日金句'}
            </h2>
          </div>
          <QuoteCard
            quote={{
              zh: dailyQuotes[0].quote_zh,
              en: dailyQuotes[0].quote_en
            }}
            author={{
              zh: dailyQuotes[0].author_zh,
              en: dailyQuotes[0].author_en
            }}
            authorTitle={{
              zh: dailyQuotes[0].author_title_zh,
              en: dailyQuotes[0].author_title_en
            }}
            category={dailyQuotes[0].category}
            likes={dailyQuotes[0].likes}
            isLiked={dailyQuotes[0].isLiked}
          />
        </div>

        {/* More Daily Picks */}
        <div className="mb-12">
          <h2 className="text-2xl font-[oswald] font-bold text-dark-900 mb-8 uppercase">
            {language === 'en' ? 'More Inspirations' : '更多灵感'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dailyQuotes.slice(1).map((quote, index) => (
              <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                <QuoteCard
                  quote={{
                    zh: quote.quote_zh,
                    en: quote.quote_en
                  }}
                  author={{
                    zh: quote.author_zh,
                    en: quote.author_en
                  }}
                  authorTitle={{
                    zh: quote.author_title_zh,
                    en: quote.author_title_en
                  }}
                  category={quote.category}
                  likes={quote.likes}
                  isLiked={quote.isLiked}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 