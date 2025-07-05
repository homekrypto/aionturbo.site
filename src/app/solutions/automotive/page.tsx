export default function AutomotiveSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Automotive Industry
            </h1>
            <p className="text-xl mb-8">
              Driving innovation with autonomous systems, predictive maintenance, and smart manufacturing
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">AI-Powered Automotive Innovation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The automotive industry is experiencing a digital transformation with AI at its core. 
                  From autonomous driving to smart manufacturing, our AI solutions help automotive companies 
                  innovate faster, improve safety, and enhance customer experiences.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">99%</div>
                    <div className="text-sm text-gray-600">Safety Improvement</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">40%</div>
                    <div className="text-sm text-gray-600">Efficiency Increase</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Autonomous driving systems
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Predictive maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Quality control automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                    Connected vehicle services
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Automotive AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AD</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Autonomous Driving</h3>
                <p className="text-gray-600 mb-4">
                  Advanced AI systems for autonomous vehicles including computer vision, 
                  sensor fusion, and decision-making algorithms for safe navigation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Computer vision</li>
                  <li>• Sensor fusion</li>
                  <li>• Path planning</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered predictive maintenance that analyzes vehicle data to predict 
                  component failures and optimize maintenance schedules.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Failure prediction</li>
                  <li>• Maintenance scheduling</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">QC</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Control</h3>
                <p className="text-gray-600 mb-4">
                  Computer vision systems for automated quality inspection in manufacturing, 
                  detecting defects and ensuring product quality.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Defect detection</li>
                  <li>• Quality assurance</li>
                  <li>• Process optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CV</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Connected Vehicles</h3>
                <p className="text-gray-600 mb-4">
                  IoT and AI solutions for connected vehicles that enable real-time monitoring, 
                  remote diagnostics, and enhanced user experiences.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time monitoring</li>
                  <li>• Remote diagnostics</li>
                  <li>• User experience</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Smart Manufacturing</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered manufacturing systems that optimize production processes, 
                  reduce waste, and improve efficiency in automotive factories.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Production optimization</li>
                  <li>• Waste reduction</li>
                  <li>• Efficiency improvement</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">SA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Safety Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced safety analytics that monitor driver behavior, detect risks, 
                  and provide real-time safety alerts and recommendations.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Driver monitoring</li>
                  <li>• Risk detection</li>
                  <li>• Safety alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Automotive AI Technologies</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👁️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Computer Vision</h3>
                <p className="text-sm text-gray-600">
                  Object detection and recognition
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔗</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">IoT Sensors</h3>
                <p className="text-sm text-gray-600">
                  Connected vehicle sensors
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm text-gray-600">
                  Advanced ML algorithms
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Edge Computing</h3>
                <p className="text-sm text-gray-600">
                  Real-time processing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Automotive</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Safety</h3>
                <p className="text-gray-600">
                  Improve vehicle safety through advanced AI systems that detect risks 
                  and prevent accidents.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Optimize manufacturing processes and reduce costs through intelligent 
                  automation and analytics.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚗</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Leadership</h3>
                <p className="text-gray-600">
                  Stay ahead of the competition with cutting-edge AI technologies 
                  and autonomous systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Drive Automotive Innovation?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can transform your automotive business and 
              accelerate your journey to autonomous systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition">
                View Automotive Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
