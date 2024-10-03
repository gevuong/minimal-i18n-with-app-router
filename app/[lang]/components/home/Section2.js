'use client';

import { basePath } from '@/next.config.mjs';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { useEffect } from 'react';
import Title from '../Title';

export default function Section2({
  lang,
  src,
  text,
  text2,
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

      @media (min-width: 1536px) {
        .mt-2xl {
          margin-top: 20rem; 
        } 
      }

      @media (min-width: 1660px) {
        .mb-3xl {
          bottom: 30rem; 
        }
      }

      @media (min-width: 1920px) { 
        .mt-3xl {
          margin-top: 40rem;
        }
        
        .mr-3xl {
          margin-right: 20rem; 
        }
      }

      @media (min-width: 400px) and (max-width: 420px) {
        .bottom-custom {
          bottom: 2rem;
        }
      }

      @media (min-width: 420px) and (max-width: 460px) {
        .bottom-custom {
          bottom: 4rem;
        }
      }

      @media (min-width: 360px) and (max-width: 399px) {
        .bottom-custom {
          bottom: 5.5rem;
        }
      }

      @media (min-width: 450px) {
        .custom-top-margin {
          margin-top: 2rem;
        }
      }

      @media (min-width: 500px) {
        .custom-top-margin {
          margin-top: 3rem;
        }
      }

      @media (min-width: 550px) {
        .custom-top-margin {
          margin-top: 4rem;
        }
      }

      @media (min-width: 600px) {
        .custom-top-margin {
          margin-top: 5rem;
        }
      }

      @media (min-width: 650px) {
        .custom-top-margin {
          margin-top: 6rem;
        }
      }

      @media (min-width: 700px) {
        .custom-top-margin {
          margin-top: 7rem;
        }
      }

      @media (min-width: 750px) {
        .custom-top-margin {
          margin-top: 8rem;
        }
      }

       @media (min-width: 800px) {
        .custom-top-margin {
          margin-top: 9rem;
        }
      }

      @media (min-width: 850px) {
        .custom-top-margin {
          margin-top: 10rem;
        }
      }

      @media (min-width: 1200px) {
        .custom-top-margin {
          margin-top: 15rem;
        }
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
          <div className="custom-top-margin mt-[0rem] sm:mt-[0rem] md:mt-[12.5rem] lg:mt-[14rem]">
            <div className="ml-[0rem] mt-12 flex flex-col text-center sm:mx-0 lg:mx-20 lg:ml-[6rem] xl:mt-[18rem]">
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
            <div className="lg:mt-100 mt-2xl mt-3xl mt-[3.5rem] flex flex-col items-start space-y-2 sm:ml-0 sm:mt-24 md:space-y-8 xl:mt-[10rem]">
              <div className="w-full max-w-md md:max-w-lg">
                <p
                  className="text-[0.6rem] font-bold leading-[0.9rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[2.5rem]"
                  dangerouslySetInnerHTML={applyGradient(subText)}
                />
              </div>

              <div className="mt-2 w-full max-w-md px-0 md:max-w-lg">
                <Link href={`/${lang}/ai`}>
                  <button
                    className="medium primary h-[35px] w-[270px] text-white sm:h-[45px] sm:w-[315px] xl:h-[65px] xl:w-[250px]"
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
            <div className="mt-[0.2rem] flex flex-col items-start sm:ml-0 sm:mt-[0.3rem]">
              <div className="w-full max-w-screen-lg">
                <p className="text-[0.4rem] leading-[0.6rem] text-gray-400 md:text-[0.875rem] md:leading-[1.25rem] lg:text-[1rem] lg:leading-[1.5rem] xl:text-[1.125rem] xl:leading-[1.75rem]">
                  {disclaimer1}
                </p>
              </div>
              <div className="w-full max-w-screen-lg">
                <p className="text-[0.4rem] leading-[0.6rem] text-gray-400 md:text-[0.875rem] md:leading-[1.25rem] lg:text-[1rem] lg:leading-[1.5rem] xl:text-[1.125rem] xl:leading-[1.75rem]">
                  {disclaimer2}
                </p>
              </div>
            </div>
          </div>
          <div className="mb-2xl mb-3xl mr-3xl bottom-custom absolute bottom-[3rem] ml-[5.5rem] mt-[1rem] flex max-w-[50rem] flex-col items-center px-[2rem] sm:bottom-[7rem] sm:ml-[8rem] sm:mr-[2rem] sm:mt-[2rem] sm:space-y-2 md:bottom-[8rem] md:space-y-8 lg:ml-[20rem] lg:mr-[5rem] lg:mt-[4rem] xl:bottom-[20rem] xl:mt-[15rem]">
            <p className="text-[0.8rem] leading-[0.9rem] sm:text-[0.8rem] sm:leading-[1.5rem] md:text-[1.5rem] md:leading-[2rem] lg:text-[1.75rem] lg:leading-[2.25rem] xl:text-[2rem] xl:leading-[2.5rem]">
              {mainText2}
            </p>
            <p
              className="text-center text-[0.4rem] font-bold leading-[0.7rem] sm:text-[0.5rem] sm:leading-[0.8rem] md:text-[1.125rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-[2rem] xl:text-[1.5rem] xl:leading-[3rem]"
              dangerouslySetInnerHTML={applyGradient(subText2)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
