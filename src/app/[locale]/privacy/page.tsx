import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

export default async function Page({ params }) {
  const { locale } = params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            {t('footer.privacyPolicy', 'Privacy Policy')}
          </h1>
          <p className="mb-6">
            {t('privacy.intro', 'Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('privacy.dataCollection.title', 'Information We Collect')}
          </h2>
          <p className="mb-6">
            {t('privacy.dataCollection.text', 'We may collect personal information such as your name, email address, company, and any other information you provide through our contact forms or when using our services.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('privacy.usage.title', 'How We Use Your Information')}
          </h2>
          <p className="mb-6">
            {t('privacy.usage.text', 'Your information is used to provide and improve our services, respond to your inquiries, and communicate with you about updates or offers.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('privacy.security.title', 'Data Security')}
          </h2>
          <p className="mb-6">
            {t('privacy.security.text', 'We implement industry-standard security measures to protect your data from unauthorized access, disclosure, or destruction.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('privacy.rights.title', 'Your Rights')}
          </h2>
          <p className="mb-6">
            {t('privacy.rights.text', 'You have the right to access, update, or delete your personal information. To exercise these rights, please contact us at the email provided below.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('privacy.contact.title', 'Contact Us')}
          </h2>
          <p>
            {t('privacy.contact.text', 'If you have any questions about this Privacy Policy or our data practices, please contact us at:')} <a href="mailto:info@aionturbo.site" className="text-blue-600 underline">info@aionturbo.site</a>
          </p>
        </div>
      </section>
    </div>
  );
} 