import { CategoryKey } from '@/config/translations';

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: number;
          content_zh: string;
          content_en: string;
          author_zh: string;
          author_en: string;
          author_title_zh: string;
          author_title_en: string;
          category: CategoryKey;
          likes: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          content_zh: string;
          content_en: string;
          author_zh: string;
          author_en: string;
          author_title_zh: string;
          author_title_en: string;
          category: CategoryKey;
          likes?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          content_zh?: string;
          content_en?: string;
          author_zh?: string;
          author_en?: string;
          author_title_zh?: string;
          author_title_en?: string;
          category?: CategoryKey;
          likes?: number;
          created_at?: string;
          updated_at?: string;
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