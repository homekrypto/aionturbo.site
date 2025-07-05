import Link from "next/link";

export default function AIConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              AI Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Strategic guidance to transform your business with artificial intelligence. 
              From strategy development to implementation roadmaps.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start Your AI Journey
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services to guide your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "AI Strategy Development",
                description: "Create a comprehensive AI roadmap aligned with your business objectives and market opportunities."
              },
              {
                icon: "🔍",
                title: "AI Readiness Assessment",
                description: "Evaluate your organization's readiness for AI adoption and identify key areas for improvement."
              },
              {
                icon: "📊",
                title: "Use Case Identification",
                description: "Discover high-impact AI use cases specific to your industry and business model."
              },
              {
                icon: "💡",
                title: "Technology Selection",
                description: "Choose the right AI technologies and platforms that fit your requirements and budget."
              },
              {
                icon: "⚡",
                title: "Implementation Planning",
                description: "Develop detailed implementation plans with timelines, resources, and success metrics."
              },
              {
                icon: "🔄",
                title: "Change Management",
                description: "Guide your organization through AI transformation with proven change management strategies."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our AI Consulting Process</h2>
            <p className="text-xl text-gray-600">
              A proven methodology to deliver successful AI transformations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Understand your business, challenges, and AI opportunities through comprehensive analysis.",
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Strategy Development",
                description: "Create a tailored AI strategy with clear objectives, timelines, and success metrics.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                step: "03",
                title: "Roadmap Creation",
                description: "Develop a detailed implementation roadmap with prioritized initiatives and milestones.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: "Implementation Support",
                description: "Support your team through the implementation of AI solutions and change management.",
                color: "from-pink-500 to-pink-600"
              }
            ].map((step, index) => (
              <div key={index} className={`bg-gradient-to-br ${step.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className="text-2xl font-bold mb-2">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Choose AI on Turbo?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading enterprises for our expertise, innovation, and results-driven approach.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Proven Track Record",
                description: "Delivered successful AI projects for Fortune 500 companies and startups alike."
              },
              {
                icon: "🤝",
                title: "Client-Centric Approach",
                description: "We partner closely with clients to ensure solutions fit their unique needs."
              },
              {
                icon: "🚀",
                title: "Cutting-Edge Expertise",
                description: "Our team stays ahead of the curve with the latest AI research and technologies."
              }
            ].map((reason, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Contact our AI consulting experts to discuss your goals and challenges.
            </p>
            <Link href="/en/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
