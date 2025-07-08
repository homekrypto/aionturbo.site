const fs = require('fs');
const path = require('path');

// Solution pages to create
const solutionPages = [
  'ai-document-processing',
  'ai-global-workforce',
  'ai-knowledge-base',
  'automotive',
  'aviation',
  'computer-vision',
  'enterprise-generative-ai',
  'finance-insurance',
  'healthcare',
  'legal',
  'llm-solutions',
  'logistics',
  'manufacturing',
  'private-investments',
  'retail',
  'technology-companies'
];

// Service pages to create
const servicePages = [
  'ai-consulting',
  'ai-integration',
  'ai-proof-of-concept',
  'big-data-consulting',
  'business-intelligence',
  'data-engineering',
  'databricks-deployment',
  'generative-ai-consulting',
  'generative-ai-development',
  'llms-development',
  'machine-learning-consulting',
  'mlops-consulting'
];

// Template for localized pages
const createLocalizedPageTemplate = (originalPath, pageType, slug) => {
  return `import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

export default async function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/${pageType}/${slug}/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = params;
  
  return {
    title: 'AI on Turbo - ${slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: \`\`${'${locale}'}/${pageType}/${slug}\`\`,
    },
  };
}
`;
};

// Create directories and files
function createLocalizedPages() {
  const baseDir = '/Users/michalbabula/Documents/ai-on-turbo/src/app/[locale]';
  
  // Create solution pages
  solutionPages.forEach(slug => {
    const dir = path.join(baseDir, 'solutions', slug);
    const filePath = path.join(dir, 'page.tsx');
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const content = createLocalizedPageTemplate(`src/app/solutions/${slug}/page.tsx`, 'solutions', slug);
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  });
  
  // Create service pages
  servicePages.forEach(slug => {
    const dir = path.join(baseDir, 'services', slug);
    const filePath = path.join(dir, 'page.tsx');
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    const content = createLocalizedPageTemplate(`src/app/services/${slug}/page.tsx`, 'services', slug);
    fs.writeFileSync(filePath, content);
    console.log(`Created: ${filePath}`);
  });
}

createLocalizedPages();
console.log('All localized pages created successfully!');
