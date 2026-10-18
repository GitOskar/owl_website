// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://owl-labs.pl',
  base: process.env.BASE_PATH ?? '/',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    routing: { prefixDefaultLocale: false },
  },
});
