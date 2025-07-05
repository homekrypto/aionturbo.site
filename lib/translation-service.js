/**
 * Translation Service with DeepL API Integration
 * Handles automatic translation of website content
 */

class TranslationService {
  constructor() {
    this.apiKey = process.env.DEEPL_API_KEY || '';
    this.baseUrl = 'https://api-free.deepl.com/v2';
    this.supportedLanguages = {
      'es': 'ES',
      'fr': 'FR', 
      'de': 'DE',
      'pl': 'PL',
      'pt': 'PT',
      'ar': 'AR',
      'tr': 'TR',
      'ja': 'JA'
    };
    
    // Industry-specific terms that need manual review
    this.technicalTerms = [
      'AI', 'Machine Learning', 'Deep Learning', 'Neural Networks',
      'Big Data', 'Analytics', 'API', 'SaaS', 'Cloud Computing',
      'Business Intelligence', 'Data Engineering', 'MLOps',
      'Computer Vision', 'NLP', 'GPT', 'LLM', 'RAG'
    ];
  }

  async translateText(text, targetLang, sourceLang = 'EN') {
    if (!this.apiKey) {
      console.warn('DeepL API key not found. Using fallback translations.');
      return this.getFallbackTranslation(text, targetLang);
    }

    try {
      const response = await fetch(`${this.baseUrl}/translate`, {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${this.apiKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text: text,
          source_lang: sourceLang,
          target_lang: this.supportedLanguages[targetLang] || targetLang.toUpperCase(),
          preserve_formatting: '1',
          tag_handling: 'html'
        })
      });

      if (!response.ok) {
        throw new Error(`DeepL API error: ${response.status}`);
      }

      const data = await response.json();
      const translatedText = data.translations[0].text;
      
      // Flag technical terms for review
      return this.flagTechnicalTerms(translatedText, targetLang);
      
    } catch (error) {
      console.error('Translation error:', error);
      return this.getFallbackTranslation(text, targetLang);
    }
  }

  flagTechnicalTerms(text, targetLang) {
    let flaggedText = text;
    const flags = [];

    this.technicalTerms.forEach(term => {
      const regex = new RegExp(`\\b${term}\\b`, 'gi');
      if (regex.test(text)) {
        flags.push({
          term: term,
          language: targetLang,
          needsReview: true,
          context: text.substring(Math.max(0, text.indexOf(term) - 50), text.indexOf(term) + term.length + 50)
        });
      }
    });

    return {
      text: flaggedText,
      flags: flags,
      needsManualReview: flags.length > 0
    };
  }

  getFallbackTranslation(text, targetLang) {
    // Basic fallback translations for common phrases
    const fallbacks = {
      'es': {
        'Services': 'Servicios',
        'Products': 'Productos',
        'Solutions': 'Soluciones',
        'Contact': 'Contacto',
        'About': 'Acerca de',
        'Home': 'Inicio'
      },
      'fr': {
        'Services': 'Services',
        'Products': 'Produits',
        'Solutions': 'Solutions',
        'Contact': 'Contact',
        'About': 'À propos',
        'Home': 'Accueil'
      },
      'de': {
        'Services': 'Dienstleistungen',
        'Products': 'Produkte',
        'Solutions': 'Lösungen',
        'Contact': 'Kontakt',
        'About': 'Über uns',
        'Home': 'Startseite'
      }
    };

    return {
      text: fallbacks[targetLang]?.[text] || text,
      flags: [],
      needsManualReview: false
    };
  }

  async translateBatch(texts, targetLang) {
    const results = [];
    for (const text of texts) {
      const result = await this.translateText(text, targetLang);
      results.push(result);
      // Add delay to respect API rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return results;
  }

  generateSlug(text, locale) {
    const slugMap = {
      'es': {
        'services': 'servicios',
        'products': 'productos',
        'solutions': 'soluciones',
        'contact': 'contacto',
        'about': 'acerca-de'
      },
      'fr': {
        'services': 'services',
        'products': 'produits', 
        'solutions': 'solutions',
        'contact': 'contact',
        'about': 'a-propos'
      },
      'de': {
        'services': 'dienstleistungen',
        'products': 'produkte',
        'solutions': 'loesungen',
        'contact': 'kontakt',
        'about': 'ueber-uns'
      }
    };

    return slugMap[locale]?.[text.toLowerCase()] || 
           text.toLowerCase()
               .replace(/[^a-z0-9\s-]/g, '')
               .replace(/\s+/g, '-')
               .replace(/-+/g, '-')
               .trim('-');
  }
}

module.exports = TranslationService;
