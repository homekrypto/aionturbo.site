import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface LegalPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/solutions/legal/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Legal',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/legal`,
    },
  };
}
