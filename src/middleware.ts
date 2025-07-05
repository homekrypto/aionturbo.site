import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the pathname starts with a supported locale
  const pathnameHasLocale = supportedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Check if this is a request for a static file or API route
    if (
      pathname.startsWith('/api/') ||
      pathname.startsWith('/_next/') ||
      pathname.startsWith('/locales/') ||
      pathname.startsWith('/sitemaps/') ||
      pathname.includes('.') // Files with extensions
    ) {
      return NextResponse.next();
    }

    // Get the preferred locale from Accept-Language header
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLocale = getPreferredLocale(acceptLanguage);
    
    // Redirect to the localized path
    return NextResponse.redirect(new URL(`/${preferredLocale}${pathname}`, request.url));
  }

  return NextResponse.next();
}

function getPreferredLocale(acceptLanguage: string): string {
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim().toLowerCase())
    .map(lang => lang.split('-')[0]); // Extract language code without region

  for (const lang of languages) {
    if (supportedLocales.includes(lang)) {
      return lang;
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public directory files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public/|locales/|sitemaps/).*)',
  ],
};
