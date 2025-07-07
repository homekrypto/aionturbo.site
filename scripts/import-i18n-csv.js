const fs = require('fs');
const path = require('path');
const readline = require('readline');

const LOCALES_DIR = path.join(__dirname, '../public/locales');
const LANGS = ['ar', 'de', 'es', 'fr', 'ja', 'pl', 'pt', 'tr'];

function unflatten(data) {
  const result = {};
  for (const flatKey in data) {
    const keys = flatKey.split('.');
    let cur = result;
    keys.forEach((k, i) => {
      if (i === keys.length - 1) {
        cur[k] = data[flatKey];
      } else {
        cur[k] = cur[k] || {};
        cur = cur[k];
      }
    });
  }
  return result;
}

async function importCSV(csvPath) {
  const rl = readline.createInterface({
    input: fs.createReadStream(csvPath),
    crlfDelay: Infinity
  });
  let header;
  const rows = [];
  for await (const line of rl) {
    if (!header) {
      header = line.split(',').map(h => h.trim());
      continue;
    }
    // Handle quoted CSV values
    const regex = /"([^"]*)"|([^,]+)/g;
    const cols = [];
    let match;
    let lastIndex = 0;
    while ((match = regex.exec(line)) !== null) {
      if (match[1] !== undefined) {
        cols.push(match[1]);
      } else {
        cols.push(match[2]);
      }
      lastIndex = regex.lastIndex;
    }
    // Fill missing columns
    while (cols.length < header.length) cols.push('');
    const row = {};
    header.forEach((h, i) => row[h] = cols[i] || '');
    rows.push(row);
  }
  for (const lang of LANGS) {
    const flat = {};
    for (const row of rows) {
      if (row[lang]) flat[row.key] = row[lang];
    }
    const out = unflatten(flat);
    const outPath = path.join(LOCALES_DIR, lang, 'common.json');
    fs.writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf8');
    console.log('Updated:', outPath);
  }
}

const csvFile = process.argv[2];
if (!csvFile) {
  console.error('Usage: node scripts/import-i18n-csv.js <csv-file-path>');
  process.exit(1);
}
importCSV(csvFile); 