
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
    { name: t("nav.services.aiConsulting", locale), href: `/${locale}/services/ai-consulting` },
    { name: t("nav.services.aiIntegration", locale), href: `/${locale}/services/ai-integration` },
    { name: t("nav.services.aiProofOfConcept", locale), href: `/${locale}/services/ai-proof-of-concept` },
    { name: t("nav.services.bigDataConsulting", locale), href: `/${locale}/services/big-data-consulting` },
    { name: t("nav.services.businessIntelligence", locale), href: `/${locale}/services/business-intelligence` },
    { name: t("nav.services.dataEngineering", locale), href: `/${locale}/services/data-engineering` },
    { name: t("nav.services.databricksDeployment", locale), href: `/${locale}/services/databricks-deployment` },
    { name: t("nav.services.generativeAiConsulting", locale), href: `/${locale}/services/generative-ai-consulting` },
    { name: t("nav.services.generativeAiDevelopment", locale), href: `/${locale}/services/generative-ai-development` },
    { name: t("nav.services.llmsDevelopment", locale), href: `/${locale}/services/llms-development` },
    { name: t("nav.services.machineLearningConsulting", locale), href: `/${locale}/services/machine-learning-consulting` },
    { name: t("nav.services.mlopsConsulting", locale), href: `/${locale}/services/mlops-consulting` },
  ];

  const solutions = [
    { name: t("nav.solutions.aiEmpoweredWorkforce", locale), href: `/${locale}/solutions/ai-empowered-workforce` },
    { name: t("nav.solutions.globalAiWorkforce", locale), href: `/${locale}/solutions/ai-global-workforce` },
    { name: t("nav.solutions.aiDocumentProcessing", locale), href: `/${locale}/solutions/ai-document-processing` },
    { name: t("nav.solutions.aiKnowledgeBase", locale), href: `/${locale}/solutions/ai-knowledge-base` },
    { name: t("nav.solutions.automotive", locale), href: `/${locale}/solutions/automotive` },
    { name: t("nav.solutions.aviation", locale), href: `/${locale}/solutions/aviation` },
    { name: t("nav.solutions.computerVision", locale), href: `/${locale}/solutions/computer-vision` },
    { name: t("nav.solutions.enterpriseGenerativeAi", locale), href: `/${locale}/solutions/enterprise-generative-ai` },
    { name: t("nav.solutions.financeInsurance", locale), href: `/${locale}/solutions/finance-insurance` },
    { name: t("nav.solutions.healthcare", locale), href: `/${locale}/solutions/healthcare` },
    { name: t("nav.solutions.legal", locale), href: `/${locale}/solutions/legal` },
    { name: t("nav.solutions.llmSolutions", locale), href: `/${locale}/solutions/llm-solutions` },
    { name: t("nav.solutions.logistics", locale), href: `/${locale}/solutions/logistics` },
    { name: t("nav.solutions.manufacturing", locale), href: `/${locale}/solutions/manufacturing` },
    { name: t("nav.solutions.privateInvestments", locale), href: `/${locale}/solutions/private-investments` },
    { name: t("nav.solutions.retail", locale), href: `/${locale}/solutions/retail` },
    { name: t("nav.solutions.technologyCompanies", locale), href: `/${locale}/solutions/technology-companies` },
  ];

  const products = [
    { 
      name: t("nav.products.contextclue", locale), 
      href: `/${locale}/products/contextclue`,
      description: t("nav.products.contextclueDesc", locale)
    },
    { 
      name: t("nav.products.ragEvaluator", locale), 
      href: `/${locale}/products/rag-evaluator`,
      description: t("nav.products.ragEvaluatorDesc", locale)
    }
  ];

  return (
    <>
      <style jsx>{`
        .dropdown-container {
          position: relative;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 600px;
          background: var(--dropdown-bg, white);
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          z-index: 50;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          border: 1px solid var(--dropdown-border, #e5e7eb);
        }
        
        .dropdown-menu.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-bridge {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: 8px;
          background: transparent;
        }
        
        .dropdown-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        
        .dropdown-grid.two-column {
          grid-template-columns: repeat(2, 1fr);
        }
        
        .dropdown-section h3 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--dropdown-section-title, #6366f1);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .dropdown-item {
          display: block;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          color: var(--dropdown-text, #374151);
          text-decoration: none;
          border-radius: 6px;
          transition: all 0.2s ease;
          margin-bottom: 0.25rem;
        }
        
        .dropdown-item:hover {
          background: var(--dropdown-hover-bg, #f3f4f6);
          color: var(--dropdown-hover-text, #6366f1);
          transform: translateX(4px);
        }
        
        .dropdown-item-with-desc {
          padding: 0.75rem;
        }
        
        .dropdown-item-title {
          font-weight: 600;
          color: var(--dropdown-text, #111827);
          margin-bottom: 0.25rem;
        }
        
        .dropdown-item-desc {
          font-size: 0.75rem;
          color: var(--dropdown-desc-text, #6b7280);
          line-height: 1.4;
        }
        
        .view-all-link {
          display: inline-flex;
          align-items: center;
          font-weight: 600;
          color: var(--dropdown-primary, #6366f1);
          text-decoration: none;
          margin-bottom: 1rem;
          transition: all 0.2s ease;
        }
        
        .view-all-link:hover {
          color: var(--dropdown-primary-hover, #4f46e5);
        }
        
        .view-all-link svg {
          margin-left: 0.25rem;
          width: 1rem;
          height: 1rem;
          transition: transform 0.2s ease;
        }
        
        .view-all-link:hover svg {
          transform: translateX(2px);
        }
        
        /* Theme Variables */
        :root {
          --dropdown-bg: white;
          --dropdown-border: #e5e7eb;
          --dropdown-text: #374151;
          --dropdown-hover-bg: #f3f4f6;
          --dropdown-hover-text: #6366f1;
          --dropdown-section-title: #6366f1;
          --dropdown-primary: #6366f1;
          --dropdown-primary-hover: #4f46e5;
          --dropdown-desc-text: #6b7280;
        }
        
        [data-theme="dark"] {
          --dropdown-bg: #111827;
          --dropdown-border: #374151;
          --dropdown-text: #e5e7eb;
          --dropdown-hover-bg: #1f2937;
          --dropdown-hover-text: #93c5fd;
          --dropdown-section-title: #93c5fd;
          --dropdown-primary: #93c5fd;
          --dropdown-primary-hover: #bfdbfe;
          --dropdown-desc-text: #9ca3af;
        }
        
        /* Mobile styles */
        @media (max-width: 1024px) {
          .dropdown-menu {
            position: static;
            min-width: auto;
            width: 100%;
            box-shadow: none;
            border: none;
            border-top: 1px solid var(--dropdown-border);
            border-radius: 0;
            transform: none;
            opacity: 1;
            visibility: visible;
            background: var(--dropdown-bg);
          }
          
          .dropdown-grid {
            grid-template-columns: 1fr;
          }
          
          .dropdown-bridge {
            display: none;
          }
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
              <span className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">AI on Turbo</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href={`/${locale}`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                {t("nav.home", locale)}
              </Link>
              
              {/* Services Dropdown */}
              <div className="dropdown-container">
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  {t("nav.services.title", locale)}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-bridge"></div>
                <div
                  className={`dropdown-menu ${isServicesOpen ? 'active' : ''}`}
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                  <Link 
                    href={`/${locale}/services`} 
                    className="view-all-link"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    {t("nav.services.all", locale)}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="dropdown-grid">
                    <div className="dropdown-section">
                      <h3>AI Consulting</h3>
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="dropdown-section">
                      <h3>Data & Analytics</h3>
                      {services.slice(4, 8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    <div className="dropdown-section">
                      <h3>Advanced AI</h3>
                      {services.slice(8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="dropdown-item"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Solutions Dropdown */}
              <div className="dropdown-container">
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded"
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                  {t("nav.solutions.title", locale)}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-bridge"></div>
                <div
                  className={`dropdown-menu ${isSolutionsOpen ? 'active' : ''}`}
                  onMouseEnter={handleSolutionsEnter}
                  onMouseLeave={handleSolutionsLeave}
                >
                  <Link 
                    href={`/${locale}/solutions`} 
                    className="view-all-link"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    {t("nav.solutions.all", locale)}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="dropdown-grid">
                    <div className="dropdown-section">
                      <h3>AI Solutions</h3>
                      {solutions.slice(0, 6).map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="dropdown-item"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                    <div className="dropdown-section">
                      <h3>Industries</h3>
                      {solutions.slice(6, 12).map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="dropdown-item"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                    <div className="dropdown-section">
                      <h3>Specialized</h3>
                      {solutions.slice(12).map((solution) => (
                        <Link
                          key={solution.href}
                          href={solution.href}
                          className="dropdown-item"
                          onClick={() => setIsSolutionsOpen(false)}
                        >
                          {solution.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Products Dropdown */}
              <div className="dropdown-container">
                <button
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 px-3 py-2 rounded"
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  {t("nav.products.title", locale)}
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="dropdown-bridge"></div>
                <div
                  className={`dropdown-menu two-column ${isProductsOpen ? 'active' : ''}`}
                  onMouseEnter={handleProductsEnter}
                  onMouseLeave={handleProductsLeave}
                >
                  <Link 
                    href={`/${locale}/products`} 
                    className="view-all-link"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    {t("nav.products.all", locale)}
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <div className="dropdown-grid two-column">
                    {products.map((product) => (
                      <Link
                        key={product.href}
                        href={product.href}
                        className="dropdown-item dropdown-item-with-desc"
                        onClick={() => setIsProductsOpen(false)}
                      >
                        <div className="dropdown-item-title">{product.name}</div>
                        <div className="dropdown-item-desc">{product.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              
              <Link href={`/${locale}/about`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                {t("nav.about", locale)}
              </Link>
              <Link href={`/${locale}/case-studies`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                {t("nav.caseStudies", locale)}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
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
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div className="px-4 py-2 space-y-1">
                <Link href={`/${locale}`} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  {t("nav.home", locale)}
                </Link>
                
                {/* Mobile Services Section */}
                <div className="space-y-1">
                  <button 
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {t("nav.services.title", locale)}
                    <svg className={`h-4 w-4 transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isServicesOpen && (
                    <div className="dropdown-menu active">
                      <Link 
                        href={`/${locale}/services`} 
                        className="view-all-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.services.all", locale)}
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <div className="dropdown-grid">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="dropdown-item"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Solutions Section */}
                <div className="space-y-1">
                  <button 
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  >
                    {t("nav.solutions.title", locale)}
                    <svg className={`h-4 w-4 transform transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isSolutionsOpen && (
                    <div className="dropdown-menu active">
                      <Link 
                        href={`/${locale}/solutions`} 
                        className="view-all-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.solutions.all", locale)}
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <div className="dropdown-grid">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.href}
                            href={solution.href}
                            className="dropdown-item"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Mobile Products Section */}
                <div className="space-y-1">
                  <button 
                    className="w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 font-medium flex items-center justify-between"
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                  >
                    {t("nav.products.title", locale)}
                    <svg className={`h-4 w-4 transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductsOpen && (
                    <div className="dropdown-menu active">
                      <Link 
                        href={`/${locale}/products`} 
                        className="view-all-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t("nav.products.all", locale)}
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                      <div className="dropdown-grid">
                        {products.map((product) => (
                          <Link
                            key={product.href}
                            href={product.href}
                            className="dropdown-item dropdown-item-with-desc"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <div className="dropdown-item-title">{product.name}</div>
                            <div className="dropdown-item-desc">{product.description}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <Link href={`/${locale}/about`} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  {t("nav.about", locale)}
                </Link>
                <Link href={`/${locale}/case-studies`} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  {t("nav.caseStudies", locale)}
                </Link>
                <Link href={`/${locale}/contact`} className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
                  {t("nav.contact", locale)}
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
    </>
  );
}
