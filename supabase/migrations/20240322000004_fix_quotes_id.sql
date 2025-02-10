-- 修复 quotes 表的 id 字段
CREATE SEQUENCE IF NOT EXISTS quotes_id_seq;

-- 修改 quotes 表的 id 字段
ALTER TABLE public.quotes
ALTER COLUMN id SET DEFAULT nextval('quotes_id_seq'),
ALTER COLUMN id SET NOT NULL;

-- 确保序列从当前最大 id 开始
SELECT setval('quotes_id_seq', COALESCE((SELECT MAX(id) FROM public.quotes), 0) + 1); 