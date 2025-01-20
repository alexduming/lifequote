import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Book, Award, Calendar, MapPin } from 'lucide-react';

// 示例数据
const authorData = {
  name: '老子',
  title: '中国古代哲学家',
  period: '春秋时期',
  location: '楚国苦县',
  bio: '老子是中国古代伟大的哲学家、思想家，道家学派创始人。其著作《道德经》对中国哲学产生了深远的影响，也是道家思想的重要经典著作。',
  achievements: [
    '道家学派创始人',
    '《道德经》作者',
    '中国传统文化重要奠基人',
  ],
  works: [
    {
      title: '道德经',
      description: '也称《老子》，是道家思想的重要经典著作。',
    },
  ],
  stats: {
    quotes: 128,
    collections: 1234,
    shares: 5678,
  },
};

const quotes = [
  {
    quote: "道可道，非常道。名可名，非常名。",
    author: "老子",
    authorTitle: "中国古代哲学家",
    category: "哲学",
    likes: 2345,
    isLiked: false,
  },
  {
    quote: "上善若水。水善利万物而不争。",
    author: "老子",
    authorTitle: "中国古代哲学家",
    category: "智慧",
    likes: 1876,
    isLiked: true,
  },
  {
    quote: "千里之行，始于足下。",
    author: "老子",
    authorTitle: "中国古代哲学家",
    category: "励志",
    likes: 3421,
    isLiked: false,
  },
];

export default function AuthorPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        {/* Author Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Author Image */}
              <div className="w-48 h-48 rounded-xl bg-gray-200 flex-shrink-0">
                {/* 这里可以添加作者图片 */}
              </div>

              {/* Author Info */}
              <div className="flex-grow">
                <h1 className="text-4xl font-serif font-bold text-gray-900 mb-2">
                  {authorData.name}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{authorData.title}</p>

                {/* Quick Stats */}
                <div className="flex gap-8 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.quotes}
                    </div>
                    <div className="text-sm text-gray-500">语录</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.collections}
                    </div>
                    <div className="text-sm text-gray-500">收藏</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      {authorData.stats.shares}
                    </div>
                    <div className="text-sm text-gray-500">分享</div>
                  </div>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{authorData.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{authorData.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Bio & Info */}
            <div className="lg:col-span-1 space-y-8">
              {/* Biography */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">生平简介</h2>
                <p className="text-gray-600">{authorData.bio}</p>
              </div>

              {/* Achievements */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">主要成就</h2>
                <ul className="space-y-3">
                  {authorData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Award size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Works */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">著作</h2>
                <ul className="space-y-4">
                  {authorData.works.map((work, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Book size={20} className="text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{work.title}</h3>
                        <p className="text-sm text-gray-600">{work.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Quotes */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">经典语录</h2>
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