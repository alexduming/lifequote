-- 创建增加点赞数的函数
create or replace function increment_quote_likes(quote_id bigint)
returns void
language plpgsql
security definer
as $$
begin
  update quotes
  set likes = likes + 1
  where id = quote_id;
end;
$$;

-- 创建减少点赞数的函数
create or replace function decrement_quote_likes(quote_id bigint)
returns void
language plpgsql
security definer
as $$
begin
  update quotes
  set likes = greatest(likes - 1, 0)  -- 确保点赞数不会小于0
  where id = quote_id;
end;
$$;

-- 创建触发器，在删除点赞记录时自动减少点赞数
create or replace function handle_quote_like_delete()
returns trigger
language plpgsql
security definer
as $$
begin
  perform decrement_quote_likes(old.quote_id);
  return old;
end;
$$;

create trigger quote_like_delete_trigger
  after delete on quote_likes
  for each row
  execute function handle_quote_like_delete();

-- 创建触发器，在添加点赞记录时自动增加点赞数
create or replace function handle_quote_like_insert()
returns trigger
language plpgsql
security definer
as $$
begin
  perform increment_quote_likes(new.quote_id);
  return new;
end;
$$;

create trigger quote_like_insert_trigger
  after insert on quote_likes
  for each row
  execute function handle_quote_like_insert(); 