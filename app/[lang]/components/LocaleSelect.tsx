'use client';

import { i18n, type Locale } from '@/i18n-config';
import { JapanFlagIcon, USFlagIcon } from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import type { StaticImageData } from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const localeRegex = new RegExp(`^/(${i18n.locales.join('|')})`);

const flagIcons: Record<Locale, StaticImageData> = {
  en: USFlagIcon,
  ja: JapanFlagIcon,
};

const LocaleSelect = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const currPath = usePathname();

  let locale: Locale = i18n.defaultLocale;
  const localeMatch = currPath.match(localeRegex);
  if (localeMatch) {
    locale = localeMatch[1] as Locale;
  }

  const handleLocaleChange = (newLocale: Locale) => {
    const newPath = currPath.replace(localeRegex, `/${newLocale}`);
    router.push(newPath);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`flex w-40 items-center bg-transparent p-3 text-sm text-white hover:font-bold focus:outline-none lg:w-12 lg:border-none lg:px-0 ${
          dropdownOpen ? 'border-l border-r border-t border-gray-500' : ''
        }`}
      >
        <ExportedImage
          src={flagIcons[locale]}
          alt={`${locale} flag`}
          className="ml-10 mr-2 h-5 w-5 lg:ml-2"
        />
        {locale.toUpperCase()}
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {dropdownOpen && (
        <div className="absolute z-10 w-40 border-b border-l border-r border-gray-500 bg-black pb-2 shadow-md shadow-gray-500 lg:-left-2 lg:mt-0 lg:w-28 lg:border-none lg:bg-transparent lg:shadow-none">
          {i18n.locales.map((localeOption) => (
            <button
              key={localeOption}
              onClick={() => handleLocaleChange(localeOption as Locale)}
              className="flex w-full items-center px-3 py-2 text-left text-sm text-white hover:font-bold"
            >
              <ExportedImage
                src={flagIcons[localeOption]}
                alt={`${localeOption} flag`}
                className="ml-10 mr-2 h-5 w-5 lg:ml-1"
              />
              {localeOption.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocaleSelect;
