'use client';

import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

// 示例数据
const featuredBooks = [
  {
    cover: '/images/books/tao-te-ching.jpg', // 需要添加对应的图片
    title: {
      en: "Tao Te Ching",
      zh: "道德经"
    },
    author: {
      en: "Lao Tzu",
      zh: "老子"
    },
    quotes: [
      {
        quote: {
          en: "A journey of a thousand miles begins with a single step.",
          zh: "千里之行，始于足下。"
        },
        author: {
          en: "Lao Tzu",
          zh: "老子"
        },
        authorTitle: {
          en: "Ancient Chinese Philosopher",
          zh: "中国古代哲学家"
        },
        category: "wisdom" as CategoryKey,
        likes: 2345,
        isLiked: false,
      }
    ]
  },
  {
    cover: '/images/books/the-art-of-war.jpg', // 需要添加对应的图片
    title: {
      en: "The Art of War",
      zh: "孙子兵法"
    },
    author: {
      en: "Sun Tzu",
      zh: "孙子"
    },
    quotes: [
      {
        quote: {
          en: "Supreme excellence consists of breaking the enemy's resistance without fighting.",
          zh: "不战而屈人之兵，善之善者也。"
        },
        author: {
          en: "Sun Tzu",
          zh: "孙子"
        },
        authorTitle: {
          en: "Ancient Chinese Military Strategist",
          zh: "中国古代军事家"
        },
        category: "wisdom" as CategoryKey,
        likes: 1876,
        isLiked: true,
      }
    ]
  },
];

const bookCategories = [
  { id: 'philosophy', icon: '🤔', name: { en: 'Philosophy', zh: '哲学' } },
  { id: 'literature', icon: '📚', name: { en: 'Literature', zh: '文学' } },
  { id: 'science', icon: '🔬', name: { en: 'Science', zh: '科学' } },
  { id: 'history', icon: '⌛', name: { en: 'History', zh: '历史' } },
  { id: 'psychology', icon: '🧠', name: { en: 'Psychology', zh: '心理学' } },
  { id: 'business', icon: '💼', name: { en: 'Business', zh: '商业' } },
];

export default function BooksPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
            {language === 'en' ? 'Book Quotes' : '书籍语录'}
          </h1>
          <p className="text-xl text-dark-600 mb-12">
            {language === 'en' 
              ? 'Discover wisdom from the greatest books ever written'
              : '发现最伟大书籍中的智慧'}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search books or quotes...' : '搜索书籍或语录...'}
                className="input h-14 pl-6 pr-12 text-lg group-hover:shadow-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-600 transition-colors">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Book Categories */}
        <div className="mb-20">
          <h2 className="text-2xl font-[oswald] font-bold text-dark-900 mb-8 uppercase">
            {language === 'en' ? 'Browse by Category' : '按类别浏览'}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bookCategories.map((category) => (
              <a
                key={category.id}
                href={`/books/category/${category.id}`}
                className="flex flex-col items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all group"
              >
                <span className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="font-medium text-dark-900 group-hover:text-primary-600 transition-colors">
                  {category.name[language]}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Featured Books */}
        <div className="mb-20">
          <h2 className="text-2xl font-[oswald] font-bold text-dark-900 mb-8 uppercase">
            {language === 'en' ? 'Featured Books' : '精选书籍'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredBooks.map((book, index) => (
              <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="flex gap-6 mb-6">
                  <div className="w-32 h-48 bg-dark-100 rounded-lg overflow-hidden">
                    {/* 这里需要添加书籍封面图片 */}
                    <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-500">
                      <BookOpen size={32} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-[oswald] font-bold text-dark-900 mb-2">
                      {book.title[language]}
                    </h3>
                    <p className="text-dark-600 mb-4">
                      {book.author[language]}
                    </p>
                    <a
                      href={`/books/${book.title.en.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      {language === 'en' ? 'View Quotes' : '查看语录'} →
                    </a>
                  </div>
                </div>
                {/* Featured Quote */}
                {book.quotes[0] && (
                  <QuoteCard {...book.quotes[0]} />
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 