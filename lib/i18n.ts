const supportedLanguages = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];

export const getServerSideTranslations = async (locale: string, namespaces: string[] = ['common']) => {
  const resources: Record<string, unknown> = {};
  
  for (const ns of namespaces) {
    try {
      const translations = await import(`../public/locales/${locale}/${ns}.json`);
      resources[ns] = translations.default;
    } catch {
      console.warn(`Failed to load translations for ${locale}/${ns}`);
      // Fallback to English
      try {
        const fallbackTranslations = await import(`../public/locales/en/${ns}.json`);
        resources[ns] = fallbackTranslations.default;
      } catch {
        console.error(`Failed to load fallback translations for ${ns}`);
      }
    }
  }
  
  return resources;
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
