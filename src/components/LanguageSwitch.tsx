'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="relative group">
      <button className="p-2 text-dark-400 hover:text-primary-600 transition-colors">
        <Globe size={20} className="transform group-hover:scale-110 transition-transform" />
      </button>
      <div className="absolute right-0 mt-2 py-2 w-32 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <button
          className={`w-full px-4 py-2 text-left hover:bg-primary-50 transition-colors ${
            language === 'en' ? 'text-primary-600' : 'text-dark-600'
          }`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button
          className={`w-full px-4 py-2 text-left hover:bg-primary-50 transition-colors ${
            language === 'zh' ? 'text-primary-600' : 'text-dark-600'
          }`}
          onClick={() => setLanguage('zh')}
        >
          中文
        </button>
      </div>
    </div>
  );
} 