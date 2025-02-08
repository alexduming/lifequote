/**
 * 数据库类型定义
 * @module database.types
 */

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: number;
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
          status: 'pending' | 'approved' | 'rejected';
          reviewed_by: string | null;
          reviewed_at: string | null;
          rejection_reason: string | null;
        };
        Insert: {
          id?: number;
          quote_zh: string;
          quote_en: string;
          author_zh: string;
          author_en: string;
          author_title_zh?: string | null;
          author_title_en?: string | null;
          category: string;
          period_zh?: string | null;
          period_en?: string | null;
          likes?: number;
          views?: number;
          book?: string | null;
          book_en?: string | null;
          created_at?: string;
          status?: 'pending' | 'approved' | 'rejected';
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          rejection_reason?: string | null;
        };
        Update: {
          id?: number;
          quote_zh?: string;
          quote_en?: string;
          author_zh?: string;
          author_en?: string;
          author_title_zh?: string | null;
          author_title_en?: string | null;
          category?: string;
          period_zh?: string | null;
          period_en?: string | null;
          likes?: number;
          views?: number;
          book?: string | null;
          book_en?: string | null;
          created_at?: string;
          status?: 'pending' | 'approved' | 'rejected';
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          rejection_reason?: string | null;
        };
      };
      quote_likes: {
        Row: {
          id: number;
          user_id: string;
          quote_id: number;
          liked_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          quote_id: number;
          liked_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          quote_id?: number;
          liked_at?: string;
        };
      };
      favorites: {
        Row: {
          id: number;
          user_id: string;
          quote_id: number;
          favorited_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          quote_id: number;
          favorited_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          quote_id?: number;
          favorited_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}

export type Quote = Database['public']['Tables']['quotes']['Row']; 