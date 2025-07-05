import Link from 'next/link'

export default function ContextCluePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                Open Source
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ContextClue
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              AI-Powered Knowledge Base Assistant
            </p>
            <p className="text-lg text-blue-200 mb-8">
              Transform your knowledge base into an intelligent, conversational assistant that provides instant, accurate answers to customer queries using advanced natural language processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Get Started
              </Link>
              <a 
                href="#demo"
                className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-300 hover:text-blue-900 transition-colors font-semibold"
              >
                View Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Natural Language Processing</h3>
                <p className="text-gray-600">
                  Advanced NLP capabilities understand context, intent, and nuance in user queries for more accurate responses.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Contextual Understanding</h3>
                <p className="text-gray-600">
                  Maintains conversation context and provides relevant follow-up suggestions based on user interaction patterns.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 104 0 2 2 0 00-4 0zm8-1a1 1 0 100 2h2a1 1 0 100-2h-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Multi-Format Support</h3>
                <p className="text-gray-600">
                  Seamlessly processes documents, PDFs, web pages, and structured data to build comprehensive knowledge bases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose ContextClue?</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Reduce Support Costs</h3>
                      <p className="text-gray-600">
                        Automatically handle 80% of customer queries, reducing support ticket volume and operational costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                      <p className="text-gray-600">
                        Provide instant answers to customer questions around the clock, improving customer satisfaction.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
                      <p className="text-gray-600">
                        Open-source solution with comprehensive APIs for seamless integration into existing systems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Technical Specifications</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">Response Time:</span>
                    <span>&lt; 2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Accuracy:</span>
                    <span>95%+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Languages:</span>
                    <span>50+ supported</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Document Types:</span>
                    <span>PDF, DOC, HTML, MD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">API:</span>
                    <span>REST & GraphQL</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">See ContextClue in Action</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>User:</strong> "How do I reset my password?"
                </p>
                <p className="text-blue-600">
                  <strong>ContextClue:</strong> "To reset your password, follow these steps: 1) Go to the login page, 2) Click 'Forgot Password', 3) Enter your email address, 4) Check your email for a reset link. Would you like me to guide you through any specific step?"
                </p>
              </div>
              <p className="text-gray-600">
                ContextClue understands the context and provides step-by-step guidance with follow-up options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Transform your knowledge base into an intelligent assistant today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started
            </Link>
            <a 
              href="https://github.com/ai-on-turbo/contextclue"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-blue-300 text-blue-300 px-8 py-4 rounded-lg hover:bg-blue-300 hover:text-blue-900 transition-colors font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
