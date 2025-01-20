'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import type { Language } from '@/config/translations';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en' as Language);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
            LifeQuote
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {Object.entries(t.nav).map(([key, value]) => (
              <Link
                key={key}
                href={`/${key === 'home' ? '' : key}`}
                className="text-dark-600 hover:text-primary-600 transition-colors"
              >
                {value}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1.5 text-dark-600 hover:text-primary-600 transition-colors"
            >
              <Languages size={20} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-dark-100">
            {Object.entries(t.nav).map(([key, value]) => (
              <Link
                key={key}
                href={`/${key === 'home' ? '' : key}`}
                className="block px-3 py-2 text-dark-600 hover:text-primary-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {value}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center space-x-1.5 px-3 py-2 text-dark-600 hover:text-primary-600 transition-colors"
            >
              <Languages size={20} />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 