'use client';

import { i18n, type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { USFlagIcon as en } from '@/out/images/navbar';
import { JapanFlagIcon as ja } from '@/out/images/navbar';
import { SpainFlagIcon as es } from '@/out/images/navbar';

const localeRegex = new RegExp(`^/(${i18n.locales.join('|')})`);

const flagIcons: Record<Locale, any> = {
  en, // US Flag
  ja, // Japan Flag
  es, // Spain Flag
};

const LocaleSelect = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Add a ref to the dropdown container
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
    setDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Handle closing the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add the event listener
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener when the component is unmounted or when the dropdown is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-transparent text-xs text-white hover:font-bold focus:outline-none"
      >
        <ExportedImage
          src={flagIcons[locale]}
          alt={`${locale} flag`}
          className="mr-2 h-5 w-5"
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
        <div className="absolute -left-2 z-10 mt-2 w-28 rounded-md bg-black lg:bg-transparent">
          {i18n.locales.map((localeOption) => (
            <button
              key={localeOption}
              onClick={() => handleLocaleChange(localeOption as Locale)}
              className="flex w-full items-center px-2 py-2 text-left text-sm text-white hover:font-bold"
            >
              <ExportedImage
                src={flagIcons[localeOption]}
                alt={`${localeOption} flag`}
                className="mr-2 h-5 w-5"
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
