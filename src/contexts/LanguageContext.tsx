/**
 * @version 0.8
 * @description 语言上下文实现，包含以下功能：
 * - 支持中英文切换
 * - 本地存储语言偏好
 * - 浏览器语言检测
 * - SSR 支持
 * - 客户端水合优化
 */

'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, useReducer } from 'react';
import { Language } from '@/config/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [, forceUpdate] = useReducer(x => x + 1, 0);
  const [language, setLanguageState] = useState<Language>('en');

  // 只在客户端初始化语言设置
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'zh')) {
      setLanguageState(savedLanguage);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const initialLang = browserLang.startsWith('zh') ? 'zh' : 'en';
      setLanguageState(initialLang);
      localStorage.setItem('language', initialLang);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('language', language);
      document.documentElement.lang = language;
      document.documentElement.setAttribute('data-language', language);
      forceUpdate();
    }
  }, [language, mounted]);

  const setLanguage = useCallback((lang: Language) => {
    if (lang === 'en' || lang === 'zh') {
      setLanguageState(lang);
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('languagechange'));
      }
    }
  }, []);

  const contextValue = React.useMemo(() => ({
    language,
    setLanguage,
  }), [language, setLanguage]);

  // 在客户端挂载前使用默认语言
  if (!mounted) {
    return <>{children}</>;
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