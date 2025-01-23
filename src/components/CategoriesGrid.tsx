'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations, CategoryKey } from '@/config/translations';

const categories = [
  { key: 'philosophy' as CategoryKey, count: 1234, icon: '🤔', bgClass: 'from-indigo-500/20 to-purple-500/20' },
  { key: 'literature' as CategoryKey, count: 890, icon: '📚', bgClass: 'from-yellow-500/20 to-amber-500/20' },
  { key: 'science' as CategoryKey, count: 567, icon: '🔬', bgClass: 'from-cyan-500/20 to-blue-500/20' },
  { key: 'art' as CategoryKey, count: 432, icon: '🎨', bgClass: 'from-fuchsia-500/20 to-pink-500/20' },
  { key: 'history' as CategoryKey, count: 765, icon: '⌛', bgClass: 'from-amber-500/20 to-orange-500/20' },
  { key: 'politics' as CategoryKey, count: 321, icon: '⚖️', bgClass: 'from-slate-500/20 to-gray-500/20' },
  { key: 'economics' as CategoryKey, count: 543, icon: '📈', bgClass: 'from-emerald-500/20 to-teal-500/20' },
  { key: 'education' as CategoryKey, count: 678, icon: '🎓', bgClass: 'from-violet-500/20 to-purple-500/20' },
];

export default function CategoriesGrid() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="container py-20">
      <h2 className="text-3xl font-[oswald] font-bold text-dark-900 mb-4 tracking-tight uppercase !leading-none">
        {t.sections.explore.title}
      </h2>
      <p className="text-dark-500 mb-12 font-light">
        {t.sections.explore.subtitle}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <a
            key={category.key}
            href={`/category/${category.key}`}
            className="group relative overflow-hidden rounded-2xl bg-dark-100/50"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${category.bgClass} opacity-0 group-hover:opacity-60 transition-all duration-300`} />
            <div className="relative p-6 flex flex-col items-center text-center">
              <span className="text-4xl mb-3">{category.icon}</span>
              <h3 className="text-lg font-[oswald] font-medium text-dark-800 mb-1">
                {t.categories[category.key]}
              </h3>
              <p className="text-sm text-dark-500">
                {category.count} {t.sections.stats.quotes}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 