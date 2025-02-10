/**
 * @file Supabase 客户端配置
 * @description 创建和导出 Supabase 客户端实例，用于数据库操作
 */

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from './database.types';

let supabaseInstance: ReturnType<typeof createClientComponentClient<Database>> | null = null;

/**
 * 获取 Supabase 客户端实例
 * @returns Supabase 客户端实例
 */
export function getSupabaseClient() {
  if (!supabaseInstance) {
    supabaseInstance = createClientComponentClient<Database>();
  }
  return supabaseInstance;
}

/**
 * 重置 Supabase 客户端实例
 */
export function resetSupabaseClient() {
  supabaseInstance = null;
}

/**
 * Supabase 客户端配置文件
 * 
 * 该文件用于创建和配置 Supabase 客户端实例，用于与 Supabase 数据库进行交互。
 * 客户端实例会自动从环境变量中读取必要的配置信息。
 */

// 导出默认的 Supabase 实例
export const supabase = getSupabaseClient(); 