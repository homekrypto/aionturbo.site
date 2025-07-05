import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'solutions',
    '/solutions',
    'AI Solutions - AI on Turbo',
    'Discover our industry-specific AI solutions for healthcare, finance, retail, manufacturing, and more. Custom AI implementations tailored to your business needs.'
  );
}

interface SolutionsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function SolutionsPage({ params }: SolutionsPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  const solutions = [
    {
      title: t('solutions.aiWorkforce.title', 'AI-Empowered Workforce'),
      description: t('solutions.aiWorkforce.description', 'Augment your team with AI capabilities to boost productivity and innovation.'),
      href: `/${locale}/solutions/ai-empowered-workforce`,
      icon: '👥'
    },
    {
      title: t('solutions.documentProcessing.title', 'AI Document Processing'),
      description: t('solutions.documentProcessing.description', 'Automate document analysis and processing with advanced AI.'),
      href: `/${locale}/solutions/ai-document-processing`,
      icon: '📄'
    },
    {
      title: t('solutions.knowledgeBase.title', 'AI-powered Knowledge Base'),
      description: t('solutions.knowledgeBase.description', 'Create intelligent knowledge systems that learn and adapt.'),
      href: `/${locale}/solutions/ai-knowledge-base`,
      icon: '🧠'
    },
    {
      title: t('solutions.computerVision.title', 'Computer Vision'),
      description: t('solutions.computerVision.description', 'Extract insights from images and videos with advanced computer vision.'),
      href: `/${locale}/solutions/computer-vision`,
      icon: '👁️'
    },
    {
      title: t('solutions.healthcare.title', 'Healthcare AI'),
      description: t('solutions.healthcare.description', 'Improve patient outcomes with AI-powered healthcare solutions.'),
      href: `/${locale}/solutions/healthcare`,
      icon: '🏥'
    },
    {
      title: t('solutions.fintech.title', 'Finance & Insurance'),
      description: t('solutions.fintech.description', 'Enhance financial services with AI-driven insights and automation.'),
      href: `/${locale}/solutions/finance-insurance`,
      icon: '💰'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('solutions.title', 'AI Solutions')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('solutions.subtitle', 'Industry-specific AI solutions designed to solve real-world business challenges.')}
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <Link
                  href={solution.href}
                  className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                >
                  {t('solutions.learnMore', 'Learn More')}
                  <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('solutions.industries.title', 'Industry Focus')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t('solutions.industries.manufacturing', 'Manufacturing'), icon: '🏭' },
              { name: t('solutions.industries.retail', 'Retail'), icon: '🛍️' },
              { name: t('solutions.industries.aviation', 'Aviation'), icon: '✈️' },
              { name: t('solutions.industries.automotive', 'Automotive'), icon: '🚗' },
              { name: t('solutions.industries.logistics', 'Logistics'), icon: '🚚' },
              { name: t('solutions.industries.legal', 'Legal'), icon: '⚖️' },
              { name: t('solutions.industries.tech', 'Technology'), icon: '💻' },
              { name: t('solutions.industries.energy', 'Energy'), icon: '⚡' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-2">{industry.icon}</div>
                <p className="text-gray-700 font-medium">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('solutions.cta.title', 'Transform Your Industry')}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('solutions.cta.description', 'Discover how AI can revolutionize your specific industry and business model.')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            {t('solutions.cta.button', 'Get Started')}
          </Link>
        </div>
      </section>
    </div>
  );
}
