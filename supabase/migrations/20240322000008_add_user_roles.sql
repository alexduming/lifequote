-- 删除已存在的表和类型（如果存在）
DROP TABLE IF EXISTS public.user_profiles CASCADE;
DROP TYPE IF EXISTS user_role CASCADE;

-- 创建用户角色枚举类型
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- 创建用户配置表
CREATE TABLE public.user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    role user_role DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 添加 RLS 策略
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 允许所有认证用户读取用户配置
DROP POLICY IF EXISTS "允许认证用户读取用户配置" ON public.user_profiles;
CREATE POLICY "允许认证用户读取用户配置"
    ON public.user_profiles
    FOR SELECT
    TO authenticated
    USING (true);

-- 允许用户更新自己的配置
DROP POLICY IF EXISTS "允许用户更新自己的配置" ON public.user_profiles;
CREATE POLICY "允许用户更新自己的配置"
    ON public.user_profiles
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = id);

-- 允许用户插入自己的配置
DROP POLICY IF EXISTS "允许用户插入自己的配置" ON public.user_profiles;
CREATE POLICY "允许用户插入自己的配置"
    ON public.user_profiles
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = id);

-- 授予权限
GRANT ALL ON public.user_profiles TO authenticated;

-- 创建触发器以自动更新 updated_at
DROP TRIGGER IF EXISTS update_user_profiles_updated_at ON public.user_profiles;
CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- 允许第一个用户成为管理员
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM public.user_profiles LIMIT 1) THEN
    INSERT INTO public.user_profiles (id, role)
    VALUES (NEW.id, 'admin');
  ELSE
    INSERT INTO public.user_profiles (id, role)
    VALUES (NEW.id, 'user');
  END IF;
  RETURN NEW;
END;
$$ language plpgsql security definer;

-- 创建用户注册触发器
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user(); 