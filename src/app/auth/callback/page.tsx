'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export default function AuthCallbackPage() {
  const router = useRouter();
  const { supabase } = useAuth();

  useEffect(() => {
    const handleAuthCallback = async () => {
      if (!supabase) {
        console.error('Supabase client not initialized');
        return;
      }

      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }

        // 认证成功，重定向到首页
        router.replace('/');
        toast.success('认证成功');
      } catch (error: any) {
        console.error('认证回调错误:', error);
        toast.error('认证失败');
        router.replace('/login');
      }
    };

    handleAuthCallback();
  }, [supabase, router]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 flex items-center justify-center">
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/10 rounded w-24" />
          <div className="h-4 bg-white/10 rounded w-32" />
        </div>
      </div>
    </div>
  );
} 