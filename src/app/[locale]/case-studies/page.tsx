import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'case-studies',
    '/case-studies',
    'Case Studies - AI on Turbo',
    'Read real-world success stories and case studies showcasing how our AI solutions have transformed businesses across various industries.'
  );
}

interface CaseStudiesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function CaseStudiesPage({ params }: CaseStudiesPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  const caseStudies = [
    {
      title: t('caseStudies.carbonCredit.title', 'Carbon Credit Verification'),
      description: t('caseStudies.carbonCredit.description', 'AI-powered system for automated carbon credit verification and monitoring.'),
      industry: t('caseStudies.carbonCredit.industry', 'Environmental'),
      impact: t('caseStudies.carbonCredit.impact', '95% reduction in verification time'),
      href: `/${locale}/case-studies/carbon-credit-verification`,
      image: '🌱'
    },
    {
      title: t('caseStudies.windTurbine.title', 'Wind Turbine Maintenance'),
      description: t('caseStudies.windTurbine.description', 'Predictive maintenance system for wind turbines using computer vision and IoT sensors.'),
      industry: t('caseStudies.windTurbine.industry', 'Energy'),
      impact: t('caseStudies.windTurbine.impact', '40% reduction in maintenance costs'),
      href: `/${locale}/case-studies/wind-turbine-maintenance`,
      image: '💨'
    },
    {
      title: t('caseStudies.counterfeit.title', 'Counterfeit Detection'),
      description: t('caseStudies.counterfeit.description', 'Advanced AI system for detecting counterfeit products in retail supply chains.'),
      industry: t('caseStudies.counterfeit.industry', 'Retail'),
      impact: t('caseStudies.counterfeit.impact', '99.7% detection accuracy'),
      href: `/${locale}/case-studies/counterfeit-detection`,
      image: '🔍'
    },
    {
      title: t('caseStudies.retailRobots.title', 'Retail Automation Robots'),
      description: t('caseStudies.retailRobots.description', 'Autonomous robots for inventory management and customer service in retail environments.'),
      industry: t('caseStudies.retailRobots.industry', 'Retail'),
      impact: t('caseStudies.retailRobots.impact', '60% improvement in inventory accuracy'),
      href: `/${locale}/case-studies/retail-robots`,
      image: '🤖'
    },
    {
      title: t('caseStudies.medicalImaging.title', 'Medical Image Analysis'),
      description: t('caseStudies.medicalImaging.description', 'AI-powered medical imaging analysis for early disease detection and diagnosis.'),
      industry: t('caseStudies.medicalImaging.industry', 'Healthcare'),
      impact: t('caseStudies.medicalImaging.impact', '85% improvement in diagnostic accuracy'),
      href: `/${locale}/case-studies/medical-imaging`,
      image: '🏥'
    },
    {
      title: t('caseStudies.fraudDetection.title', 'Financial Fraud Detection'),
      description: t('caseStudies.fraudDetection.description', 'Real-time fraud detection system for financial transactions using machine learning.'),
      industry: t('caseStudies.fraudDetection.industry', 'Finance'),
      impact: t('caseStudies.fraudDetection.impact', '70% reduction in fraud losses'),
      href: `/${locale}/case-studies/fraud-detection`,
      image: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('caseStudies.title', 'Case Studies')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('caseStudies.subtitle', 'Real-world AI implementations that delivered measurable results for our clients across various industries.')}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-6xl mb-4 text-center">{study.image}</div>
                  <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-green-50 p-3 rounded-lg mb-4">
                    <p className="text-green-800 font-medium text-sm">{study.impact}</p>
                  </div>
                  <Link
                    href={study.href}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
                  >
                    {t('caseStudies.readMore', 'Read Case Study')}
                    <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('caseStudies.industries.title', 'Industries We Serve')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: t('caseStudies.industries.healthcare', 'Healthcare'), icon: '🏥', count: '15+' },
              { name: t('caseStudies.industries.finance', 'Finance'), icon: '💰', count: '20+' },
              { name: t('caseStudies.industries.retail', 'Retail'), icon: '🛍️', count: '25+' },
              { name: t('caseStudies.industries.manufacturing', 'Manufacturing'), icon: '🏭', count: '18+' },
              { name: t('caseStudies.industries.energy', 'Energy'), icon: '⚡', count: '12+' },
              { name: t('caseStudies.industries.automotive', 'Automotive'), icon: '🚗', count: '10+' },
              { name: t('caseStudies.industries.aviation', 'Aviation'), icon: '✈️', count: '8+' },
              { name: t('caseStudies.industries.logistics', 'Logistics'), icon: '🚚', count: '14+' }
            ].map((industry, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-orange-600 font-medium">{industry.count} {t('caseStudies.industries.projects', 'projects')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('caseStudies.results.title', 'Proven Results')}
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
              <p className="text-gray-700">{t('caseStudies.results.projects', 'Successful Projects')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-700">{t('caseStudies.results.satisfaction', 'Client Satisfaction')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">$50M+</div>
              <p className="text-gray-700">{t('caseStudies.results.savings', 'Cost Savings Generated')}</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">7+</div>
              <p className="text-gray-700">{t('caseStudies.results.years', 'Years of Experience')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('caseStudies.cta.title', 'Ready to Create Your Success Story?')}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('caseStudies.cta.description', 'Join our growing list of satisfied clients who have transformed their businesses with AI.')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            {t('caseStudies.cta.button', 'Start Your Project')}
          </Link>
        </div>
      </section>
    </div>
  );
}
