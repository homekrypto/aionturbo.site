import Link from "next/link";
import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface AiDocumentProcessingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AiDocumentProcessingPage({ params }: AiDocumentProcessingPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

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
                Process thousands of documents per hour with distributed computing and parallel processing capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Loan application processing</li>
                <li>• Invoice and receipt processing</li>
                <li>• Compliance document analysis</li>
                <li>• Customer onboarding automation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Medical record digitization</li>
                <li>• Insurance claim processing</li>
                <li>• Patient intake automation</li>
                <li>• Prescription processing</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Contract analysis and review</li>
                <li>• Legal document classification</li>
                <li>• Due diligence automation</li>
                <li>• Regulatory compliance</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Quality control documentation</li>
                <li>• Supply chain paperwork</li>
                <li>• Maintenance record processing</li>
                <li>• Inventory management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Document Processing?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI Document Processing solutions can streamline your workflows and unlock the value in your documents.
          </p>
          <Link 
            href={`/${locale}/contact`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </div>
    </div>
  );
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Ai Document Processing',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/ai-document-processing`,
    },
  };
}
