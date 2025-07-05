import Link from "next/link";

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Healthcare AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
              Medical AI for diagnostics, treatment planning, and enhanced patient care
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Transforming Healthcare with AI</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Healthcare AI Solutions revolutionize medical practice by enhancing diagnostic accuracy, streamlining clinical workflows, and improving patient outcomes. We develop AI systems that assist healthcare professionals in making better decisions while ensuring patient safety and regulatory compliance.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From medical imaging analysis to clinical decision support systems, our solutions are designed to work seamlessly with existing healthcare infrastructure while maintaining the highest standards of security and privacy.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Healthcare AI Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Enhanced diagnostic accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Reduced medical errors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Improved patient outcomes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 mr-2">✓</span>
                  <span>Streamlined workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Healthcare AI Solutions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Medical AI Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🩺</div>
              <h3 className="text-xl font-semibold mb-4">Medical Imaging AI</h3>
              <p className="text-gray-600">
                Advanced analysis of X-rays, MRIs, CT scans, and other medical images for accurate diagnosis and early disease detection.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="text-xl font-semibold mb-4">Drug Discovery</h3>
              <p className="text-gray-600">
                AI-powered drug discovery and development to accelerate the identification of new therapeutic compounds.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4">Clinical Decision Support</h3>
              <p className="text-gray-600">
                Intelligent systems that provide evidence-based recommendations to support clinical decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-4">Patient Monitoring</h3>
              <p className="text-gray-600">
                Real-time monitoring of patient vital signs and health indicators with predictive analytics for early intervention.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="text-xl font-semibold mb-4">Genomics Analysis</h3>
              <p className="text-gray-600">
                AI-driven analysis of genetic data for personalized medicine and precision treatment approaches.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Healthcare Analytics</h3>
              <p className="text-gray-600">
                Population health analytics and epidemiological modeling for public health insights and policy decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Clinical Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Radiology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated abnormality detection</li>
                <li>• Cancer screening and diagnosis</li>
                <li>• Fracture detection in X-rays</li>
                <li>• Brain tumor identification in MRI</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Cardiology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• ECG analysis and arrhythmia detection</li>
                <li>• Heart disease risk assessment</li>
                <li>• Cardiac catheterization analysis</li>
                <li>• Hypertension management</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Pathology</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Digital pathology analysis</li>
                <li>• Cancer cell detection</li>
                <li>• Tissue classification</li>
                <li>• Biomarker identification</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Emergency Medicine</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Triage optimization</li>
                <li>• Sepsis early warning systems</li>
                <li>• Emergency room workflow</li>
                <li>• Critical care monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Compliance & Security */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Compliance & Security</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-emerald-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-emerald-800">HIPAA Compliant</h3>
                </div>
                <p className="text-sm text-gray-600">Full compliance with healthcare privacy regulations</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-emerald-800">FDA Approved</h3>
                </div>
                <p className="text-sm text-gray-600">Regulatory approval for medical device software</p>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-emerald-800">SOC 2 Certified</h3>
                </div>
                <p className="text-sm text-gray-600">Enterprise-grade security controls</p>
              </div>
            </div>
          </div>
        </div>

        {/* ROI Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Healthcare ROI</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-emerald-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-emerald-800">30%</h3>
              </div>
              <h4 className="font-semibold">Diagnostic Speed</h4>
              <p className="text-sm text-gray-600">Faster diagnosis time</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-emerald-800">95%</h3>
              </div>
              <h4 className="font-semibold">Accuracy Rate</h4>
              <p className="text-sm text-gray-600">Diagnostic accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-emerald-800">40%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Operational cost savings</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-emerald-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-600">Continuous monitoring</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Healthcare with AI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Implement cutting-edge AI solutions that improve patient outcomes and streamline medical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-emerald-600 text-white px-8 py-3 rounded-lg hover:bg-emerald-700 transition-colors">
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
