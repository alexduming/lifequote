/**
 * 导航栏组件
 * @module Navbar
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { Menu, X, Globe, Send, FolderHeart, Shield } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  // 检查是否为管理员
  const isAdmin = user?.user_metadata?.role === 'admin';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-lg border-b border-white/10">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-[oswald] text-white">
            LifeQuote
          </Link>

          {/* 桌面端导航 */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/collections"
              className={`text-sm ${
                pathname === '/collections'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              } transition-colors flex items-center gap-2`}
            >
              <FolderHeart size={18} />
              <span>我的收藏夹</span>
            </Link>
            <Link
              href="/submit"
              className={`text-sm ${
                pathname === '/submit'
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              } transition-colors flex items-center gap-2`}
            >
              <Send size={18} />
              <span>提交语录</span>
            </Link>
            {isAdmin && (
              <Link
                href="/admin/quotes"
                className={`text-sm ${
                  pathname === '/admin/quotes'
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                } transition-colors flex items-center gap-2`}
              >
                <Shield size={18} />
                <span>语录审核</span>
              </Link>
            )}
            <button
              onClick={toggleLanguage}
              className="text-white/60 hover:text-white transition-colors"
            >
              <Globe size={18} />
            </button>
            {user ? (
              <button
                onClick={signOut}
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                退出
              </button>
            ) : (
              <Link
                href="/login"
                className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                登录
              </Link>
            )}
          </div>

          {/* 移动端菜单按钮 */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-white/10">
          <div className="container py-4 space-y-4">
            <Link
              href="/collections"
              className={`block text-sm ${
                pathname === '/collections'
                  ? 'text-white'
                  : 'text-white/60'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              我的收藏夹
            </Link>
            <Link
              href="/submit"
              className={`block text-sm ${
                pathname === '/submit'
                  ? 'text-white'
                  : 'text-white/60'
              } transition-colors`}
              onClick={() => setIsMenuOpen(false)}
            >
              提交语录
            </Link>
            {isAdmin && (
              <Link
                href="/admin/quotes"
                className={`block text-sm ${
                  pathname === '/admin/quotes'
                    ? 'text-white'
                    : 'text-white/60'
                } transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                语录审核
              </Link>
            )}
            <button
              onClick={() => {
                toggleLanguage();
                setIsMenuOpen(false);
              }}
              className="block text-sm text-white/60 hover:text-white transition-colors"
            >
              {language === 'zh' ? 'English' : '中文'}
            </button>
            {user ? (
              <button
                onClick={() => {
                  signOut();
                  setIsMenuOpen(false);
                }}
                className="block text-sm text-white/60 hover:text-white transition-colors"
              >
                退出
              </button>
            ) : (
              <Link
                href="/login"
                className="block text-sm text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                登录
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
} 