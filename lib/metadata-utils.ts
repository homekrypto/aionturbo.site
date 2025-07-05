import { Metadata } from "next";
import { getServerSideTranslations } from "@/lib/i18n";

export async function generatePageMetadata(
  params: Promise<{ locale: string }>,
  pageKey: string,
  path: string,
  fallbackTitle: string,
  fallbackDescription: string
): Promise<Metadata> {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = (key: string, fallback: string) => {
    const keys = key.split('.');
    let value: unknown = translations.common || translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return fallback;
      }
    }
    
    return typeof value === 'string' ? value : fallback;
  };

  return {
    title: t(`meta.${pageKey}.title`, fallbackTitle),
    description: t(`meta.${pageKey}.description`, fallbackDescription),
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
