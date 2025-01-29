-- 创建语录表
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    quote_zh TEXT NOT NULL,
    quote_en TEXT NOT NULL,
    author_zh TEXT NOT NULL,
    author_en TEXT NOT NULL,
    author_title_zh TEXT,
    author_title_en TEXT,
    category TEXT NOT NULL,
    period_zh TEXT,
    period_en TEXT,
    likes INTEGER DEFAULT 0,
    views INTEGER DEFAULT 0,
    book TEXT,
    book_en TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 启用行级安全策略
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- 创建安全策略
CREATE POLICY "所有人都可以查看语录"
    ON public.quotes FOR SELECT
    USING (true);

-- 创建索引
CREATE INDEX IF NOT EXISTS quotes_category_idx ON public.quotes(category);
CREATE INDEX IF NOT EXISTS quotes_author_en_idx ON public.quotes(author_en); 