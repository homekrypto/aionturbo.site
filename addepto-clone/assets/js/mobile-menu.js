// Mobile menu functionality
const MobileMenu = {
    init: function() {
        this.createMobileMenu();
        this.bindEvents();
    },
    
    createMobileMenu: function() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.nav-menu');
        
        if (!mobileToggle || !nav) return;
        
        // Create mobile menu HTML
        const mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
            <button class="mobile-menu-close" aria-label="Close menu">&times;</button>
            <nav class="mobile-menu-nav">
                ${nav.innerHTML}
            </nav>
        `;
        
        document.body.appendChild(mobileMenu);
        
        // Store references
        this.toggle = mobileToggle;
        this.menu = mobileMenu;
        this.closeBtn = mobileMenu.querySelector('.mobile-menu-close');
    },
    
    bindEvents: function() {
        if (!this.toggle || !this.menu) return;
        
        // Toggle menu
        this.toggle.addEventListener('click', () => {
            this.toggleMenu();
        });
        
        // Close menu
        this.closeBtn.addEventListener('click', () => {
            this.closeMenu();
        });
        
        // Close menu when clicking outside
        this.menu.addEventListener('click', (e) => {
            if (e.target === this.menu) {
                this.closeMenu();
            }
        });
        
        // Close menu when clicking on links
        const mobileLinks = this.menu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.closeMenu();
            });
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.menu.classList.contains('active')) {
                this.closeMenu();
            }
        });
    },
    
    toggleMenu: function() {
        this.menu.classList.toggle('active');
        document.body.style.overflow = this.menu.classList.contains('active') ? 'hidden' : '';
    },
    
    closeMenu: function() {
        this.menu.classList.remove('active');
        document.body.style.overflow = '';
    }
};
