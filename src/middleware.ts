import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * 需要登录才能访问的路由
 */
const protectedRoutes = [
  '/profile',
  '/favorites',
  '/likes',
];

/**
 * 中间件函数，用于处理路由保护和认证状态
 * @param req - Next.js 请求对象
 * @returns NextResponse 响应对象
 */
export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // 检查会话状态
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // 获取当前路径
  const path = req.nextUrl.pathname;

  // 如果是受保护的路由且用户未登录，重定向到登录页面
  if (protectedRoutes.includes(path) && !session) {
    const redirectUrl = new URL('/login', req.url);
    redirectUrl.searchParams.set('redirectTo', path);
    return NextResponse.redirect(redirectUrl);
  }

  // 如果用户已登录且访问登录/注册页面，重定向到首页
  if (session && (path === '/login' || path === '/register')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return res;
}

/**
 * 配置中间件匹配的路由
 */
export const config = {
  matcher: [
    /*
     * 匹配所有需要保护的路由
     * 以及登录/注册页面
     */
    '/profile/:path*',
    '/favorites/:path*',
    '/likes/:path*',
    '/login',
    '/register',
  ],
}; 