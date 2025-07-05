import Link from "next/link";

export default function GenerativeAiDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Generative AI Development
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 max-w-3xl mx-auto">
              Build custom generative AI solutions that create content, automate processes, and drive innovation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Unleash Creative AI Power</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Generative AI Development services help you harness the creative power of artificial intelligence to build innovative solutions. From content generation and code automation to creative design and synthetic data creation, we develop custom generative AI applications tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We specialize in implementing state-of-the-art generative models including GPT, DALL-E, Stable Diffusion, and custom architectures that can transform how your business creates, processes, and delivers content.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Generative AI Applications</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Content creation and copywriting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Code generation and automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Image and video generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-pink-600 mr-2">✓</span>
                  <span>Conversational AI and chatbots</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Generative AI Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-4">Content Generation</h3>
              <p className="text-gray-600">
                Build AI systems that create high-quality written content, articles, product descriptions, and marketing copy at scale.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-4">Creative AI</h3>
              <p className="text-gray-600">
                Develop AI solutions for image generation, video creation, music composition, and other creative applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold mb-4">Conversational AI</h3>
              <p className="text-gray-600">
                Create intelligent chatbots, virtual assistants, and conversational interfaces with natural language capabilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Synthetic Data</h3>
              <p className="text-gray-600">
                Generate synthetic datasets for training, testing, and privacy-preserving machine learning applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Code Generation</h3>
              <p className="text-gray-600">
                Build AI-powered development tools that generate code, automate programming tasks, and accelerate development cycles.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">Custom Models</h3>
              <p className="text-gray-600">
                Develop and fine-tune specialized generative models for your specific industry and use case requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Generative AI Technologies</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Language Models</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">GPT-4</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Claude</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">PaLM</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">LLaMA</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Image & Video</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">DALL-E</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Stable Diffusion</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Midjourney</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">RunwayML</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Development Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Define use case and requirements</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Design</h3>
              <p className="text-gray-600">Architecture and model selection</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Train</h3>
              <p className="text-gray-600">Model training and fine-tuning</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Integrate</h3>
              <p className="text-gray-600">API development and integration</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deploy</h3>
              <p className="text-gray-600">Production deployment and monitoring</p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Marketing & Media</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated content creation</li>
                <li>• Personalized ad copy generation</li>
                <li>• Social media post creation</li>
                <li>• Video and image generation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Product description generation</li>
                <li>• Personalized recommendations</li>
                <li>• Virtual try-on experiences</li>
                <li>• Customer service chatbots</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Software Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Code generation and completion</li>
                <li>• Automated documentation</li>
                <li>• Bug detection and fixing</li>
                <li>• Test case generation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical report generation</li>
                <li>• Drug discovery assistance</li>
                <li>• Patient education materials</li>
                <li>• Synthetic patient data</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Generative AI</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-pink-800">10x</h3>
              </div>
              <h4 className="font-semibold">Faster Creation</h4>
              <p className="text-sm text-gray-600">Speed up content production</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-pink-800">60%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Lower content creation costs</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-pink-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-600">Always-on content generation</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-pink-800">∞</h3>
              </div>
              <h4 className="font-semibold">Scalability</h4>
              <p className="text-sm text-gray-600">Unlimited content variety</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Build Generative AI?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create custom generative AI solutions that transform how your business creates and delivers content.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition-colors">
              Start Your Project
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
