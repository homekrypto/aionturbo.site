export default function FinanceInsuranceSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Finance & Insurance
            </h1>
            <p className="text-xl mb-8">
              Transforming financial services with intelligent automation, risk management, and customer insights
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">AI-Powered Financial Services</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The financial and insurance industries are rapidly adopting AI to enhance customer experiences, 
                  improve risk management, and automate complex processes. Our AI solutions help financial 
                  institutions stay competitive while maintaining regulatory compliance.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <div className="text-2xl font-bold text-indigo-600">95%</div>
                    <div className="text-sm text-gray-600">Fraud Detection</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">60%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Fraud detection and prevention
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Risk assessment and management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Automated underwriting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                    Customer service automation
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Finance & Insurance AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">FD</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fraud Detection</h3>
                <p className="text-gray-600 mb-4">
                  Advanced machine learning algorithms that detect fraudulent transactions and activities 
                  in real-time, protecting your business and customers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Pattern recognition</li>
                  <li>• Anomaly detection</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">RA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Assessment</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered risk assessment tools that analyze credit risk, market risk, and operational risk 
                  for better decision-making and regulatory compliance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Credit scoring</li>
                  <li>• Market risk analysis</li>
                  <li>• Compliance monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AU</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Automated Underwriting</h3>
                <p className="text-gray-600 mb-4">
                  Streamline the underwriting process with AI-powered automation that evaluates 
                  applications quickly and accurately while maintaining quality standards.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Application processing</li>
                  <li>• Risk evaluation</li>
                  <li>• Decision automation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent chatbots and virtual assistants that provide 24/7 customer support, 
                  answer queries, and guide customers through complex processes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI chatbots</li>
                  <li>• Virtual assistants</li>
                  <li>• Query resolution</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AT</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Algorithmic Trading</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered trading systems that analyze market data, identify opportunities, 
                  and execute trades automatically based on predefined strategies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Market analysis</li>
                  <li>• Strategy optimization</li>
                  <li>• Automated execution</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Portfolio Management</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent portfolio optimization that balances risk and return, 
                  adjusts to market conditions, and provides personalized investment strategies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Asset allocation</li>
                  <li>• Risk optimization</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Regulatory Compliance</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">KYC/AML</h3>
                <p className="text-sm text-gray-600">
                  Know Your Customer and Anti-Money Laundering compliance
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">GDPR</h3>
                <p className="text-sm text-gray-600">
                  General Data Protection Regulation compliance
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚖️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Basel III</h3>
                <p className="text-sm text-gray-600">
                  Basel III regulatory framework compliance
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">SOX</h3>
                <p className="text-sm text-gray-600">
                  Sarbanes-Oxley Act compliance
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
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Finance & Insurance</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Automate routine tasks and processes to reduce costs and improve efficiency 
                  across all operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Accuracy</h3>
                <p className="text-gray-600">
                  Improve decision-making accuracy with AI-powered analytics and 
                  predictive modeling.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Better Customer Experience</h3>
                <p className="text-gray-600">
                  Provide personalized services and faster response times to enhance 
                  customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Financial Services?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can enhance your financial and insurance operations 
              while maintaining regulatory compliance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
                Download Financial AI Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
