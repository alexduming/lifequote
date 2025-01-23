'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';
import QuoteCard from '@/components/QuoteCard';

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

export default function FeaturedQuotes() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
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
            <QuoteCard {...quote} />
          </div>
        ))}
      </div>
    </section>
  );
} 