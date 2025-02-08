-- Create favorites table
CREATE TABLE IF NOT EXISTS public.favorites (
    id BIGSERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    quote_id BIGINT NOT NULL REFERENCES public.quotes(id) ON DELETE CASCADE,
    favorited_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, quote_id)
);

-- Enable RLS
ALTER TABLE public.favorites ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable read access for all users" ON public.favorites
    FOR SELECT USING (true);

CREATE POLICY "Enable insert for authenticated users only" ON public.favorites
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Enable delete for authenticated users only" ON public.favorites
    FOR DELETE USING (auth.uid() = user_id);

-- Create index
CREATE INDEX favorites_user_id_idx ON public.favorites(user_id);
CREATE INDEX favorites_quote_id_idx ON public.favorites(quote_id); 