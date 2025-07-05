import Link from "next/link";

export default function AiDocumentProcessingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Document Processing
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Automate document analysis, extraction, and processing with intelligent AI systems
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Transform Document Workflows</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our AI Document Processing solutions revolutionize how organizations handle documents. From automatic data extraction to intelligent classification and analysis, we help you unlock the value hidden in your documents while eliminating manual processing tasks.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Using advanced OCR, NLP, and machine learning technologies, our solutions can process various document types including contracts, invoices, forms, reports, and unstructured text with unprecedented accuracy and speed.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Key Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Intelligent document classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automated data extraction</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Multi-language support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Real-time processing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Advanced Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-semibold mb-4">OCR & Text Recognition</h3>
              <p className="text-gray-600">
                Advanced optical character recognition with support for handwritten text, various fonts, and multiple languages.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Intelligent Classification</h3>
              <p className="text-gray-600">
                Automatically categorize documents based on content, structure, and context using machine learning algorithms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Data Extraction</h3>
              <p className="text-gray-600">
                Extract key information, tables, and structured data from documents with high accuracy and confidence scores.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-4">Workflow Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate with existing business processes and enterprise systems for automated workflows.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-4">Security & Compliance</h3>
              <p className="text-gray-600">
                Enterprise-grade security with encryption, access controls, and compliance with industry regulations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">Real-time Processing</h3>
              <p className="text-gray-600">
                Process documents in real-time with immediate results and notifications for time-sensitive operations.
              </p>
            </div>
          </div>
        </div>

        {/* Document Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Supported Document Types</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="font-semibold mb-2">Forms & Applications</h3>
              <p className="text-sm text-gray-600">Registration forms, applications, surveys</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">🧾</div>
              <h3 className="font-semibold mb-2">Invoices & Receipts</h3>
              <p className="text-sm text-gray-600">Financial documents, purchase orders</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📝</div>
              <h3 className="font-semibold mb-2">Contracts & Legal</h3>
              <p className="text-sm text-gray-600">Legal documents, agreements, policies</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold mb-2">Reports & Analytics</h3>
              <p className="text-sm text-gray-600">Business reports, research documents</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Loan application processing</li>
                <li>• KYC document verification</li>
                <li>• Insurance claim processing</li>
                <li>• Compliance documentation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical record digitization</li>
                <li>• Patient form processing</li>
                <li>• Clinical trial documentation</li>
                <li>• Insurance claim processing</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Contract analysis and review</li>
                <li>• Legal document discovery</li>
                <li>• Case file digitization</li>
                <li>• Compliance monitoring</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Quality control documentation</li>
                <li>• Inventory management forms</li>
                <li>• Supplier contracts</li>
                <li>• Compliance certificates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ROI Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">ROI & Benefits</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-blue-800">90%</h3>
              </div>
              <h4 className="font-semibold">Time Savings</h4>
              <p className="text-sm text-gray-600">Reduction in processing time</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-blue-800">99.5%</h3>
              </div>
              <h4 className="font-semibold">Accuracy</h4>
              <p className="text-sm text-gray-600">Data extraction accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-blue-800">70%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Operational cost savings</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-blue-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-600">Continuous processing</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Automate Your Document Processing?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your document workflows with our intelligent AI processing solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </Link>
            <Link href="/solutions" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View All Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
