import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface MachineLearningConsultingPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function MachineLearningConsultingPage({ params }: MachineLearningConsultingPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/services/machine-learning-consulting/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Machine Learning Consulting',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/services/machine-learning-consulting`,
    },
  };
}
