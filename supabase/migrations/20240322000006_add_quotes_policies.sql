-- 删除已存在的策略（如果存在）
DROP POLICY IF EXISTS "允许认证用户提交语录" ON public.quotes;
DROP POLICY IF EXISTS "允许公开读取语录" ON public.quotes;

-- 启用 RLS
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- 创建新的策略
CREATE POLICY "允许认证用户提交语录"
    ON public.quotes
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "允许公开读取语录"
    ON public.quotes
    FOR SELECT
    USING (true);

-- 重新授予权限
GRANT ALL ON public.quotes TO authenticated; 