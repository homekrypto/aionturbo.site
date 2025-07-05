import Link from "next/link";

export default function AIEmpoweredWorkforce() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transform Your Workforce with AI
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Empower Your Employees to Become AI-Enhanced Professionals
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Based on the latest Polish Ministry of Digital Affairs research, we help organizations 
              navigate the AI transformation and turn potential threats into competitive advantages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Start AI Transformation
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                Download Research Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Insights */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Reality of AI in Polish Workforce
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Recent research from the Polish Ministry of Digital Affairs reveals critical insights 
              about GenAI's impact on the Polish labor market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-4">30.3%</div>
              <h3 className="text-xl font-semibold mb-2">Jobs at Risk</h3>
              <p className="text-gray-700">
                Over 5 million jobs in Poland are susceptible to GenAI transformation, 
                with 817,500 positions at very high risk.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-4">47.8%</div>
              <h3 className="text-xl font-semibold mb-2">Women Most Affected</h3>
              <p className="text-gray-700">
                Young women (15-24) are disproportionately represented in AI-susceptible roles, 
                creating urgent need for reskilling.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-4">58.4%</div>
              <h3 className="text-xl font-semibold mb-2">Ready to Learn</h3>
              <p className="text-gray-700">
                Polish workers are eager to develop AI skills, creating opportunity 
                for proactive transformation.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Research Findings</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-600">The Challenge</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Only 9.4% of companies have implemented GenAI tools</li>
                  <li>• 68.1% of workers received no AI usage guidelines</li>
                  <li>• Office workers face 71.2% susceptibility to AI automation</li>
                  <li>• Communication gap between employers and employees</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-green-600">The Opportunity</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• 66% of workers want to expand AI tool usage</li>
                  <li>• Experienced users see AI as productivity multiplier</li>
                  <li>• Age and gender gaps create targeted training opportunities</li>
                  <li>• High readiness for upskilling and reskilling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI-Empowered Workforce Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your employees into AI-enhanced professionals with our comprehensive transformation program.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold mb-6">From AI Anxiety to AI Advantage</h3>
              <p className="text-gray-600 mb-6">
                Our research-backed approach transforms workforce concerns into competitive advantages. 
                We address the three key variables identified in the Polish market: age, gender, and experience gaps.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Age-Specific Training</h4>
                    <p className="text-gray-600">Tailored programs for different age groups, from digital natives to senior professionals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Gender-Inclusive Programs</h4>
                    <p className="text-gray-600">Special focus on empowering women who are disproportionately affected by AI transformation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Experience-Based Learning</h4>
                    <p className="text-gray-600">Hands-on training that builds confidence through practical application</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2">Employee on AI Steroids</h4>
                <p className="text-gray-600">Transform your workforce from AI-anxious to AI-empowered with measurable productivity gains</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Components */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI Empowerment Program
            </h2>
            <p className="text-xl text-gray-600">
              Four-phase transformation addressing upskilling, reskilling, and future-proofing your workforce
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "AI Awareness & Assessment",
                description: "Evaluate current AI readiness, identify skill gaps, and create personalized learning paths",
                duration: "2-3 weeks",
                deliverables: ["AI Readiness Assessment", "Skill Gap Analysis", "Personalized Learning Roadmap", "Risk & Opportunity Matrix"],
                color: "from-blue-400 to-blue-600"
              },
              {
                phase: "Phase 2",
                title: "Foundational AI Skills",
                description: "Build core AI literacy and practical tool usage skills across your organization",
                duration: "4-6 weeks",
                deliverables: ["AI Fundamentals Training", "Tool-Specific Workshops", "Hands-on Practice Sessions", "Safety & Ethics Guidelines"],
                color: "from-green-400 to-green-600"
              },
              {
                phase: "Phase 3",
                title: "Advanced AI Integration",
                description: "Develop role-specific AI applications and workflow optimization strategies",
                duration: "6-8 weeks",
                deliverables: ["Role-Specific AI Training", "Workflow Optimization", "Quality Assurance Protocols", "Performance Metrics"],
                color: "from-purple-400 to-purple-600"
              },
              {
                phase: "Phase 4",
                title: "Continuous Learning & Support",
                description: "Ensure long-term success with ongoing support and advanced skill development",
                duration: "Ongoing",
                deliverables: ["Continuous Learning Program", "Advanced Certifications", "Innovation Workshops", "Change Management Support"],
                color: "from-orange-400 to-orange-600"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} text-white rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <div className="text-sm text-blue-600 font-medium mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="text-sm text-gray-500 mb-4">Duration: {phase.duration}</div>
                <div>
                  <h4 className="font-semibold mb-2">Key Deliverables:</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Programs for High-Risk Groups
            </h2>
            <p className="text-xl text-gray-600">
              Targeted interventions for the most vulnerable workforce segments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                group: "Office Workers",
                risk: "71.2% susceptibility",
                icon: "💼",
                focus: "Document automation, data analysis, communication enhancement",
                programs: ["AI-Enhanced Administration", "Smart Document Processing", "Intelligent Customer Service", "Data-Driven Decision Making"]
              },
              {
                group: "Young Women (15-24)",
                risk: "47.8% in vulnerable roles",
                icon: "👩‍💼",
                focus: "Leadership development, technical skills, career resilience",
                programs: ["Women in AI Leadership", "Technical Skill Bridging", "Career Transition Support", "Mentorship Networks"]
              },
              {
                group: "Senior Professionals (55+)",
                risk: "50% lack AI awareness",
                icon: "👨‍💼",
                focus: "Gradual adoption, confidence building, experience integration",
                programs: ["Senior-Friendly AI Training", "Experience-AI Integration", "Confidence Building Workshops", "Gradual Skill Development"]
              }
            ].map((group, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-4xl mb-4 text-center">{group.icon}</div>
                <h3 className="text-xl font-bold mb-2">{group.group}</h3>
                <div className="text-red-600 font-semibold mb-4">{group.risk}</div>
                <p className="text-gray-600 mb-4">{group.focus}</p>
                <div>
                  <h4 className="font-semibold mb-2">Specialized Programs:</h4>
                  <ul className="space-y-1">
                    {group.programs.map((program, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Measurable Transformation Results
            </h2>
            <p className="text-xl text-gray-600">
              Track your workforce evolution with concrete metrics and ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                metric: "54.8%",
                label: "Productivity Increase",
                description: "Average task completion speed improvement (from research)"
              },
              {
                metric: "66%",
                label: "Employee Engagement",
                description: "Workers wanting expanded AI usage after training"
              },
              {
                metric: "40%",
                label: "Time Savings",
                description: "Reduction in routine task completion time"
              },
              {
                metric: "85%",
                label: "Retention Rate",
                description: "Employee retention in AI-enabled roles"
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <h3 className="text-lg font-semibold mb-2">{item.label}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* ROI Calculator */}
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Calculate Your Transformation ROI</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-blue-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Investment Range</h4>
                <div className="text-2xl font-bold text-blue-600 mb-2">€50K - €500K</div>
                <p className="text-gray-600 text-sm">Depending on organization size and program scope</p>
              </div>
              <div className="p-6 bg-green-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Expected Returns</h4>
                <div className="text-2xl font-bold text-green-600 mb-2">€200K - €2M+</div>
                <p className="text-gray-600 text-sm">Annual productivity gains and cost savings</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Payback Period</h4>
                <div className="text-2xl font-bold text-purple-600 mb-2">6-12 months</div>
                <p className="text-gray-600 text-sm">Typical ROI realization timeframe</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Workforce Transformation Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the right transformation approach for your organization
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "AI Readiness Assessment",
                price: "€25K - €50K",
                duration: "4-6 weeks",
                description: "Comprehensive analysis of your workforce AI vulnerability and opportunity assessment",
                features: [
                  "Complete workforce vulnerability analysis",
                  "Skills gap assessment using research methodology",
                  "Customized transformation roadmap",
                  "Risk mitigation strategy",
                  "Executive presentation & recommendations"
                ],
                audience: "Organizations beginning AI transformation journey",
                cta: "Start Assessment"
              },
              {
                name: "Workforce Transformation Program",
                price: "€150K - €300K",
                duration: "6-12 months",
                description: "Complete AI empowerment program addressing all vulnerability factors",
                features: [
                  "All 4 transformation phases included",
                  "Specialized programs for high-risk groups",
                  "Custom training for 100-500 employees",
                  "Ongoing support and mentoring",
                  "Performance tracking and optimization",
                  "Change management support"
                ],
                audience: "Mid-size companies ready for comprehensive transformation",
                cta: "Begin Transformation",
                featured: true
              },
              {
                name: "Enterprise AI Empowerment",
                price: "€500K - €2M+",
                duration: "12-24 months",
                description: "Large-scale transformation for enterprise organizations with complex needs",
                features: [
                  "Multi-location implementation",
                  "Custom AI tool development",
                  "Executive leadership program",
                  "Cross-functional team training",
                  "Industry-specific adaptations",
                  "Long-term strategic partnership",
                  "Dedicated transformation team"
                ],
                audience: "Large enterprises with 1000+ employees",
                cta: "Contact for Enterprise Pricing"
              }
            ].map((pkg, index) => (
              <div key={index} className={`p-8 rounded-lg shadow-lg ${pkg.featured ? 'bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-500' : 'bg-white'}`}>
                {pkg.featured && (
                  <div className="text-center mb-4">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                <div className="text-2xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                <div className="text-gray-600 mb-4">{pkg.duration}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Best For:</h4>
                  <p className="text-sm text-gray-600">{pkg.audience}</p>
                </div>

                <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  pkg.featured 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                }`}>
                  {pkg.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All packages include:</p>
            <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Research-based methodology
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Progress tracking & reporting
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Expert consulting support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait for AI Disruption - Lead It
          </h2>
          <p className="text-xl mb-4 max-w-3xl mx-auto">
            With 30.3% of jobs at risk and only 9.4% of companies prepared, early movers gain massive competitive advantage.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
            Transform your workforce vulnerability into market leadership. Join forward-thinking organizations 
            turning AI disruption into sustainable competitive advantage.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">First Mover</div>
              <div className="text-sm opacity-75">Advantage in 90% of markets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">6-12 Months</div>
              <div className="text-sm opacity-75">Typical ROI realization</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">3-5x</div>
              <div className="text-sm opacity-75">Productivity multiplier potential</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
              Schedule Free Assessment (€5,000 Value)
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">
              Download Research Report
            </button>
          </div>
          
          <p className="text-sm mt-6 opacity-75">
            Limited spots available for Q3/Q4 2025 transformation programs
          </p>
        </div>
      </section>

      {/* Research Citation */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 mb-4">
              <strong>Research Source:</strong> Based on "Generative Artificial Intelligence and the Polish Labor Market" 
              research report by the Polish Ministry of Digital Affairs, June 2025
            </p>
            <p className="text-xs text-gray-500">
              Troszyński, M., Berg, J., Gmyrek, P., Kamiński, K., Konopczyński, F., Ładna, A., 
              Nafradi, B., Rosłaniec, K. (2025). Generatywna sztuczna inteligencja a polski rynek pracy. 
              Raport badawczy. NASK – PIB.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
