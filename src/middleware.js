import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname.startsWith('/admin')) {
    const adminToken = request.cookies.get('admin_token')?.value;

    if (pathname === '/admin/login') {
      if (adminToken === 'authenticated') {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    if (adminToken !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
