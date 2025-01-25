/**
 * @file Supabase 客户端配置
 * @description 创建和导出 Supabase 客户端实例，用于数据库操作
 */

const { createClient } = require('@supabase/supabase-js');

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

/**
 * Supabase 客户端配置文件
 * 
 * 该文件用于创建和配置 Supabase 客户端实例，用于与 Supabase 数据库进行交互。
 * 客户端实例会自动从环境变量中读取必要的配置信息。
 */

module.exports = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      persistSession: false
    }
  }
); 