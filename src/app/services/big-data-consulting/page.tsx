import Link from "next/link";

export default function BigDataConsultingPage() {
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
              Big Data Consulting Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Transform your data deluge into valuable business insights. Expert guidance for 
              big data strategy, architecture, and implementation.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Unlock Your Data Value
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                View Solutions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Big Data Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive big data solutions to handle, process, and analyze massive datasets
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Big Data Architecture",
                description: "Design scalable and robust big data architectures using modern technologies like Hadoop, Spark, and cloud platforms."
              },
              {
                icon: "📊",
                title: "Data Lake Implementation",
                description: "Build comprehensive data lakes that can store and process structured and unstructured data at scale."
              },
              {
                icon: "⚡",
                title: "Real-time Processing",
                description: "Implement streaming analytics and real-time data processing for immediate business insights."
              },
              {
                icon: "🔍",
                title: "Data Discovery",
                description: "Advanced analytics and exploration tools to uncover hidden patterns and insights in your big data."
              },
              {
                icon: "🛡️",
                title: "Data Governance",
                description: "Establish proper data governance frameworks ensuring security, compliance, and data quality."
              },
              {
                icon: "📈",
                title: "Performance Optimization",
                description: "Optimize big data processing workflows for maximum performance and cost efficiency."
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

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Technologies We Work With</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge big data technologies and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Storage & Processing",
                technologies: ["Hadoop", "Apache Spark", "Apache Kafka", "Elasticsearch"]
              },
              {
                category: "Cloud Platforms",
                technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Databricks"]
              },
              {
                category: "Databases",
                technologies: ["MongoDB", "Cassandra", "HBase", "ClickHouse"]
              },
              {
                category: "Analytics Tools",
                technologies: ["Apache Flink", "Storm", "Druid", "Presto"]
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-blue-600">{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.technologies.map((technology, techIndex) => (
                    <li key={techIndex} className="text-gray-600 flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Big Data Implementation Process</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                title: "Data Assessment",
                description: "Analyze your current data landscape, volume, variety, and velocity requirements.",
                color: "from-red-400 to-red-600"
              },
              {
                step: "2",
                title: "Architecture Design",
                description: "Design scalable big data architecture tailored to your specific use cases.",
                color: "from-orange-400 to-orange-600"
              },
              {
                step: "3",
                title: "Platform Setup",
                description: "Implement and configure big data platforms and processing frameworks.",
                color: "from-yellow-400 to-yellow-600"
              },
              {
                step: "4",
                title: "Data Integration",
                description: "Build data pipelines to ingest, transform, and process your big data.",
                color: "from-green-400 to-green-600"
              },
              {
                step: "5",
                title: "Analytics & Insights",
                description: "Implement analytics tools and create dashboards for actionable insights.",
                color: "from-blue-400 to-blue-600"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold`}>
                  {phase.step}
                </div>
                <h3 className="text-lg font-semibold mb-3">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Big Data Use Cases</h2>
            <p className="text-xl text-gray-600">
              Transform various business functions with big data analytics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer Analytics",
                description: "360-degree customer view through comprehensive data analysis",
                icon: "👥"
              },
              {
                title: "Fraud Detection",
                description: "Real-time fraud detection using behavioral pattern analysis",
                icon: "🔒"
              },
              {
                title: "Supply Chain Optimization",
                description: "Optimize supply chain operations with predictive analytics",
                icon: "🚚"
              },
              {
                title: "IoT Data Processing",
                description: "Process and analyze massive IoT sensor data streams",
                icon: "📡"
              },
              {
                title: "Financial Risk Management",
                description: "Advanced risk modeling and regulatory compliance",
                icon: "💰"
              },
              {
                title: "Predictive Maintenance",
                description: "Prevent equipment failures with predictive analytics",
                icon: "🔧"
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Harness Your Big Data?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how big data can transform your business operations
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Get Started with Big Data
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
                <li><Link href="/services/big-data-consulting" className="hover:text-white transition-colors">Big Data Consulting</Link></li>
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
