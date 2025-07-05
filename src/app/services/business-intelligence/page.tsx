import Link from "next/link";

export default function BusinessIntelligencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Business Intelligence Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Transform raw data into actionable business insights with our comprehensive BI solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unlock the Power of Your Data</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Business Intelligence services help organizations make data-driven decisions by transforming complex datasets into clear, actionable insights. We create comprehensive BI strategies that align with your business objectives.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From data visualization and reporting to predictive analytics and performance dashboards, we provide end-to-end BI solutions that empower your team to make informed decisions quickly and confidently.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Real-time data visualization and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Improved decision-making speed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Enhanced operational efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>Cost reduction through data insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our BI Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
              <p className="text-gray-600">
                Create compelling dashboards and interactive visualizations that make complex data easy to understand and act upon.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Performance Analytics</h3>
              <p className="text-gray-600">
                Track KPIs and business metrics with automated reporting and real-time performance monitoring systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-600">
                Leverage historical data to forecast trends, identify opportunities, and predict future business outcomes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Real-time Reporting</h3>
              <p className="text-gray-600">
                Get instant access to critical business metrics with automated reports and real-time data streaming.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Custom Dashboards</h3>
              <p className="text-gray-600">
                Build tailored dashboards that display the most relevant metrics for different stakeholders and departments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4">Executive Reporting</h3>
              <p className="text-gray-600">
                Deliver high-level insights to leadership with executive summaries and strategic performance reports.
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our BI Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-600">Analyze your current data landscape and business requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Design a comprehensive BI strategy aligned with your goals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Build and deploy BI solutions using industry best practices</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">Continuously improve and optimize your BI systems</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies We Use</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">Power BI</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">Tableau</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">QlikView</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">Looker</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">D3.js</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">SQL Server</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Data?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our Business Intelligence services can help you make better decisions and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
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
