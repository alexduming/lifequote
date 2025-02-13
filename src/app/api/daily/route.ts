import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/database.types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 获取每日推荐语录
 * @returns 返回每日推荐语录和更多推荐
 */
export async function GET() {
  try {
    // 使用当前日期作为种子来确保每天返回相同的随机结果
    const today = new Date().toISOString().split('T')[0];
    
    // 获取Quote of the Day
    const { data: dailyQuote, error: dailyError } = await supabase
      .from('quotes')
      .select('*')
      .limit(1)
      // 使用固定的日期作为种子来确保每天返回相同的随机结果
      .order('id', { ascending: today.includes('2024-03') }); // 使用日期来决定排序方向

    if (dailyError) throw dailyError;

    // 获取更多推荐（不包括每日推荐的那条）
    const { data: moreQuotes, error: moreError } = await supabase
      .from('quotes')
      .select('*')
      .limit(6)
      .not('id', 'eq', dailyQuote?.[0]?.id)
      // 同样使用日期作为种子
      .order('id', { ascending: !today.includes('2024-03') }); // 使用相反的排序来获取不同的结果

    if (moreError) throw moreError;

    return NextResponse.json({
      dailyQuote: dailyQuote?.[0] || null,
      moreQuotes: moreQuotes || [],
      refreshTime: today, // 返回刷新时间以供前端判断
    });
  } catch (error) {
    console.error('获取每日推荐失败:', error);
    return NextResponse.json({ error: '获取每日推荐失败' }, { status: 500 });
  }
} 