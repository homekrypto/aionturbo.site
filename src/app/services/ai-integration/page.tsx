import Link from "next/link";

export default function AiIntegrationPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Integration Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto">
              Seamlessly integrate AI solutions into your existing systems and workflows
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Seamless AI Integration</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our AI Integration Services help organizations successfully incorporate AI capabilities into their existing technology infrastructure. We ensure smooth integration that minimizes disruption while maximizing the value of your AI investments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From API development and system connectivity to workflow automation and user experience design, we handle all aspects of AI integration to deliver solutions that work seamlessly with your current systems.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Integration Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Minimal system disruption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Preserved existing workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Enhanced system capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-600 mr-2">✓</span>
                  <span>Scalable architecture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Integration Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold mb-4">API Development</h3>
              <p className="text-gray-600">
                Create robust APIs that enable seamless communication between AI models and your existing applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
              <p className="text-gray-600">
                Design and implement scalable system architectures that support AI integration without compromising performance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Workflow Automation</h3>
              <p className="text-gray-600">
                Automate business processes by integrating AI capabilities into existing workflows and decision-making systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-4">UI/UX Integration</h3>
              <p className="text-gray-600">
                Enhance user interfaces with AI-powered features while maintaining familiar user experiences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
              <p className="text-gray-600">
                Connect AI models with existing data sources and ensure proper data flow and synchronization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-gray-600">
                Implement security measures and ensure compliance with industry standards and regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Integration Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Architecture</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-cyan-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-cyan-800">Existing Systems</h3>
                </div>
                <p className="text-sm text-gray-600">Legacy applications, databases, and workflows</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-800">Integration Layer</h3>
                </div>
                <p className="text-sm text-gray-600">APIs, middleware, and connectors</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-purple-800">AI Services</h3>
                </div>
                <p className="text-sm text-gray-600">ML models, AI algorithms, and services</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-green-800">Enhanced System</h3>
                </div>
                <p className="text-sm text-gray-600">AI-powered applications and workflows</p>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze existing systems and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Design integration architecture and strategy</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Build APIs and integration components</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Validate integration and performance</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">Roll out integration to production</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-600">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Monitor and optimize performance</p>
            </div>
          </div>
        </div>

        {/* Integration Patterns */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Integration Patterns</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Real-time Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Synchronous API calls for immediate results</li>
                <li>• Event-driven architectures with webhooks</li>
                <li>• Streaming data processing</li>
                <li>• Real-time decision making</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Batch Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Scheduled batch processing</li>
                <li>• Bulk data analysis and scoring</li>
                <li>• Periodic model updates</li>
                <li>• Offline processing workflows</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Hybrid Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Combination of real-time and batch processing</li>
                <li>• Edge computing with cloud synchronization</li>
                <li>• Multi-model integration patterns</li>
                <li>• Adaptive integration strategies</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Microservices Integration</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Containerized AI services</li>
                <li>• Service mesh architectures</li>
                <li>• Independent scaling and deployment</li>
                <li>• Fault isolation and resilience</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">API Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">REST API</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GraphQL</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">gRPC</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">WebSockets</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Messaging Systems</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Apache Kafka</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">RabbitMQ</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Redis</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">AWS SQS</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Container Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Docker</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Kubernetes</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">OpenShift</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Istio</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Integration Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-cyan-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-cyan-800">99.9%</h3>
              </div>
              <h4 className="font-semibold">Uptime</h4>
              <p className="text-sm text-gray-600">System availability</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-cyan-800">50%</h3>
              </div>
              <h4 className="font-semibold">Faster Processing</h4>
              <p className="text-sm text-gray-600">Performance improvement</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-cyan-800">75%</h3>
              </div>
              <h4 className="font-semibold">Reduced Errors</h4>
              <p className="text-sm text-gray-600">Through automation</p>
            </div>
            <div className="text-center">
              <div className="bg-cyan-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-cyan-800">12 Weeks</h3>
              </div>
              <h4 className="font-semibold">Implementation Time</h4>
              <p className="text-sm text-gray-600">Average project duration</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Integrate AI into Your Systems?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's seamlessly integrate AI capabilities into your existing infrastructure to unlock new possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 transition-colors">
              Start Integration
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
