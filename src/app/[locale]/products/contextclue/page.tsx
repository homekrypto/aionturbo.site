import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface ContextCluePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ContextCluePage({ params }: ContextCluePageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ContextClue
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Intelligent Context-Aware AI Assistant for Enhanced Productivity
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Transform Your Workflow</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                ContextClue is our flagship AI assistant that understands context, learns from your patterns, and provides intelligent suggestions to boost your productivity. Built with advanced language models and contextual understanding.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you're writing code, analyzing data, or managing projects, ContextClue adapts to your workflow and provides relevant, actionable insights.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Context-aware AI assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Intelligent code completion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Real-time suggestions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Advanced Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-4">Smart Context Understanding</h3>
              <p className="text-gray-600">
                Advanced AI that understands your project context, coding patterns, and workflow preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Real-time Assistance</h3>
              <p className="text-gray-600">
                Get instant suggestions, code completions, and insights as you work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Customizable Workflows</h3>
              <p className="text-gray-600">
                Adapt ContextClue to your specific needs and integrate with your existing tools.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the power of context-aware AI assistance with ContextClue.
          </p>
          <a 
            href={`/${locale}/contact`}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium inline-block"
          >
            Get Started with ContextClue
          </a>
        </div>
      </div>
    </div>
  );
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'ContextClue - AI-Powered Context-Aware Assistant | AI on Turbo',
    description: 'Intelligent context-aware AI assistant for enhanced productivity. Advanced language models with contextual understanding.',
    alternates: {
      canonical: `/${locale}/products/contextclue`,
    },
  };
}
