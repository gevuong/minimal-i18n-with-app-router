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
  titleImage: '私たちは世界中から団結し、咳一つで感染症を克服します。',
  sectionMeetOurFounder: {
    titleMeetOurFounder: '創設者紹介',
    titleAmil: 'アミル・カンザダ',
    textAmil:
      '福井大学工学博士候補。元UCバークレー経営学修士＆工学修士（データサイエンス）共同学位プログラム学生。',
    button: '続きを読む',
  },
  sectionAdvisors: {
    title: 'アドバイザー',
    advisors: [
      {
        img: KaraMeister,
        name: 'カラ・マイスター医学博士',
        role: '臨床アドバイザー',
        texts: ['スタンフォード医科大学耳鼻咽喉科臨床助教授'],
      },
      {
        img: JureLeskovec,
        name: 'ユーリ・レスコヴェック博士',
        role: '人工知能アドバイザー',
        texts: [
          'Pinterestチーフサイエンティスト',
          'スタンフォード大学AI准教授',
        ],
      },
      {
        img: MelissaDyrdahl,
        name: 'メリッサ・ダイダール',
        role: 'エグゼクティブマーケティングアドバイザー',
        texts: [
          '元Adobe最高マーケティング責任者',
          'CommonSpirit Health理事会メンバー',
        ],
      },
      {
        img: AnaisRameau,
        name: 'アナイス・ラモー医学博士',
        role: 'エグゼクティブマーケティングアドバイザー',
        texts: ['コーネル大学耳鼻咽喉科助教授', 'マギル大学医学博士'],
      },
      {
        img: MadhavDatt,
        name: 'マダブ・ダット',
        role: 'エグゼクティブ非営利アドバイザー',
        texts: ['Green the Gene創設者', '国連環境計画元青年代表'],
      },
      {
        img: RafiAzimKhan,
        name: 'ラフィ・アジム・カーン',
        role: 'エグゼクティブ法務アドバイザー',
        texts: [
          'ピルズベリーローレンスウィンショーLLP欧州データプライバシー部門リーダー、IP/ITパートナー',
        ],
      },
      {
        img: RichardSwartzbaugh,
        name: 'リチャード・スワーツバウ',
        role: 'エグゼクティブアドバイザー',
        texts: ['リスク管理 - Curaesoft', 'アイオワ大学法学博士'],
      },
      {
        img: RonanDunlop,
        name: 'ローナン・ダンロップ',
        role: 'エグゼクティブ非営利アドバイザー',
        texts: [
          '元Pivotal/VMWareマーケティング責任者',
          'Cohumanマーケティング副社長',
        ],
      },
      {
        img: MarkHaseltine,
        name: 'マーク・ハセルトン',
        role: 'エグゼクティブアドバイザー',
        texts: ['元edX CTO/CPO', 'MITコンピュータサイエンス卒業生'],
      },
      {
        img: MansoorAhmed,
        name: 'マンスール・アーメッド',
        role: '臨床研究アドバイザー',
        texts: [
          'Cleveland Sleep Research Center創設者兼CEO',
          'キングエドワード医科大学MBBS',
        ],
      },
      {
        img: MertPilanci,
        name: 'メルト・ピランチ',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード大学電気工学AI助教授'],
      },
      {
        img: VictorWang,
        name: 'ヴィクター・ワン',
        role: 'エグゼクティブアドバイザー',
        texts: [
          'China Silicon Valley創設者兼会長',
          'スタンフォード経営大学院MBA',
        ],
      },
      {
        img: RokSosic,
        name: 'ロック・ソシック',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード工学部シニアリサーチエンジニア'],
      },
      {
        img: MathijsDeVaan,
        name: 'マタイス・デ・ヴァーン',
        role: 'UCバークレー助教授',
        texts: ['コロンビア大学組織管理社会学博士'],
      },
      {
        img: PedroSiena,
        name: 'ペドロ・シエナ',
        role: 'ブラジルエグゼクティブアドバイザー',
        texts: [
          'Siena Company創設者兼CEO',
          'スタンフォードLean Launchpadメンター',
        ],
      },
      {
        img: KhwajaShaik,
        name: 'クワジャ・シャイク',
        role: 'IBM最高技術責任者',
        texts: [
          'MOSH副会長、取締役会メンバー',
          'ノースフロリダ大学コンピューティング理事会メンバー',
        ],
      },
      {
        img: GeorgePegelow,
        name: 'ジョージ・ペゲロー',
        role: 'エグゼクティブビジョナリーアドバイザー',
        texts: ['スタンフォード大学武道・哲学教授'],
      },
      {
        img: RichWalcoff,
        name: 'リッチ・ウォルコフ',
        role: 'コミュニケーションアドバイザー',
        texts: ['KGOラジオスポーツディレクター'],
      },
      {
        img: TaisukeFukuno,
        name: '福野泰介',
        role: 'エグゼクティブITアドバイザー',
        texts: ['Open Data Japan創設者', 'jig.jp会長'],
      },
      {
        img: TsutomuIto,
        name: '伊藤勉',
        role: 'エグゼクティブビジョナリーアドバイザー',
        texts: ['Tannan FMラジオ創設者', '新幹線主任設計者'],
      },
      {
        img: ManujAggarwal,
        name: 'マヌージ・アッガルワル',
        role: 'エグゼクティブAI、戦略およびマーケティングアドバイザー',
        texts: ['TetraNoodle Technologies最高イノベーション責任者'],
      },
      {
        img: LesAtlas,
        name: 'レス・アトラス博士',
        role: 'オーディオおよび機械学習アドバイザー',
        texts: [
          'ワシントン大学電気・コンピュータ工学教授',
          'スタンフォード大学電気工学博士',
        ],
      },
    ],
  },
};

export default people;
