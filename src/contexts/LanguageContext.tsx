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

import React, { createContext, useContext, useReducer, useEffect, useCallback, useMemo } from 'react';
import { Language } from '@/config/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

interface LanguageState {
  language: Language;
  version: number;
}

const defaultContext: LanguageContextType = {
  language: 'en',
  setLanguage: () => {},
};

const LanguageContext = createContext<LanguageContextType>(defaultContext);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // 使用 useReducer 来强制所有子组件重新渲染
  const [state, dispatch] = useReducer(
    (state: LanguageState, action: Language): LanguageState => ({
      language: action,
      version: state.version + 1
    }), 
    { language: 'en', version: 0 }
  );

  // 客户端初始化
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage === 'zh' || savedLanguage === 'en') {
        dispatch(savedLanguage);
      } else {
        const browserLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
        dispatch(browserLang);
        localStorage.setItem('language', browserLang);
      }
    } catch (error) {
      console.error('Error initializing language:', error);
    }
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage === 'en' || newLanguage === 'zh') {
      try {
        localStorage.setItem('language', newLanguage);
        document.documentElement.lang = newLanguage;
        document.documentElement.setAttribute('data-language', newLanguage);
        dispatch(newLanguage);
      } catch (error) {
        console.error('Error setting language:', error);
      }
    }
  }, []);

  const value = useMemo(() => ({
    language: state.language,
    setLanguage
  }), [state.language, setLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 