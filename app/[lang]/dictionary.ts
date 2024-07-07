import { Locale } from '@/i18n-config';

const dictionaries = {
  en: () => import('../dictionaries/en/index').then((module) => module.default),
  es: () => import('../dictionaries/es/index').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
