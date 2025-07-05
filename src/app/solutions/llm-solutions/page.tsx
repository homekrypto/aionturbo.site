import Link from "next/link";

export default function LLMSolutionsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              LLM-Based Solutions
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Custom large language model implementations for specific business needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Tailored Language Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our LLM-Based Solutions leverage the power of large language models to create intelligent applications that understand, generate, and process human language with unprecedented accuracy and contextual awareness.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From custom chatbots and content generation to complex language understanding tasks, we build LLM solutions that are specifically fine-tuned for your industry, domain, and business requirements.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">LLM Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Domain-specific fine-tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Context-aware responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Real-time processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">LLM Solution Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-gray-600">
                Intelligent chatbots and virtual assistants that understand context and provide human-like conversations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
              <p className="text-gray-600">
                Automated creation of articles, reports, summaries, and creative content tailored to your brand voice.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Text Analysis</h3>
              <p className="text-gray-600">
                Advanced sentiment analysis, entity extraction, and document classification for business intelligence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-4">Language Translation</h3>
              <p className="text-gray-600">
                High-quality translation services with domain-specific terminology and cultural context preservation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-4">Code Generation</h3>
              <p className="text-gray-600">
                Automated code generation, documentation, and debugging assistance for software development teams.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Data Synthesis</h3>
              <p className="text-gray-600">
                Generate synthetic data for training, testing, and privacy-preserving machine learning applications.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Investment research automation</li>
                <li>• Risk assessment reports</li>
                <li>• Regulatory compliance documentation</li>
                <li>• Customer service chatbots</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical report generation</li>
                <li>• Clinical decision support</li>
                <li>• Patient communication tools</li>
                <li>• Medical literature analysis</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Contract analysis and drafting</li>
                <li>• Legal research automation</li>
                <li>• Case brief generation</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Product description generation</li>
                <li>• Customer review analysis</li>
                <li>• Personalized recommendations</li>
                <li>• Customer support automation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">98%</h3>
              </div>
              <h4 className="font-semibold">Accuracy</h4>
              <p className="text-sm text-gray-600">Response accuracy rate</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">100ms</h3>
              </div>
              <h4 className="font-semibold">Response Time</h4>
              <p className="text-sm text-gray-600">Average processing time</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">50+</h3>
              </div>
              <h4 className="font-semibold">Languages</h4>
              <p className="text-sm text-gray-600">Supported languages</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">99.9%</h3>
              </div>
              <h4 className="font-semibold">Uptime</h4>
              <p className="text-sm text-gray-600">Service availability</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Deploy LLM Solutions?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Harness the power of large language models to transform your business operations and customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
            <Link href="/solutions" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
