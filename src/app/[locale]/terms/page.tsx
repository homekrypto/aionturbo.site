import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface TermsPageProps {
  params: { locale: string };
}

export default async function TermsPage({ params }: TermsPageProps) {
  const { locale } = params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">
            {t('footer.termsOfService', 'Terms of Service')}
          </h1>
          <p className="mb-6">
            {t('terms.intro', 'These Terms of Service govern your use of our website and services. By accessing or using our site, you agree to these terms.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('terms.use.title', 'Use of Services')}
          </h2>
          <p className="mb-6">
            {t('terms.use.text', 'You agree to use our services only for lawful purposes and in accordance with these terms. You must not use our services in any way that could damage, disable, or impair our site or interfere with any other party’s use of our services.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('terms.intellectual.title', 'Intellectual Property')}
          </h2>
          <p className="mb-6">
            {t('terms.intellectual.text', 'All content, trademarks, and data on this site, including but not limited to text, graphics, logos, and software, are the property of AI on Turbo or its licensors and are protected by intellectual property laws.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('terms.limitation.title', 'Limitation of Liability')}
          </h2>
          <p className="mb-6">
            {t('terms.limitation.text', 'We are not liable for any damages arising from your use of our website or services. Our services are provided “as is” and without warranties of any kind.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('terms.changes.title', 'Changes to Terms')}
          </h2>
          <p className="mb-6">
            {t('terms.changes.text', 'We may update these Terms of Service from time to time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of those changes.')}
          </p>
          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {t('terms.contact.title', 'Contact Us')}
          </h2>
          <p>
            {t('terms.contact.text', 'If you have any questions about these Terms of Service, please contact us at:')} <a href="mailto:info@aionturbo.site" className="text-blue-600 underline">info@aionturbo.site</a>
          </p>
        </div>
      </section>
    </div>
  );
} 