import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Filter, ArrowDownUp, Search } from 'lucide-react';
import { CategoryKey, translations } from '@/config/translations';
import { readQuotesFromCsv } from '@/lib/quotes';

/**
 * 获取页面数据
 * @description 从CSV文件读取语录数据，并进行分页处理
 * @param page 当前页码
 * @param pageSize 每页显示数量
 * @returns 返回分页后的数据和过滤选项
 */
async function getQuotesPageData(page: number = 1, pageSize: number = 10) {
  const quotes = await readQuotesFromCsv();
  
  // 计算分页
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const paginatedQuotes = quotes.slice(start, end);
  
  // 获取过滤选项
  const periods = Array.from(new Set(quotes.map(q => q.period.zh)));
  const authors = Array.from(new Set(quotes.map(q => q.author.zh)));
  const categories = Object.entries(translations.zh.categories);

  return {
    quotes: paginatedQuotes,
    filters: {
      periods,
      authors,
      categories,
    },
    pagination: {
      currentPage: page,
      totalPages: Math.ceil(quotes.length / pageSize),
      totalItems: quotes.length,
    },
    stats: {
      total: quotes.length,
      authors: authors.length,
      categories: categories.length,
    },
  };
}

export default async function QuotesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || '1');
  const { quotes, filters, pagination, stats } = await getQuotesPageData(page);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              精选语录
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              探索历史长河中的智慧结晶，感受跨越时空的思想火花
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{stats.total} 条语录</span>
              <span>•</span>
              <span>{stats.authors} 位作者</span>
              <span>•</span>
              <span>{stats.categories} 个分类</span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="搜索语录、作者或主题..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="font-medium text-gray-900">筛选</h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* Categories Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">分类</h3>
                  <div className="space-y-2">
                    {filters.categories.map(([key, name]) => (
                      <label key={key} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{name}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Time Period Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">时期</h3>
                  <div className="space-y-2">
                    {filters.periods.map((period) => (
                      <label key={period} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{period}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Authors Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">作者</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {filters.authors.map((author) => (
                      <label key={author} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{author}</span>
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
                  全部语录
                </h2>
                <div className="flex items-center gap-4">
                  <select className="text-sm text-gray-500 border border-gray-200 rounded-lg px-3 py-2">
                    <option value="latest">最新发布</option>
                    <option value="popular">最受欢迎</option>
                    <option value="views">最多浏览</option>
                  </select>
                </div>
              </div>

              <div className="space-y-6">
                {quotes.map((quote) => (
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

              {/* Pagination */}
              {pagination.totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                      <a
                        key={pageNum}
                        href={`/quotes?page=${pageNum}`}
                        className={`px-4 py-2 rounded-lg ${
                          pageNum === pagination.currentPage
                            ? 'bg-primary-600 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {pageNum}
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 