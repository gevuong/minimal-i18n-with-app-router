import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { SplashBackground, WaveBackground } from '@/public/images/ai/index';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { Fragment } from 'react';
import { getDictionary } from '../../dictionaries';
import AiCard from './AiCard';

const AiPage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    ai: { heroSection, aiSection },
  } = getDictionary(lang);

  return (
    <div className="relative -top-24">
      {/* Hero Section */}
      <section>
        <div className="relative bg-gradient-to-b from-black to-[#162b4c]">
          <ExportedImage
            className="absolute h-full w-full object-cover opacity-60"
            src={SplashBackground}
            alt=""
            priority
            basePath={basePath}
          />

          {/* Title, Text, Link Container */}
          <div className="relative flex flex-col items-center justify-center pt-60 pb-40 lg:right-[100px]">
            {/* Sizing & Spacing Container */}
            <div className="max-w-xl space-y-28 px-10 text-center text-white lg:max-w-3xl lg:text-left">
              <h2 className="text-4xl font-semibold lg:text-5xl lg:font-normal">
                {heroSection.title.map((text, i) =>
                  text.type === 'text' ? (
                    <Fragment key={i}>{text.text}</Fragment>
                  ) : (
                    <span key={i} className="text-blue-500">
                      {text.text}
                    </span>
                  )
                )}
              </h2>

              {/* Text & Link Container */}
              <div className="space-y-16">
                <p className="text-xl">{heroSection.text}</p>
                <div>
                  <Link
                    className="rounded-full bg-gradient-to-b from-green-500 to-blue-500 px-10 py-6 text-sm font-medium lg:py-4 lg:px-8 lg:text-lg"
                    href={heroSection.url}
                  >
                    {heroSection.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Overlay Container */}
      <div className="relative -mb-24 bg-gradient-to-b from-[#162b4c] to-[#3468b2]">
        <ExportedImage
          src={WaveBackground}
          alt=""
          className="absolute h-full w-full object-cover opacity-40"
          priority
          basePath={basePath}
        />

        {/* AI Section */}
        <section>
          {/* Title & Cards Container */}
          <div className="flex items-center justify-center py-24">
            {/* Spacing Container, shifts title to the left */}
            <div className="space-y-8 px-6">
              <h2 className="text-4xl font-normal text-white opacity-95">
                {aiSection.title}
              </h2>

              {/* Cards Container */}
              <div className="space-y-16 text-sm">
                {aiSection.aiCards.map((card) => (
                  <AiCard key={card.title} {...card} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AiPage;