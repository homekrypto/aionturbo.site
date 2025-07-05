import SimpleDropdownTest from '../../../components/SimpleDropdownTest';

export default async function DropdownTestPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Dropdown Test Page</h1>
        <SimpleDropdownTest locale={locale} />
      </div>
    </div>
  );
}
