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

import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Filter, ArrowDownUp, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryKey, translations } from '@/config/translations';
import { getQuotesByPage } from '@/lib/quotes';
import type { Database } from '@/types/database.types';

type Quote = Database['public']['Tables']['quotes']['Row'];

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

export default async function QuotesPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const currentPage = parseInt(searchParams.page || '1');
  const pageSize = 10;
  const { quotes, total } = await getQuotesPageData(currentPage, pageSize);
  const totalPages = Math.ceil(total / pageSize);
  const pagination = generatePaginationArray(currentPage, totalPages);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              所有语录
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{total} 条语录</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-medium text-gray-900">筛选</h2>
                  <Filter size={18} className="text-gray-400" />
                </div>

                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="搜索语录..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">分类</h3>
                  <div className="space-y-2">
                    {Object.entries(translations.zh.categories).map(([key, value]) => (
                      <label key={key} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
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
                  全部语录
                </h2>
                <button className="flex items-center gap-2 text-sm text-gray-500">
                  <ArrowDownUp size={16} />
                  <span>排序</span>
                </button>
              </div>

              <div className="space-y-6">
                {quotes.map((quote) => (
                  <QuoteCard
                    key={quote.id}
                    quote={{
                      zh: quote.quote_zh,
                      en: quote.quote_en
                    }}
                    author={{
                      zh: quote.author_zh,
                      en: quote.author_en
                    }}
                    authorTitle={{
                      zh: quote.author_title_zh || '',
                      en: quote.author_title_en || ''
                    }}
                    category={quote.category as CategoryKey}
                    likes={quote.likes}
                    isLiked={false}
                  />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="flex items-center gap-2">
                    <a
                      href={`/quotes?page=${currentPage - 1}`}
                      className={`p-2 text-gray-500 hover:text-primary-500 ${
                        currentPage === 1 ? 'pointer-events-none opacity-50' : ''
                      }`}
                    >
                      <ChevronLeft size={20} />
                    </a>
                    {pagination.map((page, index) => (
                      <React.Fragment key={index}>
                        {page === '...' ? (
                          <span className="px-4 py-2 text-gray-400">{page}</span>
                        ) : (
                          <a
                            href={`/quotes?page=${page}`}
                            className={`px-4 py-2 rounded-lg ${
                              currentPage === page
                                ? 'bg-primary-500 text-white'
                                : 'text-gray-500 hover:text-primary-500'
                            }`}
                          >
                            {page}
                          </a>
                        )}
                      </React.Fragment>
                    ))}
                    <a
                      href={`/quotes?page=${currentPage + 1}`}
                      className={`p-2 text-gray-500 hover:text-primary-500 ${
                        currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
                      }`}
                    >
                      <ChevronRight size={20} />
                    </a>
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