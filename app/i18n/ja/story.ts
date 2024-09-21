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
      '私たちの革新的なアプローチは、特に低所得国の患者、医療従事者、政府に対して、優れたCOVID事前スクリーニングを提供することを目的としています。',
      '私たちは、テクノロジーを活用した病気の識別において、グローバルな医療を変革し、この使命を共に支援し投資するよう他者を鼓舞する、リーディング非営利団体を目指しています。',
    ],
  },
  storySection: {
    title: 'ストーリー',
    texts: [
      [
        {
          type: 'text',
          text: 'パンデミックが発生したとき、',
        },
        {
          type: 'link',
          url: '/amils-story',
          text: 'Virufyの創設者、アミル・カンザダ',
        },
        {
          type: 'text',
          text: 'は、スマートフォンが広く普及しており、COVIDが鼻、喉、肺に影響を与えることを知っていました。',
        },
      ],
      [
        {
          type: 'text',
          text: '彼は、呼吸音や咳音を機械学習で分析してCOVIDのパターンを検出できると仮定しました。',
        },
      ],
      [
        {
          type: 'text',
          text: '彼はポジティブな影響を与えるため、著名な大学病院で362人の患者を対象にした臨床研究を主導しました。Stanford大学のAI卒業生から始まったVirufyの最初のチームは、世界中の大学から集まったボランティアにより拡大しました。',
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
        text: '私たちは、背景に関係なく、すべての人に迅速な病気の検出を提供することを約束します。',
      },
      {
        title: '健康',
        image: HeartRhythmIcon,
        imageText: '',
        text: '私たちは、世界中のすべての人々の健康と福祉を最優先にすることを常に約束します。',
      },
      {
        title: '手頃な価格',
        image: TeamIcon,
        imageText: '',
        text: '私たちは、技術を活用して、世界中のすべての人々に病気の予防と検出を無料で提供することを目指しています。',
      },
      {
        title: '効率',
        image: FingerSnapIcon,
        imageText: '',
        text: '私たちは、直感的な技術を作り出し、迅速な検出を提供してウイルスの拡散を止め、命を救うことを約束します。',
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
      'Virufyは、あなたの個人情報のプライバシーと保護を真剣に考えています。私たちの法務チームは、ウェブサイトを通じて共有された個人情報を保護するため、詳細なプライバシーポリシーとクッキーポリシーを準備しました。',
    ],
  },
};

export default story;
