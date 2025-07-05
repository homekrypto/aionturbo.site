import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface BigDataConsultingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function BigDataConsultingPage({ params }: BigDataConsultingPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/services/big-data-consulting/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Big Data Consulting',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/services/big-data-consulting`,
    },
  };
}
