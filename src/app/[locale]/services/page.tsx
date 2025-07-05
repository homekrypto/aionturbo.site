import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'services',
    '/services',
    'AI Services - AI on Turbo',
    'Explore our comprehensive AI services including machine learning, natural language processing, computer vision, and automation solutions for your business.'
  );
}

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  const services = [
    {
      title: t('services.aiConsulting.title', 'AI Consulting'),
      description: t('services.aiConsulting.description', 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.'),
      href: `/${locale}/services/ai-consulting`,
      icon: '🤖'
    },
    {
      title: t('services.bigData.title', 'Big Data Consulting'),
      description: t('services.bigData.description', 'Transform your data into actionable insights with our big data expertise.'),
      href: `/${locale}/services/big-data-consulting`,
      icon: '📊'
    },
    {
      title: t('services.genAI.title', 'Generative AI Consulting'),
      description: t('services.genAI.description', 'Leverage the power of generative AI to create innovative solutions.'),
      href: `/${locale}/services/generative-ai-consulting`,
      icon: '✨'
    },
    {
      title: t('services.businessIntelligence.title', 'Business Intelligence'),
      description: t('services.businessIntelligence.description', 'Make data-driven decisions with our BI solutions.'),
      href: `/${locale}/services/business-intelligence`,
      icon: '📈'
    },
    {
      title: t('services.dataEngineering.title', 'Data Engineering'),
      description: t('services.dataEngineering.description', 'Build robust data pipelines and infrastructure.'),
      href: `/${locale}/services/data-engineering`,
      icon: '🔧'
    },
    {
      title: t('services.machineLearning.title', 'Machine Learning Consulting'),
      description: t('services.machineLearning.description', 'Develop custom ML models tailored to your business needs.'),
      href: `/${locale}/services/machine-learning-consulting`,
      icon: '🧠'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('services.title', 'AI Services')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('services.subtitle', 'Comprehensive AI and data solutions to transform your business operations and drive innovation.')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  {t('services.learnMore', 'Learn More')}
                  <span className="ml-1">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('services.cta.title', 'Ready to Get Started?')}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('services.cta.description', 'Let us help you identify the right AI solutions for your business.')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            {t('services.cta.button', 'Contact Us Today')}
          </Link>
        </div>
      </section>
    </div>
  );
}
