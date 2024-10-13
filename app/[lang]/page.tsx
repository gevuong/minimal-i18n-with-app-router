import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { usei18n } from '../i18n';
import ExportedImage from 'next-image-export-optimizer';
import Title from './components/Title';
import Link from 'next/link';
import { BgHeader } from '@/public/images/home';
import Section3 from './components/home/Section3';

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    home: { introSection, section2 },
  } = usei18n(lang);

  return (
    <div className="-mb-24 flex flex-col items-center justify-center">
      <div className="relative -top-24 w-full overflow-hidden">
        <div className="relative flex justify-center overflow-hidden bg-[#0A0A0A]">
          {/* First background img */}
          <div className="w-full brightness-100 contrast-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeader}
              alt=""
              priority
              basePath={basePath}
            />
          </div>

          {/* Welcome text */}
          <div className="absolute inset-0 flex items-start justify-center p-4 text-center text-white sm:text-left md:p-8 lg:p-12">
            <div className="mx-auto flex max-w-screen-xl flex-col">
              <div className="mt-0 sm:mt-0 md:mt-32 lg:mt-44">
                <div className="ml-0 mt-12 flex flex-col text-center sm:mx-0 lg:mx-20 lg:ml-24 xl:mt-24">
                  <Title
                    Text={introSection.text}
                    H=""
                    TitleClassProps="text-white text-base leading-9 sm:text-base sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                  />
                  <div className="mt-0 flex flex-col sm:text-center lg:mt-12">
                    <Title
                      Text={introSection.text2}
                      H=""
                      TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-base sm:leading-9 md:text-3xl md:leading-10 lg:text-4xl lg:leading-11 xl:text-5xl xl:leading-[3.5rem]"
                    />
                  </div>
                </div>

                {/* Introducing Virufy section */}
                <div className="mt-14 flex flex-col items-start space-y-2 sm:ml-0 sm:mt-24 md:mt-56 md:space-y-8 lg:mt-80 xl:mt-[40rem]">

                  <div className="w-full max-w-md md:max-w-3xl xl:max-w-5xl">
                    <p className="text-center text-xs font-normal leading-[1.1rem] sm:text-sm md:text-left md:text-lg md:font-bold md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-10 lg:pr-36">
                      {introSection.subText}
                    </p>
                  </div>

                  {/* Demo app button */}
                  <div className="mt-2 flex w-full max-w-md justify-center px-0 md:block md:max-w-lg">
                    <Link href={`/${lang}/ai`}>
                      <button
                        className="medium primary h-9 w-64 text-white sm:h-11 sm:w-80 xl:h-16 xl:w-64"
                        style={{
                          borderRadius: '50px',
                          background:
                            'linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                        }}
                      >
                        {introSection.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
                {/* disclaimers */}
                <div className="mt-1 flex flex-col items-start sm:ml-10 sm:mt-2 md:ml-0 lg:mt-6">
                  <div className="w-full max-w-screen-lg">
                    <p className="xl:text-md text-[0.4rem] leading-[0.6rem] text-gray-400 md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:leading-7">
                      {introSection.disclaimer1}
                    </p>
                  </div>
                  <div className="w-full max-w-screen-lg">
                    <p className="xl:text-md text-[0.4rem] leading-[0.6rem] text-gray-400 md:text-sm md:leading-5 lg:text-base lg:leading-6 xl:leading-7">
                      {introSection.disclaimer2}
                    </p>
                  </div>
                </div>
              </div>

              {/* How it works section */}
              <div className="absolute bottom-6 ml-24 mt-4 flex max-w-[50rem] flex-col items-center px-8 sm:bottom-12 sm:ml-32 sm:mr-8 sm:mt-8 sm:space-y-2 md:bottom-32 md:ml-48 md:space-y-8 lg:ml-72 lg:mr-20 lg:mt-16 xl:bottom-60 xl:mt-60">
                <p className="text-xs leading-8 sm:leading-6 md:text-2xl md:leading-8 lg:text-[1.75rem] lg:leading-9 xl:text-[2rem] xl:leading-10">
                  {introSection.mainText2}
                </p>
                <p className="text-center text-[0.5rem] font-normal leading-[0.7rem] sm:text-[0.6rem] sm:leading-[0.9rem] md:text-lg md:font-bold md:leading-7 lg:text-xl lg:leading-8 xl:text-2xl xl:leading-[3rem]">
                  {introSection.subText2}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Section3
          lang={lang}
          text={section2.text}
          subtext={section2.subtext}
          title1={section2.title1}
          sub1={section2.sub1}
          title2={section2.title2}
          sub2={section2.sub2}
          title3={section2.title3}
          sub3={section2.sub3}
          disclaimer={section2.disclaimer}
          buttonText={section2.buttonText}
        />
      </div>
    </div>
  );
};

export default HomePage;
