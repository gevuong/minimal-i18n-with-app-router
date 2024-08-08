'use client';

import type { Job, JobModal } from '@/app/dictionaries/types/jobListing';
import { type Locale } from '@/i18n-config';
import { basePath } from '@/next.config.mjs';
import { VirufyLogo } from '@/public/images/jobListing';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import { useState } from 'react';
import Text from '../components/Text';

const JobList = ({
  lang,
  jobList,
  modal,
}: {
  lang: Locale;
  jobList: Job[];
  modal: JobModal;
}) => {
  const [showModalConfirmation, setShowModalConfirmation] = useState(true);

  return (
    <>
      <div>
        {showModalConfirmation ? (
          <>
            <div className="fixed inset-0 top-60 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative mx-auto h-[420px] w-[300px] md:h-[525px] md:w-[360px]">
                {/*content*/}

                <div className="relative flex w-full flex-col rounded-xl border-0 bg-gradient-to-b from-[black] to-[#4167AD] font-medium text-white shadow-lg outline-none focus:outline-none">
                  {/*header*/}

                  <div className="flex justify-center px-4 pt-4 md:justify-between">
                    <ExportedImage
                      className="h-[27px] w-16 w-[110px] md:w-12 md:pl-1"
                      src={VirufyLogo}
                      alt="Virufy logo"
                      priority
                      basePath={basePath}
                    />
                    <Link
                      className="hidden md:block"
                      type="button"
                      href={`/${lang}/one-young-world`}
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      X
                    </Link>
                  </div>

                  <div className="flex w-full rounded-t text-center md:text-left">
                    <p className="mx-auto my-10 h-[100px] px-6 text-xl">
                      {modal?.text}
                    </p>
                  </div>
                  {/*body*/}

                  <div className="mb-14 h-[100px] flex-col items-center justify-center">
                    <Link
                      className="mx-auto flex w-[260px] justify-center rounded-3xl bg-gradient-to-b from-green-500 to-blue-500 px-6 py-2 font-bold text-white outline-none transition-all duration-150 ease-linear md:w-[320px] md:font-medium"
                      type="button"
                      href="#"
                      onClick={() => setShowModalConfirmation(false)}
                    >
                      {modal?.yes}
                    </Link>
                    <Link
                      className="mx-auto mt-6 flex w-[260px] justify-center rounded-3xl border border-red-500 bg-gray-200 px-6 py-2 font-bold text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-gray-300 md:w-[320px] md:font-medium"
                      type="button"
                      href={`/${lang}/one-young-world`}
                    >
                      {modal?.no}
                    </Link>
                  </div>
                  {/*buttons*/}
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
      {/* _________job listings____________ */}
      <div className="mx-auto mb-12 w-11/12">
        {!jobList ? <p>No data</p> : null}

        {jobList.map(({ category, positions }, id) => (
          <div key={id} className="w-[100%] text-left">
            <h2 className="mb-6 ml-8 mt-10 text-sm font-semibold leading-[0rem] text-white md:ml-14 md:text-lg lg:ml-20">
              {category}
            </h2>

            {positions.map(({ title, id }) => (
              <>
                <div
                  key={id}
                  className="mx-auto mb-[12px] flex w-[90%] rounded-md bg-[#16223A]"
                >
                  <div className="flex h-20 flex-1 items-center justify-start md:h-14">
                    <Text
                      TextClassProps={
                        'text-white text-xs sm:text-sm md:text-base px-5'
                      }
                      Text={title}
                      Style={'small'}
                    />
                  </div>

                  <div className="flex flex-1 justify-end">
                    <button
                      className={`my-auto mr-4 h-8 w-32 rounded-3xl bg-white font-medium`}
                    >
                      <Link href={`/${lang}/job-listing/${id}`}>Apply</Link>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default JobList;
