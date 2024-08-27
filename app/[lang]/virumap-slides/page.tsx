import { type Locale } from '@/i18n-config';
import RedirectWithSpinner from '../components/RedirectWithSpinner';

const VirumapSlidesPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const targetUrl =
    lang === 'ja'
      ? 'https://tiny.cc/virumap-slide-jp'
      : 'https://tiny.cc/virumap-slides';

  return <RedirectWithSpinner targetUrl={targetUrl} />;
};

export default VirumapSlidesPage;
