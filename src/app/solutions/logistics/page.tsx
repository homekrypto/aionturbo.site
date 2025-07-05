export default function LogisticsSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Logistics Industry
            </h1>
            <p className="text-xl mb-8">
              Optimizing supply chain operations with intelligent routing, predictive analytics, and automated warehousing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">Smart Logistics Revolution</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The logistics industry is transforming with AI-powered solutions that optimize supply chains, 
                  reduce costs, and improve delivery times. Our AI solutions help logistics companies 
                  navigate complex operations while maintaining efficiency and reliability.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">35%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">50%</div>
                    <div className="text-sm text-gray-600">Faster Delivery</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    Route optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    Warehouse automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    Demand forecasting
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-600 rounded-full mr-3"></span>
                    Fleet management
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Logistics AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">RO</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Route Optimization</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered route optimization that considers traffic, weather, and delivery constraints 
                  to find the most efficient paths and reduce transportation costs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dynamic routing</li>
                  <li>• Traffic analysis</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">WA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Warehouse Automation</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent warehouse management systems that automate inventory tracking, 
                  optimize storage, and streamline picking and packing processes.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Inventory management</li>
                  <li>• Automated picking</li>
                  <li>• Storage optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DF</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Demand Forecasting</h3>
                <p className="text-gray-600 mb-4">
                  Advanced demand forecasting models that predict future demand patterns, 
                  optimize inventory levels, and improve supply chain planning.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Demand prediction</li>
                  <li>• Inventory planning</li>
                  <li>• Supply optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">FM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Fleet Management</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered fleet management solutions that monitor vehicle performance, 
                  optimize maintenance schedules, and improve driver safety.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Vehicle tracking</li>
                  <li>• Maintenance scheduling</li>
                  <li>• Driver monitoring</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Predictive maintenance systems that monitor equipment health, predict failures, 
                  and schedule maintenance to minimize downtime and costs.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Equipment monitoring</li>
                  <li>• Failure prediction</li>
                  <li>• Maintenance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SC</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Supply Chain Visibility</h3>
                <p className="text-gray-600 mb-4">
                  Real-time supply chain visibility solutions that track shipments, monitor performance, 
                  and provide actionable insights for better decision-making.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Shipment tracking</li>
                  <li>• Performance monitoring</li>
                  <li>• Analytics dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Technologies */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Logistics Technologies</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📦</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT Sensors</h3>
                <p className="text-sm text-gray-600">
                  Connected sensors for real-time monitoring
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Robotics</h3>
                <p className="text-sm text-gray-600">
                  Automated warehouse robotics
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🗺️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">GPS Tracking</h3>
                <p className="text-sm text-gray-600">
                  Real-time location tracking
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">
                  Advanced data analytics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Logistics</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline operations and reduce costs through intelligent automation 
                  and optimization.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Improved Accuracy</h3>
                <p className="text-gray-600">
                  Enhance accuracy in demand forecasting, inventory management, 
                  and delivery planning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  Improve delivery times and service quality to enhance customer 
                  satisfaction and loyalty.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Logistics Operations?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can transform your supply chain and 
              improve operational efficiency.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition">
                View Logistics Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
