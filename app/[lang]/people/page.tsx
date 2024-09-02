import { type Locale } from '@/i18n-config.ts';
import { basePath } from '@/next.config.mjs';
import {
  AnaisRameau,
  BgHeader,
  GeorgePegelow,
  JureLeskovec,
  KaraMeister,
  KhwajaShaik,
  LesAtlas,
  MadhavDatt,
  MansoorAhmed,
  ManujAggarwal,
  MarkHaseltine,
  MathijsDeVaan,
  MelissaDyrdahl,
  MertPilanci,
  PedroSiena,
  RafiAzimKhan,
  RichardSwartzbaugh,
  RichWalcoff,
  RokSosic,
  RonanDunlop,
  TaisukeFukuno,
  TsutomuIto,
  VictorWang,
} from '@/public/images/people';
import ExportedImage from 'next-image-export-optimizer';
import { type StaticImageData } from 'next/image';
import { usei18n } from '../../i18n';
import Title from '../components/Title';
import Section4 from './Section4';

export type CardData = {
  img: StaticImageData;
  name: string;
  role: string;
  texts: string[];
};

const PeoplePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  const {
    people: { titleImage, sectionMeetOurFounder, sectionAdvisors },
  } = usei18n(lang);

  const cards: CardData[] = [
    {
      img: KaraMeister,
      name: 'Kara Meister, M.D.',
      role: 'Clinical Advisor',
      texts: [
        'Clinical Assistant Professor of ENT Stanford School of Medicine',
      ],
    },
    {
      img: JureLeskovec,
      name: 'Dr. Jure Leskovec',
      role: 'Artificial Intelligence Advisor',
      texts: [
        'Chief Scientist - Pinterest',
        'Associate Professor of AI - Stanford',
      ],
    },
    {
      img: MelissaDyrdahl,
      name: 'Melissa Dyrdahl',
      role: 'Executive Marketing Advisor',
      texts: ['Former CMO - Adobe', 'Board Member - CommonSpirit Health'],
    },
    {
      img: AnaisRameau,
      name: 'Anaïs Rameau, M.D.',
      role: 'Executive Marketing Advisor',
      texts: [
        'Asst. Professor of ENT - Cornell University',
        'Doctor of Medicine - McGill',
      ],
    },
    {
      img: MadhavDatt,
      name: 'Madhav Datt',
      role: 'Executive Nonprofit Advisor',
      texts: [
        'Founder - Green the Gene',
        'Former Global Representative for Youth - UN EP',
      ],
    },
    {
      img: RafiAzimKhan,
      name: 'Rafi Azim-Khan',
      role: 'Executive Legal Advisor',
      texts: [
        'Partner, IP/IT & Head Data Privacy Europe Pillsbury Winthrop Shaw Pittman LLP',
      ],
    },
    {
      img: RichardSwartzbaugh,
      name: 'Richard Swartzbaugh',
      role: 'Executive Advisor',
      texts: ['Risk Management - Curaesoft', 'J.D. - University of Iowa'],
    },
    {
      img: RonanDunlop,
      name: 'Ronan Dunlop',
      role: 'Executive Nonprofit Advisor',
      texts: [
        'Former Head of Marketing - Pivotal/VMWare',
        'VP of Marketing - Cohuman',
      ],
    },
    {
      img: MarkHaseltine,
      name: 'Mark Haseltine',
      role: 'Executive Advisor',
      texts: ['Former CTO/CPO - edX', 'Computer Science alumnus - MIT'],
    },
    {
      img: MansoorAhmed,
      name: 'Mansoor Ahmed',
      role: 'Clinical Research Advisor',
      texts: [
        'Founder & CEO - Cleveland Sleep Research Center',
        'MBBS - King Edward Medical University',
      ],
    },
    {
      img: MertPilanci,
      name: 'Mert Pilanci',
      role: 'Artificial Intelligence Advisor',
      texts: [
        'Asst. Professor of AI - Stanford University, Electrical Engineering',
      ],
    },
    {
      img: VictorWang,
      name: 'Victor Wang',
      role: 'Executive Advisor',
      texts: [
        'Founder & Chairman - China Silicon Valley',
        'MBA - Stanford Graduate School of Business',
      ],
    },
    {
      img: RokSosic,
      name: 'Rok Sosic',
      role: 'Artificial Intelligence Advisor',
      texts: ['Senior Research Engineer', 'Stanford School of Engineering'],
    },
    {
      img: MathijsDeVaan,
      name: 'Mathijs De Vaan',
      role: 'Asst. Professor - UC Berkeley',
      texts: [
        'Management of Organizations PhD Sociology - Columbia University',
      ],
    },
    {
      img: PedroSiena,
      name: 'Pedro Siena',
      role: 'Brazil Executive Advisor',
      texts: [
        'Founder and CEO - Siena Company',
        'Mentor - Stanford Lean Launchpad',
      ],
    },
    {
      img: KhwajaShaik,
      name: 'Khwaja Shaik',
      role: 'Chief Technology Officer - IBM',
      texts: [
        'MOSH, Vice Chair, Board Member',
        'Board Member - University of North Florida Computing',
      ],
    },
    {
      img: GeorgePegelow,
      name: 'George Pegelow',
      role: 'Executive Visionary Advisor',
      texts: ['Martial Arts & Philosophy Professor - Stanford University'],
    },
    {
      img: RichWalcoff,
      name: 'Rich Walcoff',
      role: 'Communications Advisor',
      texts: ['Sports Director - KGO Radio'],
    },
    {
      img: TaisukeFukuno,
      name: 'Taisuke Fukuno',
      role: 'Executive IT Advisor',
      texts: ['Founder - Open Data Japan', 'Chairman - jig.jp'],
    },
    {
      img: TsutomuIto,
      name: 'Tsutomu Ito',
      role: 'Executive Visionary Advisor',
      texts: ['Founder - Tannan FM Radio', 'Lead Architect, Bullet Train'],
    },
    {
      img: ManujAggarwal,
      name: 'Manuj Aggarwal',
      role: 'Executive AI, Strategy And Marketing Advisor',
      texts: ['Chief Innovation Officer - TetraNoodle Technologies'],
    },
    {
      img: LesAtlas,
      name: 'Dr. Les Atlas',
      role: 'Audio and Machine Learning Advisor',
      texts: [
        'Professor of Electrical and Computer Engineering - University of Washington',
        'Ph.D. Electrical Engineering, Stanford',
      ],
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
            TitleClassProps="text-center my-10 bg-transparent 
                   bg-clip-text text-transparent
                   bg-gradient-to-b from-[#38B76B] via-[#33A5AE] to-[#3578DE]"
          />

          {/* Cards Container */}
          <div className="grid grid-cols-2 gap-4 px-4 pb-24 text-white sm:gap-6 lg:gap-12 xl:grid-cols-3">
            {cards.map((card, i) => (
              <div key={i} className="relative">
                <ExportedImage
                  className="h-[225px] w-[158px] object-cover md:h-[450px] md:w-[375px]"
                  src={card.img}
                  alt={card.name}
                  basePath={basePath}
                />

                {/* apply opaque background to dim card */}
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-black bg-opacity-20 text-white"></div>

                <div className="absolute inset-x-0 top-2 px-1 text-center text-sm font-bold text-white md:text-2xl">
                  {card.role}
                </div>

                {/* Text Container */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-black bg-opacity-50 px-2 py-1 text-center md:h-40">
                  <h2 className="pb-1 text-xs font-bold md:text-2xl">
                    {card.name}
                  </h2>
                  {card.texts.map((text, i) => (
                    <div key={i} className="text-[9px] md:text-lg">
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
