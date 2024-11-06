import { type NavbarType } from '../types/navbar';

export const navbar: NavbarType = {
  home: 'ホーム',
  ourTechnology: {
    section: '技術',
    howItWorks: 'AIの仕組み',
    OurResearch: '出版物',
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
    ourPeople: '私たちのメンバー',
    ourSupporters: 'サポーター',
    blog: 'ブログ',
    oneYoungWorld: 'One Young World',
  },
  faq: 'FAQ',
  donate: {
    buttonText: '寄付',
    optionsTitle: 'お支払い方法',
  },
};

export default navbar;
