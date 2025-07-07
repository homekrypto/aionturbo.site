const { createTranslationFunction } = require('./lib/i18n.ts');

// Load Polish translations
const plTranslations = require('./locales/pl.json');

// Create translation function
const t = createTranslationFunction(plTranslations);

// Test some translations
console.log('Testing translation function:');
console.log('hero.title:', t('hero.title', 'Your Trusted AI Partner'));
console.log('hero.subtitle:', t('hero.subtitle', 'Expert AI Consultancy Since 2017.'));
console.log('platform.title:', t('platform.title', 'Your In-House Artificial Intelligence Platform'));
console.log('why.title:', t('why.title', 'Why Choose AI on Turbo'));

// Test with non-existent key
console.log('non.existent.key:', t('non.existent.key', 'Fallback text')); 