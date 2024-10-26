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
    footer: { cookiePolicy, personalInfo, privacyPolicy },
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

  // const [isOpen, setIsOpen] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);

  // const handleToggle = (index: number) => {
  //   setIsOpen((prev) => {
  //     const newState = [...prev];
  //     newState[index] = !newState[index];
  //     return newState;
  //   });
  // };

  return (
    <>
      <div>
        {showModalCookiesSetting ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
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
            <div className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text={privacyPolicy.title}
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
                        {privacyPolicy.body.map((detail, index) => (
                          <AccordionItem {...detail} lang={lang} key={index} />
                        ))}
                      </div>
                    </div>
                  </div>
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
        {showModalMyInformation ? (
          <>
            <div className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text={personalInfo.title}
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
                      {personalInfo.body.map((detail, index) => (
                        <AccordionItem {...detail} lang={lang} key={index} />
                      ))}
                    </div>
                  </div>
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
        {showModalCookiesPolicy ? (
          <>
            <div className="fixed inset-0 z-[111] flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px] lg:w-[1000px]">
                {/*content*/}
                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[#010101] to-[#244D7E] shadow-lg outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex w-full rounded-t border-b border-solid border-slate-200 text-white">
                    <Title
                      H="h5Modals"
                      Text={cookiePolicy.title}
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
                      {cookiePolicy.body.map((detail, index) => (
                        <AccordionItem {...detail} lang={lang} key={index} />
                      ))}
                    </div>
                  </div>
                  {/*footer*/}
                </div>
              </div>
            </div>

            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
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
