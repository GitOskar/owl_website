// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://owl-labs.pl',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: { prefixDefaultLocale: false },
  },
});
