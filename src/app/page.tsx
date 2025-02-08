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

/**
 * 首页组件
 */
export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <ClientLayout>
      <div className="noise-bg">
        <Navbar />
        <main className="min-h-screen">
          <HeroSection />
          <FeaturedQuotes />
          <CategoriesGrid />
        </main>
        <Footer />
      </div>
    </ClientLayout>
  );
} 