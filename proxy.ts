import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  // Run on all routes except internal Next.js files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

// ?? UPDATED FOR NEXT.JS 16: The function must be named "proxy"
export function proxy(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';

  // Clean the hostname (removes port numbers if testing locally)
  const cleanHostname = hostname.split(':')[0]; 
  const subdomain = cleanHostname.split('.')[0];

  // If there is no subdomain, or it's "www", show the main homepage
  const isRootDomain = cleanHostname === 'mygsoc.xyz' || cleanHostname === 'localhost';
  if (!subdomain || subdomain === 'www' || isRootDomain) {
    return NextResponse.next();
  }

  // REWRITE LOGIC: Route directly to the /[username] folder
  url.pathname = `/${subdomain}${url.pathname === '/' ? '/index.html' : url.pathname}`;
  
  return NextResponse.rewrite(url);
}