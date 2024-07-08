import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { getDictionary } from '../dictionary';
import LocaleSelect from './LocaleSelect';

const Navbar = ({ lang }: { lang: Locale }) => {
  const { navbar } = getDictionary(lang);

  return (
    <nav>
      <ul className="flex p-5">
        {navbar.map((item) => (
          <li className="pr-5" key={item.label}>
            <Link href={`/${lang}${item.href}`}>{item.label}</Link>
          </li>
        ))}
        <li>
          <LocaleSelect />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
