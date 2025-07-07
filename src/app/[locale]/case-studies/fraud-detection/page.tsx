import Link from 'next/link'
import Image from 'next/image'

export default function FraudDetectionCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-yellow-900 to-orange-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/case-studies" className="text-gray-100 hover:text-white transition-colors">
                ← Back to Case Studies
              </Link>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-4">
                  <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Financial Services
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-Powered Fraud Detection
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  "Machine learning models reduced fraudulent transactions by 92%, saving $3.2M annually."
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">92%</div>
                    <div className="text-sm text-gray-100">Fraud Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$3.2M</div>
                    <div className="text-sm text-gray-100">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.7%</div>
                    <div className="text-sm text-gray-100">Detection Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Real-time</div>
                    <div className="text-sm text-gray-100">Transaction Scanning</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Industry</h3>
                <p className="text-gray-700">Financial Services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Timeline</h3>
                <p className="text-gray-700">6 months development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Team Size</h3>
                <p className="text-gray-700">8 data scientists</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                The client, a major financial institution, faced increasing losses from sophisticated fraud schemes. Manual review processes were slow and often missed subtle patterns, resulting in significant financial and reputational damage.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>High volume of daily transactions</li>
                <li>Complex, evolving fraud tactics</li>
                <li>Manual review bottlenecks</li>
                <li>Regulatory compliance requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                We implemented a real-time fraud detection system using ensemble machine learning models, anomaly detection, and behavioral analytics. The system continuously learns from new data, adapting to emerging fraud patterns.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Ensemble Models</span>
                        <p className="text-sm text-gray-600">Random Forest, XGBoost, Neural Networks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Anomaly Detection</span>
                        <p className="text-sm text-gray-600">Isolation Forest, Autoencoders</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Behavioral Analytics</span>
                        <p className="text-sm text-gray-600">User profiling and risk scoring</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">System Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Real-time Scoring</span>
                        <p className="text-sm text-gray-600">Instant risk assessment for every transaction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Automated Alerts</span>
                        <p className="text-sm text-gray-600">Immediate notification of suspicious activity</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Regulatory Reporting</span>
                        <p className="text-sm text-gray-600">Automated compliance documentation</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Results</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Fraud Reduction</span>
                      <span className="text-2xl font-bold text-red-600">92%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Detection Accuracy</span>
                      <span className="text-2xl font-bold text-yellow-600">99.7%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Annual Savings</span>
                      <span className="text-2xl font-bold text-green-600">$3.2M</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Real-time Scanning</span>
                      <span className="text-2xl font-bold text-blue-600">Yes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Reduced manual review workload by 80%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Improved compliance and audit readiness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Faster response to emerging threats</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Monetization Strategy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Revenue Model</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Subscription model for banks and fintechs</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Per-transaction fee: $0.01-$0.05</li>
                    <li>• Enterprise licensing: $250,000-$1M annually</li>
                    <li>• Professional services: $200,000 setup</li>
                    <li>• Analytics premium: $100,000 annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Growth Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-red-600">$5M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-red-600">$12M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-red-600">$25M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Target Market:</span>
                      <span className="font-bold text-blue-600">$10B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Protect Your Business from Fraud</h2>
              <p className="text-lg mb-6">
                Discover how our AI-powered fraud detection can safeguard your financial operations and boost profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-red-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/solutions/finance-insurance"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold text-center"
                >
                  Explore Finance Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 