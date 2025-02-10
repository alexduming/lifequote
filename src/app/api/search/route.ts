import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/lib/database.types';

// 创建 Supabase 客户端
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// 配置路由选项
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * 搜索API路由处理函数
 * @description 处理搜索请求，支持分页和语言选择
 */
export async function GET(request: NextRequest) {
  try {
    // 从 URL 中获取查询参数
    const url = new URL(request.url);
    const query = url.searchParams.get('q') || '';
    const lang = (url.searchParams.get('lang') || 'zh') as 'zh' | 'en';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');
    
    // 如果没有搜索词，返回空结果
    if (!query.trim()) {
      return NextResponse.json({ results: [], total: 0 });
    }
    
    console.log(`Searching for: "${query}" in ${lang}`);
    const startTime = Date.now();

    // 使用简单的搜索查询
    const searchQuery = supabase
      .from('quotes')
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false });

    // 根据语言选择搜索字段
    if (lang === 'zh') {
      searchQuery.or(`quote_zh.ilike.%${query}%,author_zh.ilike.%${query}%,author_title_zh.ilike.%${query}%`);
    } else {
      searchQuery.or(`quote_en.ilike.%${query}%,author_en.ilike.%${query}%,author_title_en.ilike.%${query}%`);
    }

    // 执行查询
    const { data: results, count, error } = await searchQuery
      .range((page - 1) * limit, page * limit - 1);

    if (error) {
      console.error('Search query error:', error);
      throw error;
    }

    if (!results) {
      return NextResponse.json({
        results: [],
        total: 0,
        pagination: {
          currentPage: page,
          totalPages: 0,
          totalItems: 0,
        }
      });
    }

    const endTime = Date.now();
    console.log(`Search completed in ${endTime - startTime}ms`);
    console.log(`Found ${count || 0} results`);
    
    return NextResponse.json({
      results: results,
      total: count || 0,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil((count || 0) / limit),
        totalItems: count || 0,
      },
      timing: {
        duration: endTime - startTime,
      }
    }, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      },
    });
    
  } catch (error: any) {
    console.error('Search error:', error);
    return NextResponse.json(
      { 
        error: '搜索失败',
        details: error.message || '未知错误',
        query: request.url
      },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  }
} 