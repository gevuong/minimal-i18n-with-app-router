import Link from 'next/link';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import SocialLinks from './SocialLinks';
import NonProfitDisclaimers from './NonProfitDisclaimers';
import VirufyLogo from '@/public/logos/virufy.svg';
import { Fragment } from 'react';

export default function FooterNavbar({lang, nonProfitSection, footerPrivacyLinks}) {
  return (
    <footer className="bg-black">
      <div className="mx-auto flex w-full max-w-screen-xl flex-col p-4 py-10">
        <div className="absolute mx-12 mt-9 hidden w-56 justify-start lg:flex">
          <Link href={`/${lang}`} >
            <ExportedImage
              src={VirufyLogo}
              alt="Virufy logo"
              className="h-[48px] w-[160px]"
              basePath={basePath}
            />
          </Link>
        </div>
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
        <SocialLinks lang={lang}/>
        <NonProfitDisclaimers nonProfitSection={nonProfitSection} />
      </div>
    </footer>
  );
}
