'use client';

import { type Locale } from '@/i18n-config';
import { usePathname } from 'next/navigation';
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { usei18n } from '../i18n';
import PrivacyPolicyModal from './components/footer/PrivacyPolicyModal';
import SellMyInformationModal from './components/footer/SellMyInformationModal';
import CookiePolicyModal from './components/footer/CookiesPolicyModal';
import FooterNavbar from './components/footer/FooterNavbar';

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
      <FooterNavbar
        lang={lang}
        navbarLinks={navbarLinks}
        nonProfitSection={nonProfitSection}
        setActiveLink={setActiveLink}
        activeLink={activeLink}
        footerPrivacyLinks={footerPrivacyLinks}
      />
    </>
  );
};

export default Footer;
