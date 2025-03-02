import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/database.types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 基于种子的伪随机数生成器
 * @param seed 随机种子
 * @returns 0-1之间的随机数
 */
function seededRandom(seed: string) {
  // 将种子字符串转换为数字
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = ((hash << 5) - hash) + seed.charCodeAt(i);
    hash = hash & hash; // 转换为32位整数
  }
  
  // 使用简单的线性同余生成器
  const m = 2**31 - 1;
  const a = 1103515245;
  const c = 12345;
  
  // 返回0-1之间的随机数
  return ((a * hash + c) % m) / m;
}

/**
 * 获取每日推荐语录
 * @returns 返回每日推荐语录和更多推荐
 */
export async function GET() {
  try {
    // 使用当前日期作为随机种子
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // 例如 "2025-03-02"
    
    // 获取所有语录
    const { data: allQuotes, error: quotesError } = await supabase
      .from('quotes')
      .select('*')
      .limit(2000); // 获取足够多的记录确保随机性
      
    if (quotesError) throw quotesError;
    
    if (!allQuotes || allQuotes.length === 0) {
      return NextResponse.json({
        dailyQuote: null,
        moreQuotes: [],
        refreshTime: dateStr
      });
    }
    
    // 使用日期作为种子生成随机数
    const randomValue = seededRandom(dateStr);
    // 选择随机索引
    const selectedIndex = Math.floor(randomValue * allQuotes.length);
    const dailyQuote = allQuotes[selectedIndex];
    
    // 获取更多推荐（不包括每日推荐的那条）
    const moreQuotes = allQuotes
      .filter(quote => quote.id !== dailyQuote.id)
      .sort(() => 0.5 - Math.random()) // 完全随机排序
      .slice(0, 6);

    return NextResponse.json({
      dailyQuote: dailyQuote || null,
      moreQuotes: moreQuotes || [],
      refreshTime: dateStr, // 返回刷新时间以供前端判断
    });
  } catch (error) {
    console.error('获取每日推荐失败:', error);
    return NextResponse.json({ error: '获取每日推荐失败' }, { status: 500 });
  }
} 