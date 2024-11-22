import {
  AyomideOwoyemi,
  FaisalCheema,
  FumihikoYokota,
  HiroyukiKunishima,
  JureLeskovec,
  KaraMeister,
  KhwajaShaik,
  KutsunaSatoshi,
  LesAtlas,
  MadhavDatt,
  MansoorAhmed,
  ManujAggarwal,
  MarkHaseltine,
  MayXu,
  MelissaDyrdahl,
  MertPilanci,
  NobuyoOzawa,
  RafiAzimKhan,
  RichardNall,
  RokSosic,
  RonanDunlop,
  TetsujiMadarame,
  TsutomuIto,
  VictorWang,
  YukitoshiNakatani,
} from '@/public/images/advisors';
import { type People } from '../types/people';

const people: People = {
  titleImage: '私たちは世界中から団結し、咳一つ一つから感染症を克服します。',
  sectionMeetOurFounder: {
    titleMeetOurFounder: '創設者紹介',
    titleAmil: 'アミル・カンザダ',
    textAmil:
      '福井大学工学博士候補。元UCバークレー経営学修士＆工学修士（データサイエンス）共同学位プログラム学生。',
    button: 'アミルのストーリーを読む',
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
        img: KutsunaSatoshi,
        name: '忽那賢志',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: ['感染制御医学講座(感染制御学)ー大阪大学'],
      },
      {
        img: MadhavDatt,
        name: 'マダブ・ダット',
        role: 'エグゼクティブ非営利アドバイザー',
        texts: ['Green the Gene創設者', '国連環境計画元青年代表'],
      },
      {
        img: MayXu,
        name: 'メイ・シュウ',
        role: 'データ・AI製品戦略アドバイザー',
        texts: ['創設者 / エグゼクティブコーチ', 'MS- スタンフォード大学'],
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
        img: FaisalCheema,
        name: 'ファイサル・チーマ',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: [
          'ヒューストン大学ティルマン・フェルティッタ医科大学　生命医学・臨床科学准教授',
        ],
      },
      {
        img: MertPilanci,
        name: 'メルト・ピランチ',
        role: '人工知能アドバイザー',
        texts: ['スタンフォード大学電気工学AI助教授'],
      },
      {
        img: TetsujiMadarame,
        name: '斑目哲司',
        role: 'Pプリンシパルフェロー・技術計画・日本郵船',
        texts: [
          'theDOCK 海事・物流テックVC 投資諮問委員会　取締役',
          'MBA - スタンフォード経営大学院',
        ],
      },
      {
        img: YukitoshiNakatani,
        name: '中谷幸俊',
        role: '日本エグゼクティブ・アドバイザー',
        texts: [
          'ITバリューコンサルティング社　CEO',
          'アクセンチュア日本法人　元ディレクター',
        ],
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
        img: RichardNall,
        name: 'リチャード・ノール',
        role: 'マーケティイングアドバイザー',
        texts: [
          'CEO - The Brand Garden',
          'Henleyビジネススクール - 組織リーダーシップ修士号',
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
        img: AyomideOwoyemi,
        name: 'アヨミデ・オウォイェミ',
        role: 'エグゼクティブ・臨床アドバイザー',
        texts: [
          'イリノイシカゴ大学　生命医科学博士号',
          'One Young World　ナイジェリア大使',
        ],
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
      {
        img: NobuyoOzawa,
        name: '小澤信与',
        role: '日本臨床開発リード',
        texts: ['臨床開発部グループマネージャー'],
      },
      {
        img: HiroyukiKunishima,
        name: '國島広之',
        role: '感染症アドバイザー',
        texts: ['感染症学講座聖マリアンナ医科大学病院'],
      },
      {
        img: FumihikoYokota,
        name: '横田文彦',
        role: '公衆衛生アドバイザー',
        texts: ['疫学准教授　九州大学'],
      },
    ],
  },
};

export default people;
