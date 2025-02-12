/**
 * @file 创建语录导入模板脚本
 * @description 生成用于批量导入语录的 CSV 模板文件
 */

import * as fs from 'fs-extra';
import * as path from 'path';
import { supabase } from '../lib/supabase';
import create from 'zustand';
import { useState, useEffect } from 'react';

// CSV 表头
const headers = [
  'quote_zh',      // 中文语录
  'quote_en',      // 英文语录
  'author_zh',     // 作者中文名
  'author_en',     // 作者英文名
  'author_title_zh', // 作者中文头衔
  'author_title_en', // 作者英文头衔
  'category',      // 分类
  'language',      // 语言
  'book',          // 中文书籍名
  'book_en',       // 英文书籍名
  'period_zh',     // 中文时期
  'period_en'      // 英文时期
].join(',');

// 示例数据
const exampleData = [
  '"人生自古谁无死，留取丹心照汗青。"',  // quote_zh
  '"Since ancient times, who has not died? Let me but leave a loyal heart shining in the pages of history."', // quote_en
  '"文天祥"',       // author_zh
  '"Wen Tianxiang"', // author_en
  '"南宋政治家、文学家"', // author_title_zh
  '"Southern Song Dynasty Statesman and Poet"', // author_title_en
  '"wisdom"',      // category
  '"zh"',          // language
  '"正气歌"',       // book
  '"Song of Righteousness"', // book_en
  '"南宋"',         // period_zh
  '"Southern Song Dynasty"'  // period_en
].join(',');

// 使用 Zustand 创建 store
interface QuoteStore {
  quotes: Quote[];
  isLoading: boolean;
  error: string | null;
  fetchQuotes: () => Promise<void>;
  reset: () => void;  // 添加重置功能
}

export const useQuoteStore = create<QuoteStore>((set) => ({
  quotes: [],
  isLoading: false,
  error: null,
  fetchQuotes: async () => {
    set({ isLoading: true, error: null });  // 重置错误状态
    try {
      // 先检查缓存
      const cachedData = getCachedQuotes();
      if (cachedData) {
        set({ quotes: cachedData, isLoading: false });
        return;
      }

      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .range(0, 9);
      
      if (error) throw error;
      
      // 存入缓存
      cacheQuotes(data);
      set({ quotes: data, isLoading: false });
    } catch (error) {
      console.error('获取数据失败:', error);
      set({ error: '加载失败，请刷新重试', isLoading: false });
    }
  },
  reset: () => set({ quotes: [], isLoading: false, error: null })
}));

const fetchWithRetry = async (retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const { data, error } = await supabase
        .from('quotes')
        .select('*')
        .range(0, 9)
      
      if (error) throw error
      return data
    } catch (error) {
      if (i === retries - 1) throw error
      await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)))
    }
  }
}

// 创建目录和文件
async function createTemplate() {
  try {
    // 创建目录
    const dir = path.join(process.cwd(), 'node_modules', 'quotes');
    await fs.ensureDir(dir);

    // 创建 CSV 文件
    const filePath = path.join(dir, 'quotes_template.csv');
    const { data: quotes, error } = await supabase
      .from('quotes')
      .select('*')
      .order('id')
      .range(0, 9);
    
    if (error) throw error;
    
    const content = `${headers}\n${quotes.map(quote => [
      quote.quote_zh,
      quote.quote_en,
      quote.author_zh,
      quote.author_en,
      quote.author_title_zh,
      quote.author_title_en,
      quote.category,
      quote.language,
      quote.book,
      quote.book_en,
      quote.period_zh,
      quote.period_en
    ].join(',')).join('\n')}\n`;
    
    await fs.writeFile(filePath, content, 'utf8');
    
    console.log('✅ CSV模板创建成功！');
    console.log(`📁 文件位置: ${filePath}`);
    console.log('\n模板包含以下字段:');
    console.log('- quote_zh: 中文语录（必填）');
    console.log('- quote_en: 英文语录');
    console.log('- author_zh: 作者中文名（必填）');
    console.log('- author_en: 作者英文名');
    console.log('- author_title_zh: 作者中文头衔');
    console.log('- author_title_en: 作者英文头衔');
    console.log('- category: 分类（必填，可选值：wisdom/philosophy/life/art/science/education）');
    console.log('- language: 语言（必填，可选值：zh/en）');
    console.log('- book: 中文书籍名');
    console.log('- book_en: 英文书籍名');
    console.log('- period_zh: 中文时期');
    console.log('- period_en: 英文时期');
    
  } catch (error) {
    console.error('❌ 创建模板失败:', error);
  }
}

// 执行创建模板
createTemplate();

export const useInfiniteQuotes = () => {
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [quotes, setQuotes] = useState<Quote[]>([])

  const loadMore = async () => {
    const newQuotes = await supabase
      .from('quotes')
      .select('*')
      .range(page * 10, (page + 1) * 10 - 1)
    
    if (newQuotes.data?.length < 10) {
      setHasMore(false)
    }
    
    setQuotes(prev => [...prev, ...(newQuotes.data || [])])
    setPage(p => p + 1)
  }

  return { quotes, hasMore, loadMore }
}

// utils/cache.ts
export const cacheQuotes = (quotes: Quote[]) => {
  localStorage.setItem('quotes-cache', JSON.stringify({
    data: quotes,
    timestamp: Date.now()
  }))
}

export const getCachedQuotes = () => {
  const cache = localStorage.getItem('quotes-cache')
  if (!cache) return null
  
  const { data, timestamp } = JSON.parse(cache)
  // 缓存1小时有效
  if (Date.now() - timestamp > 3600000) return null
  
  return data
}

// 在开发时可以添加一个清理缓存的函数
const clearCache = () => {
  localStorage.removeItem('quotes-cache');
  console.log('缓存已清理');
}

// 在开发环境下添加快捷键清理缓存
if (process.env.NODE_ENV === 'development') {
  window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'q') {  // Ctrl + Q
      clearCache();
    }
  });
}

// 在开发环境添加状态监控
if (process.env.NODE_ENV === 'development') {
  useQuoteStore.subscribe(state => {
    console.log('Quote Store 状态更新:', {
      quotesCount: state.quotes.length,
      isLoading: state.isLoading,
      error: state.error
    });
  });
}

const QuotesComponent = () => {
  const { quotes, isLoading, error, fetchQuotes } = useQuoteStore();

  useEffect(() => {
    // 组件挂载时获取数据
    fetchQuotes();

    // 组件卸载时清理
    return () => {
      useQuoteStore.getState().reset();
    };
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (isLoading) {
    return <QuotesSkeleton />;
  }

  return (
    <div>
      {quotes.map(quote => (
        <QuoteCard key={quote.id} quote={quote} />
      ))}
    </div>
  );
}; 