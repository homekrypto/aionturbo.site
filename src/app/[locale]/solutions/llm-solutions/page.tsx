import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface LlmSolutionsPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function LlmSolutionsPage({ params }: LlmSolutionsPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/solutions/llm-solutions/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Llm Solutions',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/llm-solutions`,
    },
  };
}
