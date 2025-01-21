import React from 'react';
import Navbar from '@/components/Navbar';
import QuoteCard from '@/components/QuoteCard';
import { Book, Award, Calendar, MapPin } from 'lucide-react';
import { getQuotesByAuthor } from '@/lib/quotes';

// 获取页面数据
async function getAuthorPageData(authorSlug: string) {
  const quotes = await getQuotesByAuthor(authorSlug);
  if (quotes.length === 0) {
    return null;
  }

  const firstQuote = quotes[0];
  const authorData = {
    name: firstQuote.author.zh,
    title: firstQuote.authorTitle.zh,
    period: firstQuote.period.zh,
    location: '楚国苦县', // 这个信息可以后续添加到CSV中
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
      quotes: quotes.length,
      collections: Math.floor(quotes.reduce((sum, q) => sum + q.likes, 0) / 2),
      shares: quotes.reduce((sum, q) => sum + q.views, 0),
    },
  };
  
  return { quotes, authorData };
}

export default async function AuthorPage({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const pageData = await getAuthorPageData(params.slug);
  
  if (!pageData) {
    return <div>作者不存在</div>;
  }

  const { quotes, authorData } = pageData;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16">
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
            {/* Left Column - Bio & Achievements */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-xl font-medium text-gray-900 mb-4">简介</h2>
                <p className="text-gray-600">{authorData.bio}</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-primary-600" size={20} />
                  <h2 className="text-xl font-medium text-gray-900">成就</h2>
                </div>
                <ul className="space-y-3">
                  {authorData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2" />
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Quotes */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">经典语录</h2>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 