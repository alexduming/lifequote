-- 更新语录表，添加提交和审核相关字段
ALTER TABLE public.quotes
ADD COLUMN IF NOT EXISTS submitted_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS status TEXT CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'approved',
ADD COLUMN IF NOT EXISTS source TEXT,
ADD COLUMN IF NOT EXISTS notes TEXT,
ADD COLUMN IF NOT EXISTS reviewed_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS rejection_reason TEXT;

-- 创建语录审核策略
CREATE POLICY "允许已认证用户提交语录"
    ON public.quotes FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "允许管理员审核语录"
    ON public.quotes FOR UPDATE
    TO authenticated
    USING (
        EXISTS (
            SELECT 1 FROM auth.users
            WHERE auth.uid() = id
            AND raw_user_meta_data->>'role' = 'admin'
        )
    );

-- 创建索引
CREATE INDEX IF NOT EXISTS quotes_submitted_by_idx ON public.quotes(submitted_by);
CREATE INDEX IF NOT EXISTS quotes_status_idx ON public.quotes(status);
CREATE INDEX IF NOT EXISTS quotes_reviewed_by_idx ON public.quotes(reviewed_by); 