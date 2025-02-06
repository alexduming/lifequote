-- 创建收藏夹表
CREATE TABLE IF NOT EXISTS public.collections (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    description TEXT,
    is_public BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- 创建收藏夹内容表
CREATE TABLE IF NOT EXISTS public.collection_items (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    collection_id UUID REFERENCES public.collections(id) ON DELETE CASCADE NOT NULL,
    quote_id UUID REFERENCES public.quotes(id) ON DELETE CASCADE NOT NULL,
    note TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(collection_id, quote_id)
);

-- 启用行级安全性
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_items ENABLE ROW LEVEL SECURITY;

-- 创建访问策略
CREATE POLICY "用户可以查看公开的收藏夹"
    ON public.collections FOR SELECT
    USING (is_public OR auth.uid() = user_id);

CREATE POLICY "用户只能管理自己的收藏夹"
    ON public.collections FOR ALL
    USING (auth.uid() = user_id);

CREATE POLICY "用户可以查看有权限的收藏夹内容"
    ON public.collection_items FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.collections
            WHERE id = collection_id
            AND (is_public OR auth.uid() = user_id)
        )
    );

CREATE POLICY "用户只能管理自己的收藏夹内容"
    ON public.collection_items FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.collections
            WHERE id = collection_id
            AND auth.uid() = user_id
        )
    );

-- 创建索引
CREATE INDEX IF NOT EXISTS collections_user_id_idx ON public.collections(user_id);
CREATE INDEX IF NOT EXISTS collection_items_collection_id_idx ON public.collection_items(collection_id);
CREATE INDEX IF NOT EXISTS collection_items_quote_id_idx ON public.collection_items(quote_id);

-- 创建触发器函数来自动更新 updated_at
CREATE TRIGGER update_collections_updated_at
    BEFORE UPDATE ON public.collections
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 