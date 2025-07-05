/**
 * Global Footer Controls - Vanilla JavaScript Implementation
 * Handles language switching, currency display, and theme selection
 */

class GlobalFooterControls {
  constructor() {
    this.languages = [
      { code: 'en', nativeName: 'English', flag: '🇺🇸' },
      { code: 'es', nativeName: 'Español', flag: '🇪🇸' },
      { code: 'fr', nativeName: 'Français', flag: '🇫🇷' },
      { code: 'de', nativeName: 'Deutsch', flag: '🇩🇪' },
      { code: 'ja', nativeName: '日本語', flag: '🇯🇵' },
    ];

    this.themes = [
      { id: 'light', name: 'Light', icon: '☀️' },
      { id: 'dark', name: 'Dark', icon: '🌙' },
      { id: 'system', name: 'System', icon: '🖥️' },
    ];

    this.currencies = [
      { code: 'USD', symbol: '$', rate: 1.0 },
      { code: 'EUR', symbol: '€', rate: 0.85 },
      { code: 'GBP', symbol: '£', rate: 0.73 },
    ];

    this.currentLanguage = 'en';
    this.currentTheme = 'light';
    this.currentCurrency = this.currencies[0];
    this.exchangeRates = {};
    this.translations = {};
    this.systemThemeQuery = null;

    this.init();
  }

  init() {
    this.loadFromStorage();
    this.detectBrowserPreferences();
    this.setupEventListeners();
    this.fetchExchangeRates();
    this.loadTranslations();
  }

  loadFromStorage() {
    // Load language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && this.languages.some(lang => lang.code === savedLanguage)) {
      this.currentLanguage = savedLanguage;
    }

    // Load theme preference
    const savedTheme = localStorage.getItem('preferred-theme');
    if (savedTheme && this.themes.some(theme => theme.id === savedTheme)) {
      this.currentTheme = savedTheme;
      this.applyTheme(savedTheme);
    }

    // Load currency preference
    const savedCurrency = localStorage.getItem('preferred-currency');
    if (savedCurrency) {
      const currency = this.currencies.find(curr => curr.code === savedCurrency);
      if (currency) {
        this.currentCurrency = currency;
      }
    }
  }

  detectBrowserPreferences() {
    // Auto-detect language from browser if not saved
    const savedLanguage = localStorage.getItem('preferred-language');
    if (!savedLanguage) {
      const browserLang = navigator.language.split('-')[0];
      const supportedLang = this.languages.find(lang => lang.code === browserLang);
      if (supportedLang) {
        this.currentLanguage = supportedLang.code;
      }
    }

    // Auto-detect theme from system if not saved
    const savedTheme = localStorage.getItem('preferred-theme');
    if (!savedTheme) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = 'system';
        this.applyTheme('system');
      }
    }
  }

  setupEventListeners() {
    // Listen for system theme changes
    this.systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.systemThemeQuery.addEventListener('change', (e) => {
      if (this.currentTheme === 'system') {
        this.applyTheme('system');
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.global-footer-controls')) {
        this.closeAllDropdowns();
      }
    });

    // Handle keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllDropdowns();
      }
    });
  }

  async fetchExchangeRates() {
    try {
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      const data = await response.json();
      this.exchangeRates = data.rates;
      
      // Update currency rates
      this.currencies.forEach(currency => {
        if (this.exchangeRates[currency.code]) {
          currency.rate = this.exchangeRates[currency.code];
        }
      });
      
      this.updateCurrencyDisplay();
    } catch (error) {
      console.warn('Failed to fetch exchange rates:', error);
    }
  }

  async loadTranslations() {
    try {
      const response = await fetch(`/translations/${this.currentLanguage}.json`);
      if (response.ok) {
        this.translations = await response.json();
        this.applyTranslations();
      }
    } catch (error) {
      console.warn('Failed to load translations:', error);
      // Fallback to mock translations
      this.translations = this.getMockTranslations(this.currentLanguage);
      this.applyTranslations();
    }
  }

  getMockTranslations(langCode) {
    const translations = {
      en: {
        language: 'Language',
        theme: 'Theme',
        currency: 'Currency',
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      },
      es: {
        language: 'Idioma',
        theme: 'Tema',
        currency: 'Moneda',
        light: 'Claro',
        dark: 'Oscuro',
        system: 'Sistema'
      },
      fr: {
        language: 'Langue',
        theme: 'Thème',
        currency: 'Devise',
        light: 'Clair',
        dark: 'Sombre',
        system: 'Système'
      },
      de: {
        language: 'Sprache',
        theme: 'Design',
        currency: 'Währung',
        light: 'Hell',
        dark: 'Dunkel',
        system: 'System'
      },
      ja: {
        language: '言語',
        theme: 'テーマ',
        currency: '通貨',
        light: 'ライト',
        dark: 'ダーク',
        system: 'システム'
      }
    };
    
    return translations[langCode] || translations.en;
  }

  applyTheme(theme) {
    const root = document.documentElement;
    
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    } else {
      root.setAttribute('data-theme', theme);
    }
  }

  applyTranslations() {
    // Apply translations to elements with data-translate attributes
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (this.translations[key]) {
        element.textContent = this.translations[key];
      }
    });
  }

  changeLanguage(langCode) {
    this.currentLanguage = langCode;
    localStorage.setItem('preferred-language', langCode);
    this.loadTranslations();
    this.updateLanguageDisplay();
    this.closeAllDropdowns();
  }

  changeTheme(theme) {
    this.currentTheme = theme;
    localStorage.setItem('preferred-theme', theme);
    this.applyTheme(theme);
    this.updateThemeDisplay();
    this.closeAllDropdowns();
  }

  changeCurrency(currencyCode) {
    const currency = this.currencies.find(curr => curr.code === currencyCode);
    if (currency) {
      this.currentCurrency = currency;
      localStorage.setItem('preferred-currency', currencyCode);
      this.updateCurrencyDisplay();
    }
  }

  updateLanguageDisplay() {
    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    const languageButton = document.querySelector('.language-selector-button');
    if (languageButton && currentLang) {
      languageButton.innerHTML = `
        <span class="flag">${currentLang.flag}</span>
        <span class="language-name">${currentLang.nativeName}</span>
        <span class="dropdown-arrow">▼</span>
      `;
    }
  }

  updateThemeDisplay() {
    const currentThemeObj = this.themes.find(theme => theme.id === this.currentTheme);
    const themeButton = document.querySelector('.theme-selector-button');
    if (themeButton && currentThemeObj) {
      themeButton.innerHTML = `
        <span class="theme-icon">${currentThemeObj.icon}</span>
        <span class="theme-name">${this.translations[currentThemeObj.id] || currentThemeObj.name}</span>
        <span class="dropdown-arrow">▼</span>
      `;
    }
  }

  updateCurrencyDisplay() {
    const currencyDisplay = document.querySelector('.currency-display');
    if (currencyDisplay) {
      currencyDisplay.innerHTML = `
        <span class="currency-symbol">${this.currentCurrency.symbol}</span>
        <span class="currency-code">${this.currentCurrency.code}</span>
        <span class="currency-rate">${this.currentCurrency.rate.toFixed(4)}</span>
      `;
    }
  }

  toggleLanguageDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
      this.closeOtherDropdowns(['language-dropdown']);
    }
  }

  toggleThemeDropdown() {
    const dropdown = document.querySelector('.theme-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
      this.closeOtherDropdowns(['theme-dropdown']);
    }
  }

  closeAllDropdowns() {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('open');
    });
  }

  closeOtherDropdowns(except = []) {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      if (!except.some(className => dropdown.classList.contains(className))) {
        dropdown.classList.remove('open');
      }
    });
  }

  render(container) {
    const html = `
      <div class="global-footer-controls">
        <div class="control-group">
          <label class="control-label" data-translate="language">Language</label>
          <div class="selector-container">
            <button class="language-selector-button selector-button" 
                    onclick="footerControls.toggleLanguageDropdown()"
                    aria-expanded="false"
                    aria-haspopup="true">
              <span class="flag">${this.languages.find(l => l.code === this.currentLanguage)?.flag}</span>
              <span class="language-name">${this.languages.find(l => l.code === this.currentLanguage)?.nativeName}</span>
              <span class="dropdown-arrow">▼</span>
            </button>
            <div class="language-dropdown dropdown" role="menu">
              ${this.languages.map(lang => `
                <button class="dropdown-item ${lang.code === this.currentLanguage ? 'active' : ''}"
                        onclick="footerControls.changeLanguage('${lang.code}')"
                        role="menuitem">
                  <span class="flag">${lang.flag}</span>
                  <span class="language-name">${lang.nativeName}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" data-translate="currency">Currency</label>
          <div class="currency-display">
            <span class="currency-symbol">${this.currentCurrency.symbol}</span>
            <span class="currency-code">${this.currentCurrency.code}</span>
            <span class="currency-rate">${this.currentCurrency.rate.toFixed(4)}</span>
          </div>
        </div>

        <div class="control-group">
          <label class="control-label" data-translate="theme">Theme</label>
          <div class="selector-container">
            <button class="theme-selector-button selector-button"
                    onclick="footerControls.toggleThemeDropdown()"
                    aria-expanded="false"
                    aria-haspopup="true">
              <span class="theme-icon">${this.themes.find(t => t.id === this.currentTheme)?.icon}</span>
              <span class="theme-name">${this.translations[this.currentTheme] || this.themes.find(t => t.id === this.currentTheme)?.name}</span>
              <span class="dropdown-arrow">▼</span>
            </button>
            <div class="theme-dropdown dropdown" role="menu">
              ${this.themes.map(theme => `
                <button class="dropdown-item ${theme.id === this.currentTheme ? 'active' : ''}"
                        onclick="footerControls.changeTheme('${theme.id}')"
                        role="menuitem">
                  <span class="theme-icon">${theme.icon}</span>
                  <span class="theme-name">${this.translations[theme.id] || theme.name}</span>
                </button>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    container.innerHTML = html;
    this.updateLanguageDisplay();
    this.updateThemeDisplay();
    this.updateCurrencyDisplay();
  }
}

// Initialize when DOM is ready
let footerControls;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    footerControls = new GlobalFooterControls();
    const container = document.getElementById('global-footer-controls-container');
    if (container) {
      footerControls.render(container);
    }
  });
} else {
  footerControls = new GlobalFooterControls();
  const container = document.getElementById('global-footer-controls-container');
  if (container) {
    footerControls.render(container);
  }
}

// Export for global access
window.footerControls = footerControls;
