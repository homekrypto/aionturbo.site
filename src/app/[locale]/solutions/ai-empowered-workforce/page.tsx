import Link from "next/link";
import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface AIEmpoweredWorkforcePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AIEmpoweredWorkforcePage({ params }: AIEmpoweredWorkforcePageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transform Your Workforce with AI
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Empower Your Employees to Become AI-Enhanced Professionals
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Based on the latest Polish Ministry of Digital Affairs research, we help organizations 
              navigate the AI transformation and turn potential threats into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/contact`}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Start AI Transformation
              </Link>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Download Research Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Reality of AI in Polish Workforce
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Recent research from the Polish Ministry of Digital Affairs reveals critical insights 
              about GenAI's impact on the Polish labor market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">30.3%</div>
              <h3 className="text-xl font-semibold mb-2">Jobs at Risk</h3>
              <p className="text-gray-700">
                Over 5 million jobs in Poland are susceptible to GenAI transformation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">65%</div>
              <h3 className="text-xl font-semibold mb-2">Adaptation Potential</h3>
              <p className="text-gray-700">
                Most at-risk jobs can be transformed rather than eliminated with proper AI integration.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">40%</div>
              <h3 className="text-xl font-semibold mb-2">Productivity Increase</h3>
              <p className="text-gray-700">
                Organizations implementing AI-workforce strategies see significant productivity gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI Workforce Transformation Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We don't just implement AI tools – we transform your workforce into AI-enhanced professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment</h3>
              <p className="text-gray-700">
                Analyze current workforce capabilities and AI readiness across all departments.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-700">
                Develop customized AI integration strategies for each role and department.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <p className="text-gray-700">
                Comprehensive AI literacy and tool-specific training programs for all employees.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-700">
                Gradual rollout with continuous support and optimization for maximum adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Challenges into Competitive Advantages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Before AI Integration</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Manual, repetitive tasks consuming valuable time</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Limited data analysis capabilities</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Inconsistent quality and human error</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-red-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-gray-700">Slower decision-making processes</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">After AI Integration</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated workflows freeing time for strategic work</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">AI-powered insights and predictive analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Consistent, high-quality output with reduced errors</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Real-time data-driven decision making</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workforce?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Don't let AI transformation happen to your organization – lead it. 
            Contact us today to start your journey towards an AI-empowered workforce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`/${locale}/contact`}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Start Your Transformation
            </Link>
            <Link 
              href={`/${locale}/case-studies`}
              className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-medium"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: "AI-Empowered Workforce Solutions - AI on Turbo",
    description: "Transform your workforce with AI integration strategies. Turn potential job displacement into competitive advantages with our comprehensive AI workforce transformation approach.",
    alternates: {
      canonical: `https://ai-on-turbo.com${locale === 'en' ? '' : '/' + locale}/solutions/ai-empowered-workforce`,
      languages: {
        'en': 'https://ai-on-turbo.com/solutions/ai-empowered-workforce',
        'es': 'https://ai-on-turbo.com/es/solutions/ai-empowered-workforce',
        'fr': 'https://ai-on-turbo.com/fr/solutions/ai-empowered-workforce',
        'de': 'https://ai-on-turbo.com/de/solutions/ai-empowered-workforce',
        'pl': 'https://ai-on-turbo.com/pl/solutions/ai-empowered-workforce',
        'pt': 'https://ai-on-turbo.com/pt/solutions/ai-empowered-workforce',
        'ar': 'https://ai-on-turbo.com/ar/solutions/ai-empowered-workforce',
        'tr': 'https://ai-on-turbo.com/tr/solutions/ai-empowered-workforce',
        'ja': 'https://ai-on-turbo.com/ja/solutions/ai-empowered-workforce',
      },
    },
  };
}
