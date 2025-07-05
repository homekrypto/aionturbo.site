import Link from "next/link";

export default function AiProofOfConceptPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Proof of Concept (PoC)
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
              Validate your AI ideas with rapid prototyping and testing before full-scale implementation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">De-risk Your AI Investment</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our AI Proof of Concept services help you validate the feasibility and business value of your AI initiatives before committing to full-scale development. We rapidly prototype AI solutions to demonstrate their potential impact and identify any technical or business challenges.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Through our structured PoC approach, you'll gain clear insights into the viability of your AI project, estimated ROI, and implementation roadmap, enabling you to make informed decisions about your AI investments.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why AI PoC Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Reduces implementation risks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Validates business value early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Identifies technical challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Provides clear ROI estimates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PoC Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">AI PoC Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">👁️</div>
              <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
              <p className="text-gray-600">
                Image recognition, object detection, facial recognition, and visual quality inspection prototypes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-semibold mb-4">Natural Language Processing</h3>
              <p className="text-gray-600">
                Text analysis, sentiment analysis, chatbots, and document processing proof of concepts.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Forecasting, demand prediction, risk assessment, and anomaly detection prototypes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Recommendation Systems</h3>
              <p className="text-gray-600">
                Personalized recommendations, content filtering, and user behavior analysis PoCs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">Process Automation</h3>
              <p className="text-gray-600">
                Intelligent automation, decision support systems, and workflow optimization prototypes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Generative AI</h3>
              <p className="text-gray-600">
                Content generation, synthetic data creation, and creative AI application prototypes.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our PoC Development Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Define</h3>
              <p className="text-gray-600">Clarify objectives, success criteria, and scope</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Data</h3>
              <p className="text-gray-600">Assess and prepare data for model training</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Develop</h3>
              <p className="text-gray-600">Build and train AI models rapidly</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Demo</h3>
              <p className="text-gray-600">Create interactive demonstrations</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Decide</h3>
              <p className="text-gray-600">Evaluate results and plan next steps</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Typical PoC Timeline</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold text-purple-800">Week 1-2</h3>
                </div>
                <h4 className="font-semibold mb-2">Planning & Setup</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Requirements gathering</li>
                  <li>Data assessment</li>
                  <li>Technical architecture</li>
                  <li>Success metrics definition</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold text-purple-800">Week 3-6</h3>
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Data preparation</li>
                  <li>Model development</li>
                  <li>Training & validation</li>
                  <li>Prototype creation</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold text-purple-800">Week 7-8</h3>
                </div>
                <h4 className="font-semibold mb-2">Evaluation</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Performance testing</li>
                  <li>Demo preparation</li>
                  <li>Results documentation</li>
                  <li>Roadmap planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">PoC Deliverables</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Technical Deliverables</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Working prototype with core functionality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Model performance metrics and evaluation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Technical architecture documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Source code and deployment scripts</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Business Deliverables</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>ROI analysis and business case</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Implementation roadmap and timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Risk assessment and mitigation strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Executive summary and recommendations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">95%</h3>
              </div>
              <h4 className="font-semibold">Accuracy Rate</h4>
              <p className="text-sm text-gray-600">Average model performance</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">8 Weeks</h3>
              </div>
              <h4 className="font-semibold">Delivery Time</h4>
              <p className="text-sm text-gray-600">From concept to demo</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">85%</h3>
              </div>
              <h4 className="font-semibold">Success Rate</h4>
              <p className="text-sm text-gray-600">PoCs that proceed to production</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-purple-800">3x</h3>
              </div>
              <h4 className="font-semibold">ROI Potential</h4>
              <p className="text-sm text-gray-600">Average projected return</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Test Your AI Idea?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's validate your AI concept with a rapid prototype that demonstrates its potential and business value.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Start Your PoC
            </Link>
            <Link href="/services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
