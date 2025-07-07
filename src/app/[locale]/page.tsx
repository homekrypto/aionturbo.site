import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface LocalizedPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LocalizedHome({ params }: LocalizedPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  // Debug: Log what translations are loaded
  console.log('Locale:', locale);
  console.log('Translations keys:', Object.keys(translations).slice(0, 5));
  console.log('hero.title value:', translations['hero.title']);
  
  const t = createTranslationFunction(translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-title animate-fade-in-up">
            {t('hero.title', 'Your Trusted AI Partner')}
          </h1>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto animate-fade-in-up">
            {t('hero.subtitle', 'Expert AI Consultancy Since 2017.')}
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto animate-fade-in-up">
            {t('hero.description', 'Every platform business will be transformed by AI in the next 5 years. Businesses that keep control over their AI capabilities will quickly gain a competitive edge over those that subscribe to and are dependent on off-the-shelf AI providers.')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap animate-fade-in-up">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium btn-animate">
              {t('hero.cta.consultation', 'Book AI Consultation')}
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium btn-animate">
              {t('hero.cta.contact', 'Contact Us')}
            </button>
          </div>
        </div>
      </section>

      {/* Featured In */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-sm font-medium text-gray-700 mb-8">
            {t('featured.title', 'As featured in')}
          </h3>
          <div className="flex justify-center items-center gap-8 flex-wrap opacity-70">
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">Forbes</div>
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">Bloomberg</div>
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">AI Magazine</div>
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">Observer</div>
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">Medium</div>
            <div className="text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors">Telegraph</div>
          </div>
        </div>
      </section>

      {/* AI Platform Section */}
      <section className="py-20" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t('platform.title', 'Your In-House Artificial Intelligence Platform')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('platform.description', 'Build custom AI solutions that integrate seamlessly with your existing systems and workflows.')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('services.automation.title', 'Intelligent Automation')}
              </h3>
              <p className="text-gray-600">
                {t('services.automation.description', 'Automate complex workflows and decision-making processes with AI-powered systems.')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('services.analytics.title', 'Advanced Analytics')}
              </h3>
              <p className="text-gray-600">
                {t('services.analytics.description', 'Extract insights from your data with machine learning and predictive analytics.')}
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">
                {t('services.consulting.title', 'AI Strategy Consulting')}
              </h3>
              <p className="text-gray-600">
                {t('services.consulting.description', 'Develop comprehensive AI strategies aligned with your business objectives.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">
              {t('why.title', 'Why Choose AI on Turbo')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('why.description', 'We combine deep technical expertise with business acumen to deliver AI solutions that drive real results.')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t('why.expertise.title', 'Proven Expertise')}
                    </h3>
                    <p className="text-gray-600">
                      {t('why.expertise.description', 'Over 7 years of experience in AI and machine learning across various industries.')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t('why.custom.title', 'Custom Solutions')}
                    </h3>
                    <p className="text-gray-600">
                      {t('why.custom.description', 'Tailored AI solutions designed specifically for your business needs and challenges.')}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      {t('why.support.title', 'Ongoing Support')}
                    </h3>
                    <p className="text-gray-600">
                      {t('why.support.description', 'Comprehensive support and maintenance to ensure your AI systems perform optimally.')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700 font-medium">
                    {t('stats.projects', 'Projects Completed')}
                  </div>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">98%</div>
                  <div className="text-gray-700 text-sm">
                    {t('stats.satisfaction', 'Client Satisfaction')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t('cta.title', 'Ready to Transform Your Business with AI?')}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('cta.description', 'Let us help you unlock the full potential of artificial intelligence for your organization.')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium btn-animate">
              {t('cta.contact', 'Get Started Today')}
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium btn-animate">
              {t('cta.learn', 'Learn More')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
