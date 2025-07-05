import Link from "next/link";

export default function EnterpriseGenerativeAiPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise Generative AI Platform
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Comprehensive generative AI solutions for enterprise-scale operations
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Enterprise-Grade Generative AI</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Enterprise Generative AI Platform provides a comprehensive suite of AI-powered tools designed specifically for large-scale business operations. From content generation to code automation, our platform scales with your organization's needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Built with enterprise security, compliance, and governance in mind, our platform ensures your sensitive data remains protected while delivering the full power of generative AI across your organization.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Platform Features</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Multi-modal AI capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Enterprise security & compliance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Scalable infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Custom model training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Modules */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Platform Modules</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-4">Content Studio</h3>
              <p className="text-gray-600">
                Generate high-quality content including articles, reports, marketing copy, and documentation at scale.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-semibold mb-4">Code Assistant</h3>
              <p className="text-gray-600">
                Automated code generation, review, and optimization for multiple programming languages and frameworks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Creative Suite</h3>
              <p className="text-gray-600">
                Generate images, videos, and multimedia content for marketing, presentations, and creative projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Data Synthesizer</h3>
              <p className="text-gray-600">
                Create synthetic datasets for training, testing, and privacy-preserving analytics applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">AI Workflows</h3>
              <p className="text-gray-600">
                Build automated workflows that combine multiple AI capabilities for complex business processes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Model Hub</h3>
              <p className="text-gray-600">
                Centralized management of AI models with version control, A/B testing, and performance monitoring.
              </p>
            </div>
          </div>
        </div>

        {/* Enterprise Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SOC 2 Type II compliance</li>
                <li>• GDPR and CCPA compliance</li>
                <li>• End-to-end encryption</li>
                <li>• Role-based access control</li>
                <li>• Audit logging and monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Scalability & Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Auto-scaling infrastructure</li>
                <li>• Load balancing and optimization</li>
                <li>• Global CDN deployment</li>
                <li>• 99.9% uptime SLA</li>
                <li>• Multi-region availability</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Integration & APIs</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• RESTful API access</li>
                <li>• SDK for popular languages</li>
                <li>• Webhook notifications</li>
                <li>• Enterprise SSO integration</li>
                <li>• Custom connectors</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Usage analytics dashboard</li>
                <li>• Performance monitoring</li>
                <li>• Cost optimization insights</li>
                <li>• User behavior analysis</li>
                <li>• Custom reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Enterprise Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Marketing & Sales</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Personalized marketing campaigns</li>
                <li>• Sales proposal generation</li>
                <li>• Product description creation</li>
                <li>• Social media content</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Human Resources</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Job description generation</li>
                <li>• Employee handbook updates</li>
                <li>• Training material creation</li>
                <li>• Performance review templates</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Operations</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Process documentation</li>
                <li>• Standard operating procedures</li>
                <li>• Incident response playbooks</li>
                <li>• Quality assurance protocols</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated response templates</li>
                <li>• Knowledge base articles</li>
                <li>• Chatbot conversations</li>
                <li>• Customer communication</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">ROI Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">75%</h3>
              </div>
              <h4 className="font-semibold">Content Creation Speed</h4>
              <p className="text-sm text-gray-600">Faster than manual creation</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">60%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">In content production</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">300%</h3>
              </div>
              <h4 className="font-semibold">Productivity Increase</h4>
              <p className="text-sm text-gray-600">For content teams</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-600">Always-on generation</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Deploy Enterprise Generative AI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your organization with our comprehensive generative AI platform designed for enterprise needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
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
