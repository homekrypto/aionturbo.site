
import Link from "next/link";
import { t } from "@/lib/t";

export default function ServicesPage() {
  const services = [
    {
      category: t("servicesPage.discover.category"),
      services: [
        {
          title: t("servicesPage.discover.aiConsulting.title"),
          description: t("servicesPage.discover.aiConsulting.description"),
          href: "/services/ai-consulting",
          icon: "🧠"
        },
        {
          title: t("servicesPage.discover.bigDataConsulting.title"),
          description: t("servicesPage.discover.bigDataConsulting.description"),
          href: "/services/big-data-consulting",
          icon: "📊"
        },
        {
          title: t("servicesPage.discover.generativeAIConsulting.title"),
          description: t("servicesPage.discover.generativeAIConsulting.description"),
          href: "/services/generative-ai-consulting",
          icon: "🎨"
        }
      ]
    },
    {
      category: t("servicesPage.organizeData.category"),
      services: [
        {
          title: t("servicesPage.organizeData.businessIntelligence.title"),
          description: t("servicesPage.organizeData.businessIntelligence.description"),
          href: "/services/business-intelligence",
          icon: "📈"
        },
        {
          title: t("servicesPage.organizeData.dataEngineering.title"),
          description: t("servicesPage.organizeData.dataEngineering.description"),
          href: "/services/data-engineering",
          icon: "⚙️"
        },
        {
          title: t("servicesPage.organizeData.databricksDeployment.title"),
          description: t("servicesPage.organizeData.databricksDeployment.description"),
          href: "/services/databricks-deployment",
          icon: "🏗️"
        }
      ]
    },
    {
      category: t("servicesPage.develop.category"),
      services: [
        {
          title: t("servicesPage.develop.aiPoc.title"),
          description: t("servicesPage.develop.aiPoc.description"),
          href: "/services/ai-proof-of-concept",
          icon: "🔬"
        },
        {
          title: t("servicesPage.develop.generativeAIDevelopment.title"),
          description: t("servicesPage.develop.generativeAIDevelopment.description"),
          href: "/services/generative-ai-development",
          icon: "🚀"
        },
        {
          title: t("servicesPage.develop.llmsDevelopment.title"),
          description: t("servicesPage.develop.llmsDevelopment.description"),
          href: "/services/llms-development",
          icon: "🤖"
        },
        {
          title: t("servicesPage.develop.mlConsulting.title"),
          description: t("servicesPage.develop.mlConsulting.description"),
          href: "/services/machine-learning-consulting",
          icon: "🎯"
        }
      ]
    },
    {
      category: t("servicesPage.deploy.category"),
      services: [
        {
          title: t("servicesPage.deploy.aiIntegration.title"),
          description: t("servicesPage.deploy.aiIntegration.description"),
          href: "/services/ai-integration",
          icon: "🔗"
        },
        {
          title: t("servicesPage.deploy.mlopsConsulting.title"),
          description: t("servicesPage.deploy.mlopsConsulting.description"),
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
            {t("site.title")}
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#services" className="hover:text-blue-600 transition-colors">{t("nav.services")}</Link>
            <Link href="/#about" className="hover:text-blue-600 transition-colors">{t("nav.about")}</Link>
            <Link href="/#testimonials" className="hover:text-blue-600 transition-colors">{t("nav.testimonials")}</Link>
            <Link href="/#contact" className="hover:text-blue-600 transition-colors">{t("nav.contact")}</Link>
          </nav>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors btn-animate">
            {t("servicesPage.cta.bookConsultation")}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            {t("servicesPage.hero.title")}
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {t("servicesPage.hero.description")}
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
                      {t("servicesPage.learnMore")}
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
            {t("servicesPage.cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("servicesPage.cta.description")}
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg">
            {t("servicesPage.cta.getStarted")}
          </button>
        </div>
      </section>

      {/* Footer */}
      {/* ...existing code for footer, should be refactored to use <Footer /> component and translation keys in the future ... */}
    </div>
  );
}
