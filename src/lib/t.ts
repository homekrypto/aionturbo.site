
/**
 * Supported locales for the site.
 */
export type Locale = 'en' | 'es' | 'fr' | 'de' | 'pl' | 'pt' | 'ar' | 'tr' | 'ja';

const loadedTranslations: Partial<Record<Locale, Record<string, string>>> = {};

function detectLocale(): Locale {
  if (typeof window !== 'undefined') {
    const pathLocale = window.location.pathname.split('/')[1];
    if ([
      'en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'
    ].includes(pathLocale)) {
      return pathLocale as Locale;
    }
    // Optionally, use browser language as fallback
    const browserLang = navigator.language.slice(0, 2);
    if ([
      'en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'
    ].includes(browserLang)) {
      return browserLang as Locale;
    }
  }
  return 'en';
}

import en from '../../locales/en.json';
import es from '../../locales/es.json';
import fr from '../../locales/fr.json';
import de from '../../locales/de.json';
import pl from '../../locales/pl.json';
import pt from '../../locales/pt.json';
import ar from '../../locales/ar.json';
import tr from '../../locales/tr.json';
import ja from '../../locales/ja.json';

function loadTranslations(locale: Locale): Record<string, string> {
  if (loadedTranslations[locale]) return loadedTranslations[locale]!;
  let translations: Record<string, string> = {};
  switch (locale) {
    case 'es':
      translations = es; break;
    case 'fr':
      translations = fr; break;
    case 'de':
      translations = de; break;
    case 'pl':
      translations = pl; break;
    case 'pt':
      translations = pt; break;
    case 'ar':
      translations = ar; break;
    case 'tr':
      translations = tr; break;
    case 'ja':
      translations = ja; break;
    case 'en':
    default:
      translations = en; break;
  }
  loadedTranslations[locale] = translations;
  return translations;
}


/**
 * Returns a translation function for a specific locale (SSR/SSG/metadata usage).
 * @param locale The locale to use for translations.
 */
export function getTranslations(locale: Locale) {
  const translations = loadTranslations(locale);
  return (key: string) => translations[key] || key;
}

/**
 * Translates a key using the detected locale (client) or optionally a provided locale (SSR/SSG).
 * @param key The translation key.
 * @param locale Optional locale override.
 */
export function t(key: string, locale?: Locale): string {
  const effectiveLocale = locale || detectLocale();
  const translations = loadTranslations(effectiveLocale);
  let translation = translations[key] || key;
  
  // Remove "nav." prefix for English navigation items in specific dropdowns
  if (effectiveLocale === 'en' && key.startsWith('nav.') && 
      (key.includes('.services.') || key.includes('.solutions.') || key.includes('.products.')) &&
      !key.endsWith('.title') && !key.endsWith('.all')) {
    // For English, return clean labels without nav prefix
    const parts = key.split('.');
    if (parts.length >= 3) {
      const cleanKey = parts.slice(2).join('.');
      // Convert camelCase to sentence case
      translation = cleanKey.replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
        .replace(/ai/gi, 'AI')
        .replace(/llm/gi, 'LLM')
        .replace(/rag/gi, 'RAG')
        .replace(/mlops/gi, 'MLOps');
    }
  }
  
  return translation;
}
