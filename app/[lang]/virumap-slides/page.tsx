import { type Locale } from '@/i18n-config';
import { redirect } from 'next/navigation';

const VirumapSlidesPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  if (lang === 'ja') {
    redirect('https://tiny.cc/virumap-slides-jp');
  } else {
    redirect('https://tiny.cc/virumap-slides');
  }
};

export default VirumapSlidesPage;
