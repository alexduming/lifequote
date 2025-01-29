import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Database } from '@/lib/database.types';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

/**
 * 获取所有语录
 * @returns 返回所有语录数据
 */
export async function GET() {
  try {
    const { data: quotes, error } = await supabase
      .from('quotes')
      .select('*')
      .order('id');

    if (error) {
      throw error;
    }

    return NextResponse.json(quotes);
  } catch (error) {
    console.error('获取语录失败:', error);
    return NextResponse.json({ error: '获取语录失败' }, { status: 500 });
  }
} 