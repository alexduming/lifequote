'use client';

import React from 'react';
import Link from 'next/link';
import { translations } from '@/config/translations';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-primary-600">
            LifeQuote
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-primary-600">
              {t.nav.home}
            </Link>
            <Link href="/authors" className="text-gray-600 hover:text-primary-600">
              {t.nav.authors}
            </Link>
            <Link href="/topics" className="text-gray-600 hover:text-primary-600">
              {t.nav.topics}
            </Link>
            <Link href="/daily" className="text-gray-600 hover:text-primary-600">
              {t.nav.daily}
            </Link>
            <Link href="/books" className="text-gray-600 hover:text-primary-600">
              {t.nav.books}
            </Link>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded border border-gray-200 text-sm text-gray-600 hover:border-primary-500 hover:text-primary-600"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
} 