import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redirect to the localized version
  redirect('/en');
}
