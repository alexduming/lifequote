/**
 * 处理 /ads.txt 请求的路由处理器
 * @returns {Response} 包含 ads.txt 内容的响应
 */
export async function GET() {
  return new Response(
    'google.com, pub-5692295538625732, DIRECT, f08c47fec0942fa0',
    {
      headers: {
        'content-type': 'text/plain',
        // 添加缓存控制以提高性能
        'cache-control': 'public, max-age=86400',
      },
    }
  );
} 