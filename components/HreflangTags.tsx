
import Head from 'next/head';
import { useRouter } from 'next/router';

interface HreflangTagsProps {
  pathname?: string;
}

export default function HreflangTags({ pathname }: HreflangTagsProps) {
  const router = useRouter();
  const currentPath = pathname || router.asPath;
  
  return (
    <Head>
      <link rel="alternate" hreflang="es" href={`https://ai-on-turbo.com${'/es' + currentPath}`} />
      <link rel="alternate" hreflang="fr" href={`https://ai-on-turbo.com${'/fr' + currentPath}`} />
      <link rel="alternate" hreflang="de" href={`https://ai-on-turbo.com${'/de' + currentPath}`} />
      <link rel="alternate" hreflang="pl" href={`https://ai-on-turbo.com${'/pl' + currentPath}`} />
      <link rel="alternate" hreflang="pt" href={`https://ai-on-turbo.com${'/pt' + currentPath}`} />
      <link rel="alternate" hreflang="ar" href={`https://ai-on-turbo.com${'/ar' + currentPath}`} />
      <link rel="alternate" hreflang="tr" href={`https://ai-on-turbo.com${'/tr' + currentPath}`} />
      <link rel="alternate" hreflang="ja" href={`https://ai-on-turbo.com${'/ja' + currentPath}`} />
      <link rel="alternate" hreflang="en" href={`https://ai-on-turbo.com${currentPath}`} />
      <link rel="alternate" hreflang="x-default" href={`https://ai-on-turbo.com${currentPath}`} />
    </Head>
  );
}
