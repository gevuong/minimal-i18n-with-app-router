'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import VirufyLogo from '@/public/logos/virufy.svg';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  type Dispatch,
  Fragment,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usei18n } from '../i18n';
import PrivacyPolicyModal from './components/footer/PrivacyPolicyModal';
import SellMyInformationModal from './components/footer/SellMyInformationModal';
import CookiePolicyModal from './components/footer/CookiesPolicyModal';
import SocialLinks from './components/footer/SocialLinks';
import NonProfitDisclaimers from './components/footer/NonProfitDisclaimers';

const Footer = ({ lang }: { lang: Locale }) => {
  const {
    footer: { cookiePolicy, privacyPolicy, personalInfo, nonProfitSection },
    navbar: { home, ourTechnology, aboutUs, faq },
  } = usei18n(lang);

  const navbarLinks = useMemo(
    () => [
      { label: home, route: [`/${lang}`] },
      {
        label: ourTechnology.section,
        route: [`/${lang}/ai`, `/${lang}/publications`],
      },
      {
        label: aboutUs.section,
        route: [
          `/${lang}/story`,
          `/${lang}/people`,
          `/${lang}/supporters`,
          `/${lang}/one-young-world`,
          `/${lang}/amils-story`,
        ],
      },
      { label: faq, route: [`/${lang}/faq`] },
    ],
    [lang, home, ourTechnology.section, aboutUs.section, faq]
  );

  const [showModalCookiesPolicy, setShowModalCookiesPolicy] = useState(false);
  const [showModalMyInformation, setShowModalMyInformation] = useState(false);
  const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const currPath = usePathname();

  const footerPrivacyLinks: {
    label: string;
    showModal: Dispatch<SetStateAction<boolean>>;
  }[] = [
    {
      label: cookiePolicy.title,
      showModal: setShowModalCookiesPolicy,
    },
    {
      label: privacyPolicy.title,
      showModal: setShowModalPrivacyPolicy,
    },
    {
      label: personalInfo.title,
      showModal: setShowModalMyInformation,
    },
  ];

  useEffect(() => {
    navbarLinks.forEach((link) => {
      if (link.route.some((r) => r === currPath)) {
        setActiveLink(link.label);
      }
    });
  }, [currPath, navbarLinks]);

  // allows user to close modal by pressing esc key
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowModalCookiesPolicy(false);
      setShowModalPrivacyPolicy(false);
      setShowModalMyInformation(false);
    }
  };

  useEffect(() => {
    if (
      showModalMyInformation ||
      showModalCookiesPolicy ||
      showModalPrivacyPolicy
    ) {
      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [showModalMyInformation, showModalCookiesPolicy, showModalPrivacyPolicy]);

  return (
    <>
      <div>
        {showModalPrivacyPolicy ? (
          <PrivacyPolicyModal
            lang={lang}
            privacyPolicy={privacyPolicy}
            setShowModalPrivacyPolicy={setShowModalPrivacyPolicy}
          />
        ) : null}
      </div>
      {/* _____________________ */}
      <div>
        {showModalMyInformation ? (
          <SellMyInformationModal
            lang={lang}
            personalInfo={personalInfo}
            setShowModalMyInformation={setShowModalMyInformation}
          />
        ) : null}
      </div>
      {/* _____________________ */}
      <div>
        {showModalCookiesPolicy ? (
          <CookiePolicyModal
            lang={lang}
            cookiePolicy={cookiePolicy}
            setShowModalCookiesPolicy={setShowModalCookiesPolicy}
          />
        ) : null}
      </div>
      <footer className="bg-black">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col p-4 py-10">
          <div className="absolute mx-12 mt-4 hidden w-56 justify-start lg:flex">
            <Link href={`/${lang}`} onClick={() => setActiveLink('Home')}>
              <ExportedImage
                src={VirufyLogo}
                alt="Virufy logo"
                className="h-[48px] w-[160px]"
                basePath={basePath}
              />
            </Link>
          </div>
          <ul className="mb-6 hidden flex-wrap text-white lg:flex">
            <li className="mt-8 flex w-full justify-center space-x-6 align-text-bottom xl:space-x-10">
              {navbarLinks.map((link, index) => {
                return (
                  // footer links
                  <Link
                    key={index}
                    className={`${
                      activeLink === link.label
                        ? 'solid relative border-b-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                        : 'relative before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                    }`}
                    href={link.route[0]}
                    onClick={() => setActiveLink(link.label)}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </li>
          </ul>
          <div className="flex w-full">
            <hr className="mx-auto my-4 hidden h-px w-11/12 rounded border-0 bg-white lg:block" />
          </div>
          <li className="flex w-full flex-wrap items-center justify-center space-x-2 text-xs font-semibold text-white sm:text-base lg:my-6 lg:space-x-6 lg:no-underline">
            {footerPrivacyLinks.map(({ label, showModal }, idx) => (
              <Fragment key={label}>
                {idx > 0 && <div className="font-bold lg:hidden">|</div>}
                <button key={label} onClick={() => showModal(true)}>
                  {label}
                </button>
              </Fragment>
            ))}
          </li>
          <SocialLinks />
          <NonProfitDisclaimers nonProfitSection={nonProfitSection} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
