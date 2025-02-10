/**
 * Supabase 上下文
 * @module SupabaseContext
 */

'use client';

import { createContext, useContext } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { SupabaseClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';

// 创建上下文
const SupabaseContext = createContext<{
  supabase: SupabaseClient<Database>;
} | undefined>(undefined);

/**
 * Supabase Provider 组件
 */
export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const supabase = createClientComponentClient<Database>();

  return (
    <SupabaseContext.Provider value={{ supabase }}>
      {children}
    </SupabaseContext.Provider>
  );
}

/**
 * 使用 Supabase Hook
 */
export function useSupabase() {
  const context = useContext(SupabaseContext);
  if (!context) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
} 