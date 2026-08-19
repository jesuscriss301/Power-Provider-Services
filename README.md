# Power Provider Services — Website

A bilingual (English / Spanish) React + Vite site for **Power Provider Services LLC**, a licensed electrical contractor serving Apopka, Orlando & Central Florida. Built with `showcase-niche-demo` (structure/UX), `reactbits-design-intelligence` (motion/visual design), and `sales-offer-strategist` (copy/offer strategy) — see `Power_Provider_Services_Website_Deliverables.md` for the full write-up of those decisions.

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build      # production build → dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  main.jsx              — entry point
  App.jsx                — providers + router + layout shell
  styles/global.css      — the entire design system (brand tokens verbatim
                            from PPS_Paleta_Dark_Light.md, dark/light theme,
                            components, cookie banner, legal page styles)
  i18n/dictionary.js     — short-string EN/ES copy dictionary
  context/
    LanguageContext.jsx  — current language + t() lookup, persisted to localStorage
    ThemeContext.jsx     — dark/light theme, persisted to localStorage
    ConsentContext.jsx   — cookie consent state + gated GA/Meta loaders (see below)
  hooks/
    useReveal.js         — scroll-reveal (IntersectionObserver)
    useCountUp.js         — animated stat counters
    usePageMeta.js        — sets document.title / meta description per page+language
  components/            — one file per section/UI piece (Header, Hero, Services,
                            WhyChooseUs, SplitSection, Process, Testimonial, FAQ,
                            ServiceArea, Contact, Footer, CookieBanner, CookieModal,
                            LightningCanvas, icons.jsx, …)
  pages/
    Home.jsx              — assembles all homepage sections
    PrivacyPolicy.jsx      — renders privacyContent.js
    privacyContent.js      — full bilingual Privacy Policy & Cookies copy
```

## Cookies, Google Analytics & Meta Ads

Nothing analytics- or advertising-related loads today. The cookie banner (bottom of every page on first visit) lets a visitor accept all, reject non-essential, or customize by category — necessary (always on), analytics, and advertising — and the choice is stored in `localStorage` under `pps-cookie-consent`.

When you're ready to turn on Google Analytics and/or Meta Ads:

1. Open `src/context/ConsentContext.jsx`.
2. Drop the real GA snippet into `loadAnalyticsIfConsented()`.
3. Drop the real Meta Pixel snippet into `loadMarketingIfConsented()`.

Both functions already only run once, and only after the visitor has opted into that specific category — including if they change their mind later via "Cookie Preferences" in the footer. You don't need to touch the banner, the modal, or the consent-storage logic; that plumbing is done.

**Before flipping those on**, have `src/pages/privacyContent.js` reviewed by an attorney — it currently describes the site's *current* (no-tracking) state and proactively discloses that GA/Meta are planned; once they're actually live, update the "Status today" column of the cookies table and the “planned” language in section 4 to reflect that they're active, and confirm the disclosures still match applicable law in whatever states/countries you're targeting with ads.

## Content sourcing

Every fact on this site (services, license number, years in business, BBB rating, the one Yelp review, hours, service area, Procore status) comes only from the company-supplied documentation. Nothing was invented. Two things need the owner's input before this goes fully live — see §9 "Open items" in `Power_Provider_Services_Website_Deliverables.md`:

1. The source documents list two different business addresses (BBB vs. Yelp/Procore) — the site intentionally doesn't publish a street address until that's confirmed.
2. Only one public review was available to feature.

## Image assets

No stock photography is embedded in this project (per instructions — never download/generate images). `Power_Provider_Services_Website_Deliverables.md` §10 has a table of real, currently-live source URLs to choose from; once photos are picked, drop them into `src/assets/` and reference them from the relevant component (`SplitSection.jsx` media panel, etc.).
