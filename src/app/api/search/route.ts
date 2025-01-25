import { NextResponse } from 'next/server';
import { readQuotesFromCsv, Quote } from '@/lib/quotes';

/**
 * 搜索函数
 * @description 根据关键词搜索语录
 * @param quotes 语录数据
 * @param query 搜索关键词
 * @param lang 语言
 * @returns 过滤后的语录数据
 */
function searchQuotes(quotes: Quote[], query: string, lang: 'zh' | 'en' = 'zh'): Quote[] {
  const searchTerms = query.toLowerCase().split(' ').filter(Boolean);
  
  return quotes.filter(quote => {
    const searchableFields = [
      quote.quote[lang],
      quote.author[lang],
      quote.authorTitle[lang],
      quote.period[lang],
      lang === 'zh' ? quote.book : quote.book_en
    ].map(field => (field || '').toLowerCase());
    
    return searchTerms.every(term =>
      searchableFields.some(field => field.includes(term))
    );
  });
}

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
    
    // 获取所有语录
    const allQuotes = await readQuotesFromCsv();
    
    // 执行搜索
    const searchResults = searchQuotes(allQuotes, query, lang);
    
    // 计算分页
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedResults = searchResults.slice(start, end);
    
    const endTime = Date.now();
    console.log(`Search completed in ${endTime - startTime}ms`);
    
    return NextResponse.json({
      results: paginatedResults,
      total: searchResults.length,
      pagination: {
        currentPage: page,
        totalPages: Math.ceil(searchResults.length / limit),
        totalItems: searchResults.length,
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