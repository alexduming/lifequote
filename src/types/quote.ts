export type Quote = {
  id: number;
  content: string;
  author: string;
  source?: string;
  language: string;
  likes?: number;
  category?: string;
}; 