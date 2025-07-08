import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata-utils";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  return generatePageMetadata(
    params,
    'contact',
    '/contact',
    'Contact Us - AI on Turbo',
    'Get in touch with our AI experts. Contact us for consultations, partnerships, or to discuss your AI transformation needs.'
  );
}

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('contact.title', 'Contact Us')}
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              {t('contact.subtitle', 'Ready to transform your business with AI? Get in touch with our experts today.')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.form.title', 'Get in Touch')}
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.firstName', 'First Name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder={t('contact.form.firstNamePlaceholder', 'John')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.lastName', 'Last Name')}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      placeholder={t('contact.form.lastNamePlaceholder', 'Doe')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email', 'Email')}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder={t('contact.form.emailPlaceholder', 'john@company.com')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.company', 'Company')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder={t('contact.form.companyPlaceholder', 'Your Company')}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service', 'Service Interested In')}
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500">
                    <option value="">{t('contact.form.selectService', 'Select a service')}</option>
                    <option value="ai-consulting">{t('contact.form.aiConsulting', 'AI Consulting')}</option>
                    <option value="machine-learning">{t('contact.form.machineLearning', 'Machine Learning')}</option>
                    <option value="data-engineering">{t('contact.form.dataEngineering', 'Data Engineering')}</option>
                    <option value="generative-ai">{t('contact.form.generativeAI', 'Generative AI')}</option>
                    <option value="custom-solution">{t('contact.form.customSolution', 'Custom Solution')}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message', 'Message')}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    placeholder={t('contact.form.messagePlaceholder', 'Tell us about your project and how we can help...')}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
                >
                  {t('contact.form.submit', 'Send Message')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('contact.info.title', 'Contact Information')}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('contact.info.email.title', 'Email')}
                    </h3>
                    <p className="text-gray-700">{t('contact.info.email', 'info@aionturbo.com')}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('contact.info.phone.title', 'Phone')}
                    </h3>
                    <p className="text-gray-700">{t('contact.info.phone', '+48 794269930')}</p>
                    <p className="text-gray-700">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('contact.info.office.title', 'Office')}
                    </h3>
                    <p className="text-gray-700">
                      {t('contact.info.office.address', '123 AI Street, Tech District, San Francisco, CA 94105')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <span className="text-2xl">🕒</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t('contact.info.hours.title', 'Business Hours')}
                    </h3>
                    <p className="text-gray-700">
                      {t('contact.info.hours.weekdays', 'Monday - Friday: 9:00 AM - 6:00 PM')}
                    </p>
                    <p className="text-gray-700">
                      {t('contact.info.hours.timezone', 'Pacific Time Zone')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  {t('contact.social.title', 'Follow Us')}
                </h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/company/aionturbo" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    {/* LinkedIn SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-700"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                  <a href="https://twitter.com/aionturbo" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    {/* Twitter SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-500"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.868 9.868 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/></svg>
                  </a>
                  <a href="https://facebook.com/aionturbo" target="_blank" rel="noopener noreferrer" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    {/* Facebook SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-blue-800"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.325-1.325-1.325z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {t('contact.faq.title', 'Frequently Asked Questions')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: t('contact.faq.q1', 'How long does a typical AI project take?'),
                answer: t('contact.faq.a1', 'Project timelines vary depending on complexity, but most projects range from 3-12 months. We provide detailed timelines during the consultation phase.')
              },
              {
                question: t('contact.faq.q2', 'Do you work with startups or only large enterprises?'),
                answer: t('contact.faq.a2', 'We work with organizations of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and can be tailored to your budget and needs.')
              },
              {
                question: t('contact.faq.q3', 'What industries do you specialize in?'),
                answer: t('contact.faq.a3', 'We have experience across multiple industries including healthcare, finance, retail, manufacturing, and more. Our team adapts to your specific industry requirements.')
              },
              {
                question: t('contact.faq.q4', 'How do you ensure data security and privacy?'),
                answer: t('contact.faq.a4', 'We follow enterprise-grade security protocols and compliance standards. All data is encrypted, and we can work within your existing security frameworks.')
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
