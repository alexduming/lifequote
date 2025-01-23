'use client';

import React, { useEffect, useState } from 'react';
import { Book } from 'lucide-react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { translations } from '@/config/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language, CategoryKey } from '@/config/translations';

// 生成规范化的slug
function generateSlug(text: string) {
  return text.toLowerCase()
    .replace(/[:']/g, '')  // 移除冒号和单引号
    .replace(/\s+/g, '-')  // 空格替换为连字符
    .replace(/-+/g, '-')   // 多个连字符替换为单个
    .replace(/^-|-$/g, ''); // 移除首尾的连字符
}

// 获取页面数据
async function getBookPageData(slug: string) {
  const response = await fetch('/api/quotes');
  const quotes = await response.json();
  
  // 查找匹配的书籍
  const bookQuotes = quotes.filter((quote: any) => {
    const quoteSlug = generateSlug(quote.book_en);
    return quoteSlug === slug;
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
    quotes: bookQuotes,
    authors: Array.from(new Set(bookQuotes.map(quote => quote.author.zh))),
    categories: Array.from(new Set(bookQuotes.map(quote => quote.category))),
    coverImage: `/images/books/${generateSlug(firstQuote.book_en)}.jpg`,
  };

  return bookData;
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const { language } = useLanguage();
  const t = translations[language];
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    getBookPageData(params.slug).then(data => {
      setBook(data);
    });
  }, [params.slug]);

  if (!book) {
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
                {book.coverImage ? (
                  <Image
                    src={book.coverImage}
                    alt={book.title[language]}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-4">
                      <Book className="w-16 h-16 mx-auto mb-3 text-gray-400" />
                      <div className="text-lg text-gray-500 font-medium">
                        {book.title[language]}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Info */}
              <div className="flex-grow">
                <h1 className="text-4xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none mb-4">
                  {book.title[language]}
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                  <span>{book.quotes.length} {t.books.stats.quotes}</span>
                  <span>•</span>
                  <span>{book.authors.length} {authorText}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {book.categories.map((category: CategoryKey) => (
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

        {/* Book Quotes */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto space-y-6">
            {book.quotes.map((quote: any) => (
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
      </main>
    </>
  );
} 