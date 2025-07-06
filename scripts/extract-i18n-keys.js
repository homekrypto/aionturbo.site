// Automated i18n key extractor for Next.js/React projects
// Scans for t('key') or t("key") usage in .js/.jsx/.ts/.tsx files
// Outputs a sorted list of unique keys to stdout or a file

const fs = require('fs');
const path = require('path');

const SRC_DIR = path.join(__dirname, '../src');
const KEY_REGEX = /t\(['"`]([\w.-]+)['"`]\)/g;

function walk(dir, filelist = []) {
  fs.readdirSync(dir).forEach(file => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, filelist);
    } else if (/(js|jsx|ts|tsx)$/.test(file)) {
      filelist.push(filepath);
    }
  });
  return filelist;
}

function extractKeysFromFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const keys = [];
  let match;
  while ((match = KEY_REGEX.exec(content))) {
    keys.push(match[1]);
  }
  return keys;
}

function main() {
  const files = walk(SRC_DIR);
  const allKeys = new Set();
  files.forEach(file => {
    extractKeysFromFile(file).forEach(key => allKeys.add(key));
  });
  const sorted = Array.from(allKeys).sort();
  // Print to stdout
  sorted.forEach(key => console.log(key));
  // Optionally, write to a file:
  // fs.writeFileSync(path.join(__dirname, 'extracted-keys.txt'), sorted.join('\n'));
}

main();
