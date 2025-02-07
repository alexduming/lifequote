/**
 * @description 根据slug获取作者详细信息
 * @param slug 作者标识
 */
export async function getAuthorBySlug(slug: string) {
  const { data: author, error } = await supabase
    .from('authors')
    .select(`
      *,
      quotes (
        id,
        quote_zh,
        quote_en,
        category
      )
    `)
    .eq('slug', slug)
    .single();

  if (error) {
    console.error('获取作者信息失败:', error);
    return null;
  }

  return author;
} 