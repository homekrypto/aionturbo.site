import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";

interface ComputerVisionPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default async function ComputerVisionPage({ params }: ComputerVisionPageProps) {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);

  // Import the original page component
  const OriginalPage = await import('@/app/solutions/computer-vision/page').then(m => m.default);
  
  return <OriginalPage />;
}

// Metadata
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return {
    title: 'AI on Turbo - Computer Vision',
    description: 'Professional AI solutions and services',
    alternates: {
      canonical: `/${locale}/solutions/computer-vision`,
    },
  };
}
