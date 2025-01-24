'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

const allCategories = [
  { key: 'motivation' as CategoryKey, icon: '🔥', count: 108, bgClass: 'from-orange-500/20 to-red-500/20' },
  { key: 'life' as CategoryKey, icon: '🌱', count: 95, bgClass: 'from-green-500/20 to-emerald-500/20' },
  { key: 'love' as CategoryKey, icon: '💝', count: 82, bgClass: 'from-pink-500/20 to-rose-500/20' },
  { key: 'success' as CategoryKey, icon: '🎯', count: 76, bgClass: 'from-blue-500/20 to-indigo-500/20' },
  { key: 'wisdom' as CategoryKey, icon: '🧠', count: 124, bgClass: 'from-purple-500/20 to-violet-500/20' },
  { key: 'philosophy' as CategoryKey, icon: '🤔', count: 68, bgClass: 'from-indigo-500/20 to-purple-500/20' },
  { key: 'literature' as CategoryKey, icon: '📚', count: 45, bgClass: 'from-yellow-500/20 to-amber-500/20' },
  { key: 'science' as CategoryKey, icon: '🔬', count: 37, bgClass: 'from-cyan-500/20 to-blue-500/20' },
  { key: 'art' as CategoryKey, icon: '🎨', count: 52, bgClass: 'from-fuchsia-500/20 to-pink-500/20' },
  { key: 'history' as CategoryKey, icon: '⌛', count: 43, bgClass: 'from-amber-500/20 to-orange-500/20' },
  { key: 'politics' as CategoryKey, icon: '⚖️', count: 29, bgClass: 'from-slate-500/20 to-gray-500/20' },
  { key: 'economics' as CategoryKey, icon: '📈', count: 34, bgClass: 'from-emerald-500/20 to-teal-500/20' },
  { key: 'education' as CategoryKey, icon: '🎓', count: 41, bgClass: 'from-violet-500/20 to-purple-500/20' },
];

export default function TopicsPage() {
  const { language, isClient } = useLanguage();
  const [key, setKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [filteredCategories, setFilteredCategories] = useState(allCategories);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout>();
  const t = translations[language];

  useEffect(() => {
    const handleLanguageChange = () => {
      setKey(prev => prev + 1);
    };

    window.addEventListener('languagechange', handleLanguageChange);
    return () => {
      window.removeEventListener('languagechange', handleLanguageChange);
    };
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsSearching(true);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      const filtered = allCategories.filter(category =>
        t.categories[category.key].toLowerCase().includes(query.toLowerCase())
      );
      setFilteredCategories(filtered);
      setIsSearching(false);
    }, 300);
  }, [t.categories]);

  if (!isClient) {
    return (
      <div className="noise-bg min-h-screen">
        <Navbar />
        <main className="container py-20">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="noise-bg min-h-screen" key={key}>
      <Navbar />
      <main className="container py-20">
        {/* Hero Section - 主标题区域 */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          {/* 主标题: 默认36px(text-4xl)，中等屏幕60px(md:text-6xl) */}
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
            {t.sections.topics.title}
          </h1>
          
          {/* 副标题/描述: 20px(text-xl) */}
          <p className="text-xl text-dark-600 mb-12">
            {t.sections.topics.description}
          </p>
          
          {/* 搜索栏区域 */}
          <div className="max-w-2xl mx-auto">
            {/* 搜索输入框: 18px(text-lg) */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none" />
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={t.actions.searchTopics}
                  className="w-full h-14 px-6 pr-24 rounded-xl bg-white text-lg shadow-sm focus:ring-2 focus:ring-primary-500/50 border border-gray-200 focus:border-primary-500 transition-shadow hover:shadow-md"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  {searchQuery && !isSearching && (
                    <button
                      onClick={() => handleSearch('')}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                  <button 
                    className="p-2 text-primary-500 hover:text-primary-600 transition-colors"
                    onClick={() => handleSearch(searchQuery)}
                  >
                    {isSearching ? (
                      <div className="animate-spin w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full" />
                    ) : (
                      <Search size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 分类卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <a
              key={category.key}
              href={`/category/${category.key}`}
              className="group relative overflow-hidden rounded-xl bg-white hover:shadow-xl transition-all duration-500 ease-out hover:border-[#D70050] border-2 border-transparent"
            >
              <div className={`relative h-[200px] rounded-xl bg-gradient-to-r ${category.bgClass} p-8 border border-dark-100/20 flex items-center justify-center`}>
                <div className="flex flex-col items-center gap-4">
                  {/* 分类图标: 48px(text-6xl) */}
                  <div className="text-6xl transform group-hover:rotate-12 transition-transform duration-500 ease-out">
                    {category.icon}
                  </div>
                  <div className="text-center">
                    {/* 分类标题: 24px(text-2xl) */}
                    <h3 className="text-2xl font-[oswald] font-bold text-dark-900 mb-2 tracking-wide group-hover:text-primary-600 transition-colors duration-300">
                      {t.categories[category.key]}
                    </h3>
                    {/* 分类计数: 16px(text-base) */}
                    <p className="text-base text-dark-600 group-hover:text-dark-700 transition-colors duration-300">
                      {category.count} {t.actions.quotes}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/0 to-white/0 group-hover:from-white/0 group-hover:via-white/5 group-hover:to-white/0 transition-all duration-500 ease-out rounded-xl" />
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
} 