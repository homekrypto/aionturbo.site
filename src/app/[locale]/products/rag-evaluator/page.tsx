import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface RagEvaluatorPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function RagEvaluatorPage({ params }: RagEvaluatorPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              RAG Evaluator
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Advanced RAG System Performance Analysis and Optimization Platform
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Evaluate and Optimize Your RAG Systems</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                RAG Evaluator is our comprehensive platform for analyzing, testing, and optimizing Retrieval-Augmented Generation systems. Get detailed insights into your RAG performance with advanced metrics and benchmarking.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From retrieval accuracy to generation quality, our platform provides the tools you need to build better RAG systems with confidence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Comprehensive RAG evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Performance benchmarking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Advanced metrics analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Optimization recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Evaluation Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <p className="text-gray-600">
                Comprehensive metrics including retrieval accuracy, generation quality, and response relevance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Deep Analysis</h3>
              <p className="text-gray-600">
                In-depth analysis of retrieval patterns, embedding quality, and generation consistency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Benchmarking</h3>
              <p className="text-gray-600">
                Compare your RAG system against industry benchmarks and best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-4">Optimization Tools</h3>
              <p className="text-gray-600">
                Automated optimization suggestions and parameter tuning recommendations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4">Detailed Reports</h3>
              <p className="text-gray-600">
                Comprehensive evaluation reports with actionable insights and recommendations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring and evaluation of your RAG system's performance.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Enterprise RAG Systems</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Knowledge base optimization</li>
                <li>• Customer support chatbots</li>
                <li>• Document retrieval systems</li>
                <li>• Internal AI assistants</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Research & Development</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• RAG architecture comparison</li>
                <li>• Model performance analysis</li>
                <li>• Embedding evaluation</li>
                <li>• Retrieval strategy optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your RAG Systems?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get comprehensive evaluation and optimization insights for your RAG systems.
          </p>
          <a 
            href={`/${locale}/contact`}
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium inline-block"
          >
            Start Evaluating with RAG Evaluator
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
    title: 'RAG Evaluator - Advanced RAG System Analysis | AI on Turbo',
    description: 'Comprehensive RAG system evaluation platform with performance analysis, benchmarking, and optimization tools.',
    alternates: {
      canonical: `/${locale}/products/rag-evaluator`,
    },
  };
}
