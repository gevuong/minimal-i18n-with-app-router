'use client';

import { basePath } from '@/next.config.mjs';
import { VirufyMobilePhone } from '@/public/images/home';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import Title from '../Title';

export default function Section2({
  lang,
  text,
  subtext,
  title1,
  sub1,
  title2,
  sub2,
  title3,
  sub3,
  disclaimer,
  buttonText,
}) {
  return (
    // Black background
    <div className="flex min-h-[1050px] w-full flex-col items-center justify-center bg-[#0A0A0A] pb-[2rem] xl:min-h-[1273px]">
      {/* Padding and margin */}
      <div className="mt-[1rem] flex w-full items-center justify-center sm:px-[20px] xl:px-[50px]">
        {/* Blue foreground */}
        <div className="flex w-full flex-col items-center rounded-[50px] bg-[#132D62] pb-[2rem]">
          <div className="mx-auto w-full max-w-screen-xl">
            <div className="mt-[2rem] flex w-full flex-col items-center px-4 text-center lg:mt-[4rem]">
              <Title
                Text={text}
                H=""
                TitleClassProps="text-transparent bg-clip-text bg-gradient-to-b from-[#30DA74] to-[#3578DE] text-[20px] leading-[1rem] sm:leading-[2.25rem] md:text-[2.25rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[2.75rem] xl:text-[48px] xl:leading-[3.5rem]"
              />
              <p className="mt-[1rem] px-[1px] text-[14px] leading-[1rem] text-white md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:px-[160px] xl:text-[24px] xl:font-bold xl:leading-[2.5rem]">
                {subtext}
              </p>
            </div>

            <div className="mt-[0rem] flex w-full flex-col justify-between px-[2rem] text-center sm:flex-col xl:mt-[2rem] xl:flex-row xl:px-[100px] xl:text-start">
              <div className="order-2 flex flex-col items-center px-[0rem] sm:w-full xl:order-1 xl:mt-[4rem] xl:w-1/2 xl:items-start xl:px-[6rem]">
                <div className="mb-[1rem] mt-[1rem] xl:mt-[2rem]">
                  <Title
                    H="h5spaced"
                    Text={title1}
                    TitleClassProps="text-white font-bold mb-[1rem]"
                  />
                  <p className="text-[0.9rem] leading-[0.9rem] text-white md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub1}
                  </p>
                </div>
                <div className="mb-[1rem] mt-[0rem] xl:mt-[1rem]">
                  <Title
                    H="h5spaced"
                    Text={title2}
                    TitleClassProps="text-white font-bold mb-[1rem]"
                  />
                  <p className="text-[0.9rem] leading-[0.9rem] text-white md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub2}
                  </p>
                </div>
                <div className="mb-[0rem] mt-[1rem] xl:mt-[1rem]">
                  <Title
                    H="h5spaced"
                    Text={title3}
                    TitleClassProps="text-white font-bold mb-[1rem] whitespace-nowrap"
                  />
                  <p className="text-[0.9rem] leading-[0.9rem] text-white md:text-[1.25rem] md:leading-[1.5rem] lg:text-[1.5rem] lg:leading-[1.75rem] xl:text-[18px] xl:leading-[25px]">
                    {sub3}
                  </p>
                </div>
                <div className="mt-[2rem] flex w-full flex-col items-center xl:mt-[4rem] xl:items-start xl:whitespace-nowrap">
                  <div className="w-full">
                    <p className="px-[3rem] text-center text-[0.4rem] text-white md:text-[0.875rem] lg:text-[1rem] xl:px-[0rem] xl:text-left xl:text-[8px]">
                      {disclaimer}
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 mt-[2rem] flex justify-center xl:order-2 xl:mt-[0rem] xl:w-1/2">
                <div className="relative w-auto">
                  <ExportedImage
                    className="h-[300px] w-auto xl:h-[800px]"
                    src={VirufyMobilePhone}
                    alt="mobile phone with Virufy's logo"
                    priority
                    basePath={basePath}
                  />
                </div>
              </div>
            </div>

            <div className="mx-auto mb-[2rem] mt-[2rem] flex w-full max-w-md items-center justify-center px-0 md:max-w-lg xl:mt-[0rem]">
              <Link href={`/${lang}/ai`}>
                <button
                  className="medium primary h-[45px] w-[315px] text-white xl:h-[65px] xl:w-[250px]"
                  style={{
                    borderRadius: '50px',
                    background:
                      'linear-gradient(180deg, #38B76B 0%, #33A5AE 47%, #3578DE 100%)',
                  }}
                >
                  {buttonText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
