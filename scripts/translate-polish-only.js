const fs = require('fs');
const path = require('path');

// Simple English to Polish translations for key terms
const polishTranslations = {
  // Meta
  "AI on Turbo - Advanced AI Solutions for Business": "AI on Turbo - Zaawansowane rozwiązania AI dla biznesu",
  "Transform your business with cutting-edge AI solutions. We deliver intelligent automation, advanced analytics, and innovative AI technologies that drive growth and efficiency.": "Przekształć swój biznes dzięki najnowocześniejszym rozwiązaniom AI. Dostarczamy inteligentną automatyzację, zaawansowaną analitykę i innowacyjne technologie AI, które napędzają wzrost i efektywność.",
  
  // Hero
  "Your Trusted AI Partner": "Twój zaufany partner AI",
  "Expert AI Consultancy Since 2017.": "Ekspercka konsultacja AI od 2017 roku.",
  "Every platform business will be transformed by AI in the next 5 years. Businesses that keep control over their AI capabilities will quickly gain a competitive edge over those that subscribe to and are dependent on off-the-shelf AI providers.": "Każdy biznes platformowy zostanie przekształcony przez AI w ciągu najbliższych 5 lat. Firmy, które zachowają kontrolę nad swoimi możliwościami AI, szybko zyskają przewagę konkurencyjną nad tymi, które subskrybują i są zależne od gotowych dostawców AI.",
  "Book AI Consultation": "Zarezerwuj konsultację AI",
  "Contact Us": "Skontaktuj się z nami",
  
  // Featured
  "As featured in": "Jak pokazano w",
  
  // Platform
  "Your In-House Artificial Intelligence Platform": "Twoja wewnętrzna platforma sztucznej inteligencji",
  "Build custom AI solutions that integrate seamlessly with your existing systems and workflows.": "Buduj niestandardowe rozwiązania AI, które bezproblemowo integrują się z istniejącymi systemami i przepływami pracy.",
  
  // Services
  "AI Services": "Usługi AI",
  "Comprehensive AI and data solutions to transform your business operations and drive innovation.": "Kompleksowe rozwiązania AI i danych, aby przekształcić operacje biznesowe i napędzać innowacje.",
  "Learn More": "Dowiedz się więcej",
  "Intelligent Automation": "Inteligentna automatyzacja",
  "Automate complex workflows and decision-making processes with AI-powered systems.": "Automatyzuj złożone przepływy pracy i procesy decyzyjne za pomocą systemów napędzanych AI.",
  "Advanced Analytics": "Zaawansowana analityka",
  "Extract insights from your data with machine learning and predictive analytics.": "Wyciągaj wnioski z danych za pomocą uczenia maszynowego i analityki predykcyjnej.",
  "AI Strategy Consulting": "Konsultacja strategii AI",
  "Develop comprehensive AI strategies aligned with your business objectives.": "Opracuj kompleksowe strategie AI zgodne z celami biznesowymi.",
  "AI Consulting": "Konsultacja AI",
  "Strategic AI consulting to help you identify opportunities and develop AI roadmaps.": "Strategiczna konsultacja AI, aby pomóc w identyfikacji możliwości i opracowaniu map drogowych AI.",
  "Big Data Consulting": "Konsultacja Big Data",
  "Transform your data into actionable insights with our big data expertise.": "Przekształć dane w praktyczne wnioski dzięki naszej ekspertyzie big data.",
  "Generative AI Consulting": "Konsultacja AI generatywnej",
  "Leverage the power of generative AI to create innovative solutions.": "Wykorzystaj moc generatywnej AI do tworzenia innowacyjnych rozwiązań.",
  "Business Intelligence": "Inteligencja biznesowa",
  "Make data-driven decisions with our BI solutions.": "Podejmuj decyzje oparte na danych dzięki naszym rozwiązaniom BI.",
  "Data Engineering": "Inżynieria danych",
  "Build robust data pipelines and infrastructure.": "Buduj solidne potoki danych i infrastrukturę.",
  "Machine Learning Consulting": "Konsultacja uczenia maszynowego",
  "Develop custom ML models tailored to your business needs.": "Opracuj niestandardowe modele ML dostosowane do potrzeb biznesowych.",
  "Ready to Get Started?": "Gotowy do rozpoczęcia?",
  "Let us help you identify the right AI solutions for your business.": "Pozwól nam pomóc w identyfikacji odpowiednich rozwiązań AI dla Twojego biznesu.",
  "Contact Us Today": "Skontaktuj się z nami dziś",
  
  // Why Choose
  "Why Choose AI on Turbo": "Dlaczego wybrać AI on Turbo",
  "We combine deep technical expertise with business acumen to deliver AI solutions that drive real results.": "Łączymy głęboką ekspertyzę techniczną z wiedzą biznesową, aby dostarczać rozwiązania AI, które napędzają rzeczywiste wyniki.",
  "Proven Expertise": "Sprawdzona ekspertyza",
  "Over 7 years of experience in AI and machine learning across various industries.": "Ponad 7 lat doświadczenia w AI i uczeniu maszynowym w różnych branżach.",
  "Custom Solutions": "Niestandardowe rozwiązania",
  "Tailored AI solutions designed specifically for your business needs and challenges.": "Dostosowane rozwiązania AI zaprojektowane specjalnie dla potrzeb i wyzwań biznesowych.",
  "Ongoing Support": "Ciągłe wsparcie",
  "Comprehensive support and maintenance to ensure your AI systems perform optimally.": "Kompleksowe wsparcie i konserwacja, aby zapewnić optymalne działanie systemów AI.",
  
  // Stats
  "Projects Completed": "Ukończone projekty",
  "Client Satisfaction": "Satysfakcja klienta",
  
  // CTA
  "Ready to Transform Your Business with AI?": "Gotowy do przekształcenia biznesu dzięki AI?",
  "Let us help you unlock the full potential of artificial intelligence for your organization.": "Pozwól nam pomóc w odblokowaniu pełnego potencjału sztucznej inteligencji dla Twojej organizacji.",
  "Get Started Today": "Rozpocznij dziś",
  "Learn More": "Dowiedz się więcej",
  
  // Navigation
  "Home": "Strona główna",
  "Services": "Usługi",
  "Products": "Produkty",
  "Solutions": "Rozwiązania",
  "About": "O nas",
  "Contact": "Kontakt",
  "Case Studies": "Studia przypadków"
};

function translateToPolish(text) {
  return polishTranslations[text] || text;
}

function translateJsonObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string') {
      result[key] = translateToPolish(value);
    } else if (typeof value === 'object' && value !== null) {
      result[key] = translateJsonObject(value);
    } else {
      result[key] = value;
    }
  }
  return result;
}

// Read the English file
const englishFile = path.join(__dirname, '../public/locales/en/common.json');
const polishFile = path.join(__dirname, '../public/locales/pl/common.json');

const englishData = JSON.parse(fs.readFileSync(englishFile, 'utf8'));
const translatedData = translateJsonObject(englishData);

// Write the translated data
fs.writeFileSync(polishFile, JSON.stringify(translatedData, null, 2), 'utf8');

console.log('✅ Polish translations applied to common.json');
console.log('📝 Sample translations:');
console.log('  "Your Trusted AI Partner" → "Twój zaufany partner AI"');
console.log('  "AI Services" → "Usługi AI"');
console.log('  "Contact Us" → "Skontaktuj się z nami"'); 