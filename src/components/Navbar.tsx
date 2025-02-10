/**
 * 导航栏组件
 * @module Navbar
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { translations } from '@/config/translations';
import LanguageSwitch from './LanguageSwitch';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const { language } = useLanguage();
  const { user, signOut } = useAuth();
  const t = translations[language];

  const mainNavItems = [
    { href: '/daily', label: t.nav.daily },
    { href: '/books', label: t.nav.books },
    { href: '/authors', label: t.nav.authors },
    { href: '/topics', label: t.nav.topics },
    { href: '/quotes', label: t.nav.quotes },
  ];

  const handleSignOut = async () => {
    await signOut();
    setIsProfileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.svg"
              alt="LifeQuote Logo"
              width={120}
              height={30}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  pathname === item.href ? 'text-primary-600' : 'text-dark-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center space-x-2 text-sm font-medium text-dark-600 hover:text-primary-600 transition-colors"
                >
                  <span>{user.email?.split('@')[0]}</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
                    <Link
                      href="/submit"
                      className="block px-4 py-2 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      {t.nav.submit}
                    </Link>
                    <Link
                      href="/favorites"
                      className="block px-4 py-2 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600"
                      onClick={() => setIsProfileOpen(false)}
                    >
                      {t.nav.favorites}
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-dark-600 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {t.nav.signOut}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/login"
                  className="text-sm font-medium text-dark-600 hover:text-primary-600 transition-colors"
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/register"
                  className="text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-lg transition-colors"
                >
                  {t.nav.register}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-dark-600 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-dark-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {user ? (
              <>
                <Link
                  href="/submit"
                  className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.submit}
                </Link>
                <Link
                  href="/favorites"
                  className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.favorites}
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                >
                  {t.nav.signOut}
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.login}
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-base font-medium text-dark-600 hover:text-primary-600 hover:bg-primary-50"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.register}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 