import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface AiProofOfConceptPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function AiProofOfConceptPage({ params }: AiProofOfConceptPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/services/ai-proof-of-concept/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Ai Proof Of Concept',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/services/ai-proof-of-concept`,
    },
  };
}
