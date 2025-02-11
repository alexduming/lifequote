-- 删除现有的触发器和函数
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- 重新创建函数，使用更严格的权限设置
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  default_role user_role;
BEGIN
  -- 检查是否是第一个用户
  IF NOT EXISTS (SELECT 1 FROM public.user_profiles LIMIT 1) THEN
    default_role := 'admin'::user_role;
  ELSE
    default_role := 'user'::user_role;
  END IF;

  -- 插入新用户资料
  INSERT INTO public.user_profiles (id, role)
  VALUES (NEW.id, default_role);

  RETURN NEW;
EXCEPTION
  WHEN OTHERS THEN
    -- 记录错误信息
    RAISE NOTICE 'Error in handle_new_user: %', SQLERRM;
    RETURN NEW;
END;
$$;

-- 重新创建触发器
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();