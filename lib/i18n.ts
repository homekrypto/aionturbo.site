const supportedLanguages = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];


export const getServerSideTranslations = async (locale: string) => {
  // Ignore namespaces, just load the flat JSON from /locales/{locale}.json
  try {
    const translations = await import(`../locales/${locale}.json`);
    return translations.default;
  } catch {
    console.warn(`Failed to load translations for ${locale}`);
    // Fallback to English
    try {
      const fallbackTranslations = await import(`../locales/en.json`);
      return fallbackTranslations.default;
    } catch {
      console.error(`Failed to load fallback translations for en`);
      return {};
    }
  }
};

export const createTranslationFunction = (translations: unknown) => {
  return (key: string, fallback: string) => {
    const keys = key.split('.');
    let value: unknown = translations || {};
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return fallback;
      }
    }
    
    return typeof value === 'string' ? value : fallback;
  };
};

export { supportedLanguages };
