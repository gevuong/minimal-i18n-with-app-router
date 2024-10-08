import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/people';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Section4 from './Section4';

const PeoplePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionMeetOurFounder, sectionAdvisors },
  } = usei18n(lang);

  return (
    <>
      <div className="w-full overflow-hidden">
        <div className="over relative flex justify-center overflow-hidden">
          <div className="contrast-1 brightness-100">
            <ExportedImage
              className="h-full w-screen object-cover"
              src={BgHeader}
              alt=""
              priority
              basePath={basePath}
            />
          </div>
          <Title
            Text={titleImage}
            H="h4"
            TitleClassProps="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-white text-center"
          />
        </div>
      </div>

      <div
        className="flex flex-col items-center justify-center"
        style={{
          background:
            'linear-gradient(180deg, #000000 0%, #162B4C 23.5%, #3468B2 90%)',
        }}
      >
        <div className="flex max-w-[1440px] flex-col items-center justify-center">
          <Section4
            TitleSize1="h1"
            TitleSize2="h3"
            TitleLabel1={sectionMeetOurFounder.titleMeetOurFounder}
            TitleLabel2={sectionMeetOurFounder.titleAmil}
            TextLabel={sectionMeetOurFounder.textAmil}
            labelButton="Read Amil's Story"
            buttonRoute={`/${lang}/amils-story`}
            ContainerTitleProps={{ style: { paddingLeft: '20px' } }}
            ContainerTextProps={{ style: { paddingLeft: '20px' } }}
            alt="Amil Khanzada's headshot Image"
          />

          <Title
            H="h1"
            Text={sectionAdvisors.title}
            TitleClassProps="text-center my-10 bg-transparent 
                   bg-clip-text text-transparent
                   bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"
          />

          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-4 px-6 pb-24 text-white sm:gap-6 lg:gap-12 xl:grid-cols-3">
            {sectionAdvisors.advisors.map(({ img, name, role, texts }) => (
              <div key={name} className="relative">
                <ExportedImage
                  className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
                  src={img}
                  alt={name}
                  basePath={basePath}
                />

                {/* apply opaque background to dim card */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20"></div>

                {/* Role Container */}
                <div className="absolute inset-x-0 top-2 px-1 text-center text-xs font-bold text-white md:text-2xl">
                  {role}
                </div>

                {/* Text Container */}
                <div className="absolute bottom-0 left-0 right-0 h-[84px] bg-black bg-opacity-50 px-1 py-1 text-center sm:h-[72px] md:h-[148px]">
                  <h2 className="text-xs font-bold md:text-2xl">{name}</h2>
                  {texts.map((text, i) => (
                    <div key={i} className="text-[8px] md:text-lg">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
