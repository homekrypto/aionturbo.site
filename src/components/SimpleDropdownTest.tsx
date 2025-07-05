"use client";

import Link from "next/link";
import { useState } from "react";

export default function SimpleDropdownTest({ locale = 'en' }: { locale?: string }) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownClick = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="bg-white shadow-sm p-4 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Dropdown Test (Click Version)</h2>
      
      <div className="flex space-x-8">
        {/* Services Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded border"
            onClick={() => handleDropdownClick('services')}
          >
            Services
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeDropdown === 'services' && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
              <div className="p-4">
                <Link 
                  href={`/${locale}/services`}
                  className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                  onClick={handleLinkClick}
                >
                  All Services →
                </Link>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/services/ai-consulting`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    AI Consulting
                  </Link>
                  <Link
                    href={`/${locale}/services/machine-learning-consulting`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    Machine Learning Consulting
                  </Link>
                  <Link
                    href={`/${locale}/services/data-engineering`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    Data Engineering
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded border"
            onClick={() => handleDropdownClick('solutions')}
          >
            Solutions
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeDropdown === 'solutions' && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
              <div className="p-4">
                <Link 
                  href={`/${locale}/solutions`}
                  className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                  onClick={handleLinkClick}
                >
                  All Solutions →
                </Link>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/solutions/enterprise-generative-ai`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    Enterprise Generative AI
                  </Link>
                  <Link
                    href={`/${locale}/solutions/computer-vision`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    Computer Vision
                  </Link>
                  <Link
                    href={`/${locale}/solutions/healthcare`}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    Healthcare
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products Dropdown */}
        <div className="relative">
          <button
            className="flex items-center text-gray-700 hover:text-indigo-600 transition px-3 py-2 rounded border"
            onClick={() => handleDropdownClick('products')}
          >
            Products
            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeDropdown === 'products' && (
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border z-50">
              <div className="p-4">
                <Link 
                  href={`/${locale}/products`}
                  className="block text-lg font-semibold text-indigo-600 mb-4 hover:text-indigo-800"
                  onClick={handleLinkClick}
                >
                  All Products →
                </Link>
                <div className="space-y-2">
                  <Link
                    href={`/${locale}/products/contextclue`}
                    className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    <div className="font-medium text-gray-900">ContextClue</div>
                    <div className="text-xs text-gray-500">AI-Powered Knowledge Base Assistant</div>
                  </Link>
                  <Link
                    href={`/${locale}/products/rag-evaluator`}
                    className="block px-3 py-2 text-sm hover:bg-gray-50 rounded transition"
                    onClick={handleLinkClick}
                  >
                    <div className="font-medium text-gray-900">RAG Evaluator</div>
                    <div className="text-xs text-gray-500">Evaluate Your RAG-Powered Chatbots</div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded">
        <p className="text-sm text-gray-600">
          <strong>Test Status:</strong> Active dropdown is "{activeDropdown || 'none'}"
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Click on the dropdown buttons above to test the functionality.
        </p>
      </div>
    </div>
  );
}
