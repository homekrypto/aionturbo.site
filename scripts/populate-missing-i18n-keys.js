// scripts/populate-missing-i18n-keys.js
// Auto-populates missing translation keys in all locale files using extracted keys.
// Usage: node scripts/populate-missing-i18n-keys.js

const fs = require('fs');
const path = require('path');

const LOCALES = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];
const LOCALES_DIR = path.join(__dirname, '../locales');
const EXTRACTED_KEYS_PATH = path.join(__dirname, 'extracted-i18n-keys.json');

// Load extracted keys (should be a flat array of strings)
if (!fs.existsSync(EXTRACTED_KEYS_PATH)) {
  console.error('Extracted keys file not found:', EXTRACTED_KEYS_PATH);
  process.exit(1);
}
const extractedKeys = JSON.parse(fs.readFileSync(EXTRACTED_KEYS_PATH, 'utf8'));

// Load English translations as fallback
const enPath = path.join(LOCALES_DIR, 'en.json');
const enTranslations = JSON.parse(fs.readFileSync(enPath, 'utf8'));

LOCALES.forEach(locale => {
  const localePath = path.join(LOCALES_DIR, `${locale}.json`);
  let translations = {};
  if (fs.existsSync(localePath)) {
    translations = JSON.parse(fs.readFileSync(localePath, 'utf8'));
  }
  let updated = false;
  extractedKeys.forEach(key => {
    if (!(key in translations)) {
      // Use English as fallback, or placeholder
      translations[key] = locale === 'en' ? (enTranslations[key] || key) : `[MISSING] ${enTranslations[key] || key}`;
      updated = true;
    }
  });
  // Optionally, remove keys not in extractedKeys (uncomment if desired)
  // Object.keys(translations).forEach(key => {
  //   if (!extractedKeys.includes(key)) {
  //     delete translations[key];
  //     updated = true;
  //   }
  // });
  if (updated) {
    fs.writeFileSync(localePath, JSON.stringify(translations, null, 2) + '\n', 'utf8');
    console.log(`Updated: ${localePath}`);
  } else {
    console.log(`No changes: ${localePath}`);
  }
});

console.log('i18n locale files are up to date.');
