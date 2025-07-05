export default function PrivateInvestmentsSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Private Investments
            </h1>
            <p className="text-xl mb-8">
              Empowering investment decisions with advanced AI analytics, risk assessment, and portfolio optimization
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition">
                View Success Stories
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
                <h2 className="text-3xl font-bold mb-6">Intelligent Investment Strategies</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Private equity and venture capital firms need sophisticated tools to identify opportunities, 
                  assess risks, and maximize returns. Our AI solutions provide deep insights into market trends, 
                  company performance, and investment opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <div className="text-2xl font-bold text-emerald-600">35%</div>
                    <div className="text-sm text-gray-600">ROI Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">60%</div>
                    <div className="text-sm text-gray-600">Faster Due Diligence</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                    Deal sourcing and screening
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                    Due diligence automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                    Portfolio optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                    Risk assessment and monitoring
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Investment AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Deal Sourcing</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered deal sourcing platforms that identify investment opportunities, 
                  screen potential targets, and prioritize deals based on custom criteria.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Opportunity identification</li>
                  <li>• Target screening</li>
                  <li>• Deal prioritization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DD</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Due Diligence</h3>
                <p className="text-gray-600 mb-4">
                  Automated due diligence processes that analyze financial data, legal documents, 
                  and market conditions to provide comprehensive investment insights.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Document analysis</li>
                  <li>• Financial modeling</li>
                  <li>• Risk assessment</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PO</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Portfolio Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Advanced portfolio optimization algorithms that balance risk and return, 
                  optimize asset allocation, and maximize investment performance.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Asset allocation</li>
                  <li>• Risk-return optimization</li>
                  <li>• Performance tracking</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">RA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Risk Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive risk assessment tools that evaluate market risk, credit risk, 
                  and operational risk across your investment portfolio.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Market risk analysis</li>
                  <li>• Credit risk assessment</li>
                  <li>• Operational risk monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">MA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                <p className="text-gray-600 mb-4">
                  AI-driven market analysis that identifies trends, forecasts market movements, 
                  and provides actionable insights for investment decisions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Trend identification</li>
                  <li>• Market forecasting</li>
                  <li>• Sentiment analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">VM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Value Monitoring</h3>
                <p className="text-gray-600 mb-4">
                  Real-time portfolio monitoring and value tracking systems that provide 
                  continuous insights into investment performance and market conditions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Performance analytics</li>
                  <li>• Alert systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Types Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Investment Focus Areas</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Private Equity</h3>
                <p className="text-sm text-gray-600">
                  Growth capital and buyout opportunities
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Venture Capital</h3>
                <p className="text-sm text-gray-600">
                  Early-stage and growth investments
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Real Estate</h3>
                <p className="text-sm text-gray-600">
                  Commercial and residential properties
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Alternative</h3>
                <p className="text-sm text-gray-600">
                  Hedge funds and specialty investments
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Private Investments</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data-Driven Decisions</h3>
                <p className="text-gray-600">
                  Make informed investment decisions based on comprehensive data analysis 
                  and predictive modeling.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Processing</h3>
                <p className="text-gray-600">
                  Accelerate due diligence and investment analysis processes with 
                  automated AI-powered tools.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Returns</h3>
                <p className="text-gray-600">
                  Optimize portfolio performance and maximize returns through 
                  intelligent investment strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Investment Strategy?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can enhance your investment process and 
              drive superior returns.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-emerald-600 transition">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
