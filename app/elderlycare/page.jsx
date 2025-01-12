import { redirect } from 'next/navigation';

export default function ElderlyCarePage() {
  redirect('/elderlycare/welcome'); // Redirects to the default language version news page
  return null;
}
