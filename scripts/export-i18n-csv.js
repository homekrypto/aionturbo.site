const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '../public/locales');
const BASE_LANG = 'en';
const LANGS = ['en', 'ar', 'de', 'es', 'fr', 'ja', 'pl', 'pt', 'tr'];

function flatten(obj, prefix = '', res = {}) {
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    const newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
      flatten(val, newKey, res);
    } else {
      res[newKey] = val;
    }
  }
  return res;
}

function readJson(lang, file) {
  const filePath = path.join(LOCALES_DIR, lang, file);
  if (fs.existsSync(filePath)) {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  return {};
}

function main() {
  const baseDir = path.join(LOCALES_DIR, BASE_LANG);
  const baseFiles = fs.readdirSync(baseDir).filter(f => f.endsWith('.json'));
  for (const file of baseFiles) {
    const rows = [];
    const base = flatten(readJson(BASE_LANG, file));
    const others = {};
    for (const lang of LANGS) {
      if (lang === BASE_LANG) continue;
      others[lang] = flatten(readJson(lang, file));
    }
    for (const key of Object.keys(base)) {
      const row = [key, base[key]];
      for (const lang of LANGS) {
        if (lang === BASE_LANG) continue;
        row.push(others[lang][key] || '');
      }
      rows.push(row);
    }
    const header = ['key', ...LANGS];
    const csv = [header.join(',')].concat(rows.map(r => r.map(v => '"' + String(v).replace(/"/g, '""') + '"').join(','))).join('\n');
    const outPath = path.join(__dirname, `../public/translations/${file.replace('.json', '')}-translations.csv`);
    fs.writeFileSync(outPath, csv, 'utf8');
    console.log('Exported:', outPath);
  }
}

main(); 