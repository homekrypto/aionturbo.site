import Link from 'next/link'
import Image from 'next/image'

export default function CounterfeitDetectionCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-800 via-blue-900 to-green-900 text-white py-20">
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
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Manufacturing
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-Based Counterfeit Detection
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  "Computer vision and blockchain reduced counterfeit incidents by 97%, saving $1.8M annually."
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">97%</div>
                    <div className="text-sm text-gray-100">Counterfeit Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$1.8M</div>
                    <div className="text-sm text-gray-100">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">Blockchain</div>
                    <div className="text-sm text-gray-100">Traceability</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99.9%</div>
                    <div className="text-sm text-gray-100">Detection Accuracy</div>
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
                <p className="text-gray-700">Manufacturing</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Timeline</h3>
                <p className="text-gray-700">7 months development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Team Size</h3>
                <p className="text-gray-700">9 AI/blockchain experts</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                The client, a global manufacturer, faced significant losses due to counterfeit products entering the supply chain. Traditional anti-counterfeit measures were easily bypassed, and tracking product authenticity was difficult.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Complex global supply chains</li>
                <li>High-value products targeted by counterfeiters</li>
                <li>Difficulty in verifying authenticity</li>
                <li>Brand reputation risk</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                We implemented a computer vision system for product authentication, combined with blockchain-based traceability. The solution enables real-time verification at every stage of the supply chain.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Computer Vision</span>
                        <p className="text-sm text-gray-600">Visual inspection and feature extraction</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Blockchain Traceability</span>
                        <p className="text-sm text-gray-600">Immutable product history</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Anomaly Detection</span>
                        <p className="text-sm text-gray-600">Spotting suspicious patterns</p>
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
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Real-time Verification</span>
                        <p className="text-sm text-gray-600">Instant authenticity checks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Mobile App Integration</span>
                        <p className="text-sm text-gray-600">On-the-go product checks</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Automated Alerts</span>
                        <p className="text-sm text-gray-600">Suspicious activity notifications</p>
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
                    <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Counterfeit Reduction</span>
                      <span className="text-2xl font-bold text-indigo-600">97%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Detection Accuracy</span>
                      <span className="text-2xl font-bold text-blue-600">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Annual Savings</span>
                      <span className="text-2xl font-bold text-green-600">$1.8M</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Blockchain Traceability</span>
                      <span className="text-2xl font-bold text-purple-600">Yes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Reduced brand reputation risk</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Improved supply chain transparency</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Faster counterfeit detection and response</span>
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
                    <strong>Subscription model for manufacturers</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Per-product fee: $0.10-$0.50</li>
                    <li>• Enterprise licensing: $300,000 annually</li>
                    <li>• Professional services: $150,000 setup</li>
                    <li>• Analytics premium: $80,000 annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Growth Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-indigo-600">$4M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-indigo-600">$10M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-indigo-600">$22M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Target Market:</span>
                      <span className="font-bold text-blue-600">$8B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-600 to-green-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Eliminate Counterfeits from Your Supply Chain</h2>
              <p className="text-lg mb-6">
                Discover how our AI-based counterfeit detection can protect your brand and bottom line.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-indigo-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/solutions/manufacturing"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors font-semibold text-center"
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