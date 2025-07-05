import Link from "next/link";

export default function MLOpsConsultingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              MLOps Consulting
            </h1>
            <p className="text-xl md:text-2xl text-violet-100 max-w-3xl mx-auto">
              Streamline your ML operations with best practices, automation, and scalable infrastructure
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Operationalize Your ML at Scale</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our MLOps Consulting services help organizations build robust, scalable, and automated machine learning operations. We implement best practices that ensure your ML models are deployed, monitored, and maintained efficiently in production environments.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From CI/CD pipelines for ML workflows to automated model retraining and monitoring systems, we provide end-to-end MLOps solutions that reduce time-to-market and improve model reliability.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">MLOps Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">✓</span>
                  <span>Faster model deployment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">✓</span>
                  <span>Automated model monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">✓</span>
                  <span>Improved model reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-600 mr-2">✓</span>
                  <span>Reduced operational overhead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our MLOps Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">CI/CD for ML</h3>
              <p className="text-gray-600">
                Implement continuous integration and deployment pipelines specifically designed for machine learning workflows.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Model Monitoring</h3>
              <p className="text-gray-600">
                Set up comprehensive monitoring systems to track model performance, data drift, and system health.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">Automated Retraining</h3>
              <p className="text-gray-600">
                Build automated systems that retrain and update models based on new data and performance metrics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-4">Model Versioning</h3>
              <p className="text-gray-600">
                Implement model versioning and registry systems for better experiment tracking and deployment management.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
              <p className="text-gray-600">
                Deploy and manage ML infrastructure using infrastructure as code practices for consistency and scalability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Security & Governance</h3>
              <p className="text-gray-600">
                Implement security best practices and governance frameworks for ML operations and model deployment.
              </p>
            </div>
          </div>
        </div>

        {/* MLOps Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Pipeline</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-violet-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-violet-800">Data Pipeline</h3>
                </div>
                <p className="text-sm text-gray-600">Automated data ingestion and preprocessing</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-violet-800">Model Training</h3>
                </div>
                <p className="text-sm text-gray-600">Automated training and validation</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-violet-800">Model Registry</h3>
                </div>
                <p className="text-sm text-gray-600">Version control and artifact management</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-violet-800">Deployment</h3>
                </div>
                <p className="text-sm text-gray-600">Automated model deployment</p>
              </div>
              <div className="text-center">
                <div className="bg-violet-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-violet-800">Monitoring</h3>
                </div>
                <p className="text-sm text-gray-600">Performance and drift monitoring</p>
              </div>
            </div>
          </div>
        </div>

        {/* MLOps Maturity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Maturity Levels</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-semibold">Level 1: Manual</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Manual model deployment</li>
                <li>• Ad-hoc monitoring</li>
                <li>• Manual retraining</li>
                <li>• Limited version control</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-xl font-semibold">Level 2: Automated</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated training pipelines</li>
                <li>• Basic monitoring</li>
                <li>• Scheduled retraining</li>
                <li>• Model versioning</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-center mb-6">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold">Level 3: Continuous</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Full CI/CD integration</li>
                <li>• Advanced monitoring</li>
                <li>• Automated retraining</li>
                <li>• Complete governance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Tools & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">ML Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">MLflow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Kubeflow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Weights & Biases</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Neptune</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">CI/CD Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GitHub Actions</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GitLab CI</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Jenkins</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Azure DevOps</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Monitoring Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Prometheus</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Grafana</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Evidently</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Seldon</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Implementation Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate current ML operations maturity</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Define MLOps roadmap and priorities</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Infrastructure</h3>
              <p className="text-gray-600">Set up MLOps infrastructure and tools</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Pipelines</h3>
              <p className="text-gray-600">Build automated ML pipelines</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Monitoring</h3>
              <p className="text-gray-600">Implement monitoring and alerting</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-violet-600">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Governance</h3>
              <p className="text-gray-600">Establish governance and best practices</p>
            </div>
          </div>
        </div>

        {/* Key Challenges */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Challenges We Solve</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Technical Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Model drift and performance degradation</li>
                <li>• Complex deployment environments</li>
                <li>• Data quality and pipeline reliability</li>
                <li>• Scaling ML infrastructure</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Organizational Challenges</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Collaboration between teams</li>
                <li>• Compliance and governance</li>
                <li>• Skills and knowledge gaps</li>
                <li>• Change management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">MLOps Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-violet-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-violet-800">90%</h3>
              </div>
              <h4 className="font-semibold">Faster Deployment</h4>
              <p className="text-sm text-gray-600">Reduction in deployment time</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-violet-800">99.9%</h3>
              </div>
              <h4 className="font-semibold">Model Uptime</h4>
              <p className="text-sm text-gray-600">Production availability</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-violet-800">60%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Operational cost savings</p>
            </div>
            <div className="text-center">
              <div className="bg-violet-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-violet-800">5x</h3>
              </div>
              <h4 className="font-semibold">Productivity Gain</h4>
              <p className="text-sm text-gray-600">Data science team efficiency</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Scale Your ML Operations?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's build robust MLOps practices that accelerate your ML deployment and improve model reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-violet-600 text-white px-8 py-3 rounded-lg hover:bg-violet-700 transition-colors">
              Start MLOps Journey
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
