'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import { getDictionary } from '../../dictionaries';
import MainContent from './MainContent';

const OneYoungWorldPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    oneYoungWorld: { header, navbarTexts, oyw },
    teamLeads,
  } = getDictionary(lang);

  return (
    <div className="relative -top-24">
      {/* Header/Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <ExportedImage
            className="absolute object-cover opacity-30"
            src={header.image}
            alt={header.altText}
            priority
            basePath={basePath}
            fill
            sizes="100vw"
          />

          {/* Text Container */}
          <div className="relative flex flex-col items-center justify-center pb-12 pt-32 md:pb-48 md:pt-72">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl px-8 text-center font-medium text-white md:max-w-4xl">
              <h1 className="text-2xl font-medium leading-loose md:text-3xl md:leading-normal">
                {header.text}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <MainContent
          lang={lang}
          teamLeads={teamLeads}
          oyw={oyw}
          navbarTexts={navbarTexts}
        />
      </div>
    </div>
  );
};

export default OneYoungWorldPage;
