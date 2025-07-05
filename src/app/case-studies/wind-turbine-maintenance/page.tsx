import Link from 'next/link'
import Image from 'next/image'

export default function WindTurbineCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 via-blue-900 to-teal-900 text-white py-20">
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
                  <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Renewable Energy
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Predictive Maintenance for Wind Turbines
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  "Vibration analysis AI predicts turbine failures 14 days in advance, cutting downtime costs by $280k/year per unit."
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">14</div>
                    <div className="text-sm text-gray-100">Days Early Warning</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$280K</div>
                    <div className="text-sm text-gray-100">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">95%</div>
                    <div className="text-sm text-gray-100">Prediction Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">85%</div>
                    <div className="text-sm text-gray-100">Downtime Reduction</div>
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
                <p className="text-gray-700">Renewable Energy</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Timeline</h3>
                <p className="text-gray-700">4 months development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Team Size</h3>
                <p className="text-gray-700">6 AI specialists</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                Wind turbine operators faced massive financial losses from unexpected equipment failures. 
                Traditional maintenance schedules were reactive, leading to catastrophic breakdowns that 
                cost $280,000-$500,000 per incident in repairs and lost energy production.
              </p>
              <p className="text-gray-700 mb-4">
                Key challenges included:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Unexpected failures costing $280k-$500k per incident</li>
                <li>Limited warning time (usually 24-48 hours)</li>
                <li>Complex failure patterns across multiple components</li>
                <li>Remote locations making maintenance scheduling difficult</li>
                <li>High safety risks for maintenance crews</li>
                <li>Seasonal weather constraints limiting repair windows</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                We developed an AI-powered predictive maintenance system that analyzes vibration patterns, 
                temperature fluctuations, and performance metrics to predict failures weeks in advance.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Vibration Analysis</span>
                        <p className="text-sm text-gray-600">FFT-based anomaly detection</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Deep Learning Models</span>
                        <p className="text-sm text-gray-600">LSTM networks for time series</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Multi-sensor Fusion</span>
                        <p className="text-sm text-gray-600">Temperature, pressure, acoustic</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Remaining Useful Life</span>
                        <p className="text-sm text-gray-600">Precise failure time prediction</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">System Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Real-time Monitoring</span>
                        <p className="text-sm text-gray-600">24/7 data collection and analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Mobile Alerts</span>
                        <p className="text-sm text-gray-600">Instant notifications to maintenance teams</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Parts Optimization</span>
                        <p className="text-sm text-gray-600">Automated spare parts ordering</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Weather Integration</span>
                        <p className="text-sm text-gray-600">Maintenance scheduling optimization</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Technical Architecture</h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Edge Computing</div>
                    <div className="text-gray-600">Local data processing</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Cloud Analytics</div>
                    <div className="text-gray-600">Historical trend analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">API Integration</div>
                    <div className="text-gray-600">SCADA system connectivity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Results</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Key Metrics</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Early Warning Time</span>
                      <span className="text-2xl font-bold text-green-600">14 days</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Prediction Accuracy</span>
                      <span className="text-2xl font-bold text-blue-600">95%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Downtime Reduction</span>
                      <span className="text-2xl font-bold text-purple-600">85%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Annual Savings</span>
                      <span className="text-2xl font-bold text-indigo-600">$280K</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">12 major energy providers deployed</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">2,500+ wind turbines monitored</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">450+ failures prevented</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">98% customer satisfaction rate</span>
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
                    <strong>Subscription model for energy providers</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Per-turbine monthly fee: $2,500-$5,000</li>
                    <li>• Enterprise licensing: $100,000-$500,000 annually</li>
                    <li>• Professional services: $150,000-$300,000 setup</li>
                    <li>• Data analytics premium: $50,000-$100,000 annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Growth Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-green-600">$15M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-green-600">$38M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-green-600">$85M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Target Market:</span>
                      <span className="font-bold text-blue-600">$4.2B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Transform Your Energy Operations</h2>
              <p className="text-lg mb-6">
                Discover how our predictive maintenance AI can revolutionize your renewable energy 
                infrastructure and deliver massive cost savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/solutions/manufacturing"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-green-600 transition-colors font-semibold text-center"
                >
                  Explore Manufacturing Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
