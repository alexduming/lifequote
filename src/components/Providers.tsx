'use client';

/**
 * 全局上下文提供者组件
 * @module Providers
 * @description 包含所有的上下文提供者，用于管理全局状态
 */

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';

/**
 * 全局上下文提供者组件
 * @param {object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 提供者组件
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
}
