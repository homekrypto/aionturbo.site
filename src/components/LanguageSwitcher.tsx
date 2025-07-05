'use client';

import { useI18n } from '../../hooks/useI18n';

export default function LanguageSwitcher() {
  const { currentLocale, changeLanguage, supportedLanguages } = useI18n();

  const languageNames: Record<string, string> = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    pl: 'Polski',
    pt: 'Português',
    ar: 'العربية',
    tr: 'Türkçe',
    ja: '日本語',
  };

  return (
    <div className="relative">
      <select
        value={currentLocale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="appearance-none bg-transparent border border-gray-300 rounded px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {supportedLanguages.map((locale) => (
          <option key={locale} value={locale}>
            {languageNames[locale]}
          </option>
        ))}
      </select>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
