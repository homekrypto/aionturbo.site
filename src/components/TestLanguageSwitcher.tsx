'use client';

import { useI18n } from '../../hooks/useI18n';

export default function TestLanguageSwitcher() {
  const { currentLocale, changeLanguage, supportedLanguages, t } = useI18n();

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
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg border">
      <div className="text-sm text-gray-600 mb-2">
        Current Language: {languageNames[currentLocale]}
      </div>
      <div className="text-sm text-gray-600 mb-2">
        Test Translation: {t('hero.title', 'Your Trusted AI Partner')}
      </div>
      <div className="flex flex-wrap gap-2">
        {supportedLanguages.map((locale) => (
          <button
            key={locale}
            onClick={() => changeLanguage(locale)}
            className={`px-3 py-1 rounded text-sm transition-colors ${
              currentLocale === locale
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {languageNames[locale]}
          </button>
        ))}
      </div>
    </div>
  );
}
