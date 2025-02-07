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
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ClientLayout from '@/components/ClientLayout';

// 动态导入组件以避免 SSR 问题
const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: false });
const FeaturedQuotes = dynamic(() => import('@/components/FeaturedQuotes'), { ssr: false });
const CategoriesGrid = dynamic(() => import('@/components/CategoriesGrid'), { ssr: false });

export default function Home() {
  return (
    <ClientLayout>
      <div className="noise-bg">
        <Navbar />
        <main className="min-h-screen">
          <section className="hero">
            {/* 标题部分 */}
            <h1 className="whitespace-pre-line">
              {t('hero.title')}
            </h1>
            {/* 副标题部分 - 添加 whitespace-pre-line */}
            <p className="whitespace-pre-line">
              {t('hero.subtitle')}
            </p>
            {/* 搜索框部分 */}
            <div>
              {t('hero.searchPlaceholder')}
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