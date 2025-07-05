import Link from "next/link";

export default function SolutionsPage() {
  const solutionCategories = [
    {
      category: "Technologies",
      description: "Cutting-edge AI technologies tailored for your business needs",
      solutions: [
        {
          title: "AI Document Processing",
          description: "Automate document analysis, extraction, and processing with intelligent AI",
          href: "/solutions/ai-document-processing",
          icon: "📄"
        },
        {
          title: "AI-powered Knowledge Base",
          description: "Transform your knowledge repositories into intelligent, searchable systems",
          href: "/solutions/ai-knowledge-base",
          icon: "🧠"
        },
        {
          title: "Enterprise Generative AI Platform",
          description: "Comprehensive generative AI solutions for enterprise-scale operations",
          href: "/solutions/enterprise-generative-ai",
          icon: "🚀"
        },
        {
          title: "LLM-Based Solutions",
          description: "Custom large language model implementations for specific business needs",
          href: "/solutions/llm-solutions",
          icon: "🤖"
        },
        {
          title: "Computer Vision Solutions",
          description: "Advanced visual AI for image recognition, analysis, and automation",
          href: "/solutions/computer-vision",
          icon: "👁️"
        }
      ]
    },
    {
      category: "Industries",
      description: "Specialized AI solutions designed for specific industry challenges",
      solutions: [
        {
          title: "Aviation",
          description: "AI solutions for flight operations, maintenance, and passenger experience",
          href: "/solutions/aviation",
          icon: "✈️"
        },
        {
          title: "Manufacturing",
          description: "Smart manufacturing with predictive maintenance and quality control",
          href: "/solutions/manufacturing",
          icon: "🏭"
        },
        {
          title: "Private Investments",
          description: "AI-driven investment analysis and portfolio management solutions",
          href: "/solutions/private-investments",
          icon: "💰"
        },
        {
          title: "Technology Companies",
          description: "AI acceleration and innovation solutions for tech organizations",
          href: "/solutions/technology-companies",
          icon: "💻"
        },
        {
          title: "Finance & Insurance",
          description: "Risk assessment, fraud detection, and automated financial services",
          href: "/solutions/finance-insurance",
          icon: "🏦"
        },
        {
          title: "Retail",
          description: "Personalized shopping experiences and inventory optimization",
          href: "/solutions/retail",
          icon: "🛒"
        },
        {
          title: "Legal",
          description: "Contract analysis, legal research, and compliance automation",
          href: "/solutions/legal",
          icon: "⚖️"
        },
        {
          title: "Healthcare",
          description: "Medical AI for diagnostics, treatment planning, and patient care",
          href: "/solutions/healthcare",
          icon: "🏥"
        },
        {
          title: "Logistics",
          description: "Supply chain optimization and intelligent transportation systems",
          href: "/solutions/logistics",
          icon: "🚚"
        },
        {
          title: "Automotive",
          description: "Autonomous systems, predictive maintenance, and smart mobility",
          href: "/solutions/automotive",
          icon: "🚗"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI Solutions
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto">
              Discover our comprehensive AI technologies and industry-specific solutions
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-8">Transforming Industries with AI</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide cutting-edge AI solutions that are tailored to meet the unique challenges and opportunities 
            of different industries. From advanced technologies to industry-specific applications, our solutions 
            drive innovation and deliver measurable results.
          </p>
        </div>

        {/* Solution Categories */}
        {solutionCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.solutions.map((solution, index) => (
                <Link 
                  key={index}
                  href={solution.href}
                  className="group bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-indigo-300"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-indigo-600 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    <div className="flex items-center justify-center text-indigo-600 group-hover:text-indigo-800 transition-colors">
                      <span className="mr-2">Learn more</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Why Choose Our Solutions */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our AI Solutions?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful AI implementations across industries</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Scalable Technology</h3>
              <p className="text-gray-600">Solutions that grow with your business needs</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">World-class AI researchers and engineers</p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.18l1.09 2.3 2.3 1.09L12 6.82l-1.09-2.3-2.3-1.09L12 2.18zM12 17.18l1.09 2.3 2.3 1.09L12 21.82l-1.09-2.3-2.3-1.09L12 17.18z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Cutting-Edge Innovation</h3>
              <p className="text-gray-600">Latest AI technologies and methodologies</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our AI solutions can revolutionize your industry and drive unprecedented growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </Link>
            <Link href="/services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
