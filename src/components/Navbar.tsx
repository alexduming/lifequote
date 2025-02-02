'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { translations } from '@/config/translations';

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { user, signOut } = useAuth();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-[oswald] font-bold text-white hover:text-primary-400">
          LifeQuote
        </Link>

        <div className="flex items-center space-x-6">
          <Link
            href="/quotes"
            className={`text-sm font-medium ${
              pathname === '/quotes' ? 'text-primary-400' : 'text-white/60 hover:text-white'
            }`}
          >
            {t.nav.quotes}
          </Link>

          {user ? (
            <>
              <Link
                href="/favorites"
                className={`text-sm font-medium ${
                  pathname === '/favorites' ? 'text-primary-400' : 'text-white/60 hover:text-white'
                }`}
              >
                {t.nav.favorites}
              </Link>
              <Link
                href="/profile"
                className={`text-sm font-medium ${
                  pathname === '/profile' ? 'text-primary-400' : 'text-white/60 hover:text-white'
                }`}
              >
                {t.nav.profile}
              </Link>
              <button
                onClick={() => signOut()}
                className="text-sm font-medium text-white/60 hover:text-white"
              >
                {t.nav.signOut}
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className={`text-sm font-medium ${
                  pathname === '/login' ? 'text-primary-400' : 'text-white/60 hover:text-white'
                }`}
              >
                {t.nav.login}
              </Link>
              <Link
                href="/register"
                className={`text-sm font-medium ${
                  pathname === '/register' ? 'text-primary-400' : 'text-white/60 hover:text-white'
                }`}
              >
                {t.nav.register}
              </Link>
            </>
          )}

          <button
            onClick={toggleLanguage}
            className="text-sm font-medium text-white/60 hover:text-white"
          >
            {language === 'en' ? '中文' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
  );
} 