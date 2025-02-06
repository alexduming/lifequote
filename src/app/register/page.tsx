/**
 * 注册页面组件
 * @module RegisterPage
 */

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
  const [confirmPassword, setConfirmPassword] = useState('');
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

    // 验证密码匹配
    if (password !== confirmPassword) {
      setError('两次输入的密码不一致');
      return;
    }

    // 验证密码长度
    if (password.length < 6) {
      setError('密码长度至少为6位');
      return;
    }

    setLoading(true);

    try {
      const { data, error: signUpError } = await signUp(email, password);

      if (signUpError) throw signUpError;

      if (data?.user) {
        // 尝试创建用户资料
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert({
            user_id: data.user.id,
            username: username || email.split('@')[0],
          })
          .select('*')
          .single();

        if (profileError) {
          console.error('创建用户资料失败:', profileError);
          // 即使资料创建失败，也继续注册流程
        }

        // 显示成功消息
        alert(t.register.success);
        router.push('/');
      }
    } catch (error: any) {
      console.error('注册错误:', error);
      setError(error.message || '注册失败，请重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <h1 className="text-3xl font-[oswald] font-bold text-white mb-8">
              {t.register.title}
            </h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 用户名输入框 */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-white/60 mb-2">
                  {t.register.username}
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={t.register.usernamePlaceholder}
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* 邮箱输入框 */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/60 mb-2">
                  {t.register.email}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* 密码输入框 */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/60 mb-2">
                  {t.register.password}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
                <p className="mt-1 text-sm text-white/40">
                  {t.register.passwordHint}
                </p>
              </div>

              {/* 确认密码输入框 */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/60 mb-2">
                  确认密码
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* 错误提示 */}
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              {/* 提交按钮 */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? t.register.registering : t.register.submit}
              </button>

              {/* 登录链接 */}
              <p className="text-center text-white/60">
                {t.register.loginLink}{' '}
                <Link href="/login" className="text-primary-500 hover:text-primary-400">
                  登录
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <RegisterForm />
      </Suspense>
    </>
  );
} 