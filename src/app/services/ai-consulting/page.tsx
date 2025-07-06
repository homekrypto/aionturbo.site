import Link from "next/link";
import { t } from "@/lib/t";

export default function AIConsultingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 text-gray-900">
              {t("aiConsulting.hero.title")}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {t("aiConsulting.hero.description")}
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                {t("aiConsulting.hero.ctaStart")}
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                {t("aiConsulting.hero.ctaCaseStudies")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("aiConsulting.whatWeOffer.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("aiConsulting.whatWeOffer.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: t("aiConsulting.whatWeOffer.services.strategy"),
                description: t("aiConsulting.whatWeOffer.services.strategyDesc")
              },
              {
                icon: "🔍",
                title: t("aiConsulting.whatWeOffer.services.readiness"),
                description: t("aiConsulting.whatWeOffer.services.readinessDesc")
              },
              {
                icon: "📊",
                title: t("aiConsulting.whatWeOffer.services.useCases"),
                description: t("aiConsulting.whatWeOffer.services.useCasesDesc")
              },
              {
                icon: "💡",
                title: t("aiConsulting.whatWeOffer.services.technology"),
                description: t("aiConsulting.whatWeOffer.services.technologyDesc")
              },
              {
                icon: "⚡",
                title: t("aiConsulting.whatWeOffer.services.implementation"),
                description: t("aiConsulting.whatWeOffer.services.implementationDesc")
              },
              {
                icon: "🔄",
                title: t("aiConsulting.whatWeOffer.services.change"),
                description: t("aiConsulting.whatWeOffer.services.changeDesc")
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("aiConsulting.process.title")}</h2>
            <p className="text-xl text-gray-600">
              {t("aiConsulting.process.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: t("aiConsulting.whatWeOffer.services.strategy"),
                description: t("aiConsulting.whatWeOffer.services.strategyDesc"),
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: t("aiConsulting.whatWeOffer.services.readiness"),
                description: t("aiConsulting.whatWeOffer.services.readinessDesc"),
                color: "from-indigo-500 to-indigo-600"
              },
              {
                step: "03",
                title: t("aiConsulting.whatWeOffer.services.implementation"),
                description: t("aiConsulting.whatWeOffer.services.implementationDesc"),
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "04",
                title: t("aiConsulting.whatWeOffer.services.change"),
                description: t("aiConsulting.whatWeOffer.services.changeDesc"),
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t("aiConsulting.why.title")}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("aiConsulting.why.description")}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: t("aiConsulting.why.trackRecord"),
                description: t("aiConsulting.why.trackRecordDesc")
              },
              {
                icon: "🤝",
                title: t("aiConsulting.why.clientCentric"),
                description: t("aiConsulting.why.clientCentricDesc")
              },
              {
                icon: "🚀",
                title: t("aiConsulting.why.expertise"),
                description: t("aiConsulting.why.expertiseDesc")
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
            <h2 className="text-3xl font-bold mb-4">{t("aiConsulting.contact.title")}</h2>
            <p className="text-xl mb-8">
              {t("aiConsulting.contact.description")}
            </p>
            <Link href="/en/contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              {t("aiConsulting.contact.cta")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
