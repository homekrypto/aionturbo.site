'use client';

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';

const supportedLanguages = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];

export const createClientI18nInstance = async (lng: string = 'en', ns: string = 'common') => {
  const i18nInstance = createInstance();
  
  // Load translation resources
  const resources: Record<string, Record<string, Record<string, string>>> = {};
  
  try {
    const response = await fetch(`/locales/${lng}/${ns}.json`);
    if (response.ok) {
      const translations = await response.json();
      resources[lng] = {
        [ns]: translations,
      };
    }
  } catch {
    console.warn(`Failed to load translations for ${lng}/${ns}`);
  }

  await i18nInstance
    .use(initReactI18next)
    .init({
      lng,
      fallbackLng: 'en',
      resources,
      interpolation: {
        escapeValue: false,
      },
    });

  return i18nInstance;
};

export { supportedLanguages };
