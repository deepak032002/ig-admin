import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import routeGroups from '@/designs/organisms/Sidebar/route'

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname
  const protectedRoutes = routeGroups
    .map(item => item.routes)
    .flat()
    .map(item => item.path)
  const isProtectedRoute = protectedRoutes.includes(path)
  const cookie = cookies().get('token')

  if (!cookie && isProtectedRoute) {
    return NextResponse.redirect(new URL('/signin', req.url))
  }

  if (path === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  return NextResponse.next()
}

// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
