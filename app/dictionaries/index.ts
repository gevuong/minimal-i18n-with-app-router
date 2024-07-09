import { type Locale } from '@/i18n-config';
import enMetadata from './en/index';
import esMetadata from './es/index';
import { type I18nData } from './types';

const dictionaries: Record<Locale, I18nData> = {
  en: enMetadata,
  es: esMetadata,
};

export const getDictionary = (locale: Locale) => {
  return dictionaries[locale] ?? dictionaries.en;
};
