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
      if (signUpError) {
        // 处理特定的错误情况
        if (signUpError.message.includes('already exists')) {
          throw new Error('该邮箱已被注册，请直接登录或使用其他邮箱。');
        } else if (signUpError.message.includes('password')) {
          throw new Error('密码不符合要求，请至少使用6个字符。');
        } else {
          throw signUpError;
        }
      }

      if (!data?.user?.id) {
        throw new Error('注册失败，请稍后重试。');
      }

      // 2. 创建用户资料
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          user_id: data.user.id,
          username: username || email.split('@')[0],
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        })
        .select('*')
        .single();

      if (profileError) {
        console.error('Profile creation error:', profileError);
        // 对于权限错误，我们不抛出异常，因为用户资料会在邮箱验证后创建
        if (!profileError.message.includes('policy') && !profileError.message.includes('permission denied')) {
          if (profileError.message.includes('username_length')) {
            throw new Error('用户名长度必须至少为3个字符。');
          } else if (profileError.message.includes('unique constraint')) {
            throw new Error('该用户名已被使用，请选择其他用户名。');
          } else {
            throw new Error('创建用户资料失败，但您的账号已注册。请在验证邮箱后重试。');
          }
        }
      }
      
      // 3. 显示邮箱验证提示
      setError('注册成功！请查看您的邮箱并点击验证链接以完成注册。验证后您将自动登录。');
    } catch (err: any) {
      console.error('Registration error:', err);
      setError(err.message);
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
            <div className={`px-4 py-3 rounded-lg text-sm ${
              error.includes('成功') 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400'
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}>
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