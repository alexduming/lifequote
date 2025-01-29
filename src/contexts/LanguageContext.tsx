/**
 * @version 0.9
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
 * 语言上下文组件
 * @module LanguageContext
 * @description 提供语言切换功能和状态管理
 */

import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from 'react';
import type { Language } from '@/config/translations';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  isClient: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // 初始化时从 localStorage 读取语言设置
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    } else {
      // 如果没有保存的语言设置，尝试使用浏览器语言
      const browserLang = navigator.language.toLowerCase();
      const newLang = browserLang.startsWith('zh') ? 'zh' : 'en';
      setLanguageState(newLang);
      localStorage.setItem('language', newLang);
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

  const contextValue = {
    language,
    setLanguage,
    isClient: mounted
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 