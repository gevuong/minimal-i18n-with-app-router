'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import CloseMenu from '@/public/icons/icon-close-menu-white.svg';
import GoFundMeIcon from '@/public/icons/icon-gofundme.png';
import BarsMenu from '@/public/icons/icon-hamburger-menu-white.svg';
import PaypalIcon from '@/public/icons/icon-paypal.png';
import DonateModalImg from '@/public/images/navbar/hero-donate.png';
import VirufyLogo from '@/public/logos/virufy.svg';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getDictionary } from '../dictionaries';
import { ButtonSize, ButtonType } from './themes';

export default function Navbar({ lang }: { lang: Locale }) {
  const {
    navbar: { home, ourTechnology, coughCheckApp, aboutUs, faq, donate },
  } = getDictionary(lang);

  const [navbar, setNavbar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  const currPathname = usePathname();

  useEffect(() => {
    window.location.pathname === '/es/'
      ? setActiveLink('home')
      : window.location.pathname === '/es/ai'
      ? setActiveLink('ourTechnology')
      : window.location.pathname === '/es/publications'
      ? setActiveLink('ourTechnology')
      : window.location.pathname === '/es/our-story'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/es/OurPeople1'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/es/OurPeople2'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/es/supporters'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/es/one-young-world'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/es/faq'
      ? setActiveLink('faq')
      : window.location.pathname === '/en/'
      ? setActiveLink('home')
      : window.location.pathname === '/en/ai'
      ? setActiveLink('ourTechnology')
      : window.location.pathname === '/en/publications'
      ? setActiveLink('ourTechnology')
      : window.location.pathname === '/en/our-story'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/en/OurPeople1'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/en/OurPeople2'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/en/supporters'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/en/one-young-world'
      ? setActiveLink('aboutUs')
      : window.location.pathname === '/en/faq'
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
                        src={DonateModalImg}
                        basePath={basePath}
                        alt="Help us fight against respiratory diseases. We need your contribution in order to continue helping millions of people in the fight against respiratory diseases."
                      />
                      {/* Close button */}
                      <div className="absolute flex w-full flex-col items-end pt-3 pr-5">
                        <button
                          className="flex justify-center rounded-full font-medium text-white text-xl shadow-xl outline-none transition-all duration-150 ease-linear"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          X
                        </button>
                      </div>
                    </div>
                    {/*body*/}
                    <div className="relative flex flex-col items-center p-6 bg-gradient-to-b from-[#273F6A] to-[#4167AD] rounded-b-2xl">
                      <p className=" mt-2 mb-6 text-lg leading-relaxed">
                        <span className="text-center color-black text-gray-200">
                          Donate Options
                        </span>
                      </p>
                      <a
                        href="https://www.paypal.com/us/fundraiser/charity/4348461"
                        target="_blank"
                      >
                        {/* paypal button */}
                        <button
                          className="mr-1 mb-3 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.9rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <ExportedImage
                            className="w-[110px] h-[27px]"
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
                          className="mr-1 mb-1 flex w-[270px] justify-center rounded-3xl bg-white px-6 py-[0.8rem] outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[450px]"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <ExportedImage
                            className="w-[103px] h-[30px]"
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
                  className="w-[100px] h-[48px]"
                  src={VirufyLogo}
                  alt="Virufy logo"
                  basePath={basePath}
                />
              </Link>
              <Link href={`/${lang}`} className="hidden lg:flex">
                <ExportedImage
                  className="w-[160px] h-[48px]"
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
                      className="w-[30px] h-[18px]"
                      src={CloseMenu}
                      alt="close menu icon"
                      basePath={basePath}
                    />
                  ) : (
                    <ExportedImage
                      className="w-[30px] h-[18px]"
                      src={BarsMenu}
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
                  ? 'absolute block bg-black text-center w-full left-0 top-6'
                  : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 lg:flex lg:space-x-5 lg:space-y-0 xl:space-x-9">
                <li className="text-white">
                  <div>
                    <Link
                      className={`${navbar ? 'font-bold' : ''} ${
                        activeLink === 'home'
                          ? 'py-2 solid border-b-2'
                          : 'py-2 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'
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
                          ? 'peer py-2 text-white solid border-b-2'
                          : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'
                      }`}
                      href={`/${lang}/ai`}
                    >
                      {ourTechnology?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col drop-shadow-lg text-center ${
                        navbar
                          ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2'
                          : 'hidden ml-[-60px]'
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
                      className={`${
                        navbar ? 'font-bold' : ''
                      } peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left
                                    relative before:w-full before:h-0.5 before:origin-right before:transition-transform
                                    before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0`}
                      href={`/${lang}/Covid19`}
                    >
                      {coughCheckApp?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col drop-shadow-lg text-center ${
                        navbar
                          ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2'
                          : 'hidden ml-[-35px]'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="px-5 py-2 pt-5 text-[white] hover:font-bold"
                        href={`/${lang}/Covid19`}
                      >
                        {coughCheckApp?.covid19}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/Flu`}
                      >
                        {coughCheckApp?.flu}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/Copd`}
                      >
                        {coughCheckApp?.copd}
                      </Link>
                      <Link
                        className="px-5 py-2 text-[white] hover:font-bold"
                        href={`/${lang}/RSV`}
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
                          ? 'peer py-2 text-white solid border-b-2'
                          : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'
                      }
                                        `}
                      href={`/${lang}/our-story`}
                    >
                      {aboutUs?.section}
                    </Link>

                    <div
                      className={`absolute w-[200px] flex-col drop-shadow-lg text-center ${
                        navbar
                          ? 'flex relative bg-black mt-2 z-10 left-1/2 transform -translate-x-1/2'
                          : 'hidden ml-[-60px]'
                      } hover:flex peer-hover:flex`}
                    >
                      <Link
                        className="pt-6 pb-3 text-white hover:font-bold"
                        href={`/${lang}/our-story`}
                      >
                        {aboutUs?.ourStory}
                      </Link>
                      <Link
                        className="py-3 text-white hover:font-bold"
                        href={`/${lang}/OurPeople1`}
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
                          ? 'peer py-2 text-white solid border-b-2'
                          : 'peer py-2 text-white hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0'
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
