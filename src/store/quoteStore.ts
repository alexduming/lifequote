/**
 * 语录状态管理
 * @module quoteStore
 */

import { create } from 'zustand';
import { supabase } from '@/lib/supabase';

/**
 * 语录搜索结果的类型定义
 */
interface SearchResult {
  id: string;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  category: string;
}

/**
 * 语录状态接口定义
 */
interface QuoteStore {
  /** 搜索结果列表 */
  searchResults: SearchResult[];
  /** 是否正在加载 */
  isLoading: boolean;
  /** 错误信息 */
  error: string | null;
  /** 设置搜索结果 */
  setSearchResults: (results: SearchResult[]) => void;
  /** 设置加载状态 */
  setIsLoading: (loading: boolean) => void;
  /** 设置错误信息 */
  setError: (error: string | null) => void;
  /** 搜索语录方法 */
  searchQuotes: (query: string) => Promise<SearchResult[]>;
}

/**
 * 创建语录状态管理store
 */
export const useQuoteStore = create<QuoteStore>((set) => ({
  searchResults: [],
  isLoading: false,
  error: null,
  setSearchResults: (results) => set({ searchResults: results }),
  setIsLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),

  /**
   * 搜索语录
   * @param query - 搜索关键词
   */
  searchQuotes: async (query: string) => {
    set({ isLoading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select(`
          id,
          quote_zh,
          quote_en,
          author_zh,
          author_en,
          category
        `)
        .or(`
          quote_zh.ilike.%${query}%,
          quote_en.ilike.%${query}%,
          author_zh.ilike.%${query}%,
          author_en.ilike.%${query}%
        `)
        .limit(5);

      if (error) throw error;

      const results = data as SearchResult[];
      set({ searchResults: results });
      return results;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '搜索失败';
      set({ error: errorMessage });
      return [];
    } finally {
      set({ isLoading: false });
    }
  },
})); 