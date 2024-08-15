'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import {
  CloseMenuIcon,
  DonateHero,
  GoFundMeIcon,
  HamburgerMenuIcon,
  PaypalIcon,
  VirufyLogo,
} from '@/public/images/navbar/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { usei18n } from '../i18n';
import { ButtonSize, ButtonType } from './themes';

export default function Navbar({ lang }: { lang: Locale }) {
  const {
    navbar: { home, ourTechnology, coughCheckApp, aboutUs, faq, donate },
  } = usei18n(lang);

  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const currPathname = usePathname();

  useEffect(() => {
    window.location.pathname === `/${lang}`
      ? setActiveLink('home')
      : window.location.pathname === `/${lang}/ai`
        ? setActiveLink('ourTechnology')
        : window.location.pathname === `/${lang}/publications`
          ? setActiveLink('ourTechnology')
          : window.location.pathname === `/${lang}/covid19`
            ? setActiveLink('coughCheckApp')
            : window.location.pathname === `/${lang}/flu`
              ? setActiveLink('coughCheckApp')
              : window.location.pathname === `/${lang}/copd`
                ? setActiveLink('coughCheckApp')
                : window.location.pathname === `/${lang}/rsv`
                  ? setActiveLink('coughCheckApp')
                  : window.location.pathname === `/${lang}/story`
                    ? setActiveLink('aboutUs')
                    : window.location.pathname === `/${lang}/people`
                      ? setActiveLink('aboutUs')
                      : window.location.pathname === `/${lang}/amils-story`
                        ? setActiveLink('aboutUs')
                        : window.location.pathname === `/${lang}/supporters`
                          ? setActiveLink('aboutUs')
                          : window.location.pathname ===
                              `/${lang}/one-young-world`
                            ? setActiveLink('aboutUs')
                            : window.location.pathname === `/${lang}/faq`
                              ? setActiveLink('faq')
                              : setActiveLink('');
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setNavbar(false);
    }
  }, [currPathname]);

  const SCREEN_SIZE = 976;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= SCREEN_SIZE) {
          setNavbar(false);
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div className="bg-[#000]">
      <nav
        className={`sticky z-[100] w-full shadow ${
          navbar ? 'bg-black' : 'bg-transparent'
        }`}
      >
        <div>
          {showModal ? ( // donate modal
            <>
              <div
                className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <div className="relative mx-auto h-[500px] w-[300px] md:w-[500px]">
                  {/*content*/}
                  <div className="relative flex w-full flex-col rounded-2xl border-0 bg-white shadow-lg outline-none focus:outline-none">
                    {/*header*/}

                    {/* Background img */}
                    <div className="flex w-full rounded-t">
                      <ExportedImage
                        className="w-full"
                        src={DonateHero}
                        basePath={basePath}
                        alt="Help us fight against respiratory diseases. We need your contribution in order to continue helping millions of people in the fight against respiratory diseases."
                      />
                      {/* Close button */}
                      <div className="absolute flex w-full flex-col items-end pr-5 pt-3">
                        <button
                          className="flex justify-center rounded-full text-xl font-medium text-white shadow-xl outline-none transition-all duration-150 ease-linear"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                    {/*body*/}
                    <div className="relative flex flex-col items-center rounded-b-2xl bg-gradient-to-b from-[#273F6A] to-[#4167AD] p-6">
                      <p className="mb-6 mt-2 text-lg leading-relaxed">
                        <span className="color-black text-center text-gray-200">
                          Donate Options
                        </span>
                      </p>
                      <a
                        href="https://www.paypal.com/us/fundraiser/charity/4348461"
                        target="_blank"
                      >
                        {/* paypal button */}
                        <button
                          className="mb-3 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.9rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <ExportedImage
                            className="h-[27px] w-[110px]"
                            src={PaypalIcon}
                            alt="Paypal icon"
                            basePath={basePath}
                          />
                        </button>
                      </a>
                      <a
                        href="https://www.gofundme.com/f/virufy-covid19"
                        target="_blank"
                      >
                        {/* gofundme button */}
                        <button
                          className="mb-1 mr-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.8rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <ExportedImage
                            className="h-[30px] w-[103px]"
                            src={GoFundMeIcon}
                            alt="Gofundme icon"
                            basePath={basePath}
                          />
                        </button>
                      </a>
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
            </>
          ) : null}
        </div>

        <div className="lg:max-w-8lg justify-between px-3 lg:mx-4 lg:flex lg:items-center lg:px-2 xl:mx-9">
          <div>
            <div className="flex items-center justify-between py-3 lg:block lg:py-5">
              <Link href={`/${lang}`} className="flex lg:hidden">
                <ExportedImage
                  className="h-[48px] w-[100px]"
                  src={VirufyLogo}
                  alt="Virufy logo"
                  basePath={basePath}
                />
              </Link>
              <Link href={`/${lang}`} className="hidden lg:flex">
                <ExportedImage
                  className="h-[48px] w-[160px]"
                  src={VirufyLogo}
                  alt="Virufy logo"
                  basePath={basePath}
                />
              </Link>
              <div className="lg:hidden">
                {/* // hamburger and x button */}
                <button
                  className="rounded-lg p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <ExportedImage
                      className="h-[18px] w-[30px]"
                      src={CloseMenuIcon}
                      alt="close menu icon"
                      basePath={basePath}
                    />
                  ) : (
                    <ExportedImage
                      className="h-[18px] w-[30px]"
                      src={HamburgerMenuIcon}
                      alt="hamburger menu icon"
                      basePath={basePath}
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* dropdown for mobile */}
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 lg:mt-0 lg:block lg:pb-0 ${
                navbar
                  ? 'absolute left-0 top-6 block w-full bg-black text-center'
                  : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-5 lg:space-y-0 xl:space-x-9">
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'home'
                          ? 'solid border-b-2 py-2'
                          : 'relative py-2 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      }`}
                      href={`/${lang}`}
                    >
                      {home}
                    </Link>
                  </div>
                </li>
                {/* technology link */}
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'ourTechnology'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      }`}
                      href={`/${lang}/ai`}
                    >
                      {ourTechnology?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-60px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="px-5 py-2 pt-5 text-[white] hover:font-bold"
                        href={`/${lang}/ai`}
                      >
                        {ourTechnology?.howItWorks}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/publications`}
                      >
                        {ourTechnology?.OurResearch}
                      </Link>
                    </div>
                  </div>
                </li>

                {/* coughcheck app link */}
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'coughCheckApp'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      } `}
                      href={`/${lang}/covid19`}
                    >
                      {coughCheckApp?.section}
                    </Link>
                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-35px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="px-5 py-2 pt-5 text-[white] hover:font-bold"
                        href={`/${lang}/covid19`}
                      >
                        {coughCheckApp?.covid19}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/flu`}
                      >
                        {coughCheckApp?.flu}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/copd`}
                      >
                        {coughCheckApp?.copd}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/rsv`}
                      >
                        {coughCheckApp?.rsv}
                      </Link>
                    </div>
                  </div>
                </li>

                {/* about us link */}
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'aboutUs'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      } `}
                      href={`/${lang}/story`}
                    >
                      {aboutUs?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col text-center drop-shadow-lg ${
                        navbar
                          ? 'relative left-1/2 z-10 mt-2 flex -translate-x-1/2 transform bg-black'
                          : 'ml-[-60px] hidden'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="pb-3 pt-6 text-white hover:font-bold"
                        href={`/${lang}/story`}
                      >
                        {aboutUs?.ourStory}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/people`}
                      >
                        {aboutUs?.ourPeople}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/supporters`}
                      >
                        {aboutUs?.ourSupporters}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/one-young-world`}
                      >
                        {aboutUs?.oneYoungWorld}
                      </Link>
                    </div>
                  </div>
                </li>
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'faq'
                          ? 'solid peer border-b-2 py-2 text-white'
                          : 'peer relative py-2 text-white before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-white before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100'
                      }`}
                      href={`/${lang}/faq`}
                    >
                      {faq}
                    </Link>
                  </div>
                </li>
                <li className={`text-[#393939] ${navbar ? 'pb-20' : ''}`}>
                  <button
                    onClick={() => setShowModal(true)}
                    className={`${ButtonType.primary} ${ButtonSize.medium}`}
                  >
                    <Link href="#">{donate}</Link>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
