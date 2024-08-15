import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import {
  BgHeader,
  Card1,
  Card10,
  Card11,
  Card12,
  Card13,
  Card15,
  Card16,
  Card17,
  Card18,
  Card19,
  Card2,
  Card20,
  Card21,
  Card22,
  Card23,
  Card3,
  Card5,
  Card6,
  Card8,
  Card9,
} from '@/public/images/people';
import ExportedImage from 'next-image-export-optimizer';
import { type StaticImageData } from 'next/image';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import AdvisorCards from './AdvisorCards';
import Section4 from './Section4';

export type CardData = {
  route: StaticImageData;
  name: string;
  subtitle: string;
  text: string;
};

const PeoplePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionMeetOurFounder, sectionAdvisors },
  } = usei18n(lang);

  const cards: CardData[] = [
    {
      route: Card1,
      name: 'Kara Meister, M.D.',
      subtitle: 'Clinical Advisor',
      text: 'Clinical Assistant Professor of ENT Stanford School of Medicine',
    },
    {
      route: Card2,
      name: 'Dr. Jure Leskovec',
      subtitle: 'Artificial Intelligence Advisor',
      text: 'Chief Scientist - Pinterest Associate Professor of AI - Stanford',
    },
    {
      route: Card3,
      name: 'Melissa Dyrdahl',
      subtitle: 'Executive Marketing Advisor',
      text: 'Former CMO - Adobe Board Member - CommonSpirit Health',
    },
    {
      route: Card5,
      name: 'Madhav Datt',
      subtitle: 'Executive Nonprofit Advisor',
      text: 'Founder - Green the Gene Former Global Representative for Youth - UN EP',
    },
    {
      route: Card6,
      name: 'Rafi Azim-Khan',
      subtitle: 'Executive Legal Advisor',
      text: 'Partner, IP/IT & Head Data Privacy Europe Pillsbury Winthrop Shaw Pittman LLP',
    },
    {
      route: Card8,
      name: 'Ronan Dunlop',
      subtitle: 'Executive Nonprofit Advisor',
      text: 'Founder - Green the Gene Former Global Representative for Youth - UN EP',
    },
    {
      route: Card9,
      name: 'Mark Haseltine',
      subtitle: 'Executive Advisor',
      text: 'Former CTO/CPO - edX Computer Science alumnus - MIT',
    },
    {
      route: Card10,
      name: 'Mansoor Ahmed',
      subtitle: 'Clinical Research Advisor',
      text: 'Founder & CEO - Cleveland Sleep Research Center                                 MBBS - King Edward Medical University',
    },
    {
      route: Card11,
      name: 'Mert Pilanci',
      subtitle: 'Artificial Intelligence Advisor',
      text: 'Assistant Professor of AI Stanford University Electrical Engineering',
    },
    {
      route: Card12,
      name: 'Victor Wang',
      subtitle: 'Executive Advisor',
      text: 'Founder and Chairman- China Silicon Valley                                                     MBA - Stanford Graduate School of Business',
    },
    {
      route: Card13,
      name: 'Rok Sosic',
      subtitle: 'Artificial Intelligence Advisor',
      text: 'Senior Research Engineer             Stanford School of Engineering',
    },
    {
      route: Card15,
      name: 'Mathijs De Vaan',
      subtitle: 'Asst. Professor - UC Berkeley',
      text: 'Management of Organizations              PhD Sociology - Columbia University',
    },
    {
      route: Card16,
      name: 'Pedro Siena',
      subtitle: 'Brazil Executive Advisor',
      text: 'Founder and CEO - Siena Company                                Mentor - Stanford Lean Launchpad',
    },
    {
      route: Card17,
      name: 'Khwaja Shaik',
      subtitle: 'Chief Technology Officer - IBM',
      text: 'MOSH, Vice Chair, Board Member     Board Member - University of North Florida Computing',
    },
    {
      route: Card18,
      name: 'George Pegelow',
      subtitle: 'Executive Visionary Advisor',
      text: 'Martial Arts & Philosophy Professor - Stanford University',
    },
    {
      route: Card19,
      name: 'Rich Walcoff',
      subtitle: 'Communications Advisor',
      text: 'Sports Director - KGO Radio',
    },
    {
      route: Card20,
      name: 'Taisuke Fukuno',
      subtitle: 'Executive IT Advisor',
      text: 'Founder - Open Data Japan        Chairman - jig.jp',
    },
    {
      route: Card21,
      name: 'Tsutomu Ito',
      subtitle: 'Executive Visionary Advisor',
      text: 'Founder - Tannan FM Radio                 Lead Architect, Bullet Train',
    },
    {
      route: Card22,
      name: 'Manuj Aggarwal',
      subtitle: 'Executive AI, Strategy And Marketing Advisor',
      text: 'Chief Innovation Officer - TetraNoodle Technologies',
    },
    {
      route: Card23,
      name: 'Dr. Les Atlas',
      subtitle: 'Audio and Machine Learning Advisor',
      text: 'Professor of Electrical and Computer Engineering - University of Washington                 Ph.D. Electrical Engineering, Stanford',
    },
  ];

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
            TitleClassProps="text-center mt-20 bg-transparent 
                   bg-clip-text text-transparent
                   bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"
          />

          <AdvisorCards cards={cards} />
        </div>
      </div>
    </>
  );
};

export default PeoplePage;
