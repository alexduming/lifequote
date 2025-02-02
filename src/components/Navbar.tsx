'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { translations } from '@/config/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { language, toggleLanguage } = useLanguage();
  const { user, signOut } = useAuth();
  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg"
                alt="LifeQuote Logo"
                width={120}
                height={30}
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:flex sm:space-x-8 sm:items-center">
            <Link
              href="/daily"
              className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/daily' ? 'text-primary-500' : ''
              }`}
            >
              {t.nav.daily}
            </Link>
            <Link
              href="/books"
              className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/books' ? 'text-primary-500' : ''
              }`}
            >
              {t.nav.books}
            </Link>
            <Link
              href="/authors"
              className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/authors' ? 'text-primary-500' : ''
              }`}
            >
              {t.nav.authors}
            </Link>
            <Link
              href="/topics"
              className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                pathname === '/topics' ? 'text-primary-500' : ''
              }`}
            >
              {t.nav.topics}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/favorites"
                  className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === '/favorites' ? 'text-primary-500' : ''
                  }`}
                >
                  {t.nav.favorites}
                </Link>
                <Link
                  href="/profile"
                  className={`text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors ${
                    pathname === '/profile' ? 'text-primary-500' : ''
                  }`}
                >
                  {t.nav.profile}
                </Link>
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.signOut}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/register"
                  className="bg-primary-500 text-white hover:bg-primary-600 px-4 py-2 text-sm font-medium rounded-md transition-colors"
                >
                  {t.nav.register}
                </Link>
              </div>
            )}

            <button
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>

          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 hover:text-gray-600 p-2 rounded-md focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-md">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/daily"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.daily}
            </Link>
            <Link
              href="/books"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.books}
            </Link>
            <Link
              href="/authors"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.authors}
            </Link>
            <Link
              href="/topics"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t.nav.topics}
            </Link>

            {user ? (
              <>
                <Link
                  href="/favorites"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.favorites}
                </Link>
                <Link
                  href="/profile"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.profile}
                </Link>
                <button
                  onClick={() => {
                    signOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                >
                  {t.nav.signOut}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 text-base font-medium text-primary-500 hover:text-primary-600 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.register}
                </Link>
              </>
            )}

            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 