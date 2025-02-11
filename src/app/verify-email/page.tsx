/**
 * 邮箱验证提示页面
 * @module VerifyEmailPage
 */

'use client';

import React from 'react';
import { Inbox } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const email = searchParams?.get('email') || '';
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center">
                  <Inbox className="w-8 h-8 text-primary-500" />
                </div>
              </div>
              
              <h1 className="text-2xl font-bold text-white mb-4">
                {t.verifyEmail.title}
              </h1>
              
              <p className="text-white/60 mb-6">
                {t.verifyEmail.description.replace('{email}', email)}
              </p>
              
              <div className="space-y-4">
                <p className="text-sm text-white/40">
                  {t.verifyEmail.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 