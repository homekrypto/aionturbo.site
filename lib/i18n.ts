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

export const createTranslationFunction = (translations: Record<string, string>) => {
  return (key: string, fallback: string) => {
    if (typeof translations === 'object' && translations !== null && key in translations) {
      return translations[key] as string;
    }
    return fallback;
  };
};

export { supportedLanguages };
