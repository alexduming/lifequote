import { NextResponse } from 'next/server';
import { readQuotesFromCsv } from '@/lib/quotes';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q')?.toLowerCase() || '';
    const language = searchParams.get('lang') || 'en';

    if (!query) {
      return NextResponse.json({ results: [] });
    }

    const quotes = await readQuotesFromCsv();
    
    const results = quotes.filter(quote => {
      const matchQuote = quote.quote[language as 'en' | 'zh'].toLowerCase().includes(query);
      const matchAuthor = quote.author[language as 'en' | 'zh'].toLowerCase().includes(query);
      const matchBook = quote.book_en.toLowerCase().includes(query) || quote.book.toLowerCase().includes(query);
      return matchQuote || matchAuthor || matchBook;
    });

    return NextResponse.json({
      results: results.slice(0, 10), // 限制返回前10条结果
      total: results.length
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to search quotes' }, { status: 500 });
  }
} 