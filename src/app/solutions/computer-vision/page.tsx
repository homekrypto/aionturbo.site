import Link from "next/link";

export default function ComputerVisionPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Computer Vision Solutions
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Advanced visual AI for image recognition, analysis, and automation
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">See Beyond Human Vision</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Computer Vision Solutions enable machines to understand and interpret visual information with superhuman accuracy. From real-time object detection to complex scene analysis, we help businesses automate visual processes and gain insights from visual data.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Using state-of-the-art deep learning models and neural networks, our solutions can process images, videos, and live camera feeds to detect objects, recognize faces, analyze movements, and extract valuable information from visual content.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Vision Capabilities</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Object detection & recognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Facial recognition & analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Video analytics & tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Quality control automation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Computer Vision Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📷</div>
              <h3 className="text-xl font-semibold mb-4">Image Recognition</h3>
              <p className="text-gray-600">
                Identify and classify objects, people, animals, and scenes in images with high accuracy and speed.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-semibold mb-4">Video Analytics</h3>
              <p className="text-gray-600">
                Real-time video processing for surveillance, traffic monitoring, and behavior analysis applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-4">Facial Recognition</h3>
              <p className="text-gray-600">
                Secure access control, attendance tracking, and identity verification with advanced facial analysis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
              <p className="text-gray-600">
                Automated inspection and quality assurance for manufacturing and production environments.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🏥</div>
              <h3 className="text-xl font-semibold mb-4">Medical Imaging</h3>
              <p className="text-gray-600">
                AI-powered analysis of medical images for diagnosis, treatment planning, and research applications.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-semibold mb-4">Autonomous Systems</h3>
              <p className="text-gray-600">
                Computer vision for autonomous vehicles, drones, and robotic systems navigation and control.
              </p>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Automated quality inspection</li>
                <li>• Defect detection and classification</li>
                <li>• Assembly line monitoring</li>
                <li>• Product counting and sorting</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Retail</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Inventory management automation</li>
                <li>• Customer behavior analysis</li>
                <li>• Theft prevention systems</li>
                <li>• Checkout automation</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Surveillance and monitoring</li>
                <li>• Access control systems</li>
                <li>• Threat detection</li>
                <li>• Perimeter security</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical image analysis</li>
                <li>• Diagnostic assistance</li>
                <li>• Patient monitoring</li>
                <li>• Surgical planning</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">Deep Learning Frameworks</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">TensorFlow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">PyTorch</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">OpenCV</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">YOLO</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Cloud Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">AWS Rekognition</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Google Vision AI</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Azure Computer Vision</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Custom Models</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Hardware Integration</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">NVIDIA GPUs</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Intel Movidius</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Edge Devices</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">IoT Cameras</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Performance Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-red-800">99.9%</h3>
              </div>
              <h4 className="font-semibold">Accuracy</h4>
              <p className="text-sm text-gray-600">Object detection accuracy</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-red-800">30 FPS</h3>
              </div>
              <h4 className="font-semibold">Processing Speed</h4>
              <p className="text-sm text-gray-600">Real-time video analysis</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-red-800">50ms</h3>
              </div>
              <h4 className="font-semibold">Response Time</h4>
              <p className="text-sm text-gray-600">Image processing latency</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-red-800">24/7</h3>
              </div>
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-600">Continuous monitoring</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Implement Computer Vision?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your visual data into actionable insights with our advanced computer vision solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors">
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
