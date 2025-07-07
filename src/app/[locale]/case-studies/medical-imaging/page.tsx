import Link from 'next/link'
import Image from 'next/image'

export default function MedicalImagingCaseStudy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-800 via-purple-900 to-indigo-900 text-white py-20">
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
                  <span className="bg-pink-100 text-pink-800 text-sm font-semibold px-3 py-1 rounded-full">
                    Healthcare
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  AI-Driven Medical Imaging Diagnostics
                </h1>
                <p className="text-xl text-gray-100 mb-8">
                  "Deep learning models improved diagnostic accuracy by 98%, reducing time-to-diagnosis by 70%."
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-100">Diagnostic Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">70%</div>
                    <div className="text-sm text-gray-100">Faster Diagnosis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-100">Continuous Analysis</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">HIPAA</div>
                    <div className="text-sm text-gray-100">Compliant</div>
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
                <p className="text-gray-700">Healthcare</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Timeline</h3>
                <p className="text-gray-700">8 months development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2 text-gray-900">Team Size</h3>
                <p className="text-gray-700">10 AI engineers</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">The Challenge</h2>
              <p className="text-gray-700 mb-4">
                Hospitals and clinics struggled with high diagnostic error rates and long wait times for imaging results. Manual analysis was time-consuming and prone to human error, impacting patient outcomes.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>High volume of imaging data</li>
                <li>Shortage of radiologists</li>
                <li>Risk of misdiagnosis</li>
                <li>Regulatory compliance (HIPAA)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Solution</h2>
              <p className="text-gray-700 mb-6">
                We developed a deep learning-based diagnostic platform that analyzes X-rays, MRIs, and CT scans in real time. The system flags anomalies, prioritizes urgent cases, and provides decision support to radiologists.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">AI Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Convolutional Neural Networks</span>
                        <p className="text-sm text-gray-600">Image classification and segmentation</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Anomaly Detection</span>
                        <p className="text-sm text-gray-600">Spotting rare and subtle patterns</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Natural Language Processing</span>
                        <p className="text-sm text-gray-600">Automated report generation</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">System Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Urgency Prioritization</span>
                        <p className="text-sm text-gray-600">Flagging critical cases for review</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Continuous Learning</span>
                        <p className="text-sm text-gray-600">Improving with every new case</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <span className="font-semibold">Seamless Integration</span>
                        <p className="text-sm text-gray-600">Works with existing hospital systems</p>
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
                    <div className="flex items-center justify-between p-4 bg-pink-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Diagnostic Accuracy</span>
                      <span className="text-2xl font-bold text-pink-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Faster Diagnosis</span>
                      <span className="text-2xl font-bold text-purple-600">70%</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <span className="font-semibold text-gray-700">Continuous Analysis</span>
                      <span className="text-2xl font-bold text-blue-600">24/7</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <span className="font-semibold text-gray-700">HIPAA Compliant</span>
                      <span className="text-2xl font-bold text-green-600">Yes</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Business Impact</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Reduced diagnostic errors by 80%</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Faster patient treatment and improved outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg className="w-4 h-4 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">Lowered operational costs for hospitals</span>
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
                    <strong>Subscription model for hospitals and clinics</strong>
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Per-scan fee: $2-$5</li>
                    <li>• Enterprise licensing: $500,000 annually</li>
                    <li>• Professional services: $250,000 setup</li>
                    <li>• Analytics premium: $120,000 annually</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">Growth Projections</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 1 Revenue:</span>
                      <span className="font-bold text-pink-600">$8M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 2 Revenue:</span>
                      <span className="font-bold text-pink-600">$18M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Year 3 Revenue:</span>
                      <span className="font-bold text-pink-600">$35M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Target Market:</span>
                      <span className="font-bold text-blue-600">$20B</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Revolutionize Medical Imaging</h2>
              <p className="text-lg mb-6">
                Discover how our AI-driven diagnostics can improve patient care and operational efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-pink-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-center"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="/solutions/healthcare"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pink-600 transition-colors font-semibold text-center"
                >
                  Explore Healthcare Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 