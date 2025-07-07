const fs = require('fs');
const path = require('path');

// Test loading Polish translations
try {
  const plTranslations = require('./locales/pl.json');
  console.log('Polish translations loaded successfully');
  console.log('hero.title:', plTranslations['hero.title']);
  console.log('hero.subtitle:', plTranslations['hero.subtitle']);
} catch (error) {
  console.error('Error loading Polish translations:', error);
}

// Test loading English translations
try {
  const enTranslations = require('./locales/en.json');
  console.log('\nEnglish translations loaded successfully');
  console.log('hero.title:', enTranslations['hero.title']);
  console.log('hero.subtitle:', enTranslations['hero.subtitle']);
} catch (error) {
  console.error('Error loading English translations:', error);
} 