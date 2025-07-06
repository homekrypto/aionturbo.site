"use client";


import Link from "next/link";
import { useState, useEffect } from "react";
import { t } from "@/lib/t";

export default function Header({ locale = 'en' }: { locale?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  
  // Add timers for delayed closing
  const [servicesTimer, setServicesTimer] = useState<NodeJS.Timeout | null>(null);
  const [solutionsTimer, setSolutionsTimer] = useState<NodeJS.Timeout | null>(null);
  const [productsTimer, setProductsTimer] = useState<NodeJS.Timeout | null>(null);

  // Helper functions for delayed dropdown closing
  const handleServicesEnter = () => {
    if (servicesTimer) {
      clearTimeout(servicesTimer);
      setServicesTimer(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesLeave = () => {
    const timer = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
    setServicesTimer(timer);
  };

  const handleSolutionsEnter = () => {
    if (solutionsTimer) {
      clearTimeout(solutionsTimer);
      setSolutionsTimer(null);
    }
    setIsSolutionsOpen(true);
  };

  const handleSolutionsLeave = () => {
    const timer = setTimeout(() => {
      setIsSolutionsOpen(false);
    }, 300);
    setSolutionsTimer(timer);
  };

  const handleProductsEnter = () => {
    if (productsTimer) {
      clearTimeout(productsTimer);
      setProductsTimer(null);
    }
    setIsProductsOpen(true);
  };

  const handleProductsLeave = () => {
    const timer = setTimeout(() => {
      setIsProductsOpen(false);
    }, 300);
    setProductsTimer(timer);
  };

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      if (servicesTimer) clearTimeout(servicesTimer);
      if (solutionsTimer) clearTimeout(solutionsTimer);
      if (productsTimer) clearTimeout(productsTimer);
    };
  }, [servicesTimer, solutionsTimer, productsTimer]);

  const services = [
    { name: t("nav.services.aiConsulting"), href: `/${locale}/services/ai-consulting` },
    { name: t("nav.services.aiIntegration"), href: `/${locale}/services/ai-integration` },
    { name: t("nav.services.aiProofOfConcept"), href: `/${locale}/services/ai-proof-of-concept` },
    { name: t("nav.services.bigDataConsulting"), href: `/${locale}/services/big-data-consulting` },
    { name: t("nav.services.businessIntelligence"), href: `/${locale}/services/business-intelligence` },
    { name: t("nav.services.dataEngineering"), href: `/${locale}/services/data-engineering` },
    { name: t("nav.services.databricksDeployment"), href: `/${locale}/services/databricks-deployment` },
    { name: t("nav.services.generativeAiConsulting"), href: `/${locale}/services/generative-ai-consulting` },
    { name: t("nav.services.generativeAiDevelopment"), href: `/${locale}/services/generative-ai-development` },
    { name: t("nav.services.llmsDevelopment"), href: `/${locale}/services/llms-development` },
    { name: t("nav.services.machineLearningConsulting"), href: `/${locale}/services/machine-learning-consulting` },
    { name: t("nav.services.mlopsConsulting"), href: `/${locale}/services/mlops-consulting` },
  ];

  const solutions = [
    { name: t("nav.solutions.aiEmpoweredWorkforce"), href: `/${locale}/solutions/ai-empowered-workforce` },
    { name: t("nav.solutions.globalAiWorkforce"), href: `/${locale}/solutions/ai-global-workforce` },
    { name: t("nav.solutions.aiDocumentProcessing"), href: `/${locale}/solutions/ai-document-processing` },
    { name: t("nav.solutions.aiKnowledgeBase"), href: `/${locale}/solutions/ai-knowledge-base` },
    { name: t("nav.solutions.automotive"), href: `/${locale}/solutions/automotive` },
    { name: t("nav.solutions.aviation"), href: `/${locale}/solutions/aviation` },
    { name: t("nav.solutions.computerVision"), href: `/${locale}/solutions/computer-vision` },
    { name: t("nav.solutions.enterpriseGenerativeAi"), href: `/${locale}/solutions/enterprise-generative-ai` },
    { name: t("nav.solutions.financeInsurance"), href: `/${locale}/solutions/finance-insurance` },
    { name: t("nav.solutions.healthcare"), href: `/${locale}/solutions/healthcare` },
    { name: t("nav.solutions.legal"), href: `/${locale}/solutions/legal` },
    { name: t("nav.solutions.llmSolutions"), href: `/${locale}/solutions/llm-solutions` },
    { name: t("nav.solutions.logistics"), href: `/${locale}/solutions/logistics` },
    { name: t("nav.solutions.manufacturing"), href: `/${locale}/solutions/manufacturing` },
    { name: t("nav.solutions.privateInvestments"), href: `/${locale}/solutions/private-investments` },
    { name: t("nav.solutions.retail"), href: `/${locale}/solutions/retail` },
    { name: t("nav.solutions.technologyCompanies"), href: `/${locale}/solutions/technology-companies` },
  ];

  const products = [
    { 
      name: t("nav.products.contextclue"), 
      href: `/${locale}/products/contextclue`,
      description: t("nav.products.contextclueDesc")
    },
    { 
      name: t("nav.products.ragEvaluator"), 
      href: `/${locale}/products/rag-evaluator`,
      description: t("nav.products.ragEvaluatorDesc")
    }
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <span className="text-xl font-bold text-gray-900">AI on Turbo</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-indigo-600 transition">
              {t("nav.home")}
            </Link>
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                {t("nav.services.title")}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <div className="p-4">
                    <Link 
                      href={`/${locale}/services`} 
                      className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {t("nav.services.all")}
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded"
                onMouseEnter={handleSolutionsEnter}
                onMouseLeave={handleSolutionsLeave}
              >
                {t("nav.solutions.title")}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
              {isSolutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200"
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                  <div className="p-4">
                    <Link 
                      href={`/${locale}/solutions`} 
                      className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      {t("nav.solutions.all")}
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded"
                onMouseEnter={handleProductsEnter}
                onMouseLeave={handleProductsLeave}
              >
                {t("nav.products.title")}
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Invisible bridge to prevent dropdown from closing */}
              <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
              {isProductsOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50 transition-all duration-200"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <div className="p-4">
                    <Link 
                      href={`/${locale}/products`} 
                      className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                      onClick={() => setIsProductsOpen(false)}
                    >
                      {t("nav.products.all")}
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.href}
                          href={product.href}
                          className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition"
                          onClick={() => setIsProductsOpen(false)}
                        >
                          <div className="font-medium text-gray-900">{product.name}</div>
                          <div className="text-xs text-gray-500">{product.description}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-indigo-600 transition">
              {t("nav.about")}
            </Link>
            <Link href={`/${locale}/case-studies`} className="text-gray-700 hover:text-indigo-600 transition">
              {t("nav.caseStudies")}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-indigo-600 transition">
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Language/Theme Switcher (moved from footer) */}
          <div className="hidden lg:block ml-4">
            <div id="global-footer-controls-container"></div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-1">
              <Link href={`/${locale}`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                {t("nav.home")}
              </Link>
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <Link href={`/${locale}/services`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition font-medium">
                  {t("nav.services.title")}
                </Link>
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile Solutions Section */}
              <div className="space-y-1">
                <Link href={`/${locale}/solutions`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition font-medium">
                  {t("nav.solutions.title")}
                </Link>
                <div className="pl-6 space-y-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.href}
                      href={solution.href}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      {solution.name}
                    </Link>
                  ))}
                </div>
              </div>
              {/* Mobile Products Section */}
              <div className="space-y-1">
                <Link href={`/${locale}/products`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition font-medium">
                  {t("nav.products.title")}
                </Link>
                <div className="pl-6 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.href}
                      href={product.href}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href={`/${locale}/about`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                {t("nav.about")}
              </Link>
              <Link href={`/${locale}/case-studies`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                {t("nav.caseStudies")}
              </Link>
              <Link href={`/${locale}/contact`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                {t("nav.contact")}
              </Link>

              {/* Language/Theme Switcher (mobile) */}
              <div className="pt-4 pb-2">
                <div id="global-footer-controls-container-mobile"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
