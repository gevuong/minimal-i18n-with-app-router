'use client';

import { type Locale } from '@/i18n-config';
import ExportedImage from 'next-image-export-optimizer';
import { PressReleasesBackground } from '@/public/images/pressReleases';
import { basePath } from '@/next.config.mjs';
import { usei18n } from '../../i18n';
import PublicationCard from '../publications/PublicationCard';

const PressReleasesPage = ({
  params: { lang },
}: {
  params: { lang: Locale };
}) => {
  const {
    pressReleases: { pressReleaseSection, pressReleaseCards },
  } = usei18n(lang);

  return (
    <>
      <div className="relative -top-24">
        {/* Hero Section */}
        <section>
          <div className="relative bg-[#4883e3]">
            <ExportedImage
              className="absolute h-full w-full object-cover opacity-60"
              src={PressReleasesBackground}
              alt=""
              priority
              basePath={basePath}
            />

            <div className="mx-auto flex max-w-xl flex-col items-center justify-center space-y-8 px-10 py-64 text-center font-medium opacity-95">
              <h1 className="text-4xl font-light text-green-500 sm:text-5xl">
                {pressReleaseSection.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Press Releases Section */}
        <section>
          {/* Cards Container */}
          <div className="relative -mb-24 flex flex-col items-center justify-center space-y-8 bg-[#285ba1] px-10 pb-60 pt-28">
            {pressReleaseCards.map((publication, i) => (
              <div
                key={i}
                className="space-y-4 rounded-xl bg-[#00000060] px-10 py-8 text-left text-white sm:px-16 md:w-[700px] md:space-y-5"
              >
                <PublicationCard {...publication} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default PressReleasesPage;
