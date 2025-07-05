/**
 * SEO Manager for Internationalization
 * Handles hreflang tags, sitemaps, and localized metadata
 */

import { useRouter } from 'next/router';

export class SEOManager {
  constructor() {
    this.locales = ['en', 'es', 'fr', 'de', 'pl', 'pt', 'ar', 'tr', 'ja'];
    this.defaultLocale = 'en';
    this.domain = process.env.NEXT_PUBLIC_DOMAIN || 'https://ai-on-turbo.com';
  }

  generateHreflangTags(pathname) {
    const hreflangTags = [];
    
    this.locales.forEach(loc => {
      const url = this.getLocalizedUrl(pathname, loc);
      hreflangTags.push({
        hreflang: loc,
        href: url
      });
    });

    // Add x-default for the default language
    hreflangTags.push({
      hreflang: 'x-default',
      href: this.getLocalizedUrl(pathname, this.defaultLocale)
    });

    return hreflangTags;
  }

  getLocalizedUrl(pathname, locale) {
    if (locale === this.defaultLocale) {
      return `${this.domain}${pathname}`;
    }
    return `${this.domain}/${locale}${pathname}`;
  }

  generateLocalizedMetadata(content, locale) {
    const metadata = {
      title: this.optimizeTitle(content.title, locale),
      description: this.optimizeDescription(content.description, locale),
      keywords: content.keywords?.join(', '),
      openGraph: {
        title: content.title,
        description: content.description,
        url: this.getLocalizedUrl(content.path, locale),
        locale: locale,
        alternateLocales: this.locales.filter(l => l !== locale)
      }
    };

    return metadata;
  }

  optimizeTitle(title, locale) {
    const limits = {
      'en': 60,
      'es': 55,
      'fr': 55,
      'de': 50,
      'ar': 45,
      'ja': 30,
      'default': 60
    };

    const limit = limits[locale] || limits.default;
    
    if (title.length <= limit) {
      return title;
    }

    return title.substring(0, limit - 3) + '...';
  }

  optimizeDescription(description, locale) {
    const limits = {
      'en': 160,
      'es': 150,
      'fr': 150,
      'de': 140,
      'ar': 120,
      'ja': 80,
      'default': 160
    };

    const limit = limits[locale] || limits.default;
    
    if (description.length <= limit) {
      return description;
    }

    return description.substring(0, limit - 3) + '...';
  }

  generateSitemap(pages, locale) {
    const sitemapEntries = pages.map(page => {
      const url = this.getLocalizedUrl(page.path, locale);
      return {
        url: url,
        lastModified: page.lastModified || new Date().toISOString(),
        changeFrequency: page.changeFreq || 'weekly',
        priority: page.priority || 0.8,
        alternates: this.generateAlternateUrls(page.path)
      };
    });

    return sitemapEntries;
  }

  generateAlternateUrls(pathname) {
    return this.locales.reduce((acc, locale) => {
      acc[locale] = this.getLocalizedUrl(pathname, locale);
      return acc;
    }, {});
  }

  validateMixedContent(htmlContent, expectedLocale) {
    // Simple validation to check for mixed language content
    const patterns = {
      'en': /\b(the|and|or|of|to|in|for|with|on|at|by|from|as|is|are|was|were)\b/gi,
      'es': /\b(el|la|los|las|y|o|de|para|con|en|por|desde|como|es|son|fue|fueron)\b/gi,
      'fr': /\b(le|la|les|et|ou|de|pour|avec|en|par|depuis|comme|est|sont|était|étaient)\b/gi,
      'de': /\b(der|die|das|und|oder|von|für|mit|in|durch|seit|wie|ist|sind|war|waren)\b/gi
    };

    const expectedPattern = patterns[expectedLocale];
    if (!expectedPattern) return { isValid: true, issues: [] };

    const matches = (htmlContent.match(expectedPattern) || []).length;
    const totalWords = htmlContent.split(/\s+/).length;
    const ratio = matches / totalWords;

    return {
      isValid: ratio > 0.1, // At least 10% of words should match expected language
      ratio: ratio,
      issues: ratio <= 0.1 ? ['Potential mixed language content detected'] : []
    };
  }
}

export function useLocalizedSEO() {
  const router = useRouter();
  const seoManager = new SEOManager();
  
  return {
    generateHreflang: (pathname) => seoManager.generateHreflangTags(pathname, router.locale),
    getLocalizedMeta: (content) => seoManager.generateLocalizedMetadata(content, router.locale),
    getCurrentLocale: () => router.locale,
    getAlternateUrls: (pathname) => seoManager.generateAlternateUrls(pathname)
  };
}
