export default function AviationSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Aviation Industry
            </h1>
            <p className="text-xl mb-8">
              Transforming aviation operations with intelligent AI solutions for safety, efficiency, and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">Revolutionizing Aviation with AI</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The aviation industry faces unique challenges in safety, efficiency, and operational excellence. 
                  Our AI solutions are specifically designed to address these challenges, helping airlines, airports, 
                  and aviation service providers optimize their operations while maintaining the highest safety standards.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">99.9%</div>
                    <div className="text-sm text-gray-600">Safety Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">30%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Predictive maintenance for aircraft
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Flight path optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Baggage handling automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    Crew scheduling optimization
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Aviation AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered predictive maintenance systems that analyze sensor data to predict equipment failures 
                  before they occur, reducing downtime and maintenance costs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Failure prediction</li>
                  <li>• Maintenance scheduling</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">FO</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Flight Operations</h3>
                <p className="text-gray-600 mb-4">
                  Optimize flight operations with AI-driven route planning, fuel consumption optimization, 
                  and weather prediction systems for safer and more efficient flights.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Route optimization</li>
                  <li>• Fuel efficiency</li>
                  <li>• Weather analysis</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Airport Management</h3>
                <p className="text-gray-600 mb-4">
                  Smart airport management systems that optimize passenger flow, baggage handling, 
                  and gate assignments using AI and machine learning algorithms.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Passenger flow optimization</li>
                  <li>• Baggage tracking</li>
                  <li>• Gate management</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Management</h3>
                <p className="text-gray-600 mb-4">
                  Advanced safety management systems using AI to analyze flight data, identify risks, 
                  and implement preventive measures to ensure maximum safety.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Risk assessment</li>
                  <li>• Incident prediction</li>
                  <li>• Safety protocols</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Crew Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered crew scheduling and management systems that optimize crew assignments, 
                  reduce costs, and ensure compliance with aviation regulations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Optimal crew assignment</li>
                  <li>• Regulation compliance</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CX</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Experience</h3>
                <p className="text-gray-600 mb-4">
                  Enhance passenger experience with AI-powered chatbots, personalized services, 
                  and predictive customer service solutions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI chatbots</li>
                  <li>• Personalization</li>
                  <li>• Service prediction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Aviation</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Predictive analytics and real-time monitoring significantly improve safety standards 
                  and reduce the risk of incidents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
                <p className="text-gray-600">
                  Optimize operations, reduce fuel consumption, and minimize maintenance costs 
                  through intelligent AI solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Excellence</h3>
                <p className="text-gray-600">
                  Streamline operations, improve on-time performance, and enhance overall 
                  efficiency across all aviation processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Aviation Operations?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our AI solutions can enhance safety, efficiency, and profitability 
              in your aviation business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Download Case Study
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
