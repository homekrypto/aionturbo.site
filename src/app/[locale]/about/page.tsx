import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'about',
    '/about',
    'About Us - AI on Turbo',
    'Learn about our mission to transform businesses with cutting-edge AI solutions. Meet our team of experts and discover our innovative approach to artificial intelligence.'
  );
}

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('about.title', 'About AI on Turbo')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('about.subtitle', 'Your trusted AI partner since 2017. We specialize in delivering cutting-edge AI solutions that transform businesses and drive innovation.')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t('about.mission.title', 'Our Mission')}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t('about.mission.text1', 'We believe that every platform business will be transformed by AI in the next 5 years. Our mission is to help businesses maintain control over their AI capabilities and gain a competitive edge.')}
                </p>
                <p className="text-gray-700">
                  {t('about.mission.text2', 'Unlike businesses that depend on off-the-shelf AI providers, we empower our clients with custom AI solutions that align with their unique needs and goals.')}
                </p>
              </div>
              <div className="bg-indigo-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-indigo-900 mb-4">
                  {t('about.stats.title', 'Our Track Record')}
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">7+</div>
                    <div className="text-gray-700">{t('about.stats.years', 'Years of Experience')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">100+</div>
                    <div className="text-gray-700">{t('about.stats.projects', 'Successful Projects')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">50+</div>
                    <div className="text-gray-700">{t('about.stats.clients', 'Happy Clients')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {t('about.values.title', 'Our Values')}
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.values.innovation.title', 'Innovation')}
                  </h3>
                  <p className="text-gray-700">
                    {t('about.values.innovation.text', 'We stay at the forefront of AI technology to deliver cutting-edge solutions.')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.values.partnership.title', 'Partnership')}
                  </h3>
                  <p className="text-gray-700">
                    {t('about.values.partnership.text', 'We work closely with our clients as trusted partners, not just service providers.')}
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('about.values.results.title', 'Results')}
                  </h3>
                  <p className="text-gray-700">
                    {t('about.values.results.text', 'We focus on delivering measurable results that drive real business value.')}
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center bg-indigo-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('about.cta.title', 'Ready to Transform Your Business?')}
              </h2>
              <p className="text-gray-700 mb-6">
                {t('about.cta.text', 'Let us help you harness the power of AI to drive growth and innovation.')}
              </p>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                {t('about.cta.button', 'Get Started Today')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
