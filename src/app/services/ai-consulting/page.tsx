import Link from "next/link";

export default function AIConsultingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 logo-pulse">
            AI on Turbo
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="/#about" className="hover:text-blue-600 transition-colors">About</Link>
            <Link href="/#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">Contact</Link>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors btn-animate">
            Book Consultation
          </button>
        </div>
      </header>

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
                description: "Provide ongoing guidance and support throughout your AI transformation journey.",
                color: "from-pink-500 to-pink-600"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold`}>
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Our AI Consulting?</h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "✓",
                    title: "Industry Expertise",
                    description: "Deep knowledge across multiple industries and AI applications"
                  },
                  {
                    icon: "✓",
                    title: "Proven Methodology",
                    description: "Time-tested approach with over 500+ successful AI projects"
                  },
                  {
                    icon: "✓",
                    title: "Technology Agnostic",
                    description: "Unbiased recommendations based on your specific needs"
                  },
                  {
                    icon: "✓",
                    title: "End-to-End Support",
                    description: "From strategy to implementation and beyond"
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold text-sm">{benefit.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "500+", label: "AI Projects Delivered" },
                  { number: "95%", label: "Client Success Rate" },
                  { number: "3x", label: "Average ROI Increase" },
                  { number: "50%", label: "Faster Time to Market" }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{metric.number}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your AI Transformation?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how AI can revolutionize your business operations
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Schedule a Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">AI on Turbo</div>
              <p className="text-gray-400">Your trusted AI partner for business transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/services/ai-consulting" className="hover:text-white transition-colors">AI Consulting</Link></li>
                <li><Link href="/services/machine-learning-consulting" className="hover:text-white transition-colors">Machine Learning</Link></li>
                <li><Link href="/services/data-engineering" className="hover:text-white transition-colors">Data Engineering</Link></li>
                <li><Link href="/services/mlops-consulting" className="hover:text-white transition-colors">MLOps</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Team</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@ai-on-turbo.com</li>
                <li>+1 (555) 123-4567</li>
                <li><Link href="#" className="hover:text-white transition-colors">LinkedIn</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Twitter</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AI on Turbo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
