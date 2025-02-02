'use client';

import React, { useState, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import Navbar from '@/components/Navbar';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { signUp, supabase } = useAuth();
  const router = useRouter();
  const { language } = useLanguage();
  const t = translations[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // 1. 注册用户
      const { error: signUpError, data } = await signUp(email, password);
      if (signUpError) throw signUpError;

      if (!data?.user?.id) {
        throw new Error('注册成功但未返回用户ID');
      }

      // 2. 创建用户资料
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: data.user.id,
          username: username || email.split('@')[0], // 如果没有提供用户名，使用邮箱前缀
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });

      if (profileError) throw profileError;
      
      // 3. 注册成功后跳转到登录页
      router.push('/login');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message);
      
      // 如果是邮箱已存在的错误，给出更友好的提示
      if (err.message.includes('already exists')) {
        setError('该邮箱已被注册，请直接登录或使用其他邮箱。');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-20">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <h1 className="text-3xl font-[oswald] font-bold text-white mb-8 text-center">
          {t.register.title}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white/60 mb-2">
              {t.register.username}
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder={t.register.usernamePlaceholder}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
              {t.register.email}
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
              {t.register.password}
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              required
              minLength={6}
            />
            <p className="mt-1 text-sm text-white/40">
              {t.register.passwordHint}
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary-500 text-white rounded-lg px-4 py-3 font-medium hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? t.register.registering : t.register.submit}
          </button>

          <p className="text-center text-white/60 text-sm">
            {t.register.loginLink}{' '}
            <Link href="/login" className="text-primary-400 hover:text-primary-300">
              {t.nav.login}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default function RegisterPage() {
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
          <RegisterForm />
        </Suspense>
      </main>
    </>
  );
} 