#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const pagesDir = '/Users/michalbabula/Documents/ai-on-turbo/src/app/[locale]';
const pages = ['services', 'solutions', 'products', 'case-studies', 'contact'];

const oldPattern = /const t = \(key: string, fallback: string\) => \{[\s\S]*?\};/g;
const newPattern = `const t = createTranslationFunction(translations.common || translations);`;

// Also need to update the imports
const oldImportPattern = /import \{ getServerSideTranslations \} from "@\/lib\/i18n";/g;
const newImportPattern = `import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";`;

pages.forEach(page => {
  const pagePath = path.join(pagesDir, page, 'page.tsx');
  
  if (fs.existsSync(pagePath)) {
    let content = fs.readFileSync(pagePath, 'utf8');
    
    // Update imports
    content = content.replace(oldImportPattern, newImportPattern);
    
    // Update the translation function
    content = content.replace(oldPattern, newPattern);
    
    fs.writeFileSync(pagePath, content);
    console.log(`Updated ${pagePath}`);
  } else {
    console.log(`File not found: ${pagePath}`);
  }
});

console.log('All pages updated successfully!');
