import React from 'react';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import SearchResults from '@/components/SearchResults';
import { Quote } from '@/lib/quotes';

const quickCategories: CategoryKey[] = ['motivation', 'life', 'love', 'success', 'wisdom'];

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
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}&lang=${language}`);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('搜索失败:', error);
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
                />
              )}
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