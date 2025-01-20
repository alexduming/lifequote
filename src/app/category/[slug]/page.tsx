import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Filter, ArrowDownUp } from 'lucide-react';

// 示例数据
const categoryData = {
  name: '哲学',
  description: '探索人生的意义，思考存在的本质，追寻真理的智慧之言。',
  quoteCount: 1234,
  authors: ['老子', '孔子', '苏格拉底', '柏拉图', '亚里士多德'],
};

const quotes = [
  {
    quote: "未经审视的人生不值得过。",
    author: "苏格拉底",
    authorTitle: "古希腊哲学家",
    category: "哲学",
    likes: 3456,
    isLiked: false,
  },
  {
    quote: "人不能两次踏入同一条河流。",
    author: "赫拉克利特",
    authorTitle: "古希腊哲学家",
    category: "哲学",
    likes: 2345,
    isLiked: true,
  },
  {
    quote: "知人者智，自知者明。",
    author: "老子",
    authorTitle: "中国古代哲学家",
    category: "哲学",
    likes: 4567,
    isLiked: false,
  },
];

export default function CategoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Category Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
              {categoryData.name}语录
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl">
              {categoryData.description}
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>{categoryData.quoteCount} 条语录</span>
              <span>•</span>
              <span>{categoryData.authors.length} 位作者</span>
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

                {/* Time Period Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">时期</h3>
                  <div className="space-y-2">
                    {['古代', '近代', '现代', '当代'].map((period) => (
                      <label key={period} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{period}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Author Filter */}
                <div>
                  <h3 className="text-sm font-medium text-gray-700 mb-3">作者</h3>
                  <div className="space-y-2">
                    {categoryData.authors.map((author) => (
                      <label key={author} className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-primary-600" />
                        <span className="ml-2 text-sm text-gray-600">{author}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quotes List */}
            <div className="flex-grow">
              {/* Sort Options */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif font-bold text-gray-900">所有语录</h2>
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600">
                  <ArrowDownUp size={16} />
                  <span>排序</span>
                </button>
              </div>

              {/* Quotes Grid */}
              <div className="space-y-6">
                {quotes.map((quote, index) => (
                  <QuoteCard key={index} {...quote} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 