export default function RetailSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Retail Industry
            </h1>
            <p className="text-xl mb-8">
              Revolutionizing retail with personalized experiences, inventory optimization, and intelligent automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">Smart Retail Revolution</h2>
                <p className="text-lg text-gray-700 mb-6">
                  The retail industry is transforming with AI-powered solutions that enhance customer experiences, 
                  optimize operations, and drive sales growth. Our AI solutions help retailers stay competitive 
                  in the digital age while improving profitability.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <div className="text-2xl font-bold text-pink-600">45%</div>
                    <div className="text-sm text-gray-600">Sales Increase</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">30%</div>
                    <div className="text-sm text-gray-600">Cost Reduction</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Personalized recommendations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Inventory management
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Price optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-pink-600 rounded-full mr-3"></span>
                    Customer analytics
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Retail AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PR</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Personalized Recommendations</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered recommendation engines that analyze customer behavior to provide 
                  personalized product suggestions and increase conversion rates.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer behavior analysis</li>
                  <li>• Product recommendations</li>
                  <li>• Cross-selling optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">IM</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Inventory Management</h3>
                <p className="text-gray-600 mb-4">
                  Smart inventory optimization that predicts demand, manages stock levels, 
                  and reduces waste through intelligent forecasting algorithms.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Demand forecasting</li>
                  <li>• Stock optimization</li>
                  <li>• Automated replenishment</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">PO</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Price Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Dynamic pricing algorithms that optimize prices based on demand, competition, 
                  and market conditions to maximize revenue and profitability.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Dynamic pricing</li>
                  <li>• Competitive analysis</li>
                  <li>• Revenue optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced customer analytics that segment customers, predict lifetime value, 
                  and identify churn risks to improve retention strategies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Customer segmentation</li>
                  <li>• Lifetime value prediction</li>
                  <li>• Churn prevention</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">VS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Visual Search</h3>
                <p className="text-gray-600 mb-4">
                  AI-powered visual search capabilities that allow customers to find products 
                  using images, enhancing the shopping experience.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Image recognition</li>
                  <li>• Product matching</li>
                  <li>• Visual commerce</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CS</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  Intelligent chatbots and virtual assistants that provide 24/7 customer support, 
                  handle inquiries, and improve customer satisfaction.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• AI chatbots</li>
                  <li>• Virtual assistants</li>
                  <li>• Support automation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Features */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">E-commerce AI Features</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛒</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Smart Cart</h3>
                <p className="text-sm text-gray-600">
                  AI-powered shopping cart optimization
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-gray-600">
                  Advanced retail analytics and insights
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Targeting</h3>
                <p className="text-sm text-gray-600">
                  Precision marketing and targeting
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Mobile</h3>
                <p className="text-sm text-gray-600">
                  Mobile-first AI experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits of AI in Retail</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Customer Experience</h3>
                <p className="text-gray-600">
                  Provide personalized shopping experiences that increase customer satisfaction 
                  and loyalty.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Increased Sales</h3>
                <p className="text-gray-600">
                  Boost conversion rates and average order value through intelligent 
                  recommendations and optimization.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Operational Efficiency</h3>
                <p className="text-gray-600">
                  Streamline operations, reduce costs, and improve inventory management 
                  through automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-pink-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Retail Business?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can enhance your customer experience and 
              drive retail success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition">
                View Retail Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
