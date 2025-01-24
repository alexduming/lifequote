'use client';

import React, { useEffect, useState } from 'react';
import { Book } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import { translations } from '@/config/translations';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Language } from '@/config/translations';

// 获取页面数据
async function getBooksPageData(language: Language) {
  const response = await fetch('/api/quotes');
  const quotes = await response.json();
  
  // 按书籍分组语录
  const bookMap = new Map();
  quotes.forEach((quote: any) => {
    const book = quote.book;
    if (!bookMap.has(book)) {
      const bookTitle = {
        zh: book,
        en: quote.book_en,
      };
      // 根据英文书名生成封面图片路径和URL slug
      const slug = quote.book_en.toLowerCase()
        .replace(/[:']/g, '')  // 移除冒号和单引号
        .replace(/\s+/g, '-')  // 空格替换为连字符
        .replace(/-+/g, '-')   // 多个连字符替换为单个
        .replace(/^-|-$/g, ''); // 移除首尾的连字符
      
      const coverImage = `/images/books/${slug}.jpg`;
      
      bookMap.set(book, {
        title: bookTitle,
        quotes: [],
        authors: new Set(),
        categories: new Set(),
        coverImage: coverImage,
        slug: slug,
      });
    }
    const bookData = bookMap.get(book);
    bookData.quotes.push(quote);
    bookData.authors.add(quote.author.zh);
    bookData.categories.add(quote.category);
  });

  // 转换为数组并添加统计信息
  const books = Array.from(bookMap.entries()).map(([_, data]) => ({
    title: data.title,
    quotes: data.quotes,
    quoteCount: data.quotes.length,
    authorCount: data.authors.size,
    categories: Array.from(data.categories),
    coverImage: data.coverImage,
    slug: data.slug,
    // 选择第一条语录作为代表
    featuredQuote: data.quotes[0],
  }));

  return { 
    books,
    authorText: language === 'en' ? 'authors' : '位作者',
  };
}

export default function BooksPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const [pageData, setPageData] = React.useState<{ books: any[]; authorText: string } | null>(null);

  useEffect(() => {
    getBooksPageData(language).then(data => {
      setPageData(data);
    });
  }, [language]);

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

  const { books, authorText } = pageData;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none mb-4">
              {t.books.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {t.books.subtitle}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{books.length} {t.books.stats.books}</span>
              <span>•</span>
              <span>{books.reduce((sum, book) => sum + book.quoteCount, 0)} {t.books.stats.quotes}</span>
            </div>
          </div>
        </div>

        {/* Books Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {books.map((book) => (
              <div key={book.title[language]} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="flex">
                  {/* Book Cover */}
                  <Link 
                    href={`/books/${book.slug}`}
                    className="w-48 flex-shrink-0 relative group"
                    style={{ aspectRatio: '3/4' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-l-xl overflow-hidden">
                      {book.coverImage && (
                        <div className="absolute inset-0">
                          <Image
                            src={book.coverImage}
                            alt={book.title[language]}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none'; // 隐藏加载失败的图片
                            }}
                          />
                        </div>
                      )}
                      
                      {/* 默认显示图标和书名 */}
                      <div className="w-full h-full flex flex-col items-center justify-center p-6 group-hover:bg-gray-50/50 transition-colors">
                        <div className="flex-1 flex items-center justify-center">
                          <Book 
                            className="w-16 h-16 text-dark-900/50 group-hover:text-dark-900/60 transition-colors" 
                            strokeWidth={1} 
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-[oswald] text-lg font-bold text-dark-900 mb-1 line-clamp-2">
                            {book.title[language]}
                          </h3>
                          <div className="text-xs text-gray-500">
                            {book.quoteCount} {t.books.stats.quotes}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Book Info */}
                  <div className="flex-grow p-6">
                    <Link 
                      href={`/books/${book.slug}`}
                      className="block"
                    >
                      <h2 className="text-xl font-[oswald] font-bold text-primary-600 hover:text-primary-700 transition-colors mb-2 uppercase tracking-tight">
                        {book.title[language]}
                      </h2>
                    </Link>
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                      <span>{book.quoteCount} {t.books.stats.quotes}</span>
                      <span>•</span>
                      <span>{book.authorCount} {authorText}</span>
                    </div>
                    {/* Featured Quote */}
                    <blockquote className="text-sm text-gray-600 italic">
                      "{book.featuredQuote.quote[language]}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 