/**
 * 认证回调页面
 * @module AuthCallbackPage
 */

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 认证回调页面组件
 * 处理认证流程完成后的回调
 */
export default function AuthCallbackPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const supabase = createClientComponentClient();

  useEffect(() => {
    /**
     * 处理认证回调
     * 验证会话并重定向用户
     */
    const handleAuthCallback = async () => {
      try {
        // 获取当前会话状态
        const { data, error: sessionError } = await supabase.auth.getSession();

        if (sessionError) throw sessionError;

        if (!data?.session) {
          throw new Error(language === 'zh' ? '无法获取会话信息' : 'Unable to get session');
        }

        // 认证成功后重定向到首页
        router.push('/');
        toast.success(language === 'zh' ? '登录成功' : 'Successfully logged in');

      } catch (error: any) {
        console.error('认证回调错误:', error.message);
        toast.error(language === 'zh' ? '认证失败，请重试' : 'Authentication failed, please try again');
        router.push('/');
      }
    };

    handleAuthCallback();
  }, [router, language, supabase.auth]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">
          {language === 'zh' ? '正在处理认证...' : 'Processing authentication...'}
        </p>
      </div>
    </div>
  );
} 