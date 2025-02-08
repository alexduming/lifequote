-- 重命名字段
ALTER TABLE quotes
  RENAME COLUMN content_zh TO quote_zh;

ALTER TABLE quotes
  RENAME COLUMN content_en TO quote_en; 