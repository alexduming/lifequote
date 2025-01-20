'use client';

import React from 'react';
import { Search } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

const allCategories = [
  { key: 'motivation' as CategoryKey, icon: '🔥', bgClass: 'from-orange-500/20 to-red-500/20' },
  { key: 'life' as CategoryKey, icon: '🌱', bgClass: 'from-green-500/20 to-emerald-500/20' },
  { key: 'love' as CategoryKey, icon: '💝', bgClass: 'from-pink-500/20 to-rose-500/20' },
  { key: 'success' as CategoryKey, icon: '🎯', bgClass: 'from-blue-500/20 to-indigo-500/20' },
  { key: 'wisdom' as CategoryKey, icon: '🧠', bgClass: 'from-purple-500/20 to-violet-500/20' },
  { key: 'philosophy' as CategoryKey, icon: '🤔', bgClass: 'from-indigo-500/20 to-purple-500/20' },
  { key: 'literature' as CategoryKey, icon: '📚', bgClass: 'from-yellow-500/20 to-amber-500/20' },
  { key: 'science' as CategoryKey, icon: '🔬', bgClass: 'from-cyan-500/20 to-blue-500/20' },
  { key: 'art' as CategoryKey, icon: '🎨', bgClass: 'from-fuchsia-500/20 to-pink-500/20' },
  { key: 'history' as CategoryKey, icon: '⌛', bgClass: 'from-amber-500/20 to-orange-500/20' },
  { key: 'politics' as CategoryKey, icon: '⚖️', bgClass: 'from-slate-500/20 to-gray-500/20' },
  { key: 'economics' as CategoryKey, icon: '📈', bgClass: 'from-emerald-500/20 to-teal-500/20' },
  { key: 'education' as CategoryKey, icon: '🎓', bgClass: 'from-violet-500/20 to-purple-500/20' },
];

export default function TopicsPage() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
            {language === 'en' ? 'Explore Topics' : '探索主题'}
          </h1>
          <p className="text-xl text-dark-600 mb-12">
            {language === 'en' 
              ? 'Discover wisdom from various fields and perspectives'
              : '探索不同领域和视角的智慧'}
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search topics...' : '搜索主题...'}
                className="input h-14 pl-6 pr-12 text-lg group-hover:shadow-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-600 transition-colors">
                <Search size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allCategories.map((category, index) => (
            <a
              key={category.key}
              href={`/category/${category.key}`}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.bgClass} opacity-60`} />
              <div className="relative p-8">
                <span className="text-6xl mb-6 block transform group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <h3 className="text-2xl font-[oswald] font-bold text-dark-900 mb-2 uppercase group-hover:text-primary-600 transition-colors">
                  {t.categories[category.key]}
                </h3>
                <p className="text-dark-600">
                  {Math.floor(Math.random() * 1000) + 500} {t.actions.quotes}
                </p>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-2xl transition-colors" />
            </a>
          ))}
        </div>
      </main>
    </div>
  );
} 