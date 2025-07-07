import Link from 'next/link'
import Image from 'next/image'

export default function RetailRobotsCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-800 via-orange-900 to-green-900 text-white py-20">
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
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Retail
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Autonomous Retail Robots
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  "AI-powered robots increased inventory accuracy by 99% and reduced labor costs by 60%."
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">99%</div>
                    <div className="text-sm text-gray-100">Inventory Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">60%</div>
                    <div className="text-sm text-gray-100">Labor Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-100">Operation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">IoT</div>
                    <div className="text-sm text-gray-100">Integration</div>
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
                <p className="text-gray-700">Retail</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Timeline</h3>
                <p className="text-gray-700">5 months development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Team Size</h3>
                <p className="text-gray-700">7 robotics engineers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                Large retail chains struggled with inventory inaccuracies, high labor costs, and inefficient restocking processes. Manual inventory checks were slow and error-prone, leading to lost sales and dissatisfied customers.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Frequent stockouts and overstocking</li>
                <li>High labor costs for manual checks</li>
                <li>Limited real-time inventory visibility</li>
                <li>Integration challenges with legacy systems</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                We deployed autonomous robots equipped with computer vision and IoT sensors to perform real-time inventory tracking, shelf scanning, and restocking alerts. The system integrates with existing POS and ERP systems for seamless operations.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Computer Vision</span>
                        <p className="text-sm text-gray-600">Shelf scanning and product recognition</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">IoT Sensors</span>
                        <p className="text-sm text-gray-600">Real-time data collection</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Path Planning</span>
                        <p className="text-sm text-gray-600">Efficient navigation in store aisles</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">System Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Real-time Inventory</span>
                        <p className="text-sm text-gray-600">Instant stock updates and alerts</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Automated Restocking</span>
                        <p className="text-sm text-gray-600">Restock alerts and order generation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">POS/ERP Integration</span>
                        <p className="text-sm text-gray-600">Seamless data flow with store systems</p>
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
                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Inventory Accuracy</span>
                      <span className="text-2xl font-bold text-yellow-600">99%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Labor Cost Reduction</span>
                      <span className="text-2xl font-bold text-orange-600">60%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">24/7 Operation</span>
                      <span className="text-2xl font-bold text-green-600">Yes</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">IoT Integration</span>
                      <span className="text-2xl font-bold text-blue-600">Yes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Reduced out-of-stock incidents by 85%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Improved customer satisfaction</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Faster restocking and reduced shrinkage</span>
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
                    <strong>Subscription model for retail chains</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Per-store monthly fee: $1,000-$3,000</li>
                    <li>• Enterprise licensing: $200,000 annually</li>
                    <li>• Professional services: $100,000 setup</li>
                    <li>• Analytics premium: $50,000 annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Growth Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-yellow-600">$3M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-yellow-600">$7M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-yellow-600">$15M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Target Market:</span>
                      <span className="font-bold text-blue-600">$5B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-600 to-green-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Transform Retail Operations</h2>
              <p className="text-lg mb-6">
                Discover how our autonomous retail robots can optimize inventory, reduce costs, and improve customer experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-yellow-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/solutions/retail"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-yellow-600 transition-colors font-semibold text-center"
                >
                  Explore Retail Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 