'use client';

import { i18n, type Locale } from '@/i18n-config';
import { usePathname, useRouter } from 'next/navigation';

const localeRegex = new RegExp(`^/(${i18n.locales.join('|')})`);

const LocaleSelect = () => {
  const router = useRouter();
  const currPath = usePathname();

  let locale: Locale = i18n.defaultLocale;
  const localeMatch = currPath.match(localeRegex);
  if (localeMatch) {
    locale = localeMatch[1] as Locale;
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const newPath = currPath.replace(localeRegex, `/${e.target.value}`);
    router.push(`${newPath}`);
  };

  return (
    <div>
      <select onChange={handleChange} value={locale}>
        {i18n.locales.map((locale) => (
          <option key={locale} value={locale}>
            {locale.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocaleSelect;
