# OWL — Oskar Wołosiuk Labs

Company website built with [Astro](https://astro.build). Available in English (`/`) and Polish (`/pl/`).

## Getting started

Requires Node.js 22.22+ (version from `.nvmrc`, e.g. `nvm use`).

```sh
npm install      # once, installs dependencies
npm run dev      # live preview: http://localhost:4321
npm run build    # production build goes to dist/
npm run preview  # preview the built site
```

## Structure

```
public/                 files copied as is (favicon)
src/
  layouts/Base.astro    HTML shell, fonts, meta, smooth scrolling to anchors
  components/
    OwlLogo.astro       animated logo (intro, blinking, eyes follow the cursor)
    OwlMark.astro       small owl for the navigation and footer
    Hero.astro          landing section: logo, zoom on scroll
    Nav.astro           top bar, appears after scrolling past the hero
    LangSwitch.astro    language switcher
    Spotlight.astro     glow of dots and card borders around the cursor
    Home.astro          home page, composes the sections
    About.astro         about, stack, facts
    Experience.astro    experience
    Services.astro      services
    Contact.astro       contact, links, company details
  data/
    en/*.json           English section content
    pl/*.json           Polish section content
    contact.json        shared contact details
  i18n/
    ui.ts               languages, interface texts, helpers
    content.ts          section content per language
  pages/
    index.astro         English home page
    pl/index.astro      Polish home page
  styles/global.css     colors, typography, shared styles
owl.svg, owl-animacja.html   logo source files
```

Content lives in `src/data/{en,pl}/*.json` and interface texts in `src/i18n/ui.ts`; components only render them.
