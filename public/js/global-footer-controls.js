/**
 * Global Footer Controls - Vanilla JavaScript Implementation
 * Handles language switching and theme selection
 */

class GlobalFooterControls {
  constructor() {
    this.languages = [
      { code: 'en', nativeName: 'English' },
      { code: 'es', nativeName: 'Español' },
      { code: 'fr', nativeName: 'Français' },
      { code: 'de', nativeName: 'Deutsch' },
      { code: 'ja', nativeName: '日本語' },
      { code: 'pl', nativeName: 'Polski' },
      { code: 'pt', nativeName: 'Português' },
      { code: 'ar', nativeName: 'العربية' },
      { code: 'tr', nativeName: 'Türkçe' }
    ];

    this.themes = [
      { id: 'light', name: 'Light', icon: '☀️' },
      { id: 'dark', name: 'Dark', icon: '🌙' }
    ];

    // Detect current language from URL
    const pathSegments = window.location.pathname.split('/').filter(Boolean);
    const urlLanguage = pathSegments[0];
    const isValidLanguage = this.languages.find(lang => lang.code === urlLanguage);
    
    this.currentLanguage = isValidLanguage ? urlLanguage : localStorage.getItem('preferred-language') || 'en';
    this.currentTheme = localStorage.getItem('preferred-theme') || 'light';
    
    this.applyTheme(this.currentTheme);
    console.log('GlobalFooterControls initialized with language:', this.currentLanguage);
  }

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.currentTheme = theme;
    localStorage.setItem('preferred-theme', theme);
  }

  changeLanguage(langCode) {
    this.currentLanguage = langCode;
    localStorage.setItem('preferred-language', langCode);
    this.render();
    console.log('Language changed to:', langCode);
    
    // Navigate to the new language page
    const currentPath = window.location.pathname;
    const segments = currentPath.split('/').filter(Boolean);
    
    // Check if the first segment is a language code
    if (segments.length > 0 && this.languages.find(lang => lang.code === segments[0])) {
      // Replace the language code
      segments[0] = langCode;
      window.location.href = '/' + segments.join('/');
    } else {
      // Add the language code to the beginning
      window.location.href = '/' + langCode + currentPath;
    }
  }

  changeTheme(theme) {
    this.applyTheme(theme);
    this.render();
    console.log('Theme changed to:', theme);
  }

  render() {
    const container = document.getElementById('global-footer-controls-container');
    if (!container) return;

    const currentLang = this.languages.find(lang => lang.code === this.currentLanguage);
    
    container.innerHTML = `
      <div class="global-footer-controls">
        <div class="control-group">
          <label class="control-label">Language</label>
          <div class="language-selector selector-container">
            <button class="selector-button" onclick="globalFooterControls.toggleLanguageDropdown()">
              <span class="language-name">${currentLang ? currentLang.nativeName : 'English'}</span>
              <span class="dropdown-arrow">▼</span>
            </button>
            <div class="dropdown">
              ${this.languages.map(lang => `
                <button class="dropdown-item ${lang.code === this.currentLanguage ? 'active' : ''}" 
                        onclick="globalFooterControls.changeLanguage('${lang.code}')">
                  ${lang.nativeName}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="control-group">
          <label class="control-label">Theme</label>
          <div class="theme-switcher">
            ${this.themes.map(theme => `
              <button class="theme-button ${theme.id === this.currentTheme ? 'active' : ''}" 
                      onclick="globalFooterControls.changeTheme('${theme.id}')">
                <span class="theme-icon">${theme.icon}</span>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  toggleLanguageDropdown() {
    const dropdown = document.querySelector('.language-selector .dropdown');
    if (dropdown) {
      dropdown.classList.toggle('open');
    }
  }
}

// Initialize when DOM is ready
let globalFooterControls;

function initializeFooterControls() {
  console.log('Initializing footer controls...');
  const container = document.getElementById('global-footer-controls-container');
  
  if (container) {
    globalFooterControls = new GlobalFooterControls();
    globalFooterControls.render();
    
    // Make it globally accessible
    window.globalFooterControls = globalFooterControls;
    
    console.log('Footer controls initialized successfully');
  } else {
    console.log('Container not found, retrying...');
    setTimeout(initializeFooterControls, 100);
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeFooterControls);
} else {
  setTimeout(initializeFooterControls, 100);
}
