# Addepto Clone - Static Website

A complete static HTML/CSS/JavaScript clone of the Addepto.com website, featuring modern design, responsive layout, and interactive elements.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Mobile menu, form validation, smooth scrolling
- **SEO Optimized**: Proper meta tags, semantic HTML5, and structured data
- **Modular CSS**: Organized CSS architecture for easy maintenance
- **Vanilla JavaScript**: No external dependencies for better performance

## 📁 Project Structure

```
addepto-clone/
├── index.html                 # Homepage
├── assets/
│   ├── css/
│   │   ├── main.css          # Main stylesheet (imports all others)
│   │   ├── base.css          # Base styles and typography
│   │   ├── header.css        # Header and navigation styles
│   │   ├── footer.css        # Footer styles
│   │   ├── sections.css      # Section and component styles
│   │   └── forms.css         # Form styling
│   ├── js/
│   │   ├── main.js           # Main JavaScript file
│   │   ├── mobile-menu.js    # Mobile menu functionality
│   │   ├── form-validation.js # Form validation
│   │   └── scroll-effects.js # Scroll animations
│   └── images/               # Image assets (placeholder)
└── pages/
    ├── about.html            # About page
    ├── contact.html          # Contact page
    ├── machine-learning.html # ML services page
    ├── blog.html             # Blog page
    └── [other pages]         # Additional pages
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality
- **Google Fonts**: Inter font family for typography

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: #6366f1 (Indigo)
  - Secondary: #764ba2 (Purple)
  - Text: #1a1a2e (Dark)
  - Background: #fff (White)

- **Typography**: Inter font family with proper hierarchy
- **Animations**: Smooth transitions and scroll effects
- **Layout**: CSS Grid and Flexbox for responsive design

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: 480px - 767px
- Small Mobile: Below 480px

## 🚀 Getting Started

1. Clone or download the project files
2. Open `index.html` in your web browser
3. Navigate through the site using the menu

### Local Development

For local development with live reload, you can use any static server:

```bash
# Using Python (if installed)
python -m http.server 8000

# Using Node.js http-server (if installed)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html and select "Open with Live Server"
```

## 📄 Pages Included

- **Homepage** (`index.html`): Main landing page with hero, services, and about sections
- **About** (`pages/about.html`): Company information and values
- **Contact** (`pages/contact.html`): Contact form and information
- **Services** (`pages/machine-learning.html`): Detailed service pages
- **Blog** (`pages/blog.html`): Blog listing with filtering and search
- **Additional Pages**: Industry pages, resources, and company pages

## 🔧 JavaScript Functionality

- **Mobile Menu**: Responsive navigation with smooth animations
- **Form Validation**: Real-time validation with error messages
- **Scroll Effects**: Parallax effects and scroll-triggered animations
- **Smooth Scrolling**: Smooth navigation between sections
- **Interactive Elements**: Hover effects and user feedback

## 🎯 SEO Features

- Semantic HTML5 markup
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Structured data (JSON-LD)
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 🌟 Performance Optimizations

- Minified CSS and JavaScript (in production)
- Optimized images with lazy loading
- Efficient CSS selectors
- Minimal HTTP requests
- No external dependencies

## 🔧 Customization

### Colors
Update the CSS custom properties in `assets/css/base.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #764ba2;
    --text-color: #1a1a2e;
    --bg-color: #fff;
}
```

### Fonts
Change the font import in `assets/css/main.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

### Content
Update the content in HTML files and adjust the corresponding styles as needed.

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Internet Explorer 11+ (with polyfills)

## 📞 Support

For questions or issues, please contact:
- Email: contact@addepto.com
- Phone: +1 (555) 123-4567

## 📄 License

This project is for demonstration purposes. All rights reserved.

---

**Note**: This is a static clone created for educational/demonstration purposes. Replace placeholder images and content with actual assets before production use.
