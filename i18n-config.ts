export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'es'],
} as const; // properties are readonly

// construct a union type of all elements in 'locales'
export type Locale = (typeof i18n)['locales'][number];
