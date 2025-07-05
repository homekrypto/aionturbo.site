#!/usr/bin/env node

/**
 * Automated Translation Script
 * Translates all content files using DeepL API
 */

const fs = require('fs');
const path = require('path');
const TranslationService = require('../lib/translation-service');

class AutoTranslator {
  constructor() {
    this.translationService = new TranslationService();
    this.sourceLocale = 'en';
    this.targetLocales = ['es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];
    this.localesDir = path.join(__dirname, '../public/locales');
  }

  async translateAllContent() {
    console.log('🌍 Starting automated translation process...');
    
    const sourceFile = path.join(this.localesDir, this.sourceLocale, 'common.json');
    const sourceContent = JSON.parse(fs.readFileSync(sourceFile, 'utf8'));
    
    for (const targetLocale of this.targetLocales) {
      console.log(`\n📝 Translating to ${targetLocale}...`);
      await this.translateToLocale(sourceContent, targetLocale);
    }
    
    console.log('\n✅ Translation process completed!');
    console.log('📋 Next steps:');
    console.log('1. Review flagged technical terms');
    console.log('2. Update hreflang tags');
    console.log('3. Generate localized sitemaps');
  }

  async translateToLocale(sourceContent, targetLocale) {
    try {
      const translatedContent = await this.translateObject(sourceContent, targetLocale);
      
      // Create locale directory if it doesn't exist
      const localeDir = path.join(this.localesDir, targetLocale);
      if (!fs.existsSync(localeDir)) {
        fs.mkdirSync(localeDir, { recursive: true });
      }
      
      // Write translated content
      const outputFile = path.join(localeDir, 'common.json');
      fs.writeFileSync(outputFile, JSON.stringify(translatedContent, null, 2), 'utf8');
      
      console.log(`✅ ${targetLocale}/common.json created`);
      
    } catch (error) {
      console.error(`❌ Error translating to ${targetLocale}:`, error.message);
    }
  }

  async translateObject(obj, targetLocale, path = '') {
    const result = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const currentPath = path ? `${path}.${key}` : key;
      
      if (typeof value === 'string') {
        // Skip placeholder strings and technical terms
        if (this.shouldSkipTranslation(value)) {
          result[key] = value;
          continue;
        }
        
        const translation = await this.translationService.translateText(value, targetLocale);
        result[key] = translation.text;
        
        // Log flagged terms
        if (translation.needsManualReview) {
          console.log(`⚠️  Manual review needed for "${currentPath}": ${translation.flags.length} technical terms`);
        }
        
      } else if (typeof value === 'object' && value !== null) {
        result[key] = await this.translateObject(value, targetLocale, currentPath);
      } else {
        result[key] = value;
      }
    }
    
    return result;
  }

  shouldSkipTranslation(text) {
    const skipPatterns = [
      /^{{.*}}$/, // Interpolation placeholders
      /^\d+$/, // Numbers only
      /^[A-Z]{2,}$/, // Acronyms
      /^[^\w\s]+$/, // Special characters only
      /^(AI|ML|API|SaaS|RAG|LLM|GPT|NLP)$/i // Technical abbreviations
    ];
    
    return skipPatterns.some(pattern => pattern.test(text.trim()));
  }

  async generateHreflangTags() {
    console.log('\n🔗 Generating hreflang tags...');
    
    const hreflangTemplate = `
<!-- Hreflang tags for internationalization -->
${this.targetLocales.concat([this.sourceLocale]).map(locale => 
  `<link rel="alternate" hreflang="${locale}" href="https://ai-on-turbo.com${locale === 'en' ? '' : '/' + locale}{{pathname}}" />`
).join('\n')}
<link rel="alternate" hreflang="x-default" href="https://ai-on-turbo.com{{pathname}}" />
`;

    fs.writeFileSync(
      path.join(__dirname, '../components/HreflangTags.tsx'), 
      this.generateHreflangComponent(hreflangTemplate)
    );
    
    console.log('✅ Hreflang component generated');
  }

  generateHreflangComponent(template) {
    return `
import Head from 'next/head';
import { useRouter } from 'next/router';

interface HreflangTagsProps {
  pathname?: string;
}

export default function HreflangTags({ pathname }: HreflangTagsProps) {
  const router = useRouter();
  const currentPath = pathname || router.asPath;
  
  return (
    <Head>
      ${this.targetLocales.concat([this.sourceLocale]).map(locale => 
        `<link rel="alternate" hreflang="${locale}" href={\`https://ai-on-turbo.com\${${locale === 'en' ? 'currentPath' : `'/${locale}' + currentPath`}}\`} />`
      ).join('\n      ')}
      <link rel="alternate" hreflang="x-default" href={\`https://ai-on-turbo.com\${currentPath}\`} />
    </Head>
  );
}
`;
  }

  async generateSitemaps() {
    console.log('\n🗺️  Generating localized sitemaps...');
    
    const pages = [
      { path: '/', priority: 1.0, changeFreq: 'weekly' },
      { path: '/services', priority: 0.9, changeFreq: 'weekly' },
      { path: '/products', priority: 0.9, changeFreq: 'weekly' },
      { path: '/solutions', priority: 0.9, changeFreq: 'weekly' },
      { path: '/about', priority: 0.8, changeFreq: 'monthly' },
      { path: '/contact', priority: 0.8, changeFreq: 'monthly' },
    ];
    
    for (const locale of ['en', ...this.targetLocales]) {
      await this.generateSitemapForLocale(pages, locale);
    }
    
    console.log('✅ All sitemaps generated');
  }

  async generateSitemapForLocale(pages, locale) {
    const domain = 'https://ai-on-turbo.com';
    const localePrefix = locale === 'en' ? '' : `/${locale}`;
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${domain}${localePrefix}${page.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
${this.targetLocales.concat(['en']).map(altLocale => {
  const altPrefix = altLocale === 'en' ? '' : `/${altLocale}`;
  return `    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${domain}${altPrefix}${page.path}" />`;
}).join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${domain}${page.path}" />
  </url>`).join('\n')}
</urlset>`;

    const sitemapDir = path.join(__dirname, '../public/sitemaps');
    if (!fs.existsSync(sitemapDir)) {
      fs.mkdirSync(sitemapDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(sitemapDir, `sitemap-${locale}.xml`), 
      sitemap
    );
    
    console.log(`✅ Sitemap for ${locale} generated`);
  }
}

// Run the translator if called directly
if (require.main === module) {
  const translator = new AutoTranslator();
  translator.translateAllContent()
    .then(() => translator.generateHreflangTags())
    .then(() => translator.generateSitemaps())
    .catch(console.error);
}

module.exports = AutoTranslator;
