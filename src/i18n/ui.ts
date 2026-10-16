export const languages = ['en', 'pl'] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    title: 'OWL — Oskar Wołosiuk Labs',
    description:
      'Oskar Wołosiuk Labs — software engineering for B2B contracts, permanent roles and private commissions. Backend, payments, fintech.',
    navMain: 'Main',
    navSections: 'Sections',
    backToTop: 'Back to top',
    scrollToContent: 'Scroll to content',
    about: 'About',
    experience: 'Experience',
    services: 'Services',
    contact: 'Contact',
    stack: 'Stack',
    company: 'Company',
    copyEmail: 'Copy email address',
    emailCopied: 'Email address copied',
    copyFailed: 'Copying failed',
    language: 'Language',
  },
  pl: {
    title: 'OWL — Oskar Wołosiuk Labs',
    description:
      'Oskar Wołosiuk Labs — inżynieria oprogramowania w modelu B2B, na etacie i w zleceniach prywatnych. Backend, płatności, fintech.',
    navMain: 'Główna',
    navSections: 'Sekcje',
    backToTop: 'Wróć na górę',
    scrollToContent: 'Przewiń do treści',
    about: 'O mnie',
    experience: 'Doświadczenie',
    services: 'Usługi',
    contact: 'Kontakt',
    stack: 'Technologie',
    company: 'Firma',
    copyEmail: 'Skopiuj adres e-mail',
    emailCopied: 'Adres e-mail skopiowany',
    copyFailed: 'Nie udało się skopiować',
    language: 'Język',
  },
} satisfies Record<Lang, Record<string, string>>;

export const languageNames: Record<Lang, string> = { en: 'English', pl: 'Polski' };

export const homePath = (lang: Lang) => (lang === defaultLang ? '/' : `/${lang}/`);
