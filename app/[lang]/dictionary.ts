import { Locale } from '@/i18n-config';
import enMetadata from '../dictionaries/en/index';
import esMetadata from '../dictionaries/es/index';
import { I18nData } from '../dictionaries/types';

const dictionaries: Record<Locale, I18nData> = {
  en: enMetadata,
  es: esMetadata,
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};
