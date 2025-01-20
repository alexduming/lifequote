'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Send } from 'lucide-react';

export default function Footer() {
  const { language } = useLanguage();

  const footerContent = {
    en: {
      tagline: "Discover the wisdom of history's greatest thinkers",
      quickLinks: "Quick Links",
      links: {
        about: "About Us",
        terms: "Terms of Use",
        privacy: "Privacy Policy",
        contact: "Contact Us"
      },
      categories: {
        title: "Browse Categories",
        items: {
          philosophy: "Philosophy",
          literature: "Literature",
          art: "Art",
          science: "Science",
          history: "History"
        }
      },
      newsletter: {
        title: "Subscribe to Daily Quotes",
        description: "Receive carefully selected quotes daily for continuous inspiration.",
        placeholder: "Enter your email",
        button: "Subscribe"
      }
    },
    zh: {
      tagline: "发现历史上最伟大思想家的智慧之言",
      quickLinks: "快速链接",
      links: {
        about: "关于我们",
        terms: "使用条款",
        privacy: "隐私政策",
        contact: "联系我们"
      },
      categories: {
        title: "分类浏览",
        items: {
          philosophy: "哲学",
          literature: "文学",
          art: "艺术",
          science: "科学",
          history: "历史"
        }
      },
      newsletter: {
        title: "订阅每日语录",
        description: "每天收到精选的名人语录，获取持续的灵感。",
        placeholder: "输入您的邮箱",
        button: "订阅"
      }
    }
  };

  const t = footerContent[language];

  return (
    <footer className="bg-dark-900 text-white/80">
      <div className="container py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-[oswald] text-white">LifeQuote</h2>
            <p className="text-white/60">{t.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-[oswald] text-white mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3">
              {Object.entries(t.links).map(([key, value]) => (
                <li key={key}>
                  <a href={`/${key}`} className="hover:text-primary-400 transition-colors">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-[oswald] text-white mb-6">{t.categories.title}</h3>
            <ul className="space-y-3">
              {Object.entries(t.categories.items).map(([key, value]) => (
                <li key={key}>
                  <a href={`/categories/${key}`} className="hover:text-primary-400 transition-colors">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-[oswald] text-white mb-6">{t.newsletter.title}</h3>
            <p className="text-white/60 mb-4">{t.newsletter.description}</p>
            <div className="relative">
              <input
                type="email"
                placeholder={t.newsletter.placeholder}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-500"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary-500 hover:text-primary-400 transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 text-center text-white/40">
          <p>© {new Date().getFullYear()} LifeQuote. {language === 'en' ? 'All rights reserved.' : '保留所有权利。'}</p>
        </div>
      </div>
    </footer>
  );
} 