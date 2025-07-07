"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { t } from "@/lib/t";

export default function Header({ locale = "en" }: { locale?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  // Helper function to remove "nav." prefix for English locale only
  const getLabel = (key: string, locale: string) => {
    const label = t(key, locale as any);
    if (locale === 'en') {
      return label.replace(/^nav\./, '');
    }
    return label;
  };

  // Services data
  const services = [
    {
      name: getLabel("nav.services.aiConsulting", locale),
      href: `/${locale}/services/ai-consulting`,
    },
    {
      name: getLabel("nav.services.aiIntegration", locale),
      href: `/${locale}/services/ai-integration`,
    },
    {
      name: getLabel("nav.services.aiProofOfConcept", locale),
      href: `/${locale}/services/ai-proof-of-concept`,
    },
    {
      name: getLabel("nav.services.bigDataConsulting", locale),
      href: `/${locale}/services/big-data-consulting`,
    },
    {
      name: getLabel("nav.services.businessIntelligence", locale),
      href: `/${locale}/services/business-intelligence`,
    },
    {
      name: getLabel("nav.services.dataEngineering", locale),
      href: `/${locale}/services/data-engineering`,
    },
    {
      name: getLabel("nav.services.databricksDeployment", locale),
      href: `/${locale}/services/databricks-deployment`,
    },
    {
      name: getLabel("nav.services.generativeAiConsulting", locale),
      href: `/${locale}/services/generative-ai-consulting`,
    },
    {
      name: getLabel("nav.services.generativeAiDevelopment", locale),
      href: `/${locale}/services/generative-ai-development`,
    },
    {
      name: getLabel("nav.services.llmsDevelopment", locale),
      href: `/${locale}/services/llms-development`,
    },
    {
      name: getLabel("nav.services.machineLearningConsulting", locale),
      href: `/${locale}/services/machine-learning-consulting`,
    },
    {
      name: getLabel("nav.services.mlopsConsulting", locale),
      href: `/${locale}/services/mlops-consulting`,
    },
  ];

  // Solutions data
  const solutions = [
    {
      name: getLabel("nav.solutions.aiEmpoweredWorkforce", locale),
      href: `/${locale}/solutions/ai-empowered-workforce`,
      category: "Workforce",
    },
    {
      name: getLabel("nav.solutions.globalAiWorkforce", locale),
      href: `/${locale}/solutions/ai-global-workforce`,
      category: "Workforce",
    },
    {
      name: getLabel("nav.solutions.aiDocumentProcessing", locale),
      href: `/${locale}/solutions/ai-document-processing`,
      category: "Document Processing",
    },
    {
      name: getLabel("nav.solutions.aiKnowledgeBase", locale),
      href: `/${locale}/solutions/ai-knowledge-base`,
      category: "Knowledge Management",
    },
    {
      name: getLabel("nav.solutions.automotive", locale),
      href: `/${locale}/solutions/automotive`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.aviation", locale),
      href: `/${locale}/solutions/aviation`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.computerVision", locale),
      href: `/${locale}/solutions/computer-vision`,
      category: "AI Technologies",
    },
    {
      name: getLabel("nav.solutions.enterpriseGenerativeAi", locale),
      href: `/${locale}/solutions/enterprise-generative-ai`,
      category: "AI Technologies",
    },
    {
      name: getLabel("nav.solutions.financeInsurance", locale),
      href: `/${locale}/solutions/finance-insurance`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.healthcare", locale),
      href: `/${locale}/solutions/healthcare`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.legal", locale),
      href: `/${locale}/solutions/legal`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.llmSolutions", locale),
      href: `/${locale}/solutions/llm-solutions`,
      category: "AI Technologies",
    },
    {
      name: getLabel("nav.solutions.logistics", locale),
      href: `/${locale}/solutions/logistics`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.manufacturing", locale),
      href: `/${locale}/solutions/manufacturing`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.privateInvestments", locale),
      href: `/${locale}/solutions/private-investments`,
      category: "Finance",
    },
    {
      name: getLabel("nav.solutions.retail", locale),
      href: `/${locale}/solutions/retail`,
      category: "Industries",
    },
    {
      name: getLabel("nav.solutions.technologyCompanies", locale),
      href: `/${locale}/solutions/technology-companies`,
      category: "Industries",
    },
  ];

  // Products data
  const products = [
    {
      name: getLabel("nav.products.contextclue", locale),
      href: `/${locale}/products/contextclue`,
      description: getLabel("nav.products.contextclueDesc", locale),
    },
    {
      name: getLabel("nav.products.ragEvaluator", locale),
      href: `/${locale}/products/rag-evaluator`,
      description: getLabel("nav.products.ragEvaluatorDesc", locale),
    },
  ];

  // Group solutions by category
  const groupedSolutions = solutions.reduce(
    (acc, solution) => {
      const category = solution.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(solution);
      return acc;
    },
    {} as Record<string, typeof solutions>,
  );

  return (
    <>
      <style jsx>{`
        .modern-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          padding: 2rem;
          min-width: 800px;
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid #e5e7eb;
        }

        .modern-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .modern-dropdown::before {
          content: "";
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 16px;
          height: 16px;
          background: white;
          border: 1px solid #e5e7eb;
          border-bottom: none;
          border-right: none;
          transform: translateX(-50%) rotate(45deg);
        }

        .dropdown-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .dropdown-grid.two-cols {
          grid-template-columns: repeat(2, 1fr);
        }

        .dropdown-section {
          display: flex;
          flex-direction: column;
        }

        .section-header {
          font-size: 0.875rem;
          font-weight: 600;
          color: #6366f1;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 0.5rem;
        }

        .dropdown-item {
          display: flex;
          flex-direction: column;
          padding: 0.75rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          text-decoration: none;
          margin-bottom: 0.5rem;
          border: 1px solid transparent;
        }

        .dropdown-item:hover {
          background: #f8fafc;
          border-color: #e2e8f0;
          transform: translateY(-1px);
        }

        .item-title {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
          font-size: 0.875rem;
        }

        .item-desc {
          font-size: 0.75rem;
          color: #6b7280;
          line-height: 1.4;
        }

        .view-all-btn {
          display: inline-flex;
          align-items: center;
          padding: 0.75rem 1.5rem;
          background: #6366f1;
          color: white;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.2s ease;
          margin-bottom: 1.5rem;
          width: fit-content;
        }

        .view-all-btn:hover {
          background: #4f46e5;
          transform: translateY(-1px);
        }

        /* Dark theme styles */
        [data-theme="dark"] .modern-dropdown {
          background: #1f2937;
          border-color: #374151;
        }

        [data-theme="dark"] .modern-dropdown::before {
          background: #1f2937;
          border-color: #374151;
        }

        [data-theme="dark"] .section-header {
          color: #93c5fd;
          border-color: #374151;
        }

        [data-theme="dark"] .dropdown-item {
          border-color: transparent;
        }

        [data-theme="dark"] .dropdown-item:hover {
          background: #374151;
          border-color: #4b5563;
        }

        [data-theme="dark"] .item-title {
          color: #f3f4f6;
        }

        [data-theme="dark"] .item-desc {
          color: #9ca3af;
        }

        [data-theme="dark"] .view-all-btn {
          background: #3b82f6;
        }

        [data-theme="dark"] .view-all-btn:hover {
          background: #2563eb;
        }

        /* Mobile styles */
        @media (max-width: 1024px) {
          .modern-dropdown {
            position: static;
            transform: none;
            min-width: auto;
            width: 100%;
            margin: 0;
            border-radius: 0;
            box-shadow: none;
            border: none;
            border-top: 1px solid #e5e7eb;
            background: white;
          }

          .modern-dropdown::before {
            display: none;
          }

          .dropdown-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          [data-theme="dark"] .modern-dropdown {
            background: #1f2937;
            border-color: #374151;
          }
        }

        .nav-trigger {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          cursor: pointer;
          background: transparent;
          border: none;
          color: #374151;
          font-weight: 500;
        }

        .nav-trigger:hover {
          background: #f3f4f6;
          color: #6366f1;
        }

        [data-theme="dark"] .nav-trigger {
          color: #d1d5db;
        }

        [data-theme="dark"] .nav-trigger:hover {
          background: #374151;
          color: #93c5fd;
        }

        .nav-trigger svg {
          width: 1rem;
          height: 1rem;
          transition: transform 0.2s ease;
        }

        .nav-trigger.active svg {
          transform: rotate(180deg);
        }
      `}</style>

      <header className="bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                AI on Turbo
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-2">
              <Link href={`/${locale}`} className="nav-trigger">
                {t("nav.home", locale)}
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`nav-trigger ${isServicesOpen ? "active" : ""}`}
                >
                  {t("nav.services.title", locale)}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`modern-dropdown ${isServicesOpen ? "show" : ""}`}
                >
                  <Link href={`/${locale}/services`} className="view-all-btn">
                    {t("nav.services.all", locale)}
                  </Link>

                  <div className="dropdown-grid">
                    <div className="dropdown-section">
                      <div className="section-header">AI Consulting</div>
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                        >
                          <div className="item-title">{service.name}</div>
                          <div className="item-desc">{service.desc}</div>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-section">
                      <div className="section-header">Data & Analytics</div>
                      {services.slice(4, 8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                        >
                          <div className="item-title">{service.name}</div>
                          <div className="item-desc">{service.desc}</div>
                        </Link>
                      ))}
                    </div>

                    <div className="dropdown-section">
                      <div className="section-header">Advanced AI</div>
                      {services.slice(8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                        >
                          <div className="item-title">{service.name}</div>
                          <div className="item-desc">{service.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`nav-trigger ${isSolutionsOpen ? "active" : ""}`}
                >
                  {t("nav.solutions.title", locale)}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`modern-dropdown ${isSolutionsOpen ? "show" : ""}`}
                >
                  <Link href={`/${locale}/solutions`} className="view-all-btn">
                    {t("nav.solutions.all", locale)}
                  </Link>

                  <div className="dropdown-grid">
                    {Object.entries(groupedSolutions)
                      .slice(0, 3)
                      .map(([category, categoryItems]) => (
                        <div key={category} className="dropdown-section">
                          <div className="section-header">{category}</div>
                          {categoryItems.map((solution) => (
                            <Link
                              key={solution.href}
                              href={solution.href}
                              className="dropdown-item"
                            >
                              <div className="item-title">{solution.name}</div>
                            </Link>
                          ))}
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button
                  className={`nav-trigger ${isProductsOpen ? "active" : ""}`}
                >
                  {t("nav.products.title", locale)}
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`modern-dropdown two-cols ${isProductsOpen ? "show" : ""}`}
                >
                  <Link href={`/${locale}/products`} className="view-all-btn">
                    {t("nav.products.all", locale)}
                  </Link>

                  <div className="dropdown-grid two-cols">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="dropdown-item"
                      >
                        <div className="item-title">{product.name}</div>
                        <div className="item-desc">{product.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href={`/${locale}/about`} className="nav-trigger">
                {t("nav.about", locale)}
              </Link>

              <Link href={`/${locale}/case-studies`} className="nav-trigger">
                {t("nav.caseStudies", locale)}
              </Link>

              <Link href={`/${locale}/contact`} className="nav-trigger">
                {t("nav.contact", locale)}
              </Link>
            </nav>

            {/* Language/Theme Switcher */}
            <div className="hidden lg:block ml-4">
              <div id="global-footer-controls-container"></div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 dark:text-gray-300 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="px-4 py-2 space-y-1">
                <Link
                  href={`/${locale}`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.home", locale)}
                </Link>

                {/* Mobile Services */}
                <div>
                  <button
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {t("nav.services.title", locale)}
                    <svg
                      className={`h-4 w-4 transform transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="modern-dropdown show">
                      <Link
                        href={`/${locale}/services`}
                        className="view-all-btn"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.services.all", locale)}
                      </Link>
                      <div className="dropdown-grid">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="dropdown-item"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="item-title">{service.name}</div>
                            <div className="item-desc">{service.desc}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Solutions */}
                <div>
                  <button
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  >
                    {t("nav.solutions.title", locale)}
                    <svg
                      className={`h-4 w-4 transform transition-transform ${isSolutionsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isSolutionsOpen && (
                    <div className="modern-dropdown show">
                      <Link
                        href={`/${locale}/solutions`}
                        className="view-all-btn"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.solutions.all", locale)}
                      </Link>
                      <div className="dropdown-grid">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className="dropdown-item"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="item-title">{solution.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Products */}
                <div>
                  <button
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                  >
                    {t("nav.products.title", locale)}
                    <svg
                      className={`h-4 w-4 transform transition-transform ${isProductsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isProductsOpen && (
                    <div className="modern-dropdown show">
                      <Link
                        href={`/${locale}/products`}
                        className="view-all-btn"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.products.all", locale)}
                      </Link>
                      <div className="dropdown-grid">
                        {products.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className="dropdown-item"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="item-title">{product.name}</div>
                            <div className="item-desc">
                              {product.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href={`/${locale}/about`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={()={() => setIsMenuOpen(false)}
                >
                  {t("nav.about", locale)}
                </Link>

                <Link
                  href={`/${locale}/case-studies`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.caseStudies", locale)}
                </Link>

                <Link
                  href={`/${locale}/contact`}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.contact", locale)}
                </Link>

                <div className="pt-4 pb-2">
                  <div id="global-footer-controls-container-mobile"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}