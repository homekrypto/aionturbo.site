"use client";

import { useState, useEffect } from 'react';

interface Language {
  code: string;
  nativeName: string;
  flag: string;
}

interface Currency {
  code: string;
  symbol: string;
  rate: number;
}

interface Theme {
  id: string;
  name: string;
  icon: string;
}

const LANGUAGES: Language[] = [
  { code: 'en', nativeName: 'English', flag: '🇺🇸' },
  { code: 'es', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'fr', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
];

const THEMES: Theme[] = [
  { id: 'light', name: 'Light', icon: '☀️' },
  { id: 'dark', name: 'Dark', icon: '🌙' },
  { id: 'system', name: 'System', icon: '🖥️' },
];

const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1.0 },
  { code: 'EUR', symbol: '€', rate: 0.85 },
  { code: 'GBP', symbol: '£', rate: 0.73 },
];

export default function GlobalFooterControls() {
  const [currentLanguage, setCurrentLanguage] = useState<string>('en');
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const [currentCurrency, setCurrentCurrency] = useState<Currency>(CURRENCIES[0]);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isThemeOpen, setIsThemeOpen] = useState(false);
  const [exchangeRates, setExchangeRates] = useState<Record<string, number>>({});

  // Initialize from localStorage and browser preferences
  useEffect(() => {
    // Language detection and initialization
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && LANGUAGES.some(lang => lang.code === savedLanguage)) {
      setCurrentLanguage(savedLanguage);
    } else {
      // Auto-detect from browser
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = LANGUAGES.find(lang => lang.code === browserLang);
      if (supportedLang) {
        setCurrentLanguage(supportedLang.code);
      }
    }

    // Theme initialization
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && THEMES.some(theme => theme.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setCurrentTheme('system');
        applyTheme('system');
      }
    }

    // Currency initialization
    const savedCurrency = localStorage.getItem('preferred-currency');
    if (savedCurrency) {
      const currency = CURRENCIES.find(curr => curr.code === savedCurrency);
      if (currency) {
        setCurrentCurrency(currency);
      }
    }

    // Fetch exchange rates
    fetchExchangeRates();
  }, []);

  // Listen for system theme changes
  useEffect(() => {
    if (currentTheme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [currentTheme]);

  const fetchExchangeRates = async () => {
    try {
      // Using a free API for exchange rates
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      setExchangeRates(data.rates);
      
      // Update currency rates
      const updatedCurrencies = CURRENCIES.map(currency => ({
        ...currency,
        rate: currency.code === 'USD' ? 1.0 : data.rates[currency.code] || currency.rate
      }));
      
      const currentCurrencyCode = localStorage.getItem('preferred-currency') || 'USD';
      const updatedCurrent = updatedCurrencies.find(curr => curr.code === currentCurrencyCode);
      if (updatedCurrent) {
        setCurrentCurrency(updatedCurrent);
      }
    } catch (error) {
      console.warn('Failed to fetch exchange rates:', error);
    }
  };

  const applyTheme = (themeId: string) => {
    const root = document.documentElement;
    
    if (themeId === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', themeId);
    }
  };

  const handleLanguageChange = async (languageCode: string) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('preferred-language', languageCode);
    setIsLanguageOpen(false);
    
    // Trigger translation
    await translateContent(languageCode);
  };

  const handleThemeChange = (themeId: string) => {
    setCurrentTheme(themeId);
    localStorage.setItem('preferred-theme', themeId);
    setIsThemeOpen(false);
    applyTheme(themeId);
  };

  const translateContent = async (targetLanguage: string) => {
    if (targetLanguage === 'en') return; // No translation needed for English
    
    try {
      // In a real implementation, this would call your translation service
      // For now, we'll use a mock translation function
      await mockTranslate(targetLanguage);
    } catch (error) {
      console.error('Translation failed:', error);
    }
  };

  const mockTranslate = async (targetLanguage: string) => {
    // Mock translation with loading state
    const elements = document.querySelectorAll('[data-translatable]');
    elements.forEach(element => {
      const key = element.getAttribute('data-translatable');
      if (key && element.textContent) {
        // In real implementation, this would fetch from translation API or static files
        element.textContent = `[${targetLanguage.toUpperCase()}] ${element.textContent}`;
      }
    });
  };

  const currentLang = LANGUAGES.find(lang => lang.code === currentLanguage) || LANGUAGES[0];
  const currentThemeObj = THEMES.find(theme => theme.id === currentTheme) || THEMES[0];

  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
          
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Select language"
            >
              <span className="text-lg">{currentLang.flag}</span>
              <span className="font-medium text-gray-700 dark:text-gray-200">{currentLang.nativeName}</span>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isLanguageOpen && (
              <div className="absolute bottom-full left-0 mb-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50">
                {LANGUAGES.map((language) => (
                  <button
                    key={language.code}
                    onClick={() => handleLanguageChange(language.code)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentLanguage === language.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.nativeName}</span>
                    {currentLanguage === language.code && (
                      <svg className="w-4 h-4 ml-auto text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Currency Display */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600">
            <span className="text-gray-500 dark:text-gray-400">Currency:</span>
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {currentCurrency.code} {currentCurrency.symbol}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              (Rate: {currentCurrency.rate.toFixed(3)})
            </span>
          </div>

          {/* Theme Switcher */}
          <div className="relative">
            <button
              onClick={() => setIsThemeOpen(!isThemeOpen)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              aria-label="Select theme"
            >
              <span className="text-lg">{currentThemeObj.icon}</span>
              <span className="font-medium text-gray-700 dark:text-gray-200">{currentThemeObj.name}</span>
              <svg 
                className={`w-4 h-4 text-gray-500 transition-transform ${isThemeOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isThemeOpen && (
              <div className="absolute bottom-full right-0 mb-2 w-40 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50">
                {THEMES.map((theme) => (
                  <button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                      currentTheme === theme.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-200'
                    }`}
                  >
                    <span className="text-lg">{theme.icon}</span>
                    <span className="font-medium">{theme.name}</span>
                    {currentTheme === theme.id && (
                      <svg className="w-4 h-4 ml-auto text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
