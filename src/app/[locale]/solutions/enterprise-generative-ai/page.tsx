import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface EnterpriseGenerativeAiPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function EnterpriseGenerativeAiPage({ params }: EnterpriseGenerativeAiPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/solutions/enterprise-generative-ai/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Enterprise Generative Ai',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/enterprise-generative-ai`,
    },
  };
}
