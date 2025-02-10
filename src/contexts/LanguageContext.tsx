/**
 * @version 1.7.3
 * @description 语言上下文实现，包含以下功能：
 * - 支持中英文切换
 * - 本地存储语言偏好
 * - 浏览器语言检测
 * - SSR 支持
 * - 客户端水合优化
 * - 组件动态导入
 * - 修复服务器端渲染问题
 */

'use client';

/**
 * 语言切换上下文
 * @module LanguageContext
 */

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import type { Language } from '@/config/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isClient: boolean;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * 语言切换上下文提供者
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 初始化时从 localStorage 读取语言设置
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    } else {
      // 如果没有保存的语言设置，使用英文作为默认语言
      setLanguageState('en');
      localStorage.setItem('language', 'en');
    }
    setMounted(true);
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage === language) return;
    
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // 触发自定义事件，让需要更新的组件知道语言已更改
    window.dispatchEvent(new CustomEvent('languagechange', { detail: newLanguage }));
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const contextValue = {
    language,
    setLanguage,
    isClient: mounted,
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

/**
 * 使用语言上下文的 Hook
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 