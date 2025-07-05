// Smooth scrolling and scroll effects
const SmoothScroll = {
    init: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        // Handle smooth scrolling for anchor links
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    this.scrollToElement(targetElement);
                }
            });
        });
    },
    
    scrollToElement: function(element) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const elementPosition = element.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
};

// Scroll effects and animations
const ScrollEffects = {
    init: function() {
        this.bindEvents();
        this.initAnimations();
    },
    
    bindEvents: function() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    },
    
    handleScroll: function() {
        const scrollY = window.scrollY;
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroHeight = hero.offsetHeight;
            const scrollPercent = scrollY / heroHeight;
            
            if (scrollPercent <= 1) {
                hero.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
        }
        
        // Fade in elements on scroll
        const elements = document.querySelectorAll('.fade-in:not(.visible)');
        elements.forEach(element => {
            const elementTop = element.offsetTop;
            const elementHeight = element.offsetHeight;
            const windowHeight = window.innerHeight;
            
            if (scrollY + windowHeight > elementTop + elementHeight * 0.1) {
                element.classList.add('visible');
            }
        });
    },
    
    initAnimations: function() {
        // Add animation classes to elements
        const sections = document.querySelectorAll('.section');
        sections.forEach((section, index) => {
            if (index % 2 === 0) {
                section.classList.add('fade-in');
            } else {
                const elements = section.querySelectorAll('h2, h3, p, .service-card');
                elements.forEach((el, i) => {
                    el.classList.add(i % 2 === 0 ? 'slide-in-left' : 'slide-in-right');
                });
            }
        });
    }
};
