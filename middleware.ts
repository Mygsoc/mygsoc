import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const config = {
  // Run on all routes except internal Next.js files
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const hostname = req.headers.get('host') || '';

  // Clean the hostname (removes port numbers if testing locally)
  const cleanHostname = hostname.split(':')[0]; 
  const subdomain = cleanHostname.split('.')[0];

  // SAFETY CHECK: Ignore Vercel's default domains, localhost, and your root domain
  const isRootDomain = cleanHostname === 'mygsoc.xyz' || cleanHostname === 'localhost' || cleanHostname.endsWith('.vercel.app');
  
  // If there is no subdomain, it's "www", or it's a root/Vercel domain, load the main homepage normally
  if (!subdomain || subdomain === 'www' || isRootDomain) {
    return NextResponse.next();
  }

  // REWRITE LOGIC: Route directly to the /[username] folder inside the public directory
  url.pathname = `/${subdomain}${url.pathname === '/' ? '/index.html' : url.pathname}`;
  
  return NextResponse.rewrite(url);
}