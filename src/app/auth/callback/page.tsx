/**
 * Supabase 认证回调处理页面
 * @module AuthCallbackPage
 */

'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/config/translations';
import { toast } from 'sonner';

export default function AuthCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { supabase } = useAuth();
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // 处理验证回调
    const handleAuthCallback = async () => {
      const error = searchParams?.get('error');
      const errorDescription = searchParams?.get('error_description');

      if (error) {
        console.error('验证错误:', error, errorDescription);
        toast.error(errorDescription || '验证失败');
        router.push('/login');
        return;
      }

      try {
        // 获取当前会话状态
        const { data: { session }, error: sessionError } = await supabase?.auth.getSession() || {};
        
        if (sessionError) throw sessionError;

        if (session) {
          // 验证成功
          toast.success(t.verifyEmail.success);
          router.push('/');
        } else {
          // 未找到会话
          toast.error(t.verifyEmail.error);
          router.push('/login');
        }
      } catch (error) {
        console.error('处理验证回调错误:', error);
        toast.error(t.verifyEmail.error);
        router.push('/login');
      }
    };

    handleAuthCallback();
  }, [supabase, router, searchParams]);

  // 显示加载状态
  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-white/60">{t.verifyEmail.processing}</p>
      </div>
    </div>
  );
} 