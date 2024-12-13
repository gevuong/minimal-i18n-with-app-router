import { type NavbarType } from '../types/navbar';

export const navbar: NavbarType = {
  home: 'ホーム',
  ourTechnology: {
    section: '技術',
    howItWorks: 'AIの仕組み',
  },
  coughCheckApp: {
    section: '咳チェックアプリ',
    covid19: 'COVID-19',
    flu: 'インフルエンザ',
    copd: 'COPD',
    rsv: 'RSV',
  },
  aboutUs: {
    section: '私たちについて',
    ourStory: '私たちのストーリー',
    advisors: 'アドバイザー',
    ourSupporters: 'サポーター',
    blog: 'ブログ',
    oneYoungWorld: 'One Young World',
  },
  media: {
    section: 'メディア',
    pressReleases: 'プレスリリース',
    ourResearch: '出版物',
  },
  faq: 'FAQ',
  donate: {
    buttonText: '寄付',
    optionsTitle: '寄付方法',
  },
};

export default navbar;
