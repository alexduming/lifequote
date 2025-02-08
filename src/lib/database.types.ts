export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: number
          quote_zh: string
          quote_en: string
          author_zh: string
          author_en: string
          author_title_zh: string | null
          author_title_en: string | null
          category: string
          period_zh: string | null
          period_en: string | null
          likes: number
          views: number
          created_at: string
          book: string | null
          book_en: string | null
        }
        Insert: {
          id?: number
          quote_zh: string
          quote_en: string
          author_zh: string
          author_en: string
          author_title_zh?: string | null
          author_title_en?: string | null
          category: string
          period_zh?: string | null
          period_en?: string | null
          likes?: number
          views?: number
          created_at?: string
          book?: string | null
          book_en?: string | null
        }
        Update: {
          id?: number
          quote_zh?: string
          quote_en?: string
          author_zh?: string
          author_en?: string
          author_title_zh?: string | null
          author_title_en?: string | null
          category?: string
          period_zh?: string | null
          period_en?: string | null
          likes?: number
          views?: number
          created_at?: string
          book?: string | null
          book_en?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export interface Quote {
  id: string;
  quote_zh: string;
  quote_en: string;
  author_zh: string;
  author_en: string;
  author_title_zh: string | null;
  author_title_en: string | null;
  category: string;
  period_zh: string | null;
  period_en: string | null;
  likes: number;
  views: number;
  book: string | null;
  book_en: string | null;
  created_at: string;
  updated_at: string;
} 