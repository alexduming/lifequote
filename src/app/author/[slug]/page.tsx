'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Book, Award, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';

// 获取页面数据
async function getAuthorPageData(authorSlug: string) {
  const response = await fetch('/api/quotes');
  const quotes = await response.json();
  const authorQuotes = quotes.filter((quote: any) => {
    const quoteAuthorSlug = quote.author.en.toLowerCase().replace(/\s+/g, '-');
    return quoteAuthorSlug === authorSlug;
  });

  if (authorQuotes.length === 0) {
    return null;
  }

  const firstQuote = authorQuotes[0];
  const authorData = {
    name: {
      en: firstQuote.author.en,
      zh: firstQuote.author.zh,
    },
    title: {
      en: firstQuote.authorTitle.en,
      zh: firstQuote.authorTitle.zh,
    },
    period: {
      en: firstQuote.period.en,
      zh: firstQuote.period.zh,
    },
    location: {
      en: 'Ku County, Chu State',
      zh: '楚国苦县',
    },
    bio: {
      en: 'Laozi was a great Chinese philosopher and thinker, founder of Taoism. His work "Tao Te Ching" has had a profound influence on Chinese philosophy and is an important classic of Taoist thought.',
      zh: '老子是中国古代伟大的哲学家、思想家，道家学派创始人。其著作《道德经》对中国哲学产生了深远的影响，也是道家思想的重要经典著作。',
    },
    achievements: {
      en: [
        'Founder of Taoism',
        'Author of Tao Te Ching',
        'Key founder of traditional Chinese culture',
      ],
      zh: [
        '道家学派创始人',
        '《道德经》作者',
        '中国传统文化重要奠基人',
      ],
    },
    works: {
      en: [
        {
          title: 'Tao Te Ching',
          description: 'Also known as "Laozi", it is an important classic of Taoist thought.',
        },
      ],
      zh: [
        {
          title: '道德经',
          description: '也称《老子》，是道家思想的重要经典著作。',
        },
      ],
    },
    stats: {
      quotes: authorQuotes.length,
      collections: Math.floor(authorQuotes.reduce((sum, q) => sum + q.likes, 0) / 2),
      shares: authorQuotes.reduce((sum, q) => sum + q.views, 0),
    },
  };
  
  return { quotes: authorQuotes, authorData };
}

export default function AuthorPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const { language } = useLanguage();
  const t = translations[language];
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {
    getAuthorPageData(params.slug).then(data => {
      setPageData(data);
    });
  }, [params.slug, language]);
  
  if (!pageData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-6"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  const { quotes, authorData } = pageData;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Author Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Author Image */}
              <div className="w-48 h-48 rounded-xl bg-gray-200 flex-shrink-0">
                {/* 这里可以添加作者图片 */}
              </div>

              {/* Author Info */}
              <div className="flex-grow">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {authorData.name[language]}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{authorData.title[language]}</p>

                {/* Quick Stats */}
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.quotes}
                    </div>
                    <div className="text-sm text-gray-500">{t.stats.quotes}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.collections}
                    </div>
                    <div className="text-sm text-gray-500">{t.stats.collections}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.shares}
                    </div>
                    <div className="text-sm text-gray-500">{t.stats.shares}</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{authorData.period[language]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{authorData.location[language]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Bio & Achievements */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">{t.author.bio}</h2>
                <p className="text-gray-600">{authorData.bio[language]}</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary-600" size={20} />
                  <h2 className="text-xl font-medium text-gray-900">{t.author.achievements}</h2>
                </div>
                <ul className="space-y-3">
                  {authorData.achievements[language].map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Quotes */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-medium text-gray-900 mb-6">{t.author.quotes}</h2>
              <div className="space-y-6">
                {quotes.map((quote: any) => (
                  <QuoteCard
                    key={quote.id}
                    quote={quote.quote}
                    author={quote.author}
                    authorTitle={quote.authorTitle}
                    category={quote.category}
                    likes={quote.likes}
                    isLiked={false}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 