export default function ManufacturingSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Manufacturing
            </h1>
            <p className="text-xl mb-8">
              Revolutionizing manufacturing with intelligent automation, predictive maintenance, and quality control
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">Smart Manufacturing Revolution</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Manufacturing is undergoing a digital transformation. Our AI solutions enable manufacturers 
                  to optimize production processes, reduce waste, improve quality, and increase efficiency 
                  through advanced analytics and machine learning.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">40%</div>
                    <div className="text-sm text-gray-600">Productivity Increase</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">25%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Predictive maintenance systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Quality control automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Supply chain optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                    Production planning & scheduling
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Manufacturing AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered predictive maintenance that analyzes equipment data to predict failures 
                  before they occur, reducing downtime and maintenance costs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment monitoring</li>
                  <li>• Failure prediction</li>
                  <li>• Maintenance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">QC</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                <p className="text-gray-600 mb-4">
                  Computer vision and machine learning systems for automated quality inspection, 
                  defect detection, and product classification.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Automated inspection</li>
                  <li>• Defect detection</li>
                  <li>• Quality assurance</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SC</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Optimization</h3>
                <p className="text-gray-600 mb-4">
                  AI-driven supply chain management that optimizes inventory levels, demand forecasting, 
                  and supplier relationships for maximum efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Demand forecasting</li>
                  <li>• Inventory optimization</li>
                  <li>• Supplier management</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Production Scheduling</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent production planning and scheduling systems that optimize resource allocation, 
                  reduce bottlenecks, and improve overall efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Resource optimization</li>
                  <li>• Bottleneck analysis</li>
                  <li>• Efficiency improvement</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">RA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Robotic Automation</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered robotic systems for manufacturing automation, including assembly, 
                  packaging, and material handling processes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Assembly automation</li>
                  <li>• Material handling</li>
                  <li>• Process optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">EE</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Energy Efficiency</h3>
                <p className="text-gray-600 mb-4">
                  AI systems that optimize energy consumption, reduce waste, and improve 
                  sustainability in manufacturing operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Energy optimization</li>
                  <li>• Waste reduction</li>
                  <li>• Sustainability metrics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry 4.0 Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industry 4.0 Technologies</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI & ML</h3>
                <p className="text-sm text-gray-300">
                  Advanced algorithms for process optimization
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Big Data</h3>
                <p className="text-sm text-gray-300">
                  Real-time data analytics and insights
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT</h3>
                <p className="text-sm text-gray-300">
                  Connected devices and sensors
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud</h3>
                <p className="text-sm text-gray-300">
                  Scalable computing and storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Manufacturing</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Increased Productivity</h3>
                <p className="text-gray-600">
                  Optimize production processes and reduce bottlenecks to achieve higher output 
                  with the same resources.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Improved Quality</h3>
                <p className="text-gray-600">
                  Automated quality control systems ensure consistent product quality 
                  and reduce defects.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cost Reduction</h3>
                <p className="text-gray-600">
                  Minimize waste, reduce energy consumption, and optimize resource utilization 
                  to lower operational costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Manufacturing?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can optimize your manufacturing processes and drive 
              Industry 4.0 transformation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
                Download Whitepaper
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
