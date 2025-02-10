'use client';

import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { QUICK_CATEGORIES } from '@/config/constants';
import SearchResults from '@/components/SearchResults';
import type { Quote } from '@/lib/database.types';

const quickCategories = QUICK_CATEGORIES;

export default function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [searchQuery, setSearchQuery] = React.useState('');
  const [searchResults, setSearchResults] = React.useState<{ results: Quote[]; total: number } | null>(null);
  const [isSearching, setIsSearching] = React.useState(false);
  const searchTimeoutRef = React.useRef<NodeJS.Timeout>();

  // 处理搜索
  const handleSearch = async (query: string) => {
    setSearchQuery(query);
    
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (!query.trim()) {
      setSearchResults(null);
      return;
    }

    setIsSearching(true);

    searchTimeoutRef.current = setTimeout(async () => {
      try {
        const params = new URLSearchParams({
          q: query,
          lang: language,
          limit: '5'
        });
        
        const response = await fetch(`/api/search?${params.toString()}`);
        if (!response.ok) {
          throw new Error('搜索请求失败');
        }
        
        const data = await response.json();
        // 确保返回的数据符合 Quote 类型
        const quotes: Quote[] = data.results.map((quote: any) => ({
          id: quote.id,
          quote: {
            zh: quote.quote_zh || quote.content_zh,
            en: quote.quote_en || quote.content_en
          },
          author: {
            zh: quote.author_zh,
            en: quote.author_en
          },
          authorTitle: {
            zh: quote.author_title_zh || null,
            en: quote.author_title_en || null
          },
          category: quote.category,
          likes: quote.likes || 0,
          views: quote.views || 0,
          period_zh: quote.period_zh || null,
          period_en: quote.period_en || null,
          book: quote.book || null,
          book_en: quote.book_en || null,
          created_at: quote.created_at || new Date().toISOString()
        }));
        setSearchResults({ results: quotes, total: data.total });
      } catch (error) {
        console.error('搜索失败:', error);
        setSearchResults({ results: [], total: 0 });
      } finally {
        setIsSearching(false);
      }
    }, 300);
  };

  // 清除搜索
  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
  };

  return (
    <section className="relative py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary-100/30 via-transparent to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary-100/30 via-transparent to-transparent" />
      </div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="text-center mb-8">
            <h1 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block font-[oswald] bg-gradient-to-r from-[#d70050] to-[#f98d2c] bg-clip-text text-transparent animate-float whitespace-pre-line">
                {t.hero.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              {t.hero.subtitle}
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="relative group z-[9999]">
              <div className="sticky top-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity" />
                  <div className="relative">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => handleSearch(e.target.value)}
                      placeholder={t.hero.searchPlaceholder}
                      className="input h-14 pl-6 pr-24 text-lg group-hover:shadow-lg"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                      {searchQuery && (
                        <button
                          onClick={clearSearch}
                          className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                        >
                          <X size={20} />
                        </button>
                      )}
                      <button className="text-primary-500 hover:text-primary-600 transition-colors">
                        <Search size={24} />
                      </button>
                    </div>
                  </div>
                  {/* Search Results */}
                  {searchResults && (
                    <SearchResults
                      results={searchResults.results}
                      total={searchResults.total}
                      language={language}
                      onClose={clearSearch}
                      searchQuery={searchQuery}
                    />
                  )}
                </div>
              </div>
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
  );
} 