import Link from "next/link";

export default function GenerativeAIConsultingPage() {
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
      <section className="bg-gradient-to-br from-purple-50 to-pink-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              Generative AI Consulting
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Unlock the creative potential of AI. From content generation to code creation, 
              harness the power of generative AI for your business transformation.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Explore GenAI Solutions
              </button>
              <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                See Use Cases
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GenAI Applications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Generative AI Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary AI capabilities that create, generate, and innovate across multiple domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "✍️",
                title: "Content Generation",
                description: "Automated creation of marketing copy, articles, documentation, and creative content at scale."
              },
              {
                icon: "💬",
                title: "Conversational AI",
                description: "Intelligent chatbots and virtual assistants powered by large language models."
              },
              {
                icon: "🎨",
                title: "Visual Content Creation",
                description: "Generate images, designs, and visual content using AI-powered creative tools."
              },
              {
                icon: "💻",
                title: "Code Generation",
                description: "Automated code writing, debugging, and software development acceleration."
              },
              {
                icon: "📊",
                title: "Data Synthesis",
                description: "Generate synthetic data for training, testing, and privacy-preserving analytics."
              },
              {
                icon: "🔄",
                title: "Process Automation",
                description: "Automate complex business processes using generative AI workflows."
              }
            ].map((application, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="text-4xl mb-4">{application.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600">{application.title}</h3>
                <p className="text-gray-600">{application.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">GenAI Technologies We Leverage</h2>
            <p className="text-xl text-gray-600">
              Cutting-edge generative AI models and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                category: "Language Models",
                items: ["GPT-4", "Claude", "LLaMA", "PaLM"],
                color: "purple"
              },
              {
                category: "Image Generation",
                items: ["DALL-E", "Midjourney", "Stable Diffusion", "Adobe Firefly"],
                color: "pink"
              },
              {
                category: "Code Generation",
                items: ["GitHub Copilot", "CodeT5", "Codex", "TabNine"],
                color: "indigo"
              },
              {
                category: "Platforms",
                items: ["OpenAI API", "Hugging Face", "Anthropic", "Google AI"],
                color: "blue"
              }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className={`text-lg font-semibold mb-4 text-${tech.color}-600`}>{tech.category}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-600 flex items-center">
                      <span className={`w-2 h-2 bg-${tech.color}-600 rounded-full mr-3`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">GenAI Implementation Strategy</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Use Case Discovery",
                description: "Identify high-impact generative AI opportunities specific to your business.",
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "02",
                title: "Model Selection",
                description: "Choose the right generative AI models and platforms for your requirements.",
                color: "from-pink-500 to-pink-600"
              },
              {
                step: "03",
                title: "Custom Development",
                description: "Build tailored generative AI solutions integrated with your systems.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                step: "04",
                title: "Deployment & Optimization",
                description: "Deploy solutions and continuously optimize for performance and accuracy.",
                color: "from-blue-500 to-blue-600"
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

      {/* Industry Use Cases */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Industry Applications</h2>
            <p className="text-xl text-gray-600">
              Generative AI transforming industries across the board
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                industry: "Marketing & Advertising",
                description: "Automated content creation, personalized campaigns, and creative asset generation",
                icon: "📱",
                examples: ["Ad copy generation", "Social media content", "Email campaigns", "Product descriptions"]
              },
              {
                industry: "Software Development",
                description: "Code generation, documentation, testing, and development acceleration",
                icon: "💻",
                examples: ["Code completion", "Bug fixing", "API documentation", "Test case generation"]
              },
              {
                industry: "Education & Training",
                description: "Personalized learning content, curriculum development, and educational materials",
                icon: "🎓",
                examples: ["Course materials", "Interactive content", "Assessment generation", "Tutoring systems"]
              },
              {
                industry: "Healthcare",
                description: "Medical documentation, research assistance, and patient communication",
                icon: "🏥",
                examples: ["Clinical notes", "Patient summaries", "Research papers", "Treatment plans"]
              },
              {
                industry: "Finance",
                description: "Report generation, risk analysis, and compliance documentation",
                icon: "💰",
                examples: ["Financial reports", "Risk assessments", "Compliance docs", "Market analysis"]
              },
              {
                industry: "E-commerce",
                description: "Product descriptions, customer service, and personalized recommendations",
                icon: "🛒",
                examples: ["Product content", "Chatbots", "Email marketing", "Review summaries"]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600">{useCase.industry}</h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <div className="space-y-1">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                      {example}
                    </div>
                  ))}
                </div>
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
              <h2 className="text-3xl font-bold mb-6">Why Choose Our GenAI Consulting?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Expert Model Selection",
                    description: "We help you choose the right generative AI models for your specific use cases and requirements."
                  },
                  {
                    title: "Custom Integration",
                    description: "Seamlessly integrate generative AI into your existing workflows and business processes."
                  },
                  {
                    title: "Responsible AI",
                    description: "Implement generative AI with proper safeguards, ethics, and compliance considerations."
                  },
                  {
                    title: "Scalable Solutions",
                    description: "Build generative AI solutions that scale with your business growth and evolving needs."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-center">GenAI Impact Metrics</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "10x", label: "Faster Content Creation" },
                  { number: "80%", label: "Cost Reduction" },
                  { number: "95%", label: "Quality Consistency" },
                  { number: "24/7", label: "Availability" }
                ].map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">{metric.number}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Harness Generative AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's explore how generative AI can revolutionize your content creation and business processes
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            Start Your GenAI Journey
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
                <li><Link href="/services/generative-ai-consulting" className="hover:text-white transition-colors">Generative AI</Link></li>
                <li><Link href="/services/machine-learning-consulting" className="hover:text-white transition-colors">Machine Learning</Link></li>
                <li><Link href="/services/data-engineering" className="hover:text-white transition-colors">Data Engineering</Link></li>
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
