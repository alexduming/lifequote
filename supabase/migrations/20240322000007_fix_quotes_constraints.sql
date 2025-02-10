-- 修改 quotes 表的约束条件
ALTER TABLE public.quotes
    ALTER COLUMN quote_zh DROP NOT NULL,
    ALTER COLUMN quote_en DROP NOT NULL,
    ADD CONSTRAINT quotes_content_check 
    CHECK (
        (quote_zh IS NOT NULL AND language = 'zh') OR 
        (quote_en IS NOT NULL AND language = 'en')
    );

-- 同样的约束应用到作者字段
ALTER TABLE public.quotes
    ALTER COLUMN author_zh DROP NOT NULL,
    ALTER COLUMN author_en DROP NOT NULL,
    ADD CONSTRAINT quotes_author_check 
    CHECK (
        (author_zh IS NOT NULL AND language = 'zh') OR 
        (author_en IS NOT NULL AND language = 'en')
    ); 