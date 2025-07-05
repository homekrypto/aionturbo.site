import Link from 'next/link'
import Image from 'next/image'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 'carbon-credit-verification',
      title: 'AI-Powered Carbon Credit Verification for Sustainable Aviation',
      industry: 'Aviation/Sustainability',
      hook: 'Blockchain-AI hybrid system cuts carbon credit validation time by 90%, preventing greenwashing in airline offset programs.',
      monetization: 'SaaS platform for airlines + certification bodies',
      image: '/images/case-studies/carbon-credit.jpg',
      featured: true
    },
    {
      id: 'dynamic-pricing-ev',
      title: 'Dynamic Pricing Engine for EV Charging Stations',
      industry: 'Energy/Transportation',
      hook: 'Real-time demand algorithms boost charging station revenue by 35% while reducing driver wait times.',
      monetization: 'Commission-based pricing API for charge point operators',
      image: '/images/case-studies/ev-charging.jpg',
      featured: true
    },
    {
      id: 'counterfeit-detection',
      title: 'Neural Network for Counterfeit Luxury Goods Detection',
      industry: 'E-commerce/Luxury Retail',
      hook: 'Computer vision system identifies fake designer items with 99.2% accuracy using micro-texture analysis.',
      monetization: 'Pay-per-scan API for resale platforms (StockX, Farfetch)',
      image: '/images/case-studies/luxury-goods.jpg',
      featured: true
    },
    {
      id: 'port-logistics',
      title: 'AI-Enhanced Port Logistics Optimization',
      industry: 'Maritime Logistics',
      hook: 'Container stacking algorithms reduce ship turnaround time by 22% at major European ports.',
      monetization: 'Custom deployments for port authorities',
      image: '/images/case-studies/port-logistics.jpg'
    },
    {
      id: 'wind-turbine-maintenance',
      title: 'Predictive Maintenance for Wind Turbines',
      industry: 'Renewable Energy',
      hook: 'Vibration analysis AI predicts turbine failures 14 days in advance, cutting downtime costs by $280k/year per unit.',
      monetization: 'Subscription model for energy providers',
      image: '/images/case-studies/wind-turbines.jpg',
      featured: true
    },
    {
      id: 'smart-waste-sorting',
      title: 'Smart Waste Sorting for Municipalities',
      industry: 'Smart Cities',
      hook: 'Edge AI bins increase recycling purity to 98%, slashing processing costs for city governments.',
      monetization: 'Hardware-as-a-service with analytics upsell',
      image: '/images/case-studies/smart-waste.jpg'
    },
    {
      id: 'retail-robots',
      title: 'Autonomous Shelf-Stocking Robots for Retail',
      industry: 'Retail Automation',
      hook: 'Computer vision robots reduce out-of-stock incidents by 40% while cutting labor costs.',
      monetization: 'Robotics-as-a-service leasing',
      image: '/images/case-studies/retail-robots.jpg',
      featured: true
    },
    {
      id: 'ai-notary',
      title: 'AI Notary for Real Estate Blockchain Transactions',
      industry: 'Proptech',
      hook: 'Smart contracts + face recognition cut property closing times from 30 days to 72 hours.',
      monetization: 'Transaction fees + government partnerships',
      image: '/images/case-studies/real-estate.jpg'
    },
    {
      id: 'crop-insurance',
      title: 'Drone-Based Crop Health Insurance Assessment',
      industry: 'Agritech/Insurance',
      hook: 'Multispectral imaging AI processes insurance claims in 3 hours instead of 3 weeks.',
      monetization: '% of disputed claim savings',
      image: '/images/case-studies/crop-insurance.jpg'
    },
    {
      id: 'voice-ai-manufacturing',
      title: 'Voice AI for Industrial Equipment Troubleshooting',
      industry: 'Manufacturing',
      hook: 'LLM-powered assistant reduces factory equipment downtime by diagnosing issues via natural language.',
      monetization: 'Enterprise license + spare parts affiliate program',
      image: '/images/case-studies/manufacturing.jpg'
    },
    {
      id: 'deepfake-detection',
      title: 'Deepfake Detection for Banking KYC',
      industry: 'Fintech',
      hook: 'Liveness detection AI prevents $12M monthly in synthetic identity fraud.',
      monetization: 'API calls for neobanks',
      image: '/images/case-studies/banking-kyc.jpg'
    },
    {
      id: 'ai-fashion-stylist',
      title: 'AI Fashion Stylist for E-Commerce',
      industry: 'Retail Tech',
      hook: 'Generative AI increases average order value by 27% through hyper-personalized outfit recommendations.',
      monetization: 'Revenue share with retailers',
      image: '/images/case-studies/fashion-ai.jpg'
    },
    {
      id: 'parking-allocation',
      title: 'Predictive Parking Space Allocation',
      industry: 'Smart Cities',
      hook: 'Dynamic pricing model increases municipal parking revenue by 18% while reducing congestion.',
      monetization: 'Municipal contracts + app integrations',
      image: '/images/case-studies/smart-parking.jpg'
    },
    {
      id: 'food-safety',
      title: 'AI-Powered Food Safety Inspection',
      industry: 'Food Tech',
      hook: 'Automated pathogen detection in commercial kitchens reduces health violations by 65%.',
      monetization: 'Compliance certification SaaS',
      image: '/images/case-studies/food-safety.jpg'
    },
    {
      id: 'nft-ticketing',
      title: 'NFT-Based Event Access Control System',
      industry: 'Web3/Ticketing',
      hook: 'Dynamic NFT tickets eliminate scalping while providing real-time crowd analytics for venues.',
      monetization: 'Minting fees + data insights',
      image: '/images/case-studies/nft-tickets.jpg'
    }
  ]

  const featuredCases = caseStudies.filter(cs => cs.featured)
  const allCases = caseStudies

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-white mb-8">
              Real-world AI implementations that drive measurable business results
            </p>
            <p className="text-lg text-gray-100 mb-8">
              Explore how we've transformed businesses across industries with cutting-edge AI solutions, 
              delivering quantifiable impact and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Success Stories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {featuredCases.map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="text-sm font-medium">{study.industry}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{study.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm italic">"{study.hook}"</p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-800">Monetization:</span>
                      <span className="text-sm text-gray-700 ml-2">{study.monetization}</span>
                    </div>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors font-semibold text-sm"
                    >
                      Read Case Study
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">All Case Studies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allCases.map((study) => (
                <div key={study.id} className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-32 bg-gradient-to-r from-gray-400 to-gray-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-xs font-medium">{study.industry}</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{study.title}</h3>
                    <p className="text-gray-700 mb-3 text-sm italic">"{study.hook}"</p>
                    <Link 
                      href={`/case-studies/${study.id}`}
                      className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-sm"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Industries We Transform</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Aviation & Sustainability', count: '2 cases', icon: '✈️' },
                { name: 'Energy & Transportation', count: '3 cases', icon: '⚡' },
                { name: 'Retail & E-commerce', count: '4 cases', icon: '🛍️' },
                { name: 'Manufacturing', count: '2 cases', icon: '🏭' },
                { name: 'Smart Cities', count: '3 cases', icon: '🏙️' },
                { name: 'Fintech & Banking', count: '2 cases', icon: '💳' },
                { name: 'Healthcare & AgriTech', count: '2 cases', icon: '🏥' },
                { name: 'Web3 & PropTech', count: '2 cases', icon: '🌐' }
              ].map((industry, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{industry.name}</h3>
                  <p className="text-gray-700 text-sm">{industry.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Join the companies that have transformed their business with AI. Let's discuss your next breakthrough.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-indigo-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Start Your Project
            </Link>
            <Link 
              href="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-900 transition-colors font-semibold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
