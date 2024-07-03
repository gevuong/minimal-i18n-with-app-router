import { Locale } from '@/i18n-config';
import Link from 'next/link';
import { getDictionary } from '../dictionary';
import LocaleSelect from './LocaleSelect';

const Navbar = ({
  dict,
  lang,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>['navbarItems'];
  lang: Locale;
}) => {
  return (
    <nav>
      <ul className="flex p-5">
        {dict.map((item) => (
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
