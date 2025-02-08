/**
 * @version 0.1
 * @description 首页实现，包含以下功能：
 * - 双语支持（中英文）
 * - 搜索栏
 * - 快速分类导航
 * - 精选名言展示
 * - 分类网格展示
 * - 响应式设计
 * - 动画效果
 */

'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';

// 动态导入组件以避免 SSR 问题
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const FeaturedQuotes = dynamic(() => import('@/components/FeaturedQuotes'), { ssr: false });
const CategoriesGrid = dynamic(() => import('@/components/CategoriesGrid'), { ssr: false });

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ClientLayout>
      <div className="noise-bg">
        <Navbar />
        <main className="min-h-screen">
          <section className="relative py-20 md:py-32">
            <div className="container relative">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* 标题部分 */}
                <h1 className="text-5xl md:text-7xl font-[oswald] font-bold gradient-text animate-float whitespace-pre-line tracking-tight uppercase !leading-tight">
                  {t.hero.title}
                </h1>
                {/* 副标题部分 */}
                <p className="text-xl md:text-2xl text-dark-600 max-w-6xl mx-auto font-light whitespace-pre-line">
                  {t.hero.subtitle}
                </p>
                {/* 搜索框部分 */}
                <div className="max-w-2xl mx-auto mt-12">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity pointer-events-none" />
                    <input
                      type="text"
                      placeholder={t.hero.searchPlaceholder}
                      className="w-full h-14 px-6 rounded-xl bg-white text-lg shadow-sm focus:ring-2 focus:ring-primary-500/50 border border-gray-200 focus:border-primary-500 transition-shadow hover:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FeaturedQuotes />
          <CategoriesGrid />
        </main>
        <Footer />
      </div>
    </ClientLayout>
  );
} 