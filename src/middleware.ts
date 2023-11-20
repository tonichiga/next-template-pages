import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "../i18n-config";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// Автоматический редирект на язык по умолчанию установленный в ПК
function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  const locale = matchLocale(languages, locales, i18n.defaultLocale);

  return locale;
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let locale = null;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale =
    !request.nextUrl.locale || request.nextUrl.locale === "default";

  if (pathnameIsMissingLocale) {
    const nextLocal = request.cookies.get("NEXT_LOCALE");
    if (nextLocal) {
      locale = nextLocal.value;
    }

    if (!locale) {
      locale = getLocale(request);
    }

    const response = NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
        request.url,
      ),
    );

    response.cookies.set("NEXT_LOCALE", locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });

    return response;
  }

  const response = NextResponse.next();
  return response;
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: [
    `/((?!api|_next/static|_next/image|images|videos|files|svgs|scripts|favicon.ico).*)`,
  ],
};
