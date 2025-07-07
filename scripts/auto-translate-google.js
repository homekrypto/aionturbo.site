// Batch auto-translate all missing keys in translation JSON files using google-translate-api (CommonJS, no key required)
const fs = require('fs');
const path = require('path');
const translate = require('google-translate-api');

const LOCALES_DIR = path.join(__dirname, '../public/locales');
const BASE_LANG = 'en';
const LANGS = fs.readdirSync(LOCALES_DIR).filter(f => fs.statSync(path.join(LOCALES_DIR, f)).isDirectory());

async function translateText(text, to) {
  try {
    const res = await translate(text, { to });
    return res.text;
  } catch (e) {
    console.error(`Translation error for "${text}" to ${to}:`, e.message);
    return text;
  }
}

async function translateValue(value, targetLang) {
  if (typeof value === 'string') {
    return await translateText(value, targetLang);
  } else if (Array.isArray(value)) {
    return await Promise.all(value.map(v => translateValue(v, targetLang)));
  } else if (typeof value === 'object' && value !== null) {
    const result = {};
    for (const k of Object.keys(value)) {
      result[k] = await translateValue(value[k], targetLang);
    }
    return result;
  } else {
    return value;
  }
}

async function processFile(baseFile, targetFile, targetLang) {
  const base = JSON.parse(fs.readFileSync(baseFile, 'utf8'));
  let target = {};
  if (fs.existsSync(targetFile)) {
    target = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
  }
  let changed = false;
  async function processKey(key, baseVal, targetVal) {
    if (typeof baseVal === 'string') {
      if (!targetVal || targetVal === baseVal) {
        target[key] = await translateText(baseVal, targetLang);
        changed = true;
      }
    } else if (Array.isArray(baseVal)) {
      if (!targetVal || JSON.stringify(targetVal) === JSON.stringify(baseVal)) {
        target[key] = await translateValue(baseVal, targetLang);
        changed = true;
      }
    } else if (typeof baseVal === 'object' && baseVal !== null) {
      if (!targetVal || JSON.stringify(targetVal) === JSON.stringify(baseVal)) {
        target[key] = await translateValue(baseVal, targetLang);
        changed = true;
      } else {
        target[key] = target[key] || {};
        for (const subKey of Object.keys(baseVal)) {
          await processKey(subKey, baseVal[subKey], targetVal ? targetVal[subKey] : undefined);
        }
      }
    } else {
      target[key] = baseVal;
    }
  }
  for (const key of Object.keys(base)) {
    await processKey(key, base[key], target[key]);
  }
  if (changed) {
    fs.writeFileSync(targetFile, JSON.stringify(target, null, 2), 'utf8');
    console.log(`Updated: ${targetFile}`);
  }
}

async function main() {
  const baseDir = path.join(LOCALES_DIR, BASE_LANG);
  const baseFiles = fs.readdirSync(baseDir).filter(f => f.endsWith('.json'));
  for (const lang of LANGS) {
    if (lang === BASE_LANG) continue;
    const langCode = lang.split('-')[0];
    const targetDir = path.join(LOCALES_DIR, lang);
    for (const file of baseFiles) {
      const baseFile = path.join(baseDir, file);
      const targetFile = path.join(targetDir, file);
      await processFile(baseFile, targetFile, langCode);
    }
  }
  console.log('✅ Batch translation complete!');
}

main(); 