/**
 * 翻译 API 路由
 * @module TranslateAPI
 */

import { NextRequest, NextResponse } from 'next/server';

// 配置路由选项
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

/**
 * 翻译 API 路由处理函数
 */
export async function POST(request: NextRequest) {
  try {
    const { text, targetLang } = await request.json();

    if (!text || !targetLang) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // 调用 Google Translate API
    const response = await fetch(
      `https://translation.googleapis.com/language/translate/v2?key=${process.env.GOOGLE_TRANSLATE_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          q: text,
          target: targetLang,
          source: targetLang === 'zh' ? 'en' : 'zh',
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Translation request failed');
    }

    const data = await response.json();
    const translatedText = data.data.translations[0].translatedText;

    return NextResponse.json({ translatedText });
  } catch (error: any) {
    console.error('Translation error:', error);
    return NextResponse.json(
      { error: error.message || 'Translation failed' },
      { status: 500 }
    );
  }
} 