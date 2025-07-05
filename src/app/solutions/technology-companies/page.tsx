export default function TechnologyCompaniesSolutions() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions for Technology Companies
            </h1>
            <p className="text-xl mb-8">
              Accelerating innovation with advanced AI integration, product development, and intelligent automation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
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
                <h2 className="text-3xl font-bold mb-6">AI-Powered Tech Innovation</h2>
                <p className="text-lg text-gray-700 mb-6">
                  Technology companies need to stay ahead of the curve with cutting-edge AI solutions. 
                  Our AI expertise helps tech companies integrate artificial intelligence into their products, 
                  optimize development processes, and create intelligent solutions that delight customers.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">50%</div>
                    <div className="text-sm text-gray-600">Development Speed</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">80%</div>
                    <div className="text-sm text-gray-600">Process Automation</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-8">
                <h3 className="text-xl font-semibold mb-4">Key Applications</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    AI-powered product features
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Development process automation
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Intelligent customer support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                    Data analytics and insights
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
            <h2 className="text-3xl font-bold text-center mb-12">Our Technology AI Solutions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AI</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly integrate AI capabilities into your existing products and services, 
                  enhancing user experience and creating new value propositions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• API integration</li>
                  <li>• Custom AI models</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">ML</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Machine Learning Platforms</h3>
                <p className="text-gray-600 mb-4">
                  Build and deploy machine learning models at scale with our comprehensive 
                  ML platform solutions designed for technology companies.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Model development</li>
                  <li>• Training pipelines</li>
                  <li>• Deployment automation</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DA</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Advanced analytics solutions that transform raw data into actionable insights, 
                  driving product decisions and business growth.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Real-time analytics</li>
                  <li>• Predictive modeling</li>
                  <li>• Business intelligence</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">NL</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Implement advanced NLP capabilities including chatbots, sentiment analysis, 
                  and text processing for enhanced user interactions.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Chatbot development</li>
                  <li>• Sentiment analysis</li>
                  <li>• Text classification</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CV</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
                <p className="text-gray-600 mb-4">
                  Develop computer vision solutions for image recognition, object detection, 
                  and visual analysis to enhance your technology offerings.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Image recognition</li>
                  <li>• Object detection</li>
                  <li>• Visual search</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">DE</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">DevOps & MLOps</h3>
                <p className="text-gray-600 mb-4">
                  Streamline your development and deployment processes with AI-powered DevOps 
                  and MLOps solutions for continuous integration and delivery.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• CI/CD pipelines</li>
                  <li>• Model monitoring</li>
                  <li>• Automated testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technology Stack</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🧠</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">AI Frameworks</h3>
                <p className="text-sm text-gray-600">
                  TensorFlow, PyTorch, Scikit-learn
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">☁️</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Platforms</h3>
                <p className="text-sm text-gray-600">
                  AWS, Azure, Google Cloud
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Data Tools</h3>
                <p className="text-sm text-gray-600">
                  Apache Spark, Kafka, Elasticsearch
                </p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">DevOps</h3>
                <p className="text-sm text-gray-600">
                  Docker, Kubernetes, Jenkins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefits for Technology Companies</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Faster Innovation</h3>
                <p className="text-gray-600">
                  Accelerate product development and innovation cycles with AI-powered tools 
                  and automation.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Enhanced Products</h3>
                <p className="text-gray-600">
                  Create more intelligent and engaging products that provide superior 
                  user experiences.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Competitive Advantage</h3>
                <p className="text-gray-600">
                  Stay ahead of the competition with cutting-edge AI capabilities 
                  and intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Tech Innovation?</h2>
            <p className="text-xl mb-8">
              Discover how our AI solutions can enhance your technology products and 
              drive business growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
                View Tech Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
