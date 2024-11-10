import {
  FingerSnapIcon,
  GlobeIcon,
  HeartRhythmIcon,
  PhoneInHandIcon,
  RecycleIcon,
  TeamIcon,
} from '@/public/images/story';
import { type Story } from '../types/story';

const story: Story = {
  aboutUsSection: {
    title: '私たちについて',
    texts: [
      '私たちの革新的な取り組みは、医療従事者、政府、特に低所得国の患者を対象に、呼吸器疾患のより正確な事前スクリーニングを提供することを目的としています。',
      'テクノロジーで病気を早期発見し、世界の医療を革新する。私たちは、このミッションを達成するため、人々の支援と投資を募り、世界をリードする非営利団体を目指しています。',
    ],
  },
  storySection: {
    title: 'ストーリー',
    texts: [
      [
        {
          type: 'text',
          text: 'パンデミックの際、',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'Virufyの創設者アミル・カンザダは',
        },
        {
          type: 'text',
          text: 'スマートフォンの普及率の高さに着目し、またコロナウイルスが鼻や喉、肺に影響を及ぼすことを認識していました。',
        },
      ],
      [
        {
          type: 'text',
          text: 'そこで、呼吸音や咳の音を機械学習で分析することでコロナの規則性を検出できる、という仮定を立てました。',
        },
      ],
      [
        {
          type: 'text',
          text: 'ポジティブな影響を与えたいという思いから、名門大学病院で362人の患者を対象にした臨床研究を主導しました。スタンフォード大学のAIを研究する大学院生から始まったVirufyの最初のチームは、世界中の大学から集まったボランティアチームにまで拡大しています。',
        },
      ],
    ],
  },
  valuesSection: {
    title: '価値観',
    cards: [
      {
        title: '変革',
        image: RecycleIcon,
        imageText: '',
        text: '私たちは、技術を活用して、必要な変化を促進し、高額な医療システムを変革することを目指しています。',
      },
      {
        title: '協力',
        image: GlobeIcon,
        imageText: '',
        text: '私たちは、バックグラウンドに関係なく、すべての人に迅速な病気の検出を提供することを約束します。',
      },
      {
        title: '健康',
        image: HeartRhythmIcon,
        imageText: '',
        text: '私たちは、世界中のすべての人々の健康と福祉を最優先にすることを常に約束します。',
      },
      {
        title: '使いやすさ',
        image: TeamIcon,
        imageText: '',
        text: '私たちは、技術を活用して、世界中のすべての人々に病気の予防と検出を無料で提供することを目指しています。',
      },
      {
        title: '効率',
        image: FingerSnapIcon,
        imageText: '',
        text: '私たちは、簡単に使える技術を作り出し、迅速な検出を提供してウイルスの拡散を止め、命を救うことを約束します。',
      },
      {
        title: '革新',
        image: PhoneInHandIcon,
        imageText: '',
        text: '私たちは、モバイルデバイスのワンタップで病気の迅速な検出を実現することを目指しています。',
      },
    ],
  },
  privacySection: {
    title: 'プライバシーへの取り組み',
    texts: [
      'Virufyは、個人情報のプライバシーと保護を真剣に考えています。私たちの法務チームは、ウェブサイトを通じて共有された個人情報を保護するため、詳細なプライバシーポリシーとクッキーポリシーを作成しました。',
    ],
  },
};

export default story;
