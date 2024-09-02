import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import { BgHeader } from '@/public/images/people';
import ExportedImage from 'next-image-export-optimizer';
import { usei18n } from '../../i18n';
import PersonCard from '../components/PersonCard';
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
          <div className="grid grid-cols-2 gap-4 px-4 pb-24 text-white sm:gap-6 lg:gap-12 xl:grid-cols-3">
            {sectionAdvisors.advisors.map((card) => (
              <PersonCard
                key={card.name}
                image={card.img}
                altText={card.name}
                name={card.name}
                texts={card.texts}
                role={card.role}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
