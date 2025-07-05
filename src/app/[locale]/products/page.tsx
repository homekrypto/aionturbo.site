import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import Link from "next/link";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'products',
    '/products',
    'AI Products - AI on Turbo',
    'Explore our AI-powered products including intelligent chatbots, predictive analytics tools, automated decision systems, and enterprise AI platforms.'
  );
}

interface ProductsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ProductsPage({ params }: ProductsPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  const products = [
    {
      title: t('products.contextclue.title', 'ContextClue'),
      description: t('products.contextclue.description', 'Advanced context-aware AI system that understands and responds to complex queries with precision.'),
      href: `/${locale}/products/contextclue`,
      icon: '🔍',
      features: [
        t('products.contextclue.feature1', 'Natural Language Processing'),
        t('products.contextclue.feature2', 'Context Understanding'),
        t('products.contextclue.feature3', 'Real-time Analysis')
      ]
    },
    {
      title: t('products.ragEvaluator.title', 'RAG Evaluator'),
      description: t('products.ragEvaluator.description', 'Comprehensive evaluation tool for Retrieval-Augmented Generation systems.'),
      href: `/${locale}/products/rag-evaluator`,
      icon: '📊',
      features: [
        t('products.ragEvaluator.feature1', 'Performance Metrics'),
        t('products.ragEvaluator.feature2', 'Quality Assessment'),
        t('products.ragEvaluator.feature3', 'Benchmarking Tools')
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('products.title', 'AI Products')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('products.subtitle', 'Innovative AI products designed to accelerate your digital transformation and enhance productivity.')}
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="text-6xl mb-6">{product.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h2>
                  <p className="text-xl text-gray-700 mb-6">{product.description}</p>
                  <ul className="space-y-2 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={product.href}
                    className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-block"
                  >
                    {t('products.learnMore', 'Learn More')}
                  </Link>
                </div>
                <div className={`bg-gray-100 rounded-lg p-8 ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">{product.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900">{product.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('products.whyChoose.title', 'Why Choose Our Products?')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('products.whyChoose.performance.title', 'High Performance')}
              </h3>
              <p className="text-gray-700">
                {t('products.whyChoose.performance.description', 'Built for scale and optimized for maximum performance in production environments.')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('products.whyChoose.customizable.title', 'Customizable')}
              </h3>
              <p className="text-gray-700">
                {t('products.whyChoose.customizable.description', 'Easily adaptable to your specific business needs and requirements.')}
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('products.whyChoose.secure.title', 'Enterprise Security')}
              </h3>
              <p className="text-gray-700">
                {t('products.whyChoose.secure.description', 'Built with enterprise-grade security and compliance standards.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('products.cta.title', 'Ready to Try Our Products?')}
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            {t('products.cta.description', 'Get started with our AI products and see the difference they can make for your business.')}
          </p>
          <Link
            href={`/${locale}/contact`}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            {t('products.cta.button', 'Get Started')}
          </Link>
        </div>
      </section>
    </div>
  );
}
