import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface TechnologyCompaniesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function TechnologyCompaniesPage({ params }: TechnologyCompaniesPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/solutions/technology-companies/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Technology Companies',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/technology-companies`,
    },
  };
}
