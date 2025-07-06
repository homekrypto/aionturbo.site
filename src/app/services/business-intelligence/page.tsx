

import Link from "next/link";
import { t } from "@/lib/t";

export default function BusinessIntelligencePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("bi.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {t("bi.hero.description")}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">{t("bi.overview.title")}</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                {t("bi.overview.p1")}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t("bi.overview.p2")}
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{t("bi.overview.benefits.title")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("bi.overview.benefits.realtime")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("bi.overview.benefits.speed")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("bi.overview.benefits.efficiency")}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span>{t("bi.overview.benefits.cost")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("bi.services.title")}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.dataViz.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.dataViz.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.performance.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.performance.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.predictive.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.predictive.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.realtime.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.realtime.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.customDashboards.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.customDashboards.desc")}
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-4">{t("bi.services.executive.title")}</h3>
              <p className="text-gray-600">
                {t("bi.services.executive.desc")}
              </p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("bi.process.title")}</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("bi.process.assessment.title")}</h3>
              <p className="text-gray-600">{t("bi.process.assessment.desc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("bi.process.strategy.title")}</h3>
              <p className="text-gray-600">{t("bi.process.strategy.desc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("bi.process.implementation.title")}</h3>
              <p className="text-gray-600">{t("bi.process.implementation.desc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{t("bi.process.optimization.title")}</h3>
              <p className="text-gray-600">{t("bi.process.optimization.desc")}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-12 text-center">{t("bi.technologies.title")}</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.powerbi")}</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.tableau")}</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.qlikview")}</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.looker")}</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.d3")}</h3>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold">{t("bi.technologies.sql")}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">{t("bi.cta.title")}</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            {t("bi.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              {t("bi.cta.getStarted")}
            </Link>
            <Link href="/services" className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              {t("bi.cta.viewAll")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
