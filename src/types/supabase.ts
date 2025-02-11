import { CategoryKey } from '@/config/translations';

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: number;
          quote_zh: string | null;
          quote_en: string | null;
          author_zh: string | null;
          author_en: string | null;
          author_title_zh: string | null;
          author_title_en: string | null;
          category: CategoryKey;
          likes: number;
          created_at: string;
          updated_at: string;
          source: string | null;
          source_en: string | null;
          submitted_by: string | null;
          status: 'pending' | 'approved' | 'rejected';
          language: 'zh' | 'en';
        };
        Insert: {
          id?: number;
          quote_zh?: string | null;
          quote_en?: string | null;
          author_zh?: string | null;
          author_en?: string | null;
          author_title_zh?: string | null;
          author_title_en?: string | null;
          category: CategoryKey;
          likes?: number;
          created_at?: string;
          updated_at?: string;
          source?: string | null;
          source_en?: string | null;
          submitted_by?: string | null;
          status?: 'pending' | 'approved' | 'rejected';
          language?: 'zh' | 'en';
        };
        Update: {
          id?: number;
          quote_zh?: string | null;
          quote_en?: string | null;
          author_zh?: string | null;
          author_en?: string | null;
          author_title_zh?: string | null;
          author_title_en?: string | null;
          category?: CategoryKey;
          likes?: number;
          created_at?: string;
          updated_at?: string;
          source?: string | null;
          source_en?: string | null;
          submitted_by?: string | null;
          status?: 'pending' | 'approved' | 'rejected';
          language?: 'zh' | 'en';
        };
      };
      favorites: {
        Row: {
          id: number;
          user_id: string;
          quote_id: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          quote_id: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          quote_id?: number;
          created_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: number;
          user_id: string;
          username: string;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          user_id: string;
          username: string;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          user_id?: string;
          username?: string;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
} 