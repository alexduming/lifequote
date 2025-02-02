-- 创建用户资料表
CREATE TABLE IF NOT EXISTS public.user_profiles (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
    username TEXT UNIQUE NOT NULL CHECK (char_length(username) >= 3),
    bio TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 启用行级安全性
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- 创建访问策略
CREATE POLICY "用户可以查看所有资料"
    ON public.user_profiles FOR SELECT
    USING (true);

CREATE POLICY "用户只能编辑自己的资料"
    ON public.user_profiles FOR UPDATE
    USING (auth.uid() = user_id);

CREATE POLICY "用户只能删除自己的资料"
    ON public.user_profiles FOR DELETE
    USING (auth.uid() = user_id);

CREATE POLICY "只有已认证用户可以插入资料"
    ON public.user_profiles FOR INSERT
    WITH CHECK (auth.uid() = user_id);

-- 创建触发器函数来自动更新 updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_user_profiles_updated_at
    BEFORE UPDATE ON public.user_profiles
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 