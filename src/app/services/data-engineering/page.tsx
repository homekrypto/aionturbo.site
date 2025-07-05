import Link from "next/link";

export default function DataEngineeringPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Engineering Services
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              Build robust data pipelines and infrastructure for scalable data solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Foundation for Data Success</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Data Engineering services provide the foundation for all your data initiatives. We design and build scalable data pipelines, robust data architectures, and efficient ETL processes that ensure your data is clean, accessible, and ready for analysis.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From data ingestion and processing to storage and governance, we handle the complex technical challenges so you can focus on extracting value from your data.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Why Data Engineering Matters</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Ensures data quality and reliability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Enables real-time data processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Supports scalable data operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Reduces data silos and improves accessibility</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Data Engineering Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">ETL/ELT Pipelines</h3>
              <p className="text-gray-600">
                Design and implement efficient data extraction, transformation, and loading processes for seamless data flow.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-4">Data Architecture</h3>
              <p className="text-gray-600">
                Build scalable data architectures that support your current needs and future growth requirements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
              <p className="text-gray-600">
                Implement streaming data solutions for real-time analytics and immediate business insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-4">Data Lakes & Warehouses</h3>
              <p className="text-gray-600">
                Design and deploy modern data storage solutions including data lakes and cloud-based warehouses.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Data Quality & Governance</h3>
              <p className="text-gray-600">
                Implement data quality frameworks and governance policies to ensure data accuracy and compliance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
              <p className="text-gray-600">
                Migrate your data infrastructure to cloud platforms for improved scalability and cost efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Modern Data Architecture</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-blue-800">Data Sources</h3>
                </div>
                <p className="text-sm text-gray-600">APIs, Databases, Files, Streaming</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-green-800">Ingestion</h3>
                </div>
                <p className="text-sm text-gray-600">Batch & Real-time Processing</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-purple-800">Storage</h3>
                </div>
                <p className="text-sm text-gray-600">Data Lakes, Warehouses</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-orange-800">Analytics</h3>
                </div>
                <p className="text-sm text-gray-600">BI, ML, Reporting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Engineering Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understand your data landscape and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Create scalable data architecture blueprint</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Build</h3>
              <p className="text-gray-600">Implement data pipelines and infrastructure</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Test</h3>
              <p className="text-gray-600">Validate data quality and system performance</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">Launch and monitor production systems</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies & Tools</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Cloud Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">AWS</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Azure</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GCP</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Databricks</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Processing Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Apache Spark</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Kafka</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Airflow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">dbt</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Your Data Infrastructure?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create a robust data engineering foundation that scales with your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors">
              Start Your Project
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
