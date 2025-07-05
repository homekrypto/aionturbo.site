import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      category: "Discover",
      services: [
        {
          title: "AI Consulting",
          description: "Strategic guidance on AI implementation and business transformation",
          href: "/services/ai-consulting",
          icon: "🧠"
        },
        {
          title: "Big Data Consulting",
          description: "Unlock the value of your data with comprehensive big data strategies",
          href: "/services/big-data-consulting",
          icon: "📊"
        },
        {
          title: "Generative AI Consulting",
          description: "Harness the power of generative AI for content creation and automation",
          href: "/services/generative-ai-consulting",
          icon: "🎨"
        }
      ]
    },
    {
      category: "Organize Data",
      services: [
        {
          title: "Business Intelligence Services",
          description: "Transform raw data into actionable business insights",
          href: "/services/business-intelligence",
          icon: "📈"
        },
        {
          title: "Data Engineering Services",
          description: "Build robust data pipelines and infrastructure",
          href: "/services/data-engineering",
          icon: "⚙️"
        },
        {
          title: "Databricks Deployment Services",
          description: "Expert deployment and optimization of Databricks platforms",
          href: "/services/databricks-deployment",
          icon: "🏗️"
        }
      ]
    },
    {
      category: "Develop",
      services: [
        {
          title: "AI Proof of Concept (PoC)",
          description: "Validate your AI ideas with rapid prototyping and testing",
          href: "/services/ai-proof-of-concept",
          icon: "🔬"
        },
        {
          title: "Generative AI Development",
          description: "Build custom generative AI solutions for your business needs",
          href: "/services/generative-ai-development",
          icon: "🚀"
        },
        {
          title: "LLMs Development",
          description: "Create and fine-tune large language models for specific use cases",
          href: "/services/llms-development",
          icon: "🤖"
        },
        {
          title: "Machine Learning Consulting",
          description: "End-to-end ML solutions from concept to production",
          href: "/services/machine-learning-consulting",
          icon: "🎯"
        }
      ]
    },
    {
      category: "Deploy",
      services: [
        {
          title: "AI Integration Services",
          description: "Seamlessly integrate AI solutions into your existing systems",
          href: "/services/ai-integration",
          icon: "🔗"
        },
        {
          title: "MLOps Consulting",
          description: "Streamline your ML operations with best practices and automation",
          href: "/services/mlops-consulting",
          icon: "🔄"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 logo-pulse">
            AI on Turbo
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="hover:text-blue-600 transition-colors">Services</Link>
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Our AI Services
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            From discovery to deployment, we offer comprehensive AI solutions to transform your business
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                {category.category}
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Link 
                    key={serviceIndex} 
                    href={service.href}
                    className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                  >
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {service.description}
                    </p>
                    <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                      Learn More →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI services can drive your business forward
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Get Started Today
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
