
import { Metadata } from "next";
import { getTranslations } from "../src/lib/t";

export async function generatePageMetadata(
  params: Promise<{ locale: string }>,
  pageKey: string,
  path: string,
  fallbackTitle: string,
  fallbackDescription: string
): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale as import("../src/lib/t").Locale);

  return {
    title: t(`meta.${pageKey}.title`) || fallbackTitle,
    description: t(`meta.${pageKey}.description`) || fallbackDescription,
    alternates: {
      canonical: `https://ai-on-turbo.com${locale === 'en' ? path : '/' + locale + path}`,
      languages: {
        'en': `https://ai-on-turbo.com${path}`,
        'es': `https://ai-on-turbo.com/es${path}`,
        'fr': `https://ai-on-turbo.com/fr${path}`,
        'de': `https://ai-on-turbo.com/de${path}`,
        'pl': `https://ai-on-turbo.com/pl${path}`,
        'pt': `https://ai-on-turbo.com/pt${path}`,
        'ar': `https://ai-on-turbo.com/ar${path}`,
        'tr': `https://ai-on-turbo.com/tr${path}`,
        'ja': `https://ai-on-turbo.com/ja${path}`,
      },
    },
  };
}
