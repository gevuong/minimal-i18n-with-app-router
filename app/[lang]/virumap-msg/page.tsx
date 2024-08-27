import { type Locale } from '@/i18n-config';
import RedirectWithSpinner from '../components/RedirectWithSpinner';

const VirumapMsgPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const targetUrl =
    lang === 'ja'
      ? 'https://tiny.cc/virumap-msg-jp'
      : 'https://tiny.cc/virumap-msg';

  return <RedirectWithSpinner targetUrl={targetUrl} />;
};

export default VirumapMsgPage;
