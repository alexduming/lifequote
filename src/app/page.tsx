/**
 * @version 0.1
 * @description 首页实现，包含以下功能：
 * - 双语支持（中英文）
 * - 搜索栏
 * - 快速分类导航
 * - 精选名言展示
 * - 分类网格展示
 * - 响应式设计
 * - 动画效果
 */

'use client';

import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';
import { translations, CategoryKey } from '@/config/translations';
import { useLanguage } from '@/contexts/LanguageContext';

// 示例数据
const featuredQuotes = [
  {
    quote: {
      en: "The most important thing in life is not where we stand, but in what direction we are moving.",
      zh: "生活中最重要的不是所处的位置，而是所朝的方向。"
    },
    author: {
      en: "Oliver Wendell Holmes",
      zh: "奥利弗·霍姆斯"
    },
    authorTitle: {
      en: "American Writer & Jurist",
      zh: "美国作家、法学家"
    },
    category: "life" as CategoryKey,
    likes: 1234,
    isLiked: false,
  },
  {
    quote: {
      en: "Don't wait for opportunities, create them.",
      zh: "不要等待机会，而要创造机会。"
    },
    author: {
      en: "Sun Yat-sen",
      zh: "孙中山"
    },
    authorTitle: {
      en: "Chinese Revolutionary Pioneer",
      zh: "中国革命先行者"
    },
    category: "motivation" as CategoryKey,
    likes: 856,
    isLiked: true,
  },
  {
    quote: {
      en: "Education is not the filling of a pail, but the lighting of a fire.",
      zh: "教育不是灌输，而是点燃火焰。"
    },
    author: {
      en: "Socrates",
      zh: "苏格拉底"
    },
    authorTitle: {
      en: "Ancient Greek Philosopher",
      zh: "古希腊哲学家"
    },
    category: "education" as CategoryKey,
    likes: 967,
    isLiked: false,
  },
];

const categories = [
  { key: 'philosophy' as CategoryKey, count: 1234, icon: '🤔', bgClass: 'from-indigo-500/20 to-purple-500/20' },
  { key: 'literature' as CategoryKey, count: 890, icon: '📚', bgClass: 'from-yellow-500/20 to-amber-500/20' },
  { key: 'science' as CategoryKey, count: 567, icon: '🔬', bgClass: 'from-cyan-500/20 to-blue-500/20' },
  { key: 'art' as CategoryKey, count: 432, icon: '🎨', bgClass: 'from-fuchsia-500/20 to-pink-500/20' },
  { key: 'history' as CategoryKey, count: 765, icon: '⌛', bgClass: 'from-amber-500/20 to-orange-500/20' },
  { key: 'politics' as CategoryKey, count: 321, icon: '⚖️', bgClass: 'from-slate-500/20 to-gray-500/20' },
  { key: 'economics' as CategoryKey, count: 543, icon: '📈', bgClass: 'from-emerald-500/20 to-teal-500/20' },
  { key: 'education' as CategoryKey, count: 678, icon: '🎓', bgClass: 'from-violet-500/20 to-purple-500/20' },
];

const quickCategories: CategoryKey[] = ['motivation', 'life', 'love', 'success', 'wisdom'];

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ClientLayout>
      <div className="noise-bg">
        <Navbar />
        <main className="min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 via-transparent to-transparent" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary-100/30 via-transparent to-transparent" />
            </div>
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <h1 className="text-5xl md:text-7xl font-[oswald] font-bold gradient-text animate-float whitespace-pre-line tracking-tight uppercase !leading-tight">
                  {t.hero.title}
                </h1>
                <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto font-light">
                  {t.hero.subtitle}
                </p>
                
                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mt-12">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity" />
                    <input
                      type="text"
                      placeholder={t.hero.searchPlaceholder}
                      className="input h-14 pl-6 pr-12 text-lg group-hover:shadow-lg"
                    />
                    <button className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-600 transition-colors">
                      <Search size={24} />
                    </button>
                  </div>
                </div>

                {/* Quick Categories */}
                <div className="flex flex-wrap justify-center gap-4 mt-12">
                  {quickCategories.map((category) => (
                    <a
                      key={category}
                      href={`/category/${category.toLowerCase()}`}
                      className="btn btn-outline font-[oswald] uppercase tracking-wide"
                    >
                      {t.categories[category]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Featured Quotes Section */}
          <section className="container py-20">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-[oswald] font-bold text-dark-900 tracking-tight uppercase !leading-none">
                  {t.sections.featured.title}
                </h2>
                <p className="mt-2 text-dark-500 font-light">
                  {t.sections.featured.subtitle}
                </p>
              </div>
              <a href="/quotes" className="btn btn-outline group font-display uppercase tracking-wide">
                {t.sections.featured.viewMore}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredQuotes.map((quote, index) => (
                <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <QuoteCard {...quote} language={language} />
                </div>
              ))}
            </div>
          </section>

          {/* Categories Grid */}
          <section className="container py-20">
            <h2 className="text-3xl font-[oswald] font-bold text-dark-900 mb-4 tracking-tight uppercase !leading-none">
              {t.sections.explore.title}
            </h2>
            <p className="text-dark-500 mb-12 font-light">
              {t.sections.explore.subtitle}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <a
                  key={category.key}
                  href={`/category/${category.key}`}
                  className="group relative overflow-hidden rounded-2xl bg-dark-100/50"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.bgClass} opacity-0 group-hover:opacity-60 transition-all duration-300`} />
                  <div className="relative p-8" >
                    <span className="text-6xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-2xl font-[oswald] font-bold text-dark-900 mb-2 uppercase group-hover:text-primary-600 transition-colors duration-300">
                      {t.categories[category.key]}
                    </h3>
                    <p className="text-dark-600">
                      {category.count} {t.actions.quotes}
                    </p>
                  </div>
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/50 rounded-2xl transition-colors duration-300" />
                </a>
              ))}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ClientLayout>
  );
} 