/**
 * 认证回调页面
 * @module AuthCallbackPage
 */

'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * 认证回调处理组件
 * 处理认证流程完成后的回调逻辑
 */
function AuthCallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { language } = useLanguage();
  const supabase = createClientComponentClient();

  useEffect(() => {
    /**
     * 处理认证回调
     * 验证会话并重定向用户
     */
    const handleAuthCallback = async () => {
      try {
        // 检查是否有错误参数
        const error = searchParams.get('error');
        const errorDescription = searchParams.get('error_description');
        const errorCode = searchParams.get('error_code');

        if (error) {
          // 处理特定错误
          if (errorCode === 'otp_expired') {
            throw new Error('验证链接已过期，请重新发送验证邮件');
          } else {
            throw new Error(errorDescription || '验证失败，请重试');
          }
        }

        // 获取 URL 中的 code 参数
        const code = searchParams.get('code');
        
        if (!code) {
          throw new Error('验证链接无效，请重新发送验证邮件');
        }

        // 打印调试信息
        console.log('Processing auth callback with code:', code);

        // 交换 code 获取会话
        const { data, error: exchangeError } = await supabase.auth.exchangeCodeForSession(code);
        
        if (exchangeError) {
          throw exchangeError;
        }

        if (!data.session) {
          throw new Error('No session returned');
        }

        // 验证会话是否成功设置
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          console.error('Get session error:', sessionError);
          throw sessionError;
        }

        if (!session) {
          throw new Error('Session not established');
        }

        // 成功获取会话
        console.log('Authentication successful');
        toast.success(language === 'zh' ? '邮箱验证成功！' : 'Email verification successful!');
        
        // 延迟重定向，确保 toast 消息显示
        setTimeout(() => {
          router.push('/');
          router.refresh(); // 刷新路由状态
        }, 1500);

      } catch (error: any) {
        console.error('认证回调错误:', error.message);
        toast.error(error.message);
        
        // 延迟重定向到登录页
        setTimeout(() => {
          router.push('/login');
        }, 2000);
      }
    };

    handleAuthCallback();
  }, [router, searchParams, language, supabase.auth]);

  return (
    <div className="text-center max-w-md mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">
        {language === 'zh' ? '验证处理中...' : 'Processing verification...'}
      </h2>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400 mx-auto mb-4"></div>
      <p className="text-gray-600">
        {searchParams.get('error_code') === 'otp_expired' 
          ? (language === 'zh' ? '验证链接已过期，正在跳转到登录页面...' : 'Verification link expired, redirecting to login...')
          : (language === 'zh' ? '请稍候，正在处理您的验证请求...' : 'Please wait while we process your verification...')}
      </p>
    </div>
  );
}

/**
 * 认证回调页面组件
 * 使用 Suspense 包裹回调处理组件
 */
export default function AuthCallbackPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Suspense fallback={
        <div className="text-center max-w-md mx-auto px-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      }>
        <AuthCallbackHandler />
      </Suspense>
    </div>
  );
} 