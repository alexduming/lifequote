import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import csv from 'csv-parser';
import path from 'path';
import { CategoryKey } from '@/config/translations';

// 定义数据类型
export interface Quote {
  id: number;
  quote: {
    zh: string;
    en: string;
  };
  author: {
    zh: string;
    en: string;
  };
  authorTitle: {
    zh: string;
    en: string;
  };
  category: CategoryKey;
  period: {
    zh: string;
    en: string;
  };
  likes: number;
  views: number;
  created_at: string;
  book: string;
  book_en: string;
}

// 读取CSV文件
async function readQuotesFromCsv(): Promise<Quote[]> {
  return new Promise((resolve, reject) => {
    const results: Quote[] = [];
    const csvPath = path.join(process.cwd(), 'src', 'data', 'quotes.csv');

    fs.createReadStream(csvPath)
      .pipe(csv())
      .on('data', (data: any) => {
        const quote: Quote = {
          id: parseInt(data.id),
          quote: {
            zh: data.quote_zh,
            en: data.quote_en,
          },
          author: {
            zh: data.author_zh,
            en: data.author_en,
          },
          authorTitle: {
            zh: data.author_title_zh,
            en: data.author_title_en,
          },
          category: data.category as CategoryKey,
          period: {
            zh: data.period_zh,
            en: data.period_en,
          },
          likes: parseInt(data.likes),
          views: parseInt(data.views),
          created_at: data.created_at,
          book: data.book,
          book_en: data.book_en,
        };
        results.push(quote);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', reject);
  });
}

export async function GET() {
  try {
    const quotes = await readQuotesFromCsv();
    return NextResponse.json(quotes);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch quotes' }, { status: 500 });
  }
} 