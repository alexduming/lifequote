/**
 * 数据库表的类型定义
 * @description 这个文件定义了与 Supabase 数据库表对应的 TypeScript 类型
 */

export interface Database {
  public: {
    Tables: {
      quotes: {
        Row: {
          id: string
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
          book: string | null
          book_en: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
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
          book?: string | null
          book_en?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
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
          book?: string | null
          book_en?: string | null
          updated_at?: string
        }
      }
      likes: {
        Row: {
          id: string
          user_id: string
          quote_id: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          quote_id: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          quote_id?: string
          created_at?: string
        }
      }
      favorites: {
        Row: {
          id: string
          user_id: string
          quote_id: string
          created_at: string
          note?: string
        }
        Insert: {
          id?: string
          user_id: string
          quote_id: string
          created_at?: string
          note?: string
        }
        Update: {
          id?: string
          user_id?: string
          quote_id?: string
          created_at?: string
          note?: string
        }
      }
      user_profiles: {
        Row: {
          id: string
          username: string
          avatar_url?: string
          bio?: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          avatar_url?: string
          bio?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          avatar_url?: string
          bio?: string
          updated_at?: string
        }
      }
    }
  }
} 