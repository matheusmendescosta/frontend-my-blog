import { NextResponse } from 'next/server';
import type { MiddlewareConfig, NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/sign_in', request.url));
  }

  if (!token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ['/', '/dashboard/:path*'],
};
