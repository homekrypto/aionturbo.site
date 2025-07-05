import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface DataEngineeringPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function DataEngineeringPage({ params }: DataEngineeringPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/services/data-engineering/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Data Engineering',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/services/data-engineering`,
    },
  };
}
