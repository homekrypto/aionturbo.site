import Link from "next/link";
import { t, Locale } from "@/lib/t";

export default function Footer({ locale = 'en' }: { locale?: string }) {
  // Always use the current locale for translations, so the footer updates when the language changes
  const effectiveLocale = (locale || 'en') as Locale;
  const services = [
    { name: t("footer.services.aiConsulting", effectiveLocale), href: `/${effectiveLocale}/services/ai-consulting` },
    { name: t("footer.services.bigDataConsulting", effectiveLocale), href: `/${effectiveLocale}/services/big-data-consulting` },
    { name: t("footer.services.generativeAiConsulting", effectiveLocale), href: `/${effectiveLocale}/services/generative-ai-consulting` },
    { name: t("footer.services.businessIntelligence", effectiveLocale), href: `/${effectiveLocale}/services/business-intelligence` },
    { name: t("footer.services.dataEngineering", effectiveLocale), href: `/${effectiveLocale}/services/data-engineering` },
    { name: t("footer.services.machineLearningConsulting", effectiveLocale), href: `/${effectiveLocale}/services/machine-learning-consulting` },
  ];

  const solutions = [
    { name: t("footer.solutions.aiEmpoweredWorkforce", effectiveLocale), href: `/${effectiveLocale}/solutions/ai-empowered-workforce` },
    { name: t("footer.solutions.globalAiWorkforce", effectiveLocale), href: `/${effectiveLocale}/solutions/ai-global-workforce` },
    { name: t("footer.solutions.aiDocumentProcessing", effectiveLocale), href: `/${effectiveLocale}/solutions/ai-document-processing` },
    { name: t("footer.solutions.enterpriseGenerativeAi", effectiveLocale), href: `/${effectiveLocale}/solutions/enterprise-generative-ai` },
    { name: t("footer.solutions.computerVision", effectiveLocale), href: `/${effectiveLocale}/solutions/computer-vision` },
    { name: t("footer.solutions.healthcare", effectiveLocale), href: `/${effectiveLocale}/solutions/healthcare` },
    { name: t("footer.solutions.financeInsurance", effectiveLocale), href: `/${effectiveLocale}/solutions/finance-insurance` },
    { name: t("footer.solutions.manufacturing", effectiveLocale), href: `/${effectiveLocale}/solutions/manufacturing` },
  ];

  const industries = [
    { name: t("footer.industries.aviation", effectiveLocale), href: `/${effectiveLocale}/solutions/aviation` },
    { name: t("footer.industries.automotive", effectiveLocale), href: `/${effectiveLocale}/solutions/automotive` },
    { name: t("footer.industries.retail", effectiveLocale), href: `/${effectiveLocale}/solutions/retail` },
    { name: t("footer.industries.legal", effectiveLocale), href: `/${effectiveLocale}/solutions/legal` },
    { name: t("footer.industries.logistics", effectiveLocale), href: `/${effectiveLocale}/solutions/logistics` },
    { name: t("footer.industries.technologyCompanies", effectiveLocale), href: `/${effectiveLocale}/solutions/technology-companies` },
  ];

  const products = [
    { name: t("footer.products.contextClue", effectiveLocale), href: `/${effectiveLocale}/products/contextclue` },
    { name: t("footer.products.ragEvaluator", effectiveLocale), href: `/${effectiveLocale}/products/rag-evaluator` },
  ];

  // ...existing code (JSX and return statement, unchanged)...

  return (
    <footer className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href={`/${effectiveLocale}`} className="text-2xl font-bold text-indigo-600 mb-4 block">
              {t("footer.companyName", effectiveLocale)}
            </Link>
            <p className="text-gray-700 mb-6 max-w-md">
              {t("footer.companyDescription", effectiveLocale)}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.161-1.499-.698-2.436-2.888-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.services", effectiveLocale)}</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/services`} className="text-indigo-600 hover:text-indigo-500 transition dark:text-indigo-400 dark:hover:text-indigo-300">
                  {t("footer.viewAllServices")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.products", effectiveLocale)}</h3>
            <ul className="space-y-2">
              {products.map((product) => (
                <li key={product.name}>
                  <Link href={product.href} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/products`} className="text-indigo-600 hover:text-indigo-500 transition dark:text-indigo-400 dark:hover:text-indigo-300">
                  {t("footer.viewAllProducts")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.solutions", effectiveLocale)}</h3>
            <ul className="space-y-2">
              {solutions.map((solution) => (
                <li key={solution.name}>
                  <Link href={solution.href} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {solution.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/solutions`} className="text-indigo-600 hover:text-indigo-500 transition dark:text-indigo-400 dark:hover:text-indigo-300">
                  {t("footer.viewAllSolutions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Case Studies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.caseStudies", effectiveLocale)}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/case-studies/carbon-credit-verification`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.caseStudies.carbonCreditAi")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies/wind-turbine-maintenance`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.caseStudies.windTurbineAi")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies/counterfeit-detection`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.caseStudies.counterfeitDetection")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies/retail-robots`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.caseStudies.retailAutomation")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-indigo-600 hover:text-indigo-500 transition dark:text-indigo-400 dark:hover:text-indigo-300">
                  {t("footer.viewAllCaseStudies")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.industries", effectiveLocale)}</h3>
            <ul className="space-y-2">
              {industries.map((industry) => (
                <li key={industry.name}>
                  <Link href={industry.href} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href={`/${locale}/solutions`} className="text-indigo-600 hover:text-indigo-500 transition dark:text-indigo-400 dark:hover:text-indigo-300">
                  {t("footer.viewAllIndustries")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">{t("footer.sections.company", effectiveLocale)}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/about`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.company.about", effectiveLocale)}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.company.caseStudies", effectiveLocale)}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.company.contact", effectiveLocale)}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-gray-700 hover:text-indigo-600 transition dark:text-gray-200 dark:hover:text-indigo-400">
                  {t("footer.company.careers", effectiveLocale)}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-12 pt-8">

          {/* Global Footer Controls moved to Header */}
          {/* <div id="global-footer-controls-container" className="mb-8"></div> */}
          
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <Link href={`/${effectiveLocale}/privacy`} className="text-gray-600 hover:text-indigo-600 transition" data-translate="privacy-policy">
                {t("footer.privacyPolicy", effectiveLocale)}
              </Link>
              <Link href={`/${effectiveLocale}/terms`} className="text-gray-600 hover:text-indigo-600 transition" data-translate="terms-of-service">
                {t("footer.termsOfService", effectiveLocale)}
              </Link>
              <Link href={`/${effectiveLocale}/contact`} className="text-gray-600 hover:text-indigo-600 transition" data-translate="contact">
                {t("footer.contactUs", effectiveLocale)}
              </Link>
            </div>
            <p className="mt-8 md:mt-0 md:order-1 text-gray-600" data-translate="copyright">
              {t("footer.copyright", effectiveLocale)}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
