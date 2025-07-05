# Internationalization (i18n) System - AI on Turbo

## Overview

The AI on Turbo website now features a fully automated, SEO-friendly internationalization system supporting 9 languages with proper URL structure, hreflang tags, and localized content.

## Supported Languages

- **English** (en) - Default language
- **Spanish** (es) - Español
- **French** (fr) - Français
- **German** (de) - Deutsch
- **Polish** (pl) - Polski
- **Portuguese** (pt) - Português
- **Arabic** (ar) - العربية (RTL support)
- **Turkish** (tr) - Türkçe
- **Japanese** (ja) - 日本語

## URL Structure

- English (default): `/` → redirects to `/en`
- Other languages: `/es/`, `/fr/`, `/de/`, etc.
- Translated slugs: `/es/servicios` → `/es/services`

## Features Implemented

### ✅ Content Translation
- All text content (HTML, JavaScript-rendered)
- Metadata (titles, descriptions, alt text)
- Navigation elements (menus, buttons)
- URL slugs with proper rewrites

### ✅ SEO Preservation
- Hreflang tags for all language versions
- Language-specific sitemaps (generated in `/public/sitemaps/`)
- Proper canonical URLs for each language
- Localized meta titles/descriptions

### ✅ Technical Implementation
- App Router architecture with `[locale]` dynamic routes
- Middleware for automatic language detection
- Client-side language switching
- RTL support for Arabic
- Fallback translations when API unavailable

### ✅ Automation & QA
- Automated translation script (`/scripts/auto-translate.js`)
- Technical term flagging system
- Auto-generated hreflang and sitemap entries
- Fallback system for missing translations

## File Structure

```
/src/app/
├── [locale]/
│   ├── layout.tsx          # Localized layout with metadata
│   └── page.tsx            # Localized homepage
├── layout.tsx              # Root layout (redirects to /en)
└── page.tsx                # Root page (redirects to /en)

/public/locales/
├── en/common.json          # English translations
├── es/common.json          # Spanish translations
├── fr/common.json          # French translations
└── ... (other languages)

/public/sitemaps/
├── sitemap-en.xml          # English sitemap
├── sitemap-es.xml          # Spanish sitemap
└── ... (other languages)

/lib/
├── i18n.ts                 # i18n configuration
├── translation-service.js  # DeepL API integration
└── seo-manager.js          # SEO metadata handling

/components/
├── HreflangTags.tsx        # Hreflang tag generator
└── LanguageSwitcher.tsx    # Language switching component

/hooks/
└── useI18n.ts              # Client-side i18n hook

/src/middleware.ts          # Route handling middleware
```

## Usage

### Server-Side Translation
```typescript
import { getServerSideTranslations } from "@/lib/i18n";

export default async function LocalizedPage({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const translations = await getServerSideTranslations(locale);
  
  const t = (key: string, fallback: string) => {
    // Translation logic
    return translations[key] || fallback;
  };

  return (
    <div>
      <h1>{t('hero.title', 'Default Title')}</h1>
    </div>
  );
}
```

### Client-Side Translation
```typescript
import { useI18n } from '../hooks/useI18n';

export default function ClientComponent() {
  const { t, currentLocale, changeLanguage } = useI18n();
  
  return (
    <div>
      <h1>{t('hero.title', 'Default Title')}</h1>
      <button onClick={() => changeLanguage('es')}>
        Switch to Spanish
      </button>
    </div>
  );
}
```

## Translation Management

### Automated Translation
Run the translation script to automatically translate content:

```bash
# With DeepL API key (recommended)
DEEPL_API_KEY=your_api_key node scripts/auto-translate.js

# Without API key (uses fallback translations)
node scripts/auto-translate.js
```

### Manual Translation Updates
Edit the JSON files in `/public/locales/[locale]/common.json` for manual translations.

### Adding New Languages
1. Add the language code to `supportedLanguages` in `/lib/i18n.ts`
2. Add the language to middleware in `/src/middleware.ts`
3. Run the translation script
4. Update the language switcher component

## SEO Features

### Hreflang Tags
Automatically generated for all pages:
```html
<link rel="alternate" hreflang="es" href="https://ai-on-turbo.com/es" />
<link rel="alternate" hreflang="fr" href="https://ai-on-turbo.com/fr" />
<!-- ... other languages -->
<link rel="alternate" hreflang="x-default" href="https://ai-on-turbo.com" />
```

### Language-Specific Sitemaps
Generated at `/public/sitemaps/sitemap-[locale].xml` containing:
- Localized URLs
- Proper lastmod dates
- Language-specific content

### Canonical URLs
Each language version has proper canonical URLs set in metadata.

## Development

### Running the Application
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Testing Different Languages
- English: `http://localhost:3001/` or `http://localhost:3001/en`
- Spanish: `http://localhost:3001/es`
- French: `http://localhost:3001/fr`
- German: `http://localhost:3001/de`
- And so on...

## Future Enhancements

1. **API Integration**: Add DeepL/Google Translate API keys for real-time translation
2. **Content Management**: Implement a CMS for easier translation management
3. **Performance**: Add caching for translation files
4. **Analytics**: Track language usage and user preferences
5. **A/B Testing**: Test different translations for better conversion rates

## Notes

- The system uses fallback translations when API keys are not available
- RTL support is implemented for Arabic with proper CSS styling
- All translations are validated and technical terms are flagged for review
- The middleware handles automatic language detection from browser preferences
- SEO metadata is fully localized with proper character limits per language

## Troubleshooting

### Common Issues

1. **Build Errors**: Make sure all translation files exist and are valid JSON
2. **Missing Translations**: Check the console for warnings about missing translation files
3. **Routing Issues**: Verify middleware configuration and URL rewrite rules
4. **SEO Tags**: Ensure hreflang tags are properly generated and canonical URLs are set

### Performance Optimization

- Translation files are lazy-loaded per language
- Static generation is used for better performance
- Middleware efficiently handles routing without blocking
- Sitemaps are pre-generated for faster indexing

This i18n system provides a solid foundation for scaling the AI on Turbo website to international markets while maintaining excellent SEO performance and user experience.
