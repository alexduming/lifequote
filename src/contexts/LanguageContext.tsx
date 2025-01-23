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
  const [language, setLanguageState] = useState<Language>(() => {
    // 在服务器端返回默认语言
    if (typeof window === 'undefined') return 'en';
    
    // 在客户端从 localStorage 读取或使用浏览器语言
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      return savedLanguage;
    }
    const browserLang = window.navigator.language.toLowerCase();
    return browserLang.startsWith('zh') ? 'zh' : 'en';
  });

  // 组件挂载时的初始化
  useEffect(() => {
    setMounted(true);
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage === language) return;
    
    setLanguageState(newLanguage);
    localStorage.setItem('language', newLanguage);
    document.documentElement.lang = newLanguage;
    
    // 触发自定义事件通知其他组件语言已更改
    const event = new CustomEvent('languagechange', { detail: { language: newLanguage } });
    window.dispatchEvent(event);
  }, [language]);

  const contextValue = {
    language,
    setLanguage,
    isClient: mounted
  };

  // 在客户端渲染之前返回服务器端的默认内容
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {}, isClient: false }}>
        {children}
      </LanguageContext.Provider>
    );
  }

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