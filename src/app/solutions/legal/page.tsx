export default function LegalSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Legal Industry
            </h1>
            <p className="text-xl mb-8">
              Transforming legal practice with intelligent document analysis, case research, and automated workflows
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">AI-Powered Legal Practice</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The legal industry is embracing AI to streamline operations, improve accuracy, and enhance client service. 
                  Our AI solutions help law firms and legal departments automate routine tasks, accelerate research, 
                  and make data-driven decisions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl font-bold text-slate-700">75%</div>
                    <div className="text-sm text-gray-600">Time Savings</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">90%</div>
                    <div className="text-sm text-gray-600">Research Accuracy</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                    Legal document analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                    Case research automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                    Contract review and analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                    Compliance monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Legal AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Document Analysis</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered document analysis that extracts key information, identifies patterns, 
                  and summarizes legal documents with high accuracy.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Information extraction</li>
                  <li>• Pattern recognition</li>
                  <li>• Document summarization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CR</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Case Research</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent case research tools that analyze legal precedents, identify relevant cases, 
                  and provide comprehensive legal insights.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Precedent analysis</li>
                  <li>• Case matching</li>
                  <li>• Legal insights</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Contract Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Automated contract review and analysis that identifies risks, ensures compliance, 
                  and accelerates contract approval processes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Risk identification</li>
                  <li>• Compliance checking</li>
                  <li>• Approval automation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">ED</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">eDiscovery</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered eDiscovery solutions that efficiently process large volumes of data, 
                  identify relevant documents, and reduce review time.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Data processing</li>
                  <li>• Document relevance</li>
                  <li>• Review acceleration</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Compliance Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Automated compliance monitoring systems that track regulatory changes, 
                  ensure adherence to legal requirements, and manage compliance risks.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Regulatory tracking</li>
                  <li>• Compliance assessment</li>
                  <li>• Risk management</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Legal predictive analytics that forecast case outcomes, assess litigation risks, 
                  and support strategic decision-making.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Outcome prediction</li>
                  <li>• Risk assessment</li>
                  <li>• Strategic insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Practice Areas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Legal Practice Areas</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Corporate Law</h3>
                <p className="text-sm text-gray-600">
                  Contract analysis and compliance
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏛️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Litigation</h3>
                <p className="text-sm text-gray-600">
                  Case research and eDiscovery
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Estate</h3>
                <p className="text-sm text-gray-600">
                  Property law and due diligence
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Employment</h3>
                <p className="text-sm text-gray-600">
                  HR compliance and employment law
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Legal Practice</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Increased Efficiency</h3>
                <p className="text-gray-600">
                  Automate routine tasks and accelerate legal research to focus on 
                  high-value activities.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Accuracy</h3>
                <p className="text-gray-600">
                  Reduce human error and improve accuracy in legal document analysis 
                  and case research.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
                <p className="text-gray-600">
                  Lower operational costs and improve profitability through 
                  intelligent automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Legal Practice?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can streamline your legal operations and 
              enhance client service delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-700 transition">
                Download Legal AI Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
