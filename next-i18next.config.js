const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'],
    localePath: path.resolve('./public/locales'),
    fallbackLng: {
      default: ['en'],
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
