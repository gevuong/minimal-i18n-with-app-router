'use client';

import { type Locale } from '@/i18n-config';
import { type Dispatch, type SetStateAction, useEffect, useState } from 'react';
import { usei18n } from '../i18n';
import CookiePolicyModal from './components/footer/CookiesPolicyModal';
import FooterNavbar from './components/footer/FooterNavbar';
import PrivacyPolicyModal from './components/footer/PrivacyPolicyModal';
import SellMyInformationModal from './components/footer/SellMyInformationModal';

const Footer = ({ lang }: { lang: Locale }) => {
  const {
    footer: { cookiePolicy, privacyPolicy, personalInfo, nonProfitSection },
  } = usei18n(lang);

  const [showModalCookiesPolicy, setShowModalCookiesPolicy] = useState(false);
  const [showModalMyInformation, setShowModalMyInformation] = useState(false);
  const [showModalPrivacyPolicy, setShowModalPrivacyPolicy] = useState(false);

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
        nonProfitSection={nonProfitSection}
        footerPrivacyLinks={footerPrivacyLinks}
      />
    </>
  );
};

export default Footer;
