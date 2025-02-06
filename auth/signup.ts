/**
 * 处理用户注册
 * @module auth/signup
 */

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/lib/database.types';

/**
 * 处理用户注册
 * @param {string} email - 用户邮箱
 * @param {string} password - 用户密码
 * @returns {Promise<{ error: Error | null }>} 注册结果
 */
export async function handleSignUp(email: string, password: string) {
  const supabase = createClientComponentClient<Database>();
  
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          email_confirmed_at: null // 确保需要邮箱验证
        }
      }
    });

    if (error) {
      // 处理特定错误
      if (error.message.includes('rate limit')) {
        return { error: new Error('请稍后再试。为了保护系统，我们限制了注册频率。') };
      }
      return { error };
    }

    // 注册成功
    return { error: null };
    
  } catch (error) {
    console.error('注册失败:', error);
    return { error: new Error('注册过程中出现错误，请稍后重试') };
  }
} 