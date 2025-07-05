import Link from "next/link";

export default function LLMsDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Large Language Models Development
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Create and fine-tune custom large language models for your specific business needs
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Custom Language Intelligence</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Large Language Models Development services help you create, fine-tune, and deploy custom LLMs that understand your business domain, comply with your requirements, and deliver superior performance for your specific use cases.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From domain-specific fine-tuning to building completely custom architectures, we provide end-to-end LLM development that ensures your AI solutions are tailored to your unique needs while maintaining high performance and reliability.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">LLM Advantages</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Domain-specific expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Better performance on specialized tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Enhanced security and privacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-600 mr-2">✓</span>
                  <span>Cost-effective at scale</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our LLM Development Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Fine-Tuning</h3>
              <p className="text-gray-600">
                Customize pre-trained models like GPT, BERT, or T5 for your specific domain and use cases with targeted training.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-4">Custom Architecture</h3>
              <p className="text-gray-600">
                Design and build specialized model architectures optimized for your specific requirements and constraints.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Model Optimization</h3>
              <p className="text-gray-600">
                Optimize models for inference speed, memory usage, and deployment efficiency without sacrificing performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Training Data Preparation</h3>
              <p className="text-gray-600">
                Curate, clean, and prepare high-quality training datasets for optimal model performance and reliability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4">Deployment & Scaling</h3>
              <p className="text-gray-600">
                Deploy LLMs in production environments with auto-scaling, monitoring, and performance optimization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-gray-600">
                Implement robust security measures and ensure compliance with industry regulations and data protection laws.
              </p>
            </div>
          </div>
        </div>

        {/* Model Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">LLM Types We Work With</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Foundation Models</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GPT-4</h4>
                  <p className="text-sm text-gray-600">OpenAI</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Claude</h4>
                  <p className="text-sm text-gray-600">Anthropic</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">LLaMA</h4>
                  <p className="text-sm text-gray-600">Meta</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Gemini</h4>
                  <p className="text-sm text-gray-600">Google</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Specialized Models</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">CodeT5</h4>
                  <p className="text-sm text-gray-600">Code Generation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">BioBERT</h4>
                  <p className="text-sm text-gray-600">Biomedical</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">FinBERT</h4>
                  <p className="text-sm text-gray-600">Financial</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">LegalBERT</h4>
                  <p className="text-sm text-gray-600">Legal Domain</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">LLM Development Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Analysis</h3>
              <p className="text-gray-600">Requirements and use case analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Data</h3>
              <p className="text-gray-600">Dataset preparation and curation</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Model</h3>
              <p className="text-gray-600">Architecture design and selection</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Training</h3>
              <p className="text-gray-600">Model training and fine-tuning</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Evaluation</h3>
              <p className="text-gray-600">Performance testing and validation</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">Production deployment and monitoring</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical report analysis and generation</li>
                <li>• Clinical decision support systems</li>
                <li>• Drug discovery and research assistance</li>
                <li>• Patient communication and education</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Finance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Financial document analysis</li>
                <li>• Risk assessment and compliance</li>
                <li>• Automated report generation</li>
                <li>• Customer service chatbots</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Contract analysis and review</li>
                <li>• Legal research assistance</li>
                <li>• Document summarization</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Technology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Code generation and review</li>
                <li>• Technical documentation</li>
                <li>• Bug detection and resolution</li>
                <li>• API documentation generation</li>
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
                <h3 className="text-2xl font-bold text-indigo-800">95%</h3>
              </div>
              <h4 className="font-semibold">Accuracy</h4>
              <p className="text-sm text-gray-600">Average model accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">50%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Compared to general models</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">3x</h3>
              </div>
              <h4 className="font-semibold">Performance</h4>
              <p className="text-sm text-gray-600">Domain-specific improvement</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-indigo-800">12 Weeks</h3>
              </div>
              <h4 className="font-semibold">Development Time</h4>
              <p className="text-sm text-gray-600">From concept to deployment</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Your Custom LLM?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a large language model that understands your domain and delivers superior performance for your specific use cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Your Project
            </Link>
            <Link href="/services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
