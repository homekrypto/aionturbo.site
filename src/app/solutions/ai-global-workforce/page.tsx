import Link from "next/link";

export default function AIGlobalWorkforce() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The Reality of AI in the Global Workforce
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Worldwide Predictions and Transformation Opportunities
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Based on comprehensive research and extrapolated global workforce data, we present the 
              worldwide reality of AI transformation and help organizations prepare for the future of work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Start Global AI Strategy
              </button>
              <button className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors font-medium">
                Download Global Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Workforce Reality */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI's Global Impact on the Workforce
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Extrapolating from regional research data, we present the global reality of GenAI's 
              transformative impact on the worldwide labor market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-4">1.2B</div>
              <h3 className="text-xl font-semibold mb-2">Jobs at Risk Globally</h3>
              <p className="text-gray-700">
                Approximately 1.2 billion jobs worldwide are susceptible to GenAI transformation, 
                with 300 million positions at very high risk of automation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-4">52%</div>
              <h3 className="text-xl font-semibold mb-2">Women Disproportionately Affected</h3>
              <p className="text-gray-700">
                Women globally occupy 52% of AI-susceptible roles, particularly in administrative, 
                customer service, and data processing positions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">61%</div>
              <h3 className="text-xl font-semibold mb-2">Ready for Reskilling</h3>
              <p className="text-gray-700">
                Global workforce surveys indicate 61% of workers are eager to develop AI skills, 
                creating massive opportunity for proactive transformation.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Global Workforce Predictions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-purple-600">The Global Challenge</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Only 12% of companies globally have implemented GenAI tools</li>
                  <li>• 73% of workers received no AI usage guidelines</li>
                  <li>• Administrative roles face 68% susceptibility to AI automation</li>
                  <li>• Significant skills gap between AI-ready and AI-vulnerable workers</li>
                  <li>• Regional disparities in AI adoption and workforce preparedness</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-600">The Global Opportunity</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 69% of workers want to expand AI tool usage</li>
                  <li>• AI-skilled workers show 35% higher productivity</li>
                  <li>• Emerging markets present rapid AI adoption potential</li>
                  <li>• Cross-generational training creates knowledge transfer</li>
                  <li>• Global talent pool for remote AI-enhanced work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Regional Breakdown */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Regional AI Workforce Impact</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">North America</div>
                <div className="text-sm text-gray-600 mb-2">185M jobs affected</div>
                <div className="text-xs text-gray-500">High tech adoption, skilled workforce</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Europe</div>
                <div className="text-sm text-gray-600 mb-2">220M jobs affected</div>
                <div className="text-xs text-gray-500">Regulatory focus, measured adoption</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">Asia-Pacific</div>
                <div className="text-sm text-gray-600 mb-2">650M jobs affected</div>
                <div className="text-xs text-gray-500">Rapid adoption, manufacturing focus</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">Emerging Markets</div>
                <div className="text-sm text-gray-600 mb-2">245M jobs affected</div>
                <div className="text-xs text-gray-500">Leapfrog opportunity, skills gap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global AI Transformation Timeline */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Global AI Workforce Transformation Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Predicted phases of AI integration across global workforce markets
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">2024</span>
                </div>
                <h3 className="text-xl font-semibold">Early Adoption Phase</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tech companies and forward-thinking organizations begin widespread AI tool implementation.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">15%</span> of companies using AI tools
                </div>
                <div>
                  <span className="font-semibold">25M</span> workers directly affected
                </div>
                <div>
                  <span className="font-semibold">Tech sector</span> leads adoption
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-purple-600 font-bold">2025</span>
                </div>
                <h3 className="text-xl font-semibold">Mainstream Integration</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Mid-market companies and traditional industries begin AI integration, creating skills demand.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">35%</span> of companies using AI tools
                </div>
                <div>
                  <span className="font-semibold">150M</span> workers affected
                </div>
                <div>
                  <span className="font-semibold">Service sectors</span> rapid adoption
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">2026</span>
                </div>
                <h3 className="text-xl font-semibold">Mass Transformation</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI tools become standard across industries, creating urgent need for workforce reskilling.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">65%</span> of companies using AI tools
                </div>
                <div>
                  <span className="font-semibold">500M</span> workers affected
                </div>
                <div>
                  <span className="font-semibold">Global reskilling</span> initiatives
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-orange-600 font-bold">2027+</span>
                </div>
                <h3 className="text-xl font-semibold">New Equilibrium</h3>
              </div>
              <p className="text-gray-600 mb-4">
                AI-human collaboration becomes the norm, with new job categories emerging.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold">85%</span> of companies using AI tools
                </div>
                <div>
                  <span className="font-semibold">1.2B</span> workers affected
                </div>
                <div>
                  <span className="font-semibold">New job categories</span> established
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Global AI Workforce Transformation Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prepare your global workforce for the AI revolution with our comprehensive transformation program.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">From Global Challenge to Competitive Advantage</h3>
              <p className="text-gray-600 mb-6">
                Our globally-informed approach transforms worldwide workforce concerns into competitive advantages. 
                We address the universal challenges while respecting regional differences and cultural contexts.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Multi-Regional Approach</h4>
                    <p className="text-gray-600">Customized programs for different regional markets, regulations, and workforce characteristics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Cultural Training</h4>
                    <p className="text-gray-600">AI education that respects cultural contexts while building universal digital skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Scalable Implementation</h4>
                    <p className="text-gray-600">Enterprise-grade solutions that work across multiple countries and time zones</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-lg">
                <h4 className="text-lg font-semibold mb-4">Global Impact Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Workforce Productivity</span>
                    <span className="font-semibold text-purple-600">+42%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Employee Confidence</span>
                    <span className="font-semibold text-purple-600">+67%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Task Completion Speed</span>
                    <span className="font-semibold text-purple-600">+58%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Employee Retention</span>
                    <span className="font-semibold text-purple-600">+31%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Program Structure */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-4">Phase 1</div>
              <h3 className="text-xl font-semibold mb-3">Global Assessment</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive evaluation of your workforce's AI readiness across all regions and departments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regional workforce analysis</li>
                <li>• Skills gap identification</li>
                <li>• Cultural readiness assessment</li>
                <li>• Technology infrastructure audit</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-4">Phase 2</div>
              <h3 className="text-xl font-semibold mb-3">Foundational Training</h3>
              <p className="text-gray-600 mb-4">
                Build AI literacy across your global workforce with culturally-adapted training programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Multi-language AI basics</li>
                <li>• Regional compliance training</li>
                <li>• Hands-on tool experience</li>
                <li>• Cross-cultural collaboration</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-4">Phase 3</div>
              <h3 className="text-xl font-semibold mb-3">Advanced Integration</h3>
              <p className="text-gray-600 mb-4">
                Deploy AI tools across your global operations with specialized training for each region.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Role-specific AI implementation</li>
                <li>• Regional workflow optimization</li>
                <li>• Performance measurement</li>
                <li>• Best practice sharing</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-purple-600 mb-4">Phase 4</div>
              <h3 className="text-xl font-semibold mb-3">Continuous Evolution</h3>
              <p className="text-gray-600 mb-4">
                Maintain competitive advantage with ongoing learning and adaptation programs.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Regular skill updates</li>
                <li>• New tool integration</li>
                <li>• Global knowledge sharing</li>
                <li>• Future readiness planning</li>
              </ul>
            </div>
          </div>

          {/* High-Risk Global Segments */}
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-lg mb-20">
            <h3 className="text-2xl font-bold mb-6 text-center">Specialized Programs for High-Risk Global Segments</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-red-600">Administrative Professionals</h4>
                <p className="text-gray-600 mb-4">
                  68% of global administrative roles are at high risk. Our program transforms these workers into AI-enhanced efficiency experts.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="mb-2"><span className="font-semibold">Target:</span> 200M workers globally</div>
                  <div className="mb-2"><span className="font-semibold">Focus:</span> Process automation, data analysis</div>
                  <div><span className="font-semibold">Outcome:</span> 65% productivity increase</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-orange-600">Customer Service Representatives</h4>
                <p className="text-gray-600 mb-4">
                  Service roles face 55% automation risk globally. We create AI-human hybrid service specialists.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="mb-2"><span className="font-semibold">Target:</span> 150M workers globally</div>
                  <div className="mb-2"><span className="font-semibold">Focus:</span> AI-assisted communication, problem-solving</div>
                  <div><span className="font-semibold">Outcome:</span> 50% faster resolution times</div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold mb-3 text-purple-600">Data Analysts</h4>
                <p className="text-gray-600 mb-4">
                  Traditional data roles evolve into AI-powered insight specialists with 75% higher value creation.
                </p>
                <div className="text-sm text-gray-600">
                  <div className="mb-2"><span className="font-semibold">Target:</span> 50M workers globally</div>
                  <div className="mb-2"><span className="font-semibold">Focus:</span> Advanced AI analytics, strategic insights</div>
                  <div><span className="font-semibold">Outcome:</span> 80% more strategic impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Calculate Your Global AI Transformation ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estimate the return on investment for your worldwide AI workforce transformation
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Your Global Organization</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Total Employees Worldwide
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 10,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Annual Salary (USD)
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="e.g., 65,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Primary Industry
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Technology</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Retail</option>
                      <option>Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Geographic Regions
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>North America</option>
                      <option>Europe</option>
                      <option>Asia-Pacific</option>
                      <option>Global (All Regions)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Projected Global ROI</h3>
                <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Productivity Increase</span>
                      <span className="font-semibold text-purple-600">+42%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Annual Cost Savings</span>
                      <span className="font-semibold text-green-600">$2.8M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Employee Retention Value</span>
                      <span className="font-semibold text-blue-600">$1.2M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Innovation Acceleration</span>
                      <span className="font-semibold text-purple-600">$1.5M</span>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Total Annual ROI</span>
                      <span className="text-2xl font-bold text-green-600">$5.5M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Investment Payback Period</span>
                      <span className="font-semibold text-purple-600">8.5 months</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                    Get Detailed ROI Report
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Pricing */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Global AI Workforce Transformation Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the right program for your global organization's AI transformation journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Regional Starter</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$2,500<span className="text-lg font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Perfect for single-region companies beginning their AI journey</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 500 employees
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Single region focus
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Basic AI training program
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Monthly progress reports
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Start Regional Program
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Enterprise</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$8,500<span className="text-lg font-normal text-gray-600">/month</span></div>
              <p className="text-gray-600 mb-6">Comprehensive global AI transformation for multinational companies</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Up to 5,000 employees
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-region coordination
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Advanced AI integration
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  24/7 global support
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom ROI tracking
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Launch Global Program
              </button>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fortune 500</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">Custom<span className="text-lg font-normal text-gray-600"> pricing</span></div>
              <p className="text-gray-600 mb-6">Enterprise-scale AI transformation for global corporations</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited employees
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Global rollout management
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  White-label solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Dedicated success team
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Executive dashboards
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-medium">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Limited Time:</span> 30% discount for companies starting before Q2 2024
            </p>
            <p className="text-sm text-gray-500">
              All packages include multi-language support, cultural adaptation, and regional compliance training
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Global Workforce?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join the 1.2 billion workers worldwide who will be affected by AI. 
            Be the leader, not the follower in the global AI transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Schedule Global Assessment
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors font-medium">
              Download Global AI Report
            </button>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Based on extrapolated data from Polish Ministry of Digital Affairs research and global workforce trends
          </p>
        </div>
      </section>

      {/* Research Attribution */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-lg font-semibold mb-2">Research Foundation</h3>
            <p className="text-gray-600 text-sm">
              Global predictions based on "Generatywna sztuczna inteligencja a polski rynek pracy" 
              (June 2025, Polish Ministry of Digital Affairs) extrapolated to worldwide workforce data from 
              International Labour Organization, World Bank, and regional employment statistics.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
