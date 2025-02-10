export interface Quote {
  id: number;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh?: string;
  author_title_en?: string;
  category: string;
  likes: number;
} 