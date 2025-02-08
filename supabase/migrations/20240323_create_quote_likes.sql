-- Create quote_likes table
CREATE TABLE IF NOT EXISTS public.quote_likes (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    quote_id BIGINT NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
    liked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, quote_id)
);

-- Enable RLS
ALTER TABLE public.quote_likes ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON public.quote_likes
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.quote_likes
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable delete for authenticated users only" ON public.quote_likes
    FOR DELETE USING (auth.uid() = user_id);

-- Create index
CREATE INDEX quote_likes_user_id_idx ON public.quote_likes(user_id);
CREATE INDEX quote_likes_quote_id_idx ON public.quote_likes(quote_id); 