import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { getServerSideTranslations, createTranslationFunction } from "@/lib/i18n";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../globals.css";
import "@/styles/theme-variables.css";
import "@/styles/global-footer-controls.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LocalizedLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const translations = await getServerSideTranslations(locale);
  const t = createTranslationFunction(translations.common || translations);
  
  return {
    title: t('meta.title', "AI on Turbo - Advanced AI Solutions for Business"),
    description: t('meta.description', "Transform your business with cutting-edge AI solutions. We deliver intelligent automation, advanced analytics, and innovative AI technologies that drive growth and efficiency."),
    alternates: {
      canonical: `https://ai-on-turbo.com${locale === 'en' ? '' : '/' + locale}`,
      languages: {
        'en': 'https://ai-on-turbo.com',
        'es': 'https://ai-on-turbo.com/es',
        'fr': 'https://ai-on-turbo.com/fr',
        'de': 'https://ai-on-turbo.com/de',
        'pl': 'https://ai-on-turbo.com/pl',
        'pt': 'https://ai-on-turbo.com/pt',
        'ar': 'https://ai-on-turbo.com/ar',
        'tr': 'https://ai-on-turbo.com/tr',
        'ja': 'https://ai-on-turbo.com/ja',
      },
    },
  };
}

export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
  const { locale } = await params;
  const isRTL = locale === 'ar';
  
  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isRTL ? 'rtl' : ''}`}
      >
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
        <Script 
          src="/js/global-footer-controls.js" 
          strategy="afterInteractive" 
        />
      </body>
    </html>
  );
}
