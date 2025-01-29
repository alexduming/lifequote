import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database.types';

// 创建 Supabase 客户端
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 搜索API路由处理函数
 * @description 处理搜索请求，支持分页和语言选择
 */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const lang = (searchParams.get('lang') || 'zh') as 'zh' | 'en';
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    // 如果没有搜索词，返回空结果
    if (!query.trim()) {
      return NextResponse.json({ results: [], total: 0 });
    }
    
    console.log(`Searching for: "${query}" in ${lang}`);
    const startTime = Date.now();

    // 构建搜索条件
    let searchQuery = supabase
      .from('quotes')
      .select('*', { count: 'exact' });

    // 根据语言选择搜索字段
    if (lang === 'zh') {
      searchQuery = searchQuery.or(`quote_zh.ilike.%${query}%,author_zh.ilike.%${query}%,author_title_zh.ilike.%${query}%,book.ilike.%${query}%`);
    } else {
      searchQuery = searchQuery.or(`quote_en.ilike.%${query}%,author_en.ilike.%${query}%,author_title_en.ilike.%${query}%,book_en.ilike.%${query}%`);
    }

    // 添加分页
    const start = (page - 1) * limit;
    searchQuery = searchQuery
      .range(start, start + limit - 1)
      .order('created_at', { ascending: false });

    // 执行查询
    const { data: results, count, error } = await searchQuery;

    if (error) {
      throw error;
    }

    const endTime = Date.now();
    console.log(`Search completed in ${endTime - startTime}ms`);
    
    return NextResponse.json({
      results: results || [],
      total: count || 0,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil((count || 0) / limit),
        totalItems: count || 0,
      },
      timing: {
        duration: endTime - startTime,
      }
    });
    
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
} 