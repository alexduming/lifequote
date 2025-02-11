/**
 * @file 语录列表页面
 * @version 1.3.0
 * @description 展示所有语录的列表页面，包含分页、筛选和搜索功能
 * @update 2024-03-21
 * @changelog
 * - 优化页面最大宽度限制为 max-w-7xl (1280px)
 * - 改进分页组件设计，添加省略号和上下页按钮
 * - 优化移动端适配
 */

'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Filter, ArrowDownUp, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryKey, translations, type Language } from '@/config/translations';
import { getQuotesByPage } from '@/lib/quotes';
import type { Database } from '@/types/database.types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from '@/hooks/useLanguage';
import { toast } from 'sonner';

type Quote = Database['public']['Tables']['quotes']['Row'];

type SortOption = 'newest' | 'oldest' | 'mostLiked' | 'leastLiked';

/**
 * 获取页面数据
 * @param page 页码
 * @param pageSize 每页数量
 */
async function getQuotesPageData(page: number = 1, pageSize: number = 10) {
  const { quotes, total } = await getQuotesByPage(page, pageSize);
  return { quotes, total };
}

/**
 * 生成分页数组
 * @param currentPage 当前页码
 * @param totalPages 总页数
 */
function generatePaginationArray(currentPage: number, totalPages: number) {
  const delta = 2;
  const range = [];
  const rangeWithDots = [];
  let l;

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - delta && i <= currentPage + delta)
    ) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

export default function QuotesPage() {
  // 获取当前语言
  const { language } = useLanguage();
  const t = translations[language];

  // 状态管理
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [filteredQuotes, setFilteredQuotes] = useState<Quote[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<CategoryKey[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isLoading, setIsLoading] = useState(true);

  // 加载数据
  useEffect(() => {
    async function loadQuotes() {
      try {
        setIsLoading(true);
        const { quotes: newQuotes, total: newTotal } = await getQuotesPageData(currentPage);
        setQuotes(newQuotes);
        setTotal(newTotal);
      } catch (error) {
        console.error('加载语录失败:', error);
        toast.error(t.quotes.error);
      } finally {
        setIsLoading(false);
      }
    }
    loadQuotes();
  }, [currentPage]);

  // 处理筛选和排序
  useEffect(() => {
    let filtered = [...quotes];

    // 搜索过滤
    if (searchTerm) {
      filtered = filtered.filter(quote => 
        quote.quote_zh?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.quote_en?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.author_zh?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        quote.author_en?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 分类过滤
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(quote => 
        selectedCategories.includes(quote.category as CategoryKey)
      );
    }

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'mostLiked':
          return (b.likes || 0) - (a.likes || 0);
        case 'leastLiked':
          return (a.likes || 0) - (b.likes || 0);
        default:
          return 0;
      }
    });

    setFilteredQuotes(filtered);
  }, [quotes, searchTerm, selectedCategories, sortBy]);

  // 处理分类选择
  const handleCategoryChange = (category: CategoryKey) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-sans font-bold text-gray-900 mb-4">
              {t.quotes.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{t.quotes.total.replace('%d', total.toString())}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-gray-900">{t.quotes.filter}</h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder={t.quotes.searchPlaceholder}
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Sort */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">{t.quotes.sort}</h3>
                  <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">{t.quotes.sortOptions.newest}</SelectItem>
                      <SelectItem value="oldest">{t.quotes.sortOptions.oldest}</SelectItem>
                      <SelectItem value="mostLiked">{t.quotes.sortOptions.mostLiked}</SelectItem>
                      <SelectItem value="leastLiked">{t.quotes.sortOptions.leastLiked}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">{t.quotes.category}</h3>
                  <div className="space-y-2">
                    {Object.entries(translations[language].categories).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(key as CategoryKey)}
                          onChange={() => handleCategoryChange(key as CategoryKey)}
                          className="rounded border-gray-300 text-primary-600"
                        />
                        <span className="ml-2 text-sm text-gray-600">{value}</span>
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
                  {t.quotes.title}
                </h2>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500">
                    {t.quotes.showing.replace('%d', filteredQuotes.length.toString())}
                  </span>
                </div>
              </div>

              {isLoading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
                </div>
              ) : filteredQuotes.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">{t.quotes.noResults}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredQuotes.map((quote) => (
                    <QuoteCard
                      key={quote.id}
                      id={quote.id}
                      quote={{
                        zh: quote.quote_zh || '',
                        en: quote.quote_en || ''
                      }}
                      author={{
                        zh: quote.author_zh || '',
                        en: quote.author_en || ''
                      }}
                      authorTitle={quote.author_title_zh ? {
                        zh: quote.author_title_zh,
                        en: quote.author_title_en || ''
                      } : undefined}
                      category={quote.category as CategoryKey}
                      likes={quote.likes || 0}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 