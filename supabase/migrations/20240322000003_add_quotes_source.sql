-- 添加语录来源字段
ALTER TABLE public.quotes
ADD COLUMN IF NOT EXISTS source TEXT,
ADD COLUMN IF NOT EXISTS source_en TEXT;

-- 更新现有的 RLS 策略
CREATE POLICY "允许认证用户提交语录"
    ON public.quotes
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- 重新授予权限
GRANT ALL ON public.quotes TO authenticated; 