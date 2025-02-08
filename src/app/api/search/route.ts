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

    // 构建搜索条件
    let searchQuery = supabase
      .from('quotes')
      .select('*', { count: 'exact' });

    // 根据语言选择搜索字段
    const searchFields = lang === 'zh' 
      ? ['quote_zh', 'author_zh', 'author_title_zh', 'book']
      : ['quote_en', 'author_en', 'author_title_en', 'book_en'];

    const searchConditions = searchFields
      .map(field => `${field}.ilike.%${query}%`)
      .join(',');

    searchQuery = searchQuery.or(searchConditions);

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
    
    // 转换数据格式
    const transformedResults = results?.map(quote => ({
      ...quote,
      quote_zh: quote.content_zh,
      quote_en: quote.content_en,
      // 删除旧字段
      content_zh: undefined,
      content_en: undefined,
    })) || [];
    
    return NextResponse.json({
      results: transformedResults,
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
    
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: '搜索失败' },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      }
    );
  }
} 