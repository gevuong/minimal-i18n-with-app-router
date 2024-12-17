'use client';

import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { PressReleasesBackground } from '@/public/images/pressReleases';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import PublicationCard from '../publications/PublicationCard';

const NewsPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    pressReleases: { pressReleaseSection, pressReleaseCards },
  } = usei18n(lang);

  return (
    <>
      <div className="relative -top-24">
        {/* Hero Section */}
        <section>
          <div className="relative bg-[#2b5290]">
            <ExportedImage
              className="absolute h-full w-full object-cover opacity-40"
              src={PressReleasesBackground}
              alt=""
              priority
              basePath={basePath}
            />

            <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 py-64 text-center font-medium opacity-95">
              <h1 className="text-4xl text-green-500 sm:text-5xl">
                {pressReleaseSection.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section>
          {/* Cards Container */}
          <div className="relative -mb-24 flex flex-wrap justify-center gap-8 bg-[#285ba1] px-8 pb-60 pt-28">
            {pressReleaseCards.map((pressRelease, i) => (
              <div
                key={i}
                className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 lg:basis-1/3"
              >
                <PublicationCard {...pressRelease} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsPage;
