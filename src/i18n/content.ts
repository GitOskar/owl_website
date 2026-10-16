import type { Lang } from './ui';
import aboutEn from '../data/en/about.json';
import aboutPl from '../data/pl/about.json';
import experienceEn from '../data/en/experience.json';
import experiencePl from '../data/pl/experience.json';
import servicesEn from '../data/en/services.json';
import servicesPl from '../data/pl/services.json';
import contactEn from '../data/en/contact.json';
import contactPl from '../data/pl/contact.json';

export const content = {
  en: { about: aboutEn, experience: experienceEn, services: servicesEn, contact: contactEn },
  pl: { about: aboutPl, experience: experiencePl, services: servicesPl, contact: contactPl },
} satisfies Record<Lang, object>;
