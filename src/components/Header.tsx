"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

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
    { name: "AI Consulting", href: `/${locale}/services/ai-consulting` },
    { name: "Big Data Consulting", href: `/${locale}/services/big-data-consulting` },
    { name: "Generative AI Consulting", href: `/${locale}/services/generative-ai-consulting` },
    { name: "Business Intelligence", href: `/${locale}/services/business-intelligence` },
    { name: "Data Engineering", href: `/${locale}/services/data-engineering` },
    { name: "Databricks Deployment", href: `/${locale}/services/databricks-deployment` },
    { name: "AI Proof of Concept", href: `/${locale}/services/ai-proof-of-concept` },
    { name: "Generative AI Development", href: `/${locale}/services/generative-ai-development` },
    { name: "LLMs Development", href: `/${locale}/services/llms-development` },
    { name: "Machine Learning Consulting", href: `/${locale}/services/machine-learning-consulting` },
    { name: "AI Integration Services", href: `/${locale}/services/ai-integration` },
    { name: "MLOps Consulting", href: `/${locale}/services/mlops-consulting` },
  ];

  const solutions = [
    { name: "AI-Empowered Workforce", href: `/${locale}/solutions/ai-empowered-workforce` },
    { name: "Global AI Workforce", href: `/${locale}/solutions/ai-global-workforce` },
    { name: "AI Document Processing", href: `/${locale}/solutions/ai-document-processing` },
    { name: "AI-powered Knowledge Base", href: `/${locale}/solutions/ai-knowledge-base` },
    { name: "Enterprise Generative AI", href: `/${locale}/solutions/enterprise-generative-ai` },
    { name: "LLM-Based Solutions", href: `/${locale}/solutions/llm-solutions` },
    { name: "Computer Vision", href: `/${locale}/solutions/computer-vision` },
    { name: "Healthcare", href: `/${locale}/solutions/healthcare` },
    { name: "Aviation", href: `/${locale}/solutions/aviation` },
    { name: "Manufacturing", href: `/${locale}/solutions/manufacturing` },
    { name: "Private Investments", href: `/${locale}/solutions/private-investments` },
    { name: "Technology Companies", href: `/${locale}/solutions/technology-companies` },
    { name: "Finance & Insurance", href: `/${locale}/solutions/finance-insurance` },
    { name: "Retail", href: `/${locale}/solutions/retail` },
    { name: "Legal", href: `/${locale}/solutions/legal` },
    { name: "Logistics", href: `/${locale}/solutions/logistics` },
    { name: "Automotive", href: `/${locale}/solutions/automotive` },
  ];

  const products = [
    { 
      name: "ContextClue", 
      href: `/${locale}/products/contextclue`,
      description: "AI-Powered Knowledge Base Assistant"
    },
    { 
      name: "RAG Evaluator", 
      href: `/${locale}/products/rag-evaluator`,
      description: "Evaluate Your RAG-Powered Chatbots"
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
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                Services
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
                      All Services →
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
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
                Solutions
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
                      All Solutions →
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
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
                Products
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
                      All Products →
                    </Link>
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.name}
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
              About
            </Link>
            <Link href={`/${locale}/case-studies`} className="text-gray-700 hover:text-indigo-600 transition">
              Case Studies
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-indigo-600 transition">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href={`/${locale}/contact`}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
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
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="space-y-1">
                <Link href={`/${locale}/services`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition font-medium">
                  Services
                </Link>
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
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
                  Solutions
                </Link>
                <div className="pl-6 space-y-1">
                  {solutions.map((solution) => (
                    <Link
                      key={solution.name}
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
                  Products
                </Link>
                <div className="pl-6 space-y-1">
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      href={product.href}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href={`/${locale}/about`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                About
              </Link>
              <Link href={`/${locale}/case-studies`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                Case Studies
              </Link>
              <Link href={`/${locale}/contact`} className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition">
                Contact
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-4 pb-2">
                <Link
                  href={`/${locale}/contact`}
                  className="block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
