'use client';

import React, { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const t = translations[language];

  // 获取重定向URL，如果没有则默认为首页
  const redirectTo = searchParams?.get('redirectTo') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error: signInError } = await signIn(email, password);
      
      if (signInError) {
        throw signInError;
      }
      
      // 登录成功
      toast.success(language === 'zh' ? '登录成功' : 'Login successful');
      
      // 等待 session 更新
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // 重定向到目标页面
      router.replace(redirectTo || '/');
      
    } catch (err: any) {
      console.error('登录失败:', err);
      setError(err.message);
      toast.error(language === 'zh' ? '登录失败' : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-20">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h1 className="text-3xl font-[oswald] font-bold text-white mb-8 text-center">
          {t.login.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
              {t.login.email}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white/60 mb-2">
              {t.login.password}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 text-white rounded-lg px-4 py-3 font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.login.signingIn : t.login.submit}
          </button>

          <p className="text-center text-white/60 text-sm">
            {t.login.registerLink}{' '}
            <Link href="/register" className="text-primary-400 hover:text-primary-300">
              {t.nav.register}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 pt-16">
        <Suspense fallback={
          <div className="container max-w-md mx-auto py-20">
            <div className="animate-pulse space-y-8">
              <div className="h-8 bg-white/5 rounded w-3/4 mx-auto" />
              <div className="space-y-6">
                <div className="h-12 bg-white/5 rounded" />
                <div className="h-12 bg-white/5 rounded" />
                <div className="h-12 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        }>
          <LoginForm />
        </Suspense>
      </main>
    </>
  );
} 