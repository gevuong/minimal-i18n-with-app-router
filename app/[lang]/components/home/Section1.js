'use client';

import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { useEffect } from 'react';
import Title from '../Title';

export default function Section1({
  lang,
  src,
  text,
  text2,
  mainText,
  subText,
  buttonText,
  disclaimer1,
  disclaimer2,
  mainText2,
  subText2,
}) {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .gradient-text {
        background: linear-gradient(180deg, #30DA74 100%, #3578DE 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const applyGradient = (text) => {
    const gradientText = text.replace(
      /CoughCheck/g,
      '<span class="gradient-text">CoughCheck</span>',
    );
    return { __html: gradientText };
  };

  return (
    <div className="relative flex justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="contrast-1 w-full brightness-100">
        <ExportedImage
          className="h-full w-screen object-cover"
          src={src}
          alt=""
          priority
          basePath={basePath}
        />
      </div>
      <div className="absolute inset-0 flex items-start justify-center p-4 text-center text-white sm:text-left md:p-8 lg:p-12">
        <div className="mx-auto flex max-w-screen-xl flex-col">
          <div className="mt-0 sm:mt-0 md:mt-[12.5rem] lg:mt-[14rem] xl:mt-[18rem]">
            <div className="ml-0 mt-12 flex flex-col text-center sm:mx-0 lg:mx-20 lg:ml-[6rem]">
              <Title
                Text={text}
                H=""
                TitleClassProps="text-white text-[0.99rem] leading-[2.25rem] sm:text-[0.99rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
              />
              <div className="mt-0 flex flex-col sm:text-center lg:mt-12">
                <Title
                  Text={text2}
                  H=""
                  TitleClassProps="font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[0.99rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[3rem] xl:leading-[3.5rem]"
                />
              </div>
            </div>
            <div className="mt-[3.5rem] sm:mt-24 md:mt-[6.25rem] xl:mt-[10rem] flex flex-col items-start space-y-2 md:space-y-8">
              <div className="w-full max-w-xs md:max-w-md">
                <p className="text-[0.7rem] sm:text-[0.75rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem]">
                  {mainText}
                </p>
              </div>

              <div className="w-full max-w-md md:max-w-lg">
                <p
                  className="text-[0.6rem] font-bold sm:text-[0.75rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem]"
                  dangerouslySetInnerHTML={applyGradient(subText)}
                />
              </div>

              <div className="mt-2 w-full max-w-md md:max-w-lg">
                <Link href={`/${lang}/ai`}>
                  <button
                    className="medium primary h-[35px] w-[270px] sm:h-[45px] sm:w-[315px] xl:h-[65px] xl:w-[250px] text-white rounded-full bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"
                  >
                    {buttonText}
                  </button>
                </Link>
              </div>
            </div>

            <div className="mt-[0.2rem] sm:mt-[0.3rem] flex flex-col items-start">
              <div className="w-full max-w-screen-lg">
                <p className="text-[0.4rem] sm:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-gray-400">
                  {disclaimer1}
                </p>
              </div>
              <div className="w-full max-w-screen-lg">
                <p className="text-[0.4rem] sm:text-[0.875rem] lg:text-[1rem] xl:text-[1.125rem] text-gray-400">
                  {disclaimer2}
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[3rem] sm:bottom-[7rem] md:bottom-[8rem] lg:bottom-[20rem] xl:bottom-[20rem] ml-[5.5rem] sm:ml-[8rem] lg:ml-[20rem] flex flex-col items-center px-[2rem]">
            <p className="text-[0.8rem] sm:text-[0.8rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem]">
              {mainText2}
            </p>
            <p
              className="text-center text-[0.4rem] sm:text-[0.5rem] md:text-[1.125rem] lg:text-[1.25rem] xl:text-[1.5rem] font-bold"
              dangerouslySetInnerHTML={applyGradient(subText2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
