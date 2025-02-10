-- 添加语录状态和语言字段
ALTER TABLE public.quotes
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
ADD COLUMN IF NOT EXISTS language TEXT DEFAULT 'zh' CHECK (language IN ('zh', 'en')),
ADD COLUMN IF NOT EXISTS submitted_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS reviewed_by UUID REFERENCES auth.users(id),
ADD COLUMN IF NOT EXISTS reviewed_at TIMESTAMP WITH TIME ZONE;

-- 创建审核相关的RLS策略
CREATE POLICY "管理员可以审核语录"
    ON public.quotes
    FOR UPDATE
    TO authenticated
    USING (
        auth.uid() IN (
            SELECT id FROM auth.users WHERE role = 'admin'
        )
    );

-- 创建用于管理员查看待审核语录的视图
CREATE OR REPLACE VIEW pending_quotes AS
SELECT 
    q.*,
    u.email as submitter_email,
    r.email as reviewer_email
FROM quotes q
LEFT JOIN auth.users u ON q.submitted_by = u.id
LEFT JOIN auth.users r ON q.reviewed_by = r.id
WHERE q.status = 'pending';

-- 授权管理员访问视图
GRANT SELECT ON pending_quotes TO authenticated; 