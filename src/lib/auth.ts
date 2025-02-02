import { supabase } from '@/lib/supabase';

/**
 * 用户注册函数
 * @param email - 用户邮箱
 * @param password - 用户密码
 * @returns 包含用户数据或错误信息的对象
 */
export async function signUp(email: string, password: string) {
  return supabase.auth.signUp({
    email,
    password,
    options: {
      // 禁用邮箱验证，允许直接注册
      emailRedirectTo: `${window.location.origin}/auth/callback`,
      data: {
        email_confirmed_at: new Date().toISOString(), // 直接标记邮箱为已验证
      }
    }
  });
} 