import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface LlmsDevelopmentPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LlmsDevelopmentPage({ params }: LlmsDevelopmentPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/services/llms-development/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Llms Development',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/services/llms-development`,
    },
  };
}
