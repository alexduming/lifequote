'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function AuthCallbackPage() {
  const router = useRouter();
  const { supabase } = useAuth();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }

        // 尝试创建用户资料
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (user) {
          const { error: profileError } = await supabase
            .from('user_profiles')
            .insert({
              user_id: user.id,
              username: user.email?.split('@')[0] || 'user_' + user.id.slice(0, 8),
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString(),
            })
            .select('*')
            .single();

          if (profileError && profileError.code !== '23505') { // 忽略唯一约束错误
            console.error('创建用户资料失败:', profileError);
          }
        }

        // 无论资料创建是否成功，都重定向到首页
        router.push('/');
      } catch (error) {
        console.error('处理认证回调时出错:', error);
        router.push('/login?error=callback_failed');
      }
    };

    handleAuthCallback();
  }, [router, supabase]);

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