'use client';

import React, { useEffect, useState } from 'react';
import { Book, Filter, ArrowDownUp } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { translations } from '@/config/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language, CategoryKey } from '@/config/translations';
import type { Database } from '@/types/database.types';

type Quote = Database['public']['Tables']['quotes']['Row'];

// 生成规范化的slug
function generateSlug(text: string) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

// 获取页面数据
async function getBookPageData(slug: string) {
  const response = await fetch('/api/quotes');
  const quotes = await response.json();
  
  // 查找匹配的书籍
  const bookQuotes = quotes.filter((quote: Quote) => {
    const bookSlug = generateSlug(quote.book_en || '');
    return bookSlug === slug;
  });

  if (bookQuotes.length === 0) {
    return null;
  }

  // 获取书籍信息
  const firstQuote = bookQuotes[0];
  const bookData = {
    title: {
      zh: firstQuote.book,
      en: firstQuote.book_en,
    },
    description: {
      zh: '这是一本充满智慧的经典著作，包含了许多发人深省的观点和思考。',
      en: 'This is a classic work full of wisdom, containing many thought-provoking insights and reflections.',
    },
    quotes: bookQuotes,
    authors: Array.from(new Set(bookQuotes.map((quote: Quote) => quote.author_zh))),
    categories: Array.from(new Set(bookQuotes.map((quote: Quote) => quote.category))),
    coverImage: `/images/books/${generateSlug(firstQuote.book_en)}.jpg`,
  };

  return bookData;
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [bookData, setBookData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBookPageData(params.slug).then(data => {
      setBookData(data);
      setIsLoading(false);
    });
  }, [params.slug]);

  if (isLoading) {
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

  if (!bookData) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-16">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-2xl font-bold text-gray-900">未找到该书籍</h1>
          </div>
        </div>
      </>
    );
  }

  const authorText = language === 'en' ? 'authors' : '位作者';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Book Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="flex gap-8">
              {/* Book Cover */}
              <div 
                className="w-64 flex-shrink-0 bg-gray-100 relative rounded-lg overflow-hidden"
                style={{ aspectRatio: '3/4' }}
              >
                {bookData.coverImage ? (
                  <Image
                    src={bookData.coverImage}
                    alt={bookData.title[language]}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <Book className="w-16 h-16 mx-auto mb-3 text-gray-400" />
                      <div className="text-lg text-gray-500 font-medium">
                        {bookData.title[language]}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Info */}
              <div className="flex-grow">
                <h1 className="text-4xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none mb-4">
                  {bookData.title[language]}
                </h1>
                <p className="text-xl text-gray-600 mb-6 max-w-3xl">
                  {bookData.description.zh}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{bookData.quotes.length} {t.books.stats.quotes}</span>
                  <span>•</span>
                  <span>{bookData.authors.length} {authorText}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bookData.categories.map((category: CategoryKey) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-[oswald] uppercase tracking-tight"
                    >
                      {t.categories[category]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-gray-900">筛选</h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* Author Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">作者</h3>
                  <div className="space-y-2">
                    {bookData.authors.map((author: string) => (
                      <label key={author} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{author}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">分类</h3>
                  <div className="space-y-2">
                    {bookData.categories.map((category: CategoryKey) => (
                      <label key={category} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quotes Grid */}
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-medium text-gray-900">
                  全部语录
                </h2>
                <button className="flex items-center gap-2 text-sm text-gray-500">
                  <ArrowDownUp size={16} />
                  <span>排序</span>
                </button>
              </div>

              <div className="space-y-6">
                {bookData.quotes.map((quote: Quote) => (
                  <QuoteCard
                    key={quote.id}
                    quote={{
                      quote_zh: quote.content_zh,
                      quote_en: quote.content_en
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