import Link from "next/link";

export default function DatabricksDeploymentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Databricks Deployment Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
              Expert deployment and optimization of Databricks platforms for unified analytics
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unified Analytics Platform</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Databricks Deployment services help organizations harness the full power of the unified analytics platform. We provide end-to-end deployment, configuration, and optimization services that ensure your Databricks environment is secure, scalable, and aligned with your business objectives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From initial setup to advanced MLOps workflows, we handle the complexities of Databricks deployment so you can focus on extracting insights from your data and building intelligent applications.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Databricks Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Unified data and ML platform</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Collaborative workspace environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Auto-scaling compute resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Enterprise-grade security</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Databricks Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4">Platform Setup</h3>
              <p className="text-gray-600">
                Complete Databricks workspace setup with proper configuration, security settings, and integration with your existing infrastructure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-4">Cluster Configuration</h3>
              <p className="text-gray-600">
                Optimize cluster configurations for different workloads including interactive analytics, ETL jobs, and ML training.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Data Pipeline Migration</h3>
              <p className="text-gray-600">
                Migrate existing data pipelines to Databricks with improved performance and reduced operational overhead.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">ML Workflows</h3>
              <p className="text-gray-600">
                Implement end-to-end machine learning workflows using MLflow and automated model deployment pipelines.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-4">Security & Governance</h3>
              <p className="text-gray-600">
                Implement comprehensive security policies, access controls, and data governance frameworks for compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
              <p className="text-gray-600">
                Optimize Databricks performance with proper resource allocation, caching strategies, and query optimization.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Databricks Architecture Components</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-orange-800">Data Layer</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Delta Lake</li>
                  <li>Data Sources</li>
                  <li>Storage Integration</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-800">Compute Layer</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Spark Clusters</li>
                  <li>Auto-scaling</li>
                  <li>Job Scheduling</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-lg mb-4">
                  <h3 className="font-semibold text-purple-800">ML Layer</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>MLflow</li>
                  <li>Model Registry</li>
                  <li>Feature Store</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Deployment Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Deployment Process</h2>
          <div className="grid md:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate current infrastructure and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Design deployment architecture and timeline</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Setup</h3>
              <p className="text-gray-600">Configure workspace and security settings</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Migration</h3>
              <p className="text-gray-600">Migrate data and existing workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Validate performance and functionality</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">6</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Go-Live</h3>
              <p className="text-gray-600">Deploy to production with monitoring</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Data Engineering</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ETL/ELT pipeline development</li>
                <li>• Real-time data processing</li>
                <li>• Delta Lake implementation</li>
                <li>• Data quality management</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Model training and experimentation</li>
                <li>• Automated ML pipelines</li>
                <li>• Model deployment and monitoring</li>
                <li>• Feature engineering</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Interactive data exploration</li>
                <li>• SQL analytics workloads</li>
                <li>• Dashboard development</li>
                <li>• Ad-hoc analysis</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Data Science</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Collaborative notebooks</li>
                <li>• Experiment tracking</li>
                <li>• Model versioning</li>
                <li>• Research and development</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Deploy Databricks?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our experts help you set up and optimize your Databricks environment for maximum performance and ROI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition-colors">
              Get Started
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
