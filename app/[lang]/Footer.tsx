'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  InstagramIconDarkTurquoise,
  InstagramIconWhite,
  LinkedInIconDarkTurquoise,
  LinkedInIconWhite,
} from '@/public/images/footer/index';
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
import AccordionItem from './components/AccordionItem';
import Text from './components/Text';
import Title from './components/Title';

const Footer = ({ lang }: { lang: Locale }) => {
  const links1 = useMemo(
    () => [
      { label: 'Home', route: [`/${lang}`] },
      { label: 'Technology', route: [`/${lang}/ai`, `/${lang}/publications`] },
      // {
      //   label: 'CoughCheck App',
      //   route: [
      //     `/${lang}/covid19`,
      //     `/${lang}/flu`,
      //     `/${lang}/copd`,
      //     `/${lang}/rsv`,
      //   ],
      // },
      {
        label: 'About Us',
        route: [
          `/${lang}/story`,
          `/${lang}/people`,
          `/${lang}/supporters`,
          `/${lang}/one-young-world`,
          `/${lang}/amils-story`,
        ],
      },
      { label: 'FAQ', route: [`/${lang}/faq`] },
    ],
    [lang]
  );

  const {
    footer: { sectionPersonalInformation, sectionPrivacyPolicy },
  } = usei18n(lang);

  const [showModalCookiesSetting, setShowModalCookiesSetting] = useState(false);
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
      label: 'Cookie Policy',
      showModal: setShowModalCookiesPolicy,
    },
    {
      label: 'Privacy Policy',
      showModal: setShowModalPrivacyPolicy,
    },
    {
      label: 'Do Not Sell My Personal Info',
      showModal: setShowModalMyInformation,
    },
  ];

  useEffect(() => {
    links1.forEach((link) => {
      if (link.route.some((r) => r === currPath)) {
        setActiveLink(link.label);
      }
    });
  }, [currPath, links1]);

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

  const [isOpen, setIsOpen] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleToggle = (index: number) => {
    setIsOpen((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const handleCloseModal = () => {
    setShowModalPrivacyPolicy(false);
    setShowModalCookiesPolicy(false);
    setShowModalMyInformation(false);
  };

  const handleModalClick = (e: { stopPropagation: () => void; }) => {
    // Prevent click inside modal from propagating to the overlay
    e.stopPropagation();
  };

  return (
    <>
      <div>
        {showModalCookiesSetting ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-3/4 md:h-auto w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200">
                    <Title
                      H="h5Modals"
                      Text=""
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center rounded-full bg-gray-300 px-1 py-2 font-bold text-black shadow-xl outline-none transition-all duration-150 ease-linear hover:bg-gray-400"
                        type="button"
                        onClick={() => setShowModalCookiesSetting(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}
                  {/*footer*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      {/* _____________________ */}
      <div>
        {showModalPrivacyPolicy ? (
          <>
            <div
              className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
              onClick={handleCloseModal} // Close modal when clicking outside
            >
              <div
                className="relative mx-auto h-3/4 md:h-auto w-[300px] md:w-[500px] lg:w-[1000px]"
                onClick={handleModalClick} // Stop propagation when clicking inside modal
              >
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text="Privacy Policy"
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white transition-all duration-150 ease-linear"
                        type="button"
                        onClick={() => setShowModalPrivacyPolicy(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0">
                      <div>
                        {sectionPrivacyPolicy.map((detail, index) => (
                          <AccordionItem {...detail} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>

            <div
              className="fixed inset-0 z-40 bg-black opacity-25"
              onClick={handleCloseModal}
            ></div>
          </>
        ) : null}
      </div>
      {/* _____________________ */}
      <div>
        {showModalMyInformation ? (
          <>
            <div
              className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
              onClick={handleCloseModal}
            >
              <div
                className="relative mx-auto h-3/4 md:h-auto w-[300px] md:w-[500px] lg:w-[1000px]"
                onClick={handleModalClick} // Stop propagation when clicking inside modal
              >
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text="Do not sell my personal information "
                      TitleClassProps={
                        'mt-[80px] text-center md:mt-[30px] md:mx-auto mb-[30px]'
                      }
                    />
                    <div className="absolute flex w-full flex-col items-end p-6 md:p-1 lg:p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white outline-none transition-all duration-150 ease-linear"
                        type="button"
                        onClick={() => setShowModalMyInformation(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0">
                      {sectionPersonalInformation.map((detail, index) => (
                        <AccordionItem {...detail} key={index} />
                      ))}
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>

            <div
              className="fixed inset-0 z-40 bg-black opacity-25"
              onClick={handleCloseModal}
            ></div>
          </>
        ) : null}
      </div>
      {/* _____________________ */}
      <div>
        {showModalCookiesPolicy ? (
          <>
            <div
              className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
              onClick={handleCloseModal}
            >
              <div
                className="relative mx-auto h-3/4 md:h-auto w-[300px] md:w-[500px] lg:w-[1000px]"
                onClick={handleModalClick}
              >
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text="Cookie Policy"
                      TitleClassProps={'mt-[30px] mx-auto mb-[30px]'}
                    />
                    <div className="absolute flex w-full flex-col items-end p-6">
                      <button
                        className="flex h-[35px] w-[35px] justify-center px-1 py-2 text-white outline-none transition-all duration-150 ease-linear"
                        type="button"
                        onClick={() => setShowModalCookiesPolicy(false)}
                      >
                        X
                      </button>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="flex w-full items-center justify-center">
                    <div className="w-full px-0">
                      <div>
                        <div className="mb-3 w-full">
                          <hr className="border-1 border-gray-400" />
                          <button
                            onClick={() => handleToggle(0)}
                            className="mt-3 flex w-full cursor-pointer justify-between px-4 py-3 font-bold text-white transition-all duration-500"
                          >
                            1. General
                            <span
                              className={`transition-transform duration-500 ${isOpen[0] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[0] ? 'max-h-[160rem]' : 'max-h-0'}`}
                          >
                            <hr className="border-1 mt-3 border-gray-400" />
                            <p className="mt-3 px-4 py-3 text-white">
                              The Covid Detection Foundation (“Virufy”, “we”,
                              “us” or “our”), a California nonprofit corporation
                              located at 4546, El Camino Real, B10 #614, Los
                              Altos, código postal 94022, United States of
                              America respects your privacy and is committed to
                              processing your personal information in accordance
                              with the law. This Cookie Policy (“Policy”)
                              explains how Virufy uses cookies and similar
                              technologies to process your personal information
                              that you provide to us when you visit our website
                              (www.virufy.org) (“Website”) or participate in our
                              research survey for the compilation of a dataset
                              needed for the development of artificial
                              intelligence (AI) algorithms for device-based
                              COVID-19 detection.
                              <div className="mt-4">
                                <p>For users located in Europe:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Recital 30 of the European General Data
                                    Protection Regulation 2016/679 (the “GDPR”).
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Spain:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Recital 30 of the European General Data
                                    Protection Regulation 2016/679 (the “GDPR”)
                                    and under Article 22 of Law 34/2002, of July
                                    11, on information society services and
                                    electronic commerce (LSSICE).
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Argentina:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Argentinian Law 25.326 on Protection of
                                    Personal Data.
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Brazil:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under the
                                    General Personal Data Protection Law, number
                                    13.709 / 2018 of Brazil (the “LGPD”).
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Colombia:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Colombian law 1581 of 2012.
                                  </li>
                                </ul>
                                <br />
                                <p>
                                  For users located in the United Mexican
                                  States:
                                </p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be considered part
                                    of the Virufy Privacy Notice and will be
                                    treated under the Federal Law on Protection
                                    of Personal Data Held by Private Parties.
                                    Whenever reference is made to “Privacy
                                    Policy” in the present, the term “Privacy
                                    Notice” is understood interchangeably.
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Bolivia:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Bolivian Law.
                                  </li>
                                </ul>
                                <br />
                                <p>For users located in Peru:</p>
                                <ul className="list-disc pl-5 text-white">
                                  <li>
                                    This cookie policy will be treated under
                                    Peruvian Law.
                                  </li>
                                </ul>
                                <br />
                                <p>
                                  Virufy is the “data controller” of, and
                                  responsible for, your personal information
                                  collected in accordance with this Cookie
                                  Policy. For further information about how we
                                  use, store, disclose and process personal data
                                  that we obtain through or in connection with
                                  the use of our Website, please visit our
                                  Privacy Policy.
                                </p>
                                <br />
                                <p>
                                  When you first access our Website, you will
                                  receive a message advising you that cookies
                                  and similar technologies are in use. By
                                  clicking “Use necessary cookies only” or
                                  “Allow all cookies”, you signify that you
                                  understand and agree to the use of these
                                  technologies, as described in this Cookie
                                  Policy.
                                </p>
                                <br />
                                <p>
                                  If you have any inquiries or complaints
                                  regarding our Cookie Policy, please contact us
                                  by email at{' '}
                                  <a
                                    href="mailto:study@virufy.org"
                                    className="hover:text-blue-600"
                                  >
                                    study@virufy.org
                                  </a>
                                  . Our team will reply to you within 30
                                  business days upon receipt of your request.
                                </p>
                              </div>
                            </p>
                          </div>
                        </div>

                        <div className="mb-3 w-full">
                          <hr className="border-1 border-gray-400" />
                          <button
                            onClick={() => handleToggle(1)}
                            className="mt-3 flex w-full cursor-pointer justify-between px-4 py-3 font-bold text-white transition-all duration-500"
                          >
                            2. What are Cookies?
                            <span
                              className={`transition-transform duration-500 ${isOpen[1] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[1] ? 'max-h-[70rem]' : 'max-h-0'}`}
                          >
                            <hr className="border-1 mt-3 border-gray-400" />
                            <p className="mt-3 px-4 py-3 text-white">
                              Cookies are text files containing small pieces of
                              data that are stored on your computer or mobile
                              device whenever you access a website. They are
                              used to make websites operate or function more
                              efficiently, as well as to provide information to
                              the owners of the website. Cookies enhance user
                              experience by allowing websites to read and write
                              them, enabling them to recognize visitors and
                              remember important information that makes the
                              visitor’s use of the website more convenient.
                            </p>
                            <div className="px-4 py-3 text-white">
                              Cookies set by a website owner (in this case,
                              Virufy) are called “first party cookies”. Cookies
                              set by parties other than the website owner are
                              called “third party cookies”. Third party cookies
                              enable third party features or functionality to be
                              provided on or through the Website (e.g.,
                              analytics).
                            </div>
                          </div>
                        </div>

                        <div className="mb-3 w-full">
                          <hr className="border-1 border-gray-400" />
                          <button
                            onClick={() => handleToggle(2)}
                            className="mt-3 flex w-full justify-between px-4 py-3 font-bold text-white transition-all duration-500"
                          >
                            3. How do we use Cookies
                            <span
                              className={`transition-transform duration-500 ${isOpen[2] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[2] ? 'max-h-[99rem]' : 'max-h-0'}`}
                          >
                            <hr className="border-1 mt-3 border-gray-400" />
                            <p className="mt-3 px-4 py-3 text-white">
                              Cookies are messages that web servers pass to web
                              browsers when you visit websites. Cookies are most
                              commonly used to track website activity, to track
                              online shopping, remembering your preferences, and
                              improving your user experience through
                              personalized web pages.
                              <div className="mt-4">
                                We may use the following types of Cookies* to
                                make the website user-friendly:
                              </div>
                              <div className="mt-4">
                                <ul className="list-inside list-disc pl-5">
                                  <li>
                                    <strong>Essential Cookies</strong>: The
                                    Website may use technical cookies to carry
                                    out activities that are strictly necessary
                                    for the operation or delivery of services.
                                    They include, for example, cookies that
                                    allow you to access secure areas of the
                                    website. We use this cookie to obtain the
                                    required consent to process data.
                                  </li>
                                  <li className="mt-4">
                                    <strong>Preference Cookies</strong>: These
                                    cookies enable a website to remember
                                    information that changes the way the website
                                    behaves or looks, like preferred language or
                                    the region that you are in.
                                  </li>
                                  <li className="mt-4">
                                    <strong>Performance Cookies</strong>: Also
                                    known as analytics cookies, these cookies
                                    may be used to collect information about
                                    your use of the Website and make the Website
                                    more user-friendly. Usage of analytic
                                    cookies includes but is not limited to
                                    distinguishing users and understanding
                                    overall patterns of usage of the Website. We
                                    use this information in aggregate form to
                                    improve the way our Website works.
                                  </li>
                                  <li className="mt-4">
                                    <strong>Marketing Cookies</strong>: These
                                    cookies are used to track visitors across
                                    websites. The intention is to display ads
                                    that are relevant and engaging for the
                                    individual user and thereby more valuable
                                    for publishers and third-party advertisers.
                                    <hr className="border-0" />
                                    These cookies can be deleted or blocked by
                                    adjusting your browser settings (see Section
                                    4, How can you control Cookies, below).
                                    Alternatively, please follow the links below
                                    to opt-out: Google Analytics:
                                    <a
                                      href="https://tools.google.com/dlpage/gaoptout"
                                      className="hover:text-blue-600"
                                    >
                                      https://tools.google.com/dlpage/gaoptout
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </p>
                          </div>
                        </div>

                        <div className="mb-3 w-full">
                          <hr className="border-1 border-gray-400" />
                          <button
                            onClick={() => handleToggle(3)}
                            className="mt-3 flex w-full justify-between px-4 py-3 font-bold text-white transition-all duration-500"
                          >
                            4. How can you control Cookies?
                            <span
                              className={`transition-transform duration-500 ${isOpen[3] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[3] ? 'max-h-[70rem]' : 'max-h-0'}`}
                          >
                            <p className="mt-3 px-4 py-3 text-white">
                              You have the right to decide whether to accept or
                              reject cookies. You do not have to accept cookies
                              and consent can be withdrawn at any time. Please
                              note that essential cookies cannot be rejected as
                              they are strictly necessary to provide you with
                              services of our Website.
                              <div className="mt-4">
                                By using our Cookie Consent Banner, you can
                                select the categories of cookies which you
                                choose to accept or reject. The Cookie Consent
                                Banner can be found in the notification banner
                                and on our Website. You can change or revoke
                                consent for your cookie policies directly from
                                the website by clicking “Cookie settings” at the
                                bottom of the page.
                              </div>
                              <div className="mt-4">
                                If you choose not to click on “Got it!”, or do
                                not close the message, you may still use our
                                Website. You may also refuse to accept cookies
                                from this Website at any time by activating the
                                setting on your browser which allows you to
                                refuse cookies.
                              </div>
                              <div className="mt-4">
                                Please follow the links below to helpful
                                information for the most popular browsers:
                              </div>
                              <div className="mt-4">
                                <a
                                  href="https://support.apple.com/en-us/105082"
                                  className="hover:text-blue-600"
                                >
                                  Apple Safari
                                </a>
                                <hr className="border-0" />
                                <a
                                  href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl"
                                  className="hover:text-blue-600"
                                >
                                  Google Chrome
                                </a>
                                <hr className="border-0" />
                                <a
                                  href="https://support.microsoft.com/en-us/help/10607/microsoft-edge-view-delete-browser-history"
                                  className="hover:text-blue-600"
                                >
                                  Microsoft Edge
                                </a>
                                <hr className="border-0" />
                                <a
                                  href="https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies"
                                  className="hover:text-blue-600"
                                >
                                  Microsoft Internet Explorer
                                </a>
                                <hr className="border-0" />
                                <a
                                  href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                                  className="hover:text-blue-600"
                                >
                                  Mozilla Firefox
                                </a>
                                <hr className="border-0" />
                                <a
                                  href="https://blogs.opera.com/news/2015/08/how-to-manage-cookies-in-opera/"
                                  className="hover:text-blue-600"
                                >
                                  Opera
                                </a>
                              </div>
                            </p>
                            <hr className="border-1 border-gray-400" />
                          </div>
                        </div>

                        <div className="mb-3 w-full">
                          <button
                            onClick={() => handleToggle(4)}
                            className="mt-3 flex w-full justify-between px-4 py-3 text-left font-bold text-white transition-all duration-500"
                          >
                            5. Amendments to this Cookie Policy
                            <span
                              className={`transition-transform duration-500 ${isOpen[4] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <hr className="border-1 mt-3 border-gray-400" />
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[4] ? 'max-h-[1000px]' : 'max-h-0'}`}
                          >
                            <p className="mt-3 px-4 py-3 text-white">
                              We may update this Cookie Policy from time to time
                              in order to reflect, for example, changes to the
                              cookies we use or for other operational, legal or
                              regulatory reasons. Since we do not collect
                              personal data such as your IP address, email or
                              any other form of contact, thus having no means to
                              reach you for your safety, please therefore
                              re-visit this Cookie Policy regularly to stay
                              informed about our use of cookies and related
                              technologies.
                              <div className="mt-4">
                                The date at the top of this Cookie Policy
                                indicates when it was last updated.
                              </div>
                            </p>
                            <hr className="border-1 border-gray-400" />
                          </div>
                        </div>

                        <div className="mb-3 mt-3 w-full">
                          <button
                            onClick={() => handleToggle(5)}
                            className="flex w-full justify-between px-4 py-3 text-left font-bold text-white transition-all duration-500"
                          >
                            6. How can you contact us with questions?
                            <span
                              className={`transition-transform duration-500 ${isOpen[5] ? 'rotate-180' : ''}`}
                            >
                              ⌵
                            </span>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen[5] ? 'max-h-40' : 'max-h-0'}`}
                          >
                            <hr className="border-1 border-gray-400" />
                            <p className="mt-3 px-4 py-3 text-white">
                              If you have any concerns relating to our use of
                              cookies or other technologies, please contact us
                              at
                              <hr className="border-0" />
                              <a
                                href="mailto:study@virufy.org"
                                className="hover:text-blue-600"
                              >
                                study@virufy.org
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>

            <div
              className="fixed inset-0 z-40 bg-black opacity-25"
              onClick={handleCloseModal}
            ></div>
          </>
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
              {links1.map((link, index) => {
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
          <div className="mt-8 flex justify-center gap-10 lg:mt-4 lg:gap-7">
            <Link
              href="https://www.instagram.com/virufy/"
              className="lg:hidden"
            >
              <ExportedImage
                src={InstagramIconWhite}
                alt="Instagram icon"
                className="h-[40px] w-[30px]"
                basePath={basePath}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/virufy/"
              className="lg:hidden"
            >
              <ExportedImage
                src={LinkedInIconWhite}
                alt="LinkedIn icon"
                className="h-[40px] w-[30px]"
                basePath={basePath}
              />
            </Link>
            <Link
              href="https://www.instagram.com/virufy/"
              className="hidden lg:flex"
            >
              <ExportedImage
                src={InstagramIconDarkTurquoise}
                alt="Instagram icon"
                className="h-[40px] w-[30px]"
                basePath={basePath}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/virufy/"
              className="hidden lg:flex"
            >
              <ExportedImage
                src={LinkedInIconDarkTurquoise}
                alt="LinkedIn icon"
                className="h-[40px] w-[30px]"
                basePath={basePath}
              />
            </Link>
          </div>
          <div className="align-center mt-10 flex w-full flex-col gap-7 text-white lg:hidden">
            <div className="align-center m-auto max-w-4xl text-center text-[25px]">
              <Text Text="Nonprofit Status" Style="" TextClassProps="" />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                Style="normal"
              />
            </div>
            <div className="align-center m-auto mx-12 mt-4 max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="©2024 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                Style="normal"
              />
            </div>
          </div>
          <div className="align-center mt-10 hidden w-full flex-col gap-7 text-white lg:flex">
            <div className="align-center m-auto max-w-4xl text-center font-semibold">
              <Text Text="Nonprofit Status" Style="small" TextClassProps="" />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="Virufy is a California nonprofit corporation recognized by the United States Internal Revenue Service (IRS) as a tax-exempt public charity under Section 501(c)(3) of the Internal Revenue Code."
                Style="normalCardHome"
              />
            </div>
            <div className="align-center m-auto max-w-4xl text-center">
              <Text
                TextClassProps=""
                Text="©2024 Virufy | VIRUFY is a trademark of The Covid Detection Foundation, a California nonprofit corporation | All rights reserved"
                Style="normalCardHome"
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
