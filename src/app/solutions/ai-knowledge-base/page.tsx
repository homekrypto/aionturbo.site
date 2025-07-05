import Link from "next/link";

export default function AiKnowledgeBasePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-powered Knowledge Base
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Transform your knowledge repositories into intelligent, searchable systems
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Intelligent Knowledge Management</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our AI-powered Knowledge Base solutions transform static information repositories into dynamic, intelligent systems that understand context, provide personalized answers, and continuously learn from user interactions.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Using advanced natural language processing and machine learning, we create knowledge systems that can understand complex queries, provide accurate answers, and even generate new insights from existing information.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Core Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Semantic search and understanding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Conversational Q&A interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Auto-generated summaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Multi-source integration</span>
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
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Semantic Search</h3>
              <p className="text-gray-600">
                Find relevant information based on meaning and context, not just keywords, with advanced NLP algorithms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-gray-600">
                Natural language interaction with your knowledge base through chat interfaces and voice commands.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-4">Auto-Categorization</h3>
              <p className="text-gray-600">
                Automatically organize and categorize content using machine learning classification algorithms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
              <p className="text-gray-600">
                Track usage patterns, identify knowledge gaps, and optimize content based on user behavior.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                System learns from interactions to improve accuracy and provide better recommendations over time.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-4">Multi-language Support</h3>
              <p className="text-gray-600">
                Support for multiple languages with automatic translation and cross-language search capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">System Architecture</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-green-800">Data Sources</h3>
                </div>
                <p className="text-sm text-gray-600">Documents, databases, APIs, web content</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">AI Processing</h3>
                </div>
                <p className="text-sm text-gray-600">NLP, embeddings, semantic analysis</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-800">Knowledge Graph</h3>
                </div>
                <p className="text-sm text-gray-600">Structured knowledge representation</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-purple-800">User Interface</h3>
                </div>
                <p className="text-sm text-gray-600">Search, chat, APIs, dashboards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Enterprise Knowledge Management</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Internal documentation and procedures</li>
                <li>• Employee training and onboarding</li>
                <li>• Best practices and lessons learned</li>
                <li>• Policy and compliance information</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Customer Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated help desk responses</li>
                <li>• Product documentation and FAQs</li>
                <li>• Troubleshooting guides</li>
                <li>• Customer self-service portals</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Research & Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Scientific literature analysis</li>
                <li>• Patent and IP research</li>
                <li>• Technical specifications</li>
                <li>• Research collaboration tools</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical knowledge databases</li>
                <li>• Clinical decision support</li>
                <li>• Drug interaction databases</li>
                <li>• Treatment protocols</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Integration Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Options</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">API Integration</h3>
              <p className="text-gray-600 mb-4">
                RESTful APIs for seamless integration with existing applications and workflows.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Search and query APIs</li>
                <li>• Content management APIs</li>
                <li>• Analytics and reporting APIs</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Web Interface</h3>
              <p className="text-gray-600 mb-4">
                Customizable web interfaces for direct user interaction and content management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Search portals</li>
                <li>• Administrative dashboards</li>
                <li>• Chat interfaces</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Platform Integration</h3>
              <p className="text-gray-600 mb-4">
                Direct integration with popular enterprise platforms and collaboration tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Microsoft 365 / SharePoint</li>
                <li>• Slack / Teams</li>
                <li>• Salesforce / ServiceNow</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Business Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-green-800">80%</h3>
              </div>
              <h4 className="font-semibold">Faster Information Retrieval</h4>
              <p className="text-sm text-gray-600">Reduction in search time</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-green-800">95%</h3>
              </div>
              <h4 className="font-semibold">Query Accuracy</h4>
              <p className="text-sm text-gray-600">Relevant answer precision</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-green-800">60%</h3>
              </div>
              <h4 className="font-semibold">Support Ticket Reduction</h4>
              <p className="text-sm text-gray-600">Fewer manual inquiries</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-green-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Always Available</h4>
              <p className="text-sm text-gray-600">Continuous access to knowledge</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Your Intelligent Knowledge Base?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your organizational knowledge into an intelligent, searchable, and interactive system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
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
