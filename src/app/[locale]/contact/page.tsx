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
                    <p className="text-gray-700">hello@ai-on-turbo.com</p>
                    <p className="text-gray-700">contact@ai-on-turbo.com</p>
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
                    <p className="text-gray-700">+1 (555) 123-4567</p>
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
                  <a href="#" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    <span className="text-xl">💼</span>
                  </a>
                  <a href="#" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    <span className="text-xl">🐦</span>
                  </a>
                  <a href="#" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    <span className="text-xl">📘</span>
                  </a>
                  <a href="#" className="bg-teal-100 p-3 rounded-lg hover:bg-teal-200 transition-colors">
                    <span className="text-xl">📹</span>
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
