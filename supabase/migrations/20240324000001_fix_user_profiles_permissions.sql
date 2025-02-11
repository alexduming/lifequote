-- 重新设置 user_profiles 表的权限
ALTER TABLE public.user_profiles DISABLE ROW LEVEL SECURITY;

-- 删除现有的策略
DROP POLICY IF EXISTS "允许认证用户读取用户配置" ON public.user_profiles;
DROP POLICY IF EXISTS "允许用户更新自己的配置" ON public.user_profiles;
DROP POLICY IF EXISTS "允许用户插入自己的配置" ON public.user_profiles;

-- 重新启用 RLS
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 创建新的策略
CREATE POLICY "启用所有操作"
    ON public.user_profiles
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- 确保 service_role 有完全访问权限
GRANT ALL ON public.user_profiles TO service_role;

-- 确保 auth 触发器有正确的权限
GRANT ALL ON public.user_profiles TO supabase_auth_admin;

-- 确保序列有正确的权限
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO service_role; 