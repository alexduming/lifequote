-- 删除现有的触发器和函数
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 重新创建函数，添加 security definer
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
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
$$;

-- 重新创建触发器
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- 确保函数有正确的权限
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO authenticated;
GRANT EXECUTE ON FUNCTION public.handle_new_user() TO anon;

-- 确保表有正确的权限
GRANT ALL ON public.user_profiles TO authenticated;
GRANT ALL ON public.user_profiles TO anon; 