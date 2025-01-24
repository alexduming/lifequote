'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Search, Filter, Globe2, BookOpen, Quote } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

// 示例数据
const featuredAuthors = [
  {
    name: {
      en: "William Shakespeare",
      zh: "威廉·莎士比亚"
    },
    title: {
      en: "English Playwright & Poet",
      zh: "英国剧作家、诗人"
    },
    era: {
      en: "1564-1616",
      zh: "1564-1616"
    },
    image: "/images/authors/shakespeare.jpg", // 需要添加图片
    categories: ["literature", "art"] as CategoryKey[],
    quoteCount: 856,
    description: {
      en: "The greatest writer in the English language and the world's greatest dramatist.",
      zh: "英语文学史上最伟大的作家，世界最伟大的戏剧家。"
    }
  },
  {
    name: {
      en: "Confucius",
      zh: "孔子"
    },
    title: {
      en: "Chinese Philosopher",
      zh: "中国哲学家"
    },
    era: {
      en: "551-479 BC",
      zh: "前551年-前479年"
    },
    image: "/images/authors/confucius.jpg", // 需要添加图片
    categories: ["philosophy", "education"] as CategoryKey[],
    quoteCount: 789,
    description: {
      en: "One of the most influential philosophers in Chinese history.",
      zh: "中国历史上最具影响力的哲学家之一。"
    }
  },
  {
    name: {
      en: "Albert Einstein",
      zh: "阿尔伯特·爱因斯坦"
    },
    title: {
      en: "Theoretical Physicist",
      zh: "理论物理学家"
    },
    era: {
      en: "1879-1955",
      zh: "1879-1955"
    },
    image: "/images/authors/einstein.jpg", // 需要添加图片
    categories: ["science", "philosophy"] as CategoryKey[],
    quoteCount: 567,
    description: {
      en: "Developer of the theory of relativity, one of the pillars of modern physics.",
      zh: "相对论的创立者，现代物理学的奠基人之一。"
    }
  },
];

const eras = [
  { id: 'ancient', name: { en: 'Ancient', zh: '古代' } },
  { id: 'medieval', name: { en: 'Medieval', zh: '中世纪' } },
  { id: 'renaissance', name: { en: 'Renaissance', zh: '文艺复兴' } },
  { id: 'modern', name: { en: 'Modern', zh: '现代' } },
  { id: 'contemporary', name: { en: 'Contemporary', zh: '当代' } },
];

const regions = [
  { id: 'eastern', name: { en: 'Eastern', zh: '东方' } },
  { id: 'western', name: { en: 'Western', zh: '西方' } },
  { id: 'african', name: { en: 'African', zh: '非洲' } },
  { id: 'american', name: { en: 'American', zh: '美洲' } },
];

export default function AuthorsPage() {
  const { language, isClient } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);
  const [filteredAuthors, setFilteredAuthors] = useState(featuredAuthors);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout>();
  const t = translations[language];

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setIsSearching(true);

    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    searchTimeoutRef.current = setTimeout(() => {
      const filtered = featuredAuthors.filter(author =>
        author.name[language].toLowerCase().includes(query.toLowerCase()) ||
        author.title[language].toLowerCase().includes(query.toLowerCase())
      );
      setFilteredAuthors(filtered);
      setIsSearching(false);
    }, 300);
  }, [language]);

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
    <div className="noise-bg min-h-screen">
      <Navbar />
      <main className="container py-20">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-[oswald] font-bold text-dark-900 mb-6 uppercase tracking-tight">
            {t.nav.authors}
          </h1>
          <p className="text-xl text-dark-600 mb-12">
            探索历史上最伟大的思想家和他们的智慧结晶
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none" />
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  placeholder={language === 'en' ? 'Search authors...' : '搜索作者...'}
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

        {/* Filters */}
        {showFilters && (
          <div className="max-w-4xl mx-auto mb-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Eras */}
              <div>
                <h3 className="text-lg font-[oswald] font-bold text-dark-900 mb-4 uppercase">
                  {language === 'en' ? 'Historical Era' : '历史时期'}
                </h3>
                <div className="space-y-2">
                  {eras.map(era => (
                    <label key={era.id} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-primary-600" />
                      <span className="text-dark-600 group-hover:text-primary-600 transition-colors">
                        {era.name[language]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Regions */}
              <div>
                <h3 className="text-lg font-[oswald] font-bold text-dark-900 mb-4 uppercase">
                  {language === 'en' ? 'Region' : '地区'}
                </h3>
                <div className="space-y-2">
                  {regions.map(region => (
                    <label key={region.id} className="flex items-center gap-2 cursor-pointer group">
                      <input type="checkbox" className="form-checkbox text-primary-600" />
                      <span className="text-dark-600 group-hover:text-primary-600 transition-colors">
                        {region.name[language]}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAuthors.map((author, index) => (
            <div
              key={index}
              className="group bg-white/50 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Author Image */}
              <div className="h-48 bg-dark-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20" />
                <div className="absolute inset-0 flex items-center justify-center text-primary-500">
                  <Globe2 size={48} className="opacity-20" />
                </div>
              </div>
              
              {/* Author Info */}
              <div className="p-6">
                <h3 className="text-2xl font-[oswald] font-bold text-dark-900 mb-2">
                  {author.name[language]}
                </h3>
                <p className="text-dark-500 mb-4">{author.title[language]}</p>
                <p className="text-sm text-dark-600 mb-6">{author.description[language]}</p>
                
                {/* Stats */}
                <div className="flex items-center justify-between text-sm text-dark-500">
                  <div className="flex items-center gap-2">
                    <Quote size={16} />
                    <span>{author.quoteCount} {t.actions.quotes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>{author.categories.length} {language === 'en' ? 'categories' : '个类别'}</span>
                  </div>
                </div>
                
                {/* Categories */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {author.categories.map((category) => (
                    <span
                      key={category}
                      className="text-xs px-2 py-1 rounded-full bg-primary-50 text-primary-700"
                    >
                      {t.categories[category]}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View Profile Link */}
              <a
                href={`/authors/${author.name.en.toLowerCase().replace(/\s+/g, '-')}`}
                className="block p-4 text-center text-primary-600 hover:text-primary-700 font-medium border-t border-dark-100 transition-colors"
              >
                {language === 'en' ? 'View Profile' : '查看详情'} →
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
} 