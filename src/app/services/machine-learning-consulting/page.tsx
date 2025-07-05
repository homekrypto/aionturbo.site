import Link from "next/link";

export default function MachineLearningConsultingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Machine Learning Consulting
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
              End-to-end ML solutions from concept to production deployment
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Complete ML Lifecycle Management</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Our Machine Learning Consulting services provide comprehensive ML solutions that span the entire project lifecycle. From initial problem definition and data strategy to model development, deployment, and ongoing optimization, we ensure your ML initiatives deliver measurable business value.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We combine deep technical expertise with business acumen to build ML solutions that not only perform well in lab conditions but also thrive in real-world production environments, delivering sustainable competitive advantages.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Our ML Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Supervised & unsupervised learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Deep learning and neural networks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Computer vision and NLP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2">✓</span>
                  <span>Time series and forecasting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Our ML Consulting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">ML Strategy & Planning</h3>
              <p className="text-gray-600">
                Define ML roadmap, assess data readiness, and identify high-impact use cases aligned with business objectives.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">Data Science & Analytics</h3>
              <p className="text-gray-600">
                Exploratory data analysis, feature engineering, and statistical modeling to extract actionable insights.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-4">Model Development</h3>
              <p className="text-gray-600">
                Build, train, and validate ML models using state-of-the-art algorithms and best practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-4">Model Deployment</h3>
              <p className="text-gray-600">
                Deploy models to production with robust MLOps practices, monitoring, and automated retraining.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-4">Model Optimization</h3>
              <p className="text-gray-600">
                Optimize model performance, reduce inference time, and improve resource efficiency for production use.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">Performance Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring of model performance, data drift detection, and automated alerting systems.
              </p>
            </div>
          </div>
        </div>

        {/* ML Pipeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">ML Development Pipeline</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">Data Collection</h3>
                </div>
                <p className="text-sm text-gray-600">Gather, clean, and validate training data</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">Feature Engineering</h3>
                </div>
                <p className="text-sm text-gray-600">Extract and transform relevant features</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">Model Training</h3>
                </div>
                <p className="text-sm text-gray-600">Train and tune ML algorithms</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">Validation</h3>
                </div>
                <p className="text-sm text-gray-600">Evaluate model performance</p>
              </div>
              <div className="text-center">
                <div className="bg-teal-100 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-teal-800">Deployment</h3>
                </div>
                <p className="text-sm text-gray-600">Deploy to production environment</p>
              </div>
            </div>
          </div>
        </div>

        {/* ML Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Machine Learning Approaches</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Supervised Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Classification (SVM, Random Forest, XGBoost)</li>
                <li>• Regression (Linear, Polynomial, Neural Networks)</li>
                <li>• Deep Learning (CNN, RNN, Transformers)</li>
                <li>• Ensemble Methods (Bagging, Boosting)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Unsupervised Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Clustering (K-means, DBSCAN, Hierarchical)</li>
                <li>• Dimensionality Reduction (PCA, t-SNE, UMAP)</li>
                <li>• Anomaly Detection (Isolation Forest, One-Class SVM)</li>
                <li>• Association Rules (Market Basket Analysis)</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Reinforcement Learning</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Q-Learning and Deep Q-Networks</li>
                <li>• Policy Gradient Methods</li>
                <li>• Actor-Critic Algorithms</li>
                <li>• Multi-Agent Systems</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Specialized Domains</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Computer Vision (Object Detection, Segmentation)</li>
                <li>• Natural Language Processing (NER, Sentiment Analysis)</li>
                <li>• Time Series Analysis (ARIMA, LSTM, Prophet)</li>
                <li>• Recommendation Systems (Collaborative Filtering)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Tools & Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Tools & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6">ML Frameworks</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">TensorFlow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">PyTorch</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Scikit-learn</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">XGBoost</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Cloud Platforms</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">AWS SageMaker</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Google Cloud AI</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Azure ML</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Databricks</h4>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">MLOps Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">MLflow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Kubeflow</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Docker</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <h4 className="font-semibold">Kubernetes</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Financial Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Credit scoring and risk assessment</li>
                <li>• Fraud detection and prevention</li>
                <li>• Algorithmic trading strategies</li>
                <li>• Customer churn prediction</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Medical image analysis</li>
                <li>• Drug discovery and development</li>
                <li>• Predictive healthcare analytics</li>
                <li>• Clinical decision support</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Retail & E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Demand forecasting</li>
                <li>• Price optimization</li>
                <li>• Recommendation engines</li>
                <li>• Inventory management</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Predictive maintenance</li>
                <li>• Quality control and inspection</li>
                <li>• Supply chain optimization</li>
                <li>• Process optimization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Metrics</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-teal-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-teal-800">98%</h3>
              </div>
              <h4 className="font-semibold">Model Accuracy</h4>
              <p className="text-sm text-gray-600">Average across projects</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-teal-800">40%</h3>
              </div>
              <h4 className="font-semibold">Cost Reduction</h4>
              <p className="text-sm text-gray-600">Through automation</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-teal-800">5x</h3>
              </div>
              <h4 className="font-semibold">ROI</h4>
              <p className="text-sm text-gray-600">Average return on investment</p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 p-6 rounded-lg mb-4">
                <h3 className="text-2xl font-bold text-teal-800">16 Weeks</h3>
              </div>
              <h4 className="font-semibold">Time to Production</h4>
              <p className="text-sm text-gray-600">From concept to deployment</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Business with ML?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's build machine learning solutions that drive real business value and competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors">
              Start Your ML Journey
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
