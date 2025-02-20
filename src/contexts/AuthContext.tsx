/**
 * @file 认证上下文
 * @description 提供用户认证状态管理和相关方法
 */

'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { getSupabaseClient } from '@/lib/supabase';
import { toast } from 'sonner';
import { SupabaseClient } from '@supabase/supabase-js';

interface SignInResponse {
  data: {
    user: User | null;
    session: Session | null;
  } | null;
  error: Error | null;
}

interface AuthContextType {
  user: User | null;
  supabase: SupabaseClient | null;
  loading: boolean;
  isAdmin: boolean;
  signOut: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<SignInResponse>;
  signUp: (email: string, password: string) => Promise<SignInResponse>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * 认证上下文提供者组件
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const supabase = getSupabaseClient();

  // 检查用户角色
  async function checkUserRole(userId: string) {
    try {
      const { data: userData, error } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) {
        console.error('检查用户角色失败:', error);
        return false;
      }

      return userData?.role === 'admin';
    } catch (error) {
      console.error('检查用户角色失败:', error);
      return false;
    }
  }

  // 注册方法
  const signUp = async (email: string, password: string): Promise<SignInResponse> => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        }
      });

      if (error) {
        return { data: null, error };
      }

      return { data, error: null };
    } catch (error: any) {
      const customError = new Error(error.message || '注册失败，请稍后重试');
      return {
        data: null,
        error: customError
      };
    }
  };

  // 登录方法
  const signIn = async (email: string, password: string): Promise<SignInResponse> => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { data: null, error };
      }

      setUser(data.user);
      return { data, error: null };
      
    } catch (error: any) {
      const customError = new Error(error.message || '登录失败，请稍后重试');
      return {
        data: null,
        error: customError
      };
    }
  };

  // 登出方法
  const signOut = async () => {
    try {
      const response = await supabase.auth.signOut();
      if (response.error) {
        toast.error('退出登录失败');
        throw response.error;
      }
      setUser(null);
      setIsAdmin(false);
      toast.success('已退出登录');
    } catch (error) {
      console.error('退出登录失败:', error);
      toast.error('退出登录失败');
    }
  };

  useEffect(() => {
    let mounted = true;

    // 获取当前用户
    async function getCurrentUser() {
      try {
        const response = await supabase.auth.getSession();
        
        if (response.error) {
          console.error('获取会话失败:', response.error);
          if (mounted) {
            setUser(null);
            setIsAdmin(false);
          }
          return;
        }

        if (mounted) {
          const currentUser = response.data.session?.user ?? null;
          setUser(currentUser);
          if (currentUser) {
            const isUserAdmin = await checkUserRole(currentUser.id);
            setIsAdmin(isUserAdmin);
          } else {
            setIsAdmin(false);
          }
        }
      } catch (error) {
        console.error('获取用户信息失败:', error);
        if (mounted) {
          setUser(null);
          setIsAdmin(false);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    getCurrentUser();

    // 监听认证状态变化
    const authListener = supabase.auth.onAuthStateChange(async (event, session) => {
      if (mounted) {
        const currentUser = session?.user ?? null;
        setUser(currentUser);
        
        if (currentUser) {
          const isUserAdmin = await checkUserRole(currentUser.id);
          setIsAdmin(isUserAdmin);
        } else {
          setIsAdmin(false);
        }
        
        setLoading(false);
      }
    });

    return () => {
      mounted = false;
      authListener.data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, supabase, loading, isAdmin, signOut, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * 使用认证上下文的 Hook
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 