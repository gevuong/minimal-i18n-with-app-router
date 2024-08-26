import { type Locale } from '@/i18n-config';
import { redirect } from 'next/navigation';

const VirumapMsgPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  if (lang === 'ja') {
    redirect('https://tiny.cc/virumap-msg-jp');
  } else {
    redirect('https://tiny.cc/virumap-msg');
  }
};

export default VirumapMsgPage;
