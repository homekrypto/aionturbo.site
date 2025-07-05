'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supportedLanguages } from '../lib/i18n';

export const useI18n = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState('en');
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    // Extract locale from pathname
    const pathSegments = pathname.split('/').filter(Boolean);
    const localeFromPath = pathSegments[0];
    
    if (supportedLanguages.includes(localeFromPath)) {
      setCurrentLocale(localeFromPath);
    } else {
      setCurrentLocale('en');
    }
  }, [pathname]);

  useEffect(() => {
    // Load translations for current locale
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${currentLocale}/common.json`);
        if (response.ok) {
          const data = await response.json();
          setTranslations(data);
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    loadTranslations();
  }, [currentLocale]);

  const t = (key: string, fallback?: string) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return fallback || key;
      }
    }
    
    return typeof value === 'string' ? value : fallback || key;
  };

  const changeLanguage = (locale: string) => {
    if (!supportedLanguages.includes(locale)) return;
    
    const pathSegments = pathname.split('/').filter(Boolean);
    const currentPathLocale = pathSegments[0];
    
    let newPath = '';
    if (supportedLanguages.includes(currentPathLocale)) {
      // Replace existing locale
      pathSegments[0] = locale;
      newPath = '/' + pathSegments.join('/');
    } else {
      // Add locale to path
      newPath = '/' + locale + pathname;
    }
    
    // For English, use root path
    if (locale === 'en') {
      if (supportedLanguages.includes(currentPathLocale)) {
        pathSegments.shift(); // Remove locale
      }
      newPath = '/' + pathSegments.join('/');
    }
    
    router.push(newPath);
  };

  return {
    t,
    currentLocale,
    changeLanguage,
    supportedLanguages,
  };
};
