'use client';

import { usePathname } from 'next/navigation';

interface HreflangTagsProps {
  pathname?: string;
}

export default function HreflangTags({ pathname }: HreflangTagsProps) {
  const currentPathname = usePathname();
  const currentPath = pathname || currentPathname;

  return (
    <>
      <link rel="alternate" hrefLang="es" href={`https://ai-on-turbo.com/es${currentPath}`} />
      <link rel="alternate" hrefLang="fr" href={`https://ai-on-turbo.com/fr${currentPath}`} />
      <link rel="alternate" hrefLang="de" href={`https://ai-on-turbo.com/de${currentPath}`} />
      <link rel="alternate" hrefLang="pl" href={`https://ai-on-turbo.com/pl${currentPath}`} />
      <link rel="alternate" hrefLang="pt" href={`https://ai-on-turbo.com/pt${currentPath}`} />
      <link rel="alternate" hrefLang="ar" href={`https://ai-on-turbo.com/ar${currentPath}`} />
      <link rel="alternate" hrefLang="tr" href={`https://ai-on-turbo.com/tr${currentPath}`} />
      <link rel="alternate" hrefLang="ja" href={`https://ai-on-turbo.com/ja${currentPath}`} />
      <link rel="alternate" hrefLang="en" href={`https://ai-on-turbo.com${currentPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`https://ai-on-turbo.com${currentPath}`} />
    </>
  );
}
