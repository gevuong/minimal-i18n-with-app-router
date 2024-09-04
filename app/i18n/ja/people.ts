import {
  AnaisRameau,
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
import { type People } from '../types/people';

const people: People = {
  titleImage:
    'Nos unimos desde todo el mundo para derrotar al COVID-19 tos a la vez.',
  sectionMeetOurFounder: {
    titleMeetOurFounder: 'Conoce a nuestro fundador',
    titleAmil: 'Amil Khanzada',
    textAmil:
      'Candidato a MBA, Haas School of Business Candidato a Maestría en Ingeniería, Departamento de Ingeniería Eléctrica y Ciencias de la Computación',
    button: 'LEER MÁS',
  },
  sectionAdvisors: {
    title: 'Asesores',
    advisors: [
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
    ],
  },
};

export default people;
