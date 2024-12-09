import { type Locale } from '@/i18n-config';
import enMetadata from './en/index';
import jaMetadata from './ja/index';
import arMetadata from './ar/index';
import { type I18nData } from './types';

const i18n: Record<Locale, I18nData> = {
  en: enMetadata,
  ja: jaMetadata,
  ar: arMetadata,
};

export const usei18n = (locale: Locale) => {
  return i18n[locale] ?? i18n.en;
};
