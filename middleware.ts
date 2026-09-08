import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Public pages keep a trailing slash (WordPress URL parity).
 * API routes do not redirect, so Ranked webhooks and Vercel cron keep their method/body.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/media/') ||
    pathname.startsWith('/images/') ||
    pathname.startsWith('/brand/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  if (!pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    const dest = `${pathname}/${url.search}`
    return NextResponse.redirect(new URL(dest, request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
