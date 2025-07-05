import { redirect } from 'next/navigation';

export default function HomePage() {
  // This page should never be rendered as middleware handles the redirect
  // But as a fallback, redirect to English locale
  redirect('/en');
}
