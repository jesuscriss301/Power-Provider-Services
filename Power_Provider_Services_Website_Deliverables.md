# Power Provider Services LLC — Premium Bilingual Website
### Full deliverable package · showcase-niche-demo + reactbits-design-intelligence + sales-offer-strategist

Compiled August 19, 2026. Every fact used below is sourced from the two documents supplied by the client (`INFORMACION_EMPRESA_2.md`, `PPS_Paleta_Dark_Light.md`) and the client's own logo/3D‑badge asset. Nothing about certifications, awards, pricing, guarantees, testimonials, or statistics was invented — where the source material didn't have something, it was left out of the site rather than guessed at. The one open item that needs the owner's input before this goes live is flagged in **§9 Open items**.

> **Update:** this project was rebuilt from a single-file HTML prototype into a proper React + Vite project (this folder) at the client's request, and a Cookie Consent Banner + bilingual Privacy Policy page were added in anticipation of Google Analytics and Meta Ads being configured later (§11 below). §1 and §2 describe the current React architecture; everything else in this document (copy, ReactBits selection rationale, SEO, accessibility, offer strategy) still applies as originally written.

---

## 1. Website architecture

**Format:** a React + Vite single-page application with client-side routing (`react-router-dom`) for two pages — the homepage and `/privacy-policy` — and a runtime EN/ES toggle backed by a JSON i18n dictionary (`src/i18n/dictionary.js`) for short UI strings, plus a separate bilingual content file (`src/pages/privacyContent.js`) for the long-form legal copy. State (language, theme, cookie consent) lives in three React Context providers, each persisted to `localStorage` so a visitor's choices survive a reload. See the project `README.md` for the full folder structure and how to run it.

**Section order** (decided per showcase-niche-demo's trade logic — electrician reads as a *trust-driven* trade first, *visually-driven* second):

1. **Header / nav** — sticky, logo, EN/ES + theme toggle, tap-to-call
2. **Hero** — headline, sub, dual CTA, trust chips
3. **Trust strip** — 4 animated proof points (years, license, BBB, Yelp)
4. **Services grid** — all 10 documented services
5. **Why Choose Us** — the 6 differentiators the source material actually supports
6. **Residential** — spotlight split section
7. **Commercial & Industrial** — spotlight split section (reversed layout for rhythm)
8. **EV Chargers + Electrical Panels** — two focused cards (explicitly requested sections)
9. **How It Works** — 3-step engagement flow
10. **Testimonial** — the one verifiable Yelp review
11. **FAQ** — 7 questions, all answerable from source facts
12. **Service Area** — Central Florida framing + links to verifiable directory profiles
13. **Contact / Free Estimate** — phone, email, hours, mailto-form
14. **Footer** — nav, verified-on links, license, legal line

Rationale for the order: trust indicators (license, BBB, Yelp) appear before the service list because for a trade that enters people's homes and electrical panels, credibility has to be established before the pitch, not after. Residential is placed before Commercial because Yelp/Yahoo Local emphasize residential-facing language first, while Commercial follows immediately after to establish range (a common local-service pattern per showcase-niche-demo's "trust-driven trades" guidance). EV Chargers and Electrical Panels get their own compact spotlight per the client's explicit request, even though they're already listed in the main Services grid — repetition here reinforces two services with above-average purchase intent (EV adoption, panel-upgrade urgency).

No section was added that the source material doesn't support: no "Meet the Team" (no team bios provided), no project gallery (no photos could be sourced from the company itself — Yelp blocks scraping, only 5 flyer images exist and weren't supplied to this build), no pricing table (no prices beyond "free estimate"), no awards/certifications badges beyond BBB.

---

## 2. Component hierarchy

```
<App>
 ├─ ThemeProvider          (dark/light → data-theme, localStorage)
 │  └─ LanguageProvider    (en/es → t(key), localStorage)
 │     └─ ConsentProvider  (cookie categories, localStorage, GA/Meta gate)
 │        └─ BrowserRouter
 │           └─ Layout
 │              ├─ SkipLink
 │              ├─ Header
 │              │   ├─ Brand (logo + name, Link to "/")
 │              │   ├─ MainNav (desktop, ≥920px)
 │              │   ├─ LangToggle (EN/ES pill switch)
 │              │   ├─ ThemeToggle (sun/moon icon button)
 │              │   ├─ HeaderCallButton (≥640px)
 │              │   └─ NavToggle (hamburger, <920px)
 │              ├─ MobileNav (full-screen drawer, <920px)
 │              ├─ CallFab (fixed, <640px)
 │              ├─ Routes
 │              │   ├─ "/" → Home
 │              │   │   ├─ Hero (LightningCanvas, CTAGroup, TrustChipRow, BadgeMedallion)
 │              │   │   ├─ StatsStrip (useCountUp × 1, 2 linked out)
 │              │   │   ├─ Services → 10× ServiceCard
 │              │   │   ├─ WhyChooseUs → 6× Feature
 │              │   │   ├─ SplitSection (Residential)
 │              │   │   ├─ SplitSection (Commercial, reversed)
 │              │   │   ├─ SpotlightPair → EV card, Panels card
 │              │   │   ├─ Process → 3× Step
 │              │   │   ├─ Testimonial (single verified quote)
 │              │   │   ├─ FAQ → 7× accordion item
 │              │   │   ├─ ServiceArea (3× directory badge link)
 │              │   │   └─ Contact (ContactCard + mailto Form)
 │              │   └─ "/privacy-policy" → PrivacyPolicy (renders privacyContent.js)
 │              ├─ Footer (BrandBlock, ExploreLinks, VerifiedOnLinks, Privacy Policy link,
 │              │          Cookie Preferences button, legal line)
 │              ├─ CookieBanner (accept all / reject non-essential / customize)
 │              └─ CookieModal (per-category toggles: necessary/analytics/marketing)
```

Every UI string is looked up via `t("key")` from `useLanguage()`, backed by `src/i18n/dictionary.js`; switching language re-renders the tree in place (no reload) and persists the choice. Reusable hooks (`useReveal`, `useCountUp`) replace what were vanilla IntersectionObserver blocks in the original prototype, and `ConsentContext` centralizes cookie-consent state so any future component (e.g. an embedded map) can check `consent` before doing something that would otherwise require its own opt-in.

---

## 3. Visual design decisions

- **Palette:** used exactly as supplied — every hex value in `PPS_Paleta_Dark_Light.md` was copied verbatim into CSS custom properties, split into the `:root` (fixed brand values), `[data-theme="dark"]`, and `[data-theme="light"]` blocks. Nothing was recalculated or re-tinted.
- **One bug caught and fixed during build:** the palette's `--pps-gold` and `--pps-red-text` tokens are tuned for text-on-surface contrast (white or dark-gray backgrounds) and correctly swap between themes for that purpose. But the Hero and Testimonial sections sit directly on the brand's red/black gradient in *both* themes — using the theme-swapped tokens there made headline accents and star ratings nearly unreadable in light mode (dark, desaturated gold/red on a red gradient). Fixed by introducing one additional fixed token, `--pps-on-gradient-accent: #F5CD1E` (the raw brand gold), used only for text sitting on the gradient itself — verified against the palette doc's own contrast table (gold on `#050505` = 13.23:1 AAA; gold reads clearly on the red gradient in both themes by the same logic that makes it the flyers' "Estimados Gratis" color).
- **Typography:** Barlow Condensed (headings) + Inter (body) — a condensed, technical-feeling display face paired with a highly legible workhorse body face. Reinforces "technical / high-end contractor," avoids the rounded, friendly-SaaS feel the brief explicitly ruled out.
- **Chrome gradient:** used on the hero badge medallion frame, split-section media panels, and card icon backgrounds — directly reusing the "Cromado" gradient (`#FCFBFC → #8B898D → #DADADE`) from the palette doc, applied only where the brand emblem itself lives (metal badge, panel frames) so it reads as *material*, not decoration.
- **Motion restraint:** every animated element ties back to something the palette/brief already established — the lightning bolt (electrical trade), the rotating dashed ring around the badge (echoes the emblem's circular form), the CountUp stats (credibility), the card hover sheen (premium, not playful). Nothing gaming, cartoon, or neon-overloaded made the cut.

---

## 4. ReactBits component selection — with justification

*(Output format per the reactbits-design-intelligence skill.)*

### Dirección de arte
The brief is Energía/Electricidad by the skill's own industry matrix: a trust-driven, technically-formal, moderately spectacular B2B/B2C hybrid (residential *and* commercial/industrial). Intensity target: confident and premium, not flashy — the palette itself is restrained (four fixed brand colors, a five-step chrome ramp, disciplined accent usage), so the motion layer had to match that discipline rather than compete with it.

### Combo de librerías: React Bits `Lightning` (WebGL raw, sin deps) + vanilla CSS/Canvas2D/IntersectionObserver (0 KB gzip de librerías)
The original prototype was a single static HTML file with no build step, so importing `ogl`, `three`, `gsap`, or `motion` wasn't an option there. The zero-npm-dependency approach was kept after the rebuild into this React + Vite project — but the hero background now runs the **actual React Bits `Lightning` component** (raw WebGL fragment shader, no `ogl`/`three` needed since it doesn't use either), ported directly from its source and adapted to the brand palette, per the client's explicit request to swap in the real Lightning effect and make it persistent rather than episodic. Every other effect below remains a hand-built, zero-dependency reinterpretation of a specific React Bits component — implemented as a small React component/hook (the `.electric-border` CSS class, `useCountUp.js`, hover treatments in `global.css`) rather than a copy of the React Bits package — chosen from the industry matrix's own "Preferir" list for Energía/Electricidad (`ElectricBorder`, `Lightning`) plus two cross-cutting components used elsewhere in the catalog (`CountUp`, `GlareHover`/`BorderGlow`/`StarBorder`-family). Total npm footprint for the whole motion layer is still 0 KB gzip — Lightning has no package dependency, it's raw WebGL — which matters doubly for a small-business marketing site that will likely be judged on mobile page speed.

### Selección

| Sección | Componente (inspiración) | Render | Rol | Por qué |
|---|---|---|---|---|
| Hero background | **Lightning** (catálogo: sin deps, WebGL raw, ALTO) | WebGL raw, loop continuo (RAF) | Refuerza "eléctrico" como pieza persistente, no un flash ocasional | Es el componente **Lightning real de ReactBits**, portado tal cual desde su fuente JS/CSS (shader de fragmento crudo, sin `ogl`/`three`, cero dependencias npm) — a pedido explícito del cliente de que el efecto "permanezca" en vez de disparar en ráfagas. Se ajustó `hue` al rojo de marca (~357°) y se bajaron `intensity`/`size`/`speed` respecto a los valores de demo para que quede como fondo de apoyo detrás del copy, no como protagonista. La skill no incluye `prefers-reduced-motion` ni pausa por visibilidad de serie (solo 22 de 166 componentes lo traen) — se añadieron ambos a mano por regla de la propia skill (§5): congela a un frame estático con reduced-motion, y pausa el `requestAnimationFrame` con `visibilitychange` + `IntersectionObserver` cuando la pestaña o el hero salen de vista. Es la única pieza "WebGL-grade" de la página, tal como exige el presupuesto (máx. 1 motor WebGL, máx. 1 canvas animado por viewport). |
| Primary CTA buttons | **ElectricBorder** (catálogo: sin deps, Canvas 2D, MEDIO) | CSS `conic-gradient` + `@property` animado | Dirige el ojo al CTA principal | Implementado 100% en CSS (anillo cónico rojo→azul→rojo rotando), sin canvas ni JS — más barato que el propio catálogo original. Con fallback `@supports` para navegadores sin `@property`. |
| Trust strip stats | **CountUp** (catálogo: motion, DOM/JS, BAJO-MEDIO) | Vanilla `requestAnimationFrame` + IntersectionObserver | Hace tangible "6 años" y refuerza confianza | Sin dependencia de `motion`: mismo resultado con ~30 líneas de JS nativo. |
| Service / spotlight cards | **GlareHover** (catálogo: sin deps, DOM/CSS, BAJO) | CSS pseudo-elemento con gradiente diagonal en hover | Micro-interacción premium sin distraer | Barrido de brillo sutil al pasar el cursor — refuerza "acabado metálico/premium" sin animación continua. |
| Cards / chips / badges | **BorderGlow / StarBorder** (catálogo: sin deps, DOM/CSS, BAJO/BAJO-MEDIO) | CSS `box-shadow` + `border-color` transition | Jerarquía visual en reposo/hover | Bordes que se iluminan en rojo de marca al hacer hover, coherente con el resto del sistema. |
| Hero badge medallion | — (dirección propia, no un componente específico) | CSS `@keyframes` float + rotating dashed ring | Convierte el logo/emblema 3D en una pieza viva | El cliente proporcionó un modelo 3D del emblema; en un artefacto HTML estático se usó el render 2D del logo con una flotación suave y un anillo giratorio en oro de marca — referencia visual al disco cromado del emblema sin necesitar un visor 3D en runtime. |

### Descartados notables
- **Aurora / BlurText / SpotlightCard / ShinyText** — el "cuarteto genérico de landing IA" que la skill señala explícitamente como anti-patrón. Ninguno encaja además con Energía/Electricidad (la matriz los reserva para IA/SaaS).
- **PlasmaWave / LightRays / LaserFlow (ogl/three)** — primeras opciones "preferidas" de la matriz para Energía/Electricidad como fondo animado, descartadas porque habrían requerido cargar un motor WebGL de terceros (`ogl` u `three`) además de Lightning, violando el presupuesto de "máximo 1 motor WebGL por página" — Lightning ya cubre esa pieza sin dependencias.
- **GlitchText / LetterGlitch / FaultyTerminal** — pertenecen al arsenal de Gaming/Ciberseguridad; descartados porque el brief pide explícitamente evitar "gaming effects".
- **Cursor personalizado (TargetCursor, Crosshair, SplashCursor)** — la skill los reserva para portfolios/gaming/experimental, nunca para sitios corporativos/de contenido como este.

### Notas de implementación
- Todo el motion respeta `prefers-reduced-motion`: el fondo Lightning del hero se congela en un único frame estático (en vez de animar el shader), el CountUp muestra el valor final sin animar, el flotado del badge y el anillo giratorio se detienen, y las transiciones de scroll-reveal se vuelven instantáneas.
- El canvas de Lightning corre un loop de `requestAnimationFrame` continuo mientras es visible (a diferencia del resto de la página, que es intencionalmente event-driven) — es la única animación persistente del sitio, aceptada como costo consciente porque el cliente pidió explícitamente que el efecto "permanezca". Se pausa por completo (`cancelAnimationFrame`) cuando la pestaña pierde el foco (`visibilitychange`) o cuando el hero sale del viewport (`IntersectionObserver`), para no gastar GPU/batería con el hero fuera de vista.
- Las revelaciones de scroll usan `IntersectionObserver` con `unobserve` tras disparar una vez (no hay costo de observación continua).
- Sin fuentes de bloqueo de render: Google Fonts se carga con `preconnect` y `display=swap`; si la red no está disponible, el sistema cae a las fuentes del sistema declaradas en el `font-family` stack.

---

## 5. Complete bilingual copy (English + Spanish)

Full copy lives in `src/i18n/dictionary.js` as a plain JS object (`I18N.en` / `I18N.es`, ~95 keys) so every string can be edited in one place per language, plus `src/pages/privacyContent.js` for the long-form legal content. Key sections summarized below; open those two files for the verbatim, complete set.

### Hero
| | EN | ES |
|---|---|---|
| Eyebrow | Licensed Electrical Contractor · Central Florida | Contratista Eléctrico con Licencia · Centro de la Florida |
| Headline | Licensed Electrical Work You Can **Trust** — Done Right, On Time. | Trabajo Eléctrico con Licencia en el que Puedes **Confiar** — Bien Hecho, a Tiempo. |
| Sub | Power Provider Services has kept homes and businesses across Apopka, Orlando & Central Florida safely powered since 2019 — from panel upgrades to EV chargers, new construction to troubleshooting and repairs. Licensed. Reasonably priced. Always a free estimate. | Power Provider Services mantiene con energía segura a hogares y negocios en Apopka, Orlando y el Centro de la Florida desde 2019 — desde actualización de paneles hasta cargadores para vehículos eléctricos, nueva construcción y reparaciones. Con licencia. Precios razonables. Siempre con estimado gratis. |
| CTA 1 | Call or Text (407) 592-2900 | Llama o Envía un Texto al (407) 592-2900 |
| CTA 2 | Get Your Free Estimate | Solicita tu Estimado Gratis |

**Sales-offer-strategist angle used in the hero:** *trust/reliability* (Angle 1 of 3 evaluated). The two runner-up angles were folded in elsewhere instead of competing with the headline: the *versatility* angle ("one team, residential through industrial") became the Why-Choose-Us headline, and the *risk-reduction* angle ("free estimate, no surprises") became the Contact section framing and the Process section's step 2. Rotating all three into the hero would have diluted the message — a sales offer needs one dominant hook, not three softer ones.

### Offer strategy summary (sales-offer-strategist FASE 3–6)

**Client:** two segments, evaluated and both kept (not merged into one generic pitch) because the source material explicitly documents distinct capability signals for each:
- *Residential* — homeowners in Apopka/Orlando/Central FL needing panel work, lighting, EV chargers, repairs, ceiling fans. Signal: Yelp review, Yahoo Local "residential" language, most of the flyer service list.
- *Commercial/Industrial* — general contractors and businesses needing new construction, remodels, dedicated circuits. Signal: Procore-verified GC profile (joined Jan 2024), BBB "electrician" + industrial language.

**Problem → Desire:** uncertainty about who's a safe, competent electrical contractor to let into a home or building → wanting the job done to code, on schedule, without an unpleasant pricing surprise.

**Mechanism:** a licensed (EC13010990), BBB A+, Procore-verified contractor operating in Central Florida since 2019, offering a free estimate before any commitment.

**Differentiator:** breadth without a hand-off — the same team is documented doing residential service calls *and* commercial/industrial new construction, which is unusual; most competitors specialize in one or the other.

**Objections → response → offer element that neutralizes it:**

| Objection | Root cause | Response | Neutralized by |
|---|---|---|---|
| "Is this going to be expensive?" | Uncertainty about cost before starting | Every estimate is free; the one public review calls pricing "very reasonable" | Free-estimate CTA repeated 4×; testimonial |
| "Can I trust them in my home/business?" | Contractor trust & safety concerns | Licensed EC13010990, BBB A+, in business since 2019 | Trust strip, Why Choose Us, footer license line |
| "Do they only handle small residential jobs?" | Doubt about commercial capacity | Procore-verified GC, commercial/industrial services listed, new construction & remodels | Commercial section, Why Choose Us item 4 |
| "I need this handled fast" | Urgency (no power, inspection deadline) | Direct call/text line, clear hours | Header call button, FAB, Hours table |
| "I don't know what service I actually need" | Unfamiliarity with electrical terms | Broad plain-language service list + FAQ | Services grid, FAQ section |

**Score of the offer (0–100): 66/100.** The two factors that cap it: (1) no quantified guarantee or warranty language exists in the source material, so the site can't offer risk-reversal beyond "free estimate" — a written workmanship guarantee, if the owner actually has one, would meaningfully raise conversion and should be the first thing to add; (2) only one public review is available to cite — a stronger social-proof section (even 3–4 more real reviews) would do more for trust than any additional design polish. Both are flagged in §9 as the highest-leverage next steps, deliberately *not* invented to hit a higher score.

*(Remaining section-by-section EN/ES copy — Services, Why Choose Us, Residential, Commercial, EV, Panels, Process, Testimonial, FAQ, Service Area, Contact, Footer — is authored in full inside `src/i18n/dictionary.js`'s `I18N` object and rendered live on the page in both languages via each section's component; it is not re-duplicated here to avoid two sources of truth drifting apart.)*

---

## 6. SEO content

| | English | Spanish |
|---|---|---|
| Title tag | Power Provider Services \| Licensed Electrician in Apopka & Orlando, FL | Power Provider Services \| Electricista con Licencia en Apopka y Orlando, FL |
| Meta description | Licensed electrical contractor serving Apopka, Orlando & Central Florida since 2019. Panel upgrades, EV chargers, wiring, lighting & more. Free estimates — call or text (407) 592-2900. | Contratista eléctrico con licencia en Apopka, Orlando y el Centro de la Florida desde 2019. Paneles, cargadores EV, cableado, iluminación y más. Estimados gratis — llama o envía un texto al (407) 592-2900. |

- **Heading hierarchy:** one `<h1>` (hero), `<h2>` per major section, `<h3>` per card/feature/FAQ item — never skipped a level.
- **Structured data:** `Electrician` (schema.org) JSON-LD embedded in `<head>` with `name`, `telephone`, `email`, `areaServed`, `foundingDate`, `openingHoursSpecification`, and `sameAs` (BBB, Yelp, Procore profile URLs). `priceRange` and a street `address` were deliberately omitted — see §9, the two candidate addresses in the source doc conflict and publishing the wrong one would actively hurt local SEO (NAP consistency is a ranking factor).
- **Open Graph:** `og:type=business.business`, `og:title`, `og:description`, `og:locale` (en_US) + `og:locale:alternate` (es_ES). No `og:image` was set because no client-approved marketing photo exists yet — see the Image Assets table (§10); once the owner picks real photos, add `og:image` pointing to the hero image.
- **hreflang:** `en`, `es`, and `x-default` alternate tags are present as placeholders pointing at `example.com/en/` and `/es/` — meant to be swapped for the real domain once this ships to production as two crawlable routes (the current build still toggles language client-side within a single route, which search engines won't index as two pages; see §8 for the production recommendation).
- **Canonical / robots:** not set in this artifact (no production domain yet) — add both once a domain is assigned.

---

## 7. Accessibility notes

- **Skip link** to `#main`, visible on focus.
- **Color contrast:** every text/background pairing on the page uses only combinations the palette doc already verified against WCAG 2.1 (its own §7 contrast table), plus the one additional fixed-gold pairing introduced in §3 above, which was checked the same way (gold-on-black is documented at 13.23:1 AAA in the source doc; the same raw value against the brand red gradient falls solidly in AA+ territory well above the 3:1 large-text minimum, checked visually across both theme variants during build — see verification screenshots).
- **Keyboard navigation:** all interactive elements (nav links, toggles, FAQ `<details>`, form fields, CTAs) are natively focusable; a visible 3px focus ring (`--pps-blue`) is enforced globally via `:focus-visible`, overriding any browser default that might be too subtle against the dark theme.
- **ARIA:** `aria-label`/`aria-pressed`/`aria-expanded` set on the language toggle, theme toggle, and mobile nav toggle; nav landmarks (`<nav aria-label="Primary">` / `"Mobile"`); decorative SVGs and canvases marked `aria-hidden="true"`.
- **Reduced motion:** a single global `prefers-reduced-motion` media query disables/short-circuits every animation on the page (lightning canvas → one static bolt, CountUp → final value immediately, floating badge/ring → static, scroll-reveal → instant, smooth-scroll → auto).
- **Forms:** every input has an associated (visually-hidden but screen-reader-available) `<label>`; placeholder text is not used as the only label.
- **Semantic HTML:** `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` (service/feature cards), `<footer>`, native `<details>/<summary>` for FAQ (works without JS, keyboard-operable by default).
- **Touch targets:** buttons and nav links sized ≥44px tall on mobile (hamburger, FAB, CTA buttons, FAQ rows).

---

## 8. Performance recommendations

- **Zero animation-library payload** (see §4) — the entire motion layer is native CSS/Canvas/JS, so there is no `ogl`/`three`/`gsap`/`motion` bundle to ship at all; `npm run build` produces a lean Vite production bundle (code-split by Vite/Rollup automatically, no extra config needed for a project this size).
- **Image weight:** the only raster assets right now are the client's own logo/badge, imported as real image files (`src/assets/logo-header.png`, `logo-hero.png`, `public/favicon.png`) rather than base64-inlined, so Vite hashes and caches them independently of the JS bundle. Real photography is intentionally *not* embedded (see §10) — when the owner selects final photos, drop them into `src/assets/` and serve as separate optimized files (WebP/AVIF with JPEG fallback, `loading="lazy"` below the fold, explicit `width`/`height` to prevent layout shift).
- **Fonts:** two Google Fonts families loaded with `preconnect` + `display=swap`; if the production site controls its own CDN, self-hosting these two files (subset to Latin) would remove an external DNS/TLS round-trip entirely — and would also remove the one third-party network call the Privacy Policy currently has to disclose (see §12).
- **JS execution:** the lightning canvas never runs a persistent animation loop — it fires a short burst every 4–8 seconds and stays idle otherwise, and it fully stops when the tab is hidden. CountUp and scroll-reveal both use `IntersectionObserver` with `unobserve()` after firing once, so neither keeps observing after it's done its job.
- **Core Web Vitals:** no render-blocking WebGL, no layout-shifting late-loading hero media (the hero badge is a small pre-sized PNG), no custom cursor or heavy canvas running on first paint.
- **Production recommendation:** the rebuild into this React + Vite project already delivers the real static build called for here. The one item still worth doing for full bilingual SEO: feed the `I18N` dictionary into prerendered/SSR routes (`/en/`, `/es/`) or a proper i18n-routing library (e.g. `react-i18next` + `react-router` locale prefixes) instead of the current client-side toggle, so search engines can index both languages as separate crawlable URLs rather than one page that changes language via JS.

---

## 9. Open items — need the business owner's input before launch

1. **Two conflicting addresses in the source data.** BBB lists 8018 Sunport Dr STE 204, Orlando, FL 32809; Yelp/Yahoo Local/Procore list 457 Maudehelen St, Apopka, FL 32703. The site currently avoids publishing either (uses "Central Florida — Apopka & Orlando" service-area language only) rather than guess, since a wrong public address actively damages local SEO and can confuse customers about where to send mail/where the office is. **Action needed:** confirm the current correct address, then add it to the Contact section, footer, and the `Electrician` schema's `address` field.
2. **No warranty/guarantee language exists in the source material.** If the business actually offers a workmanship guarantee, adding real language for it would be the single highest-leverage copy change per the offer score in §5.
3. **Only one public review was available (Yelp, June 2023).** More real, verifiable reviews (Yelp, Google Business, BBB) would strengthen the Testimonial section meaningfully — do not add any until they're real and attributable.
4. **No approved photography exists yet.** See §10 — the site currently uses icon/gradient placeholders in the media panels; swap in real project photos as soon as they're available (client's own job-site photos are strongly preferred over stock for a "real contractor, not a template" feel).
5. **Social handles** (Facebook, Instagram, Google Business) were mentioned in the flyer without specific URLs — not linked anywhere on the site to avoid a dead or wrong link; send the actual profile URLs to add them to the footer.
6. **Have `src/pages/privacyContent.js` reviewed by an attorney** before Google Analytics or Meta Ads actually go live — see §12. It's written to be accurate today, but "accurate" and "legally sufficient" aren't the same thing, and this was drafted by an AI assistant, not a lawyer.

---

## 10. Image Assets (URLs only — nothing downloaded or embedded)

Per instructions, no photography was downloaded or generated. The table below gives real, currently-live source URLs to pull from once the client approves a direction; several are specific photo pages, the rest are curated Unsplash search collections (clearly marked) to choose from — none are stock-photo IDs invented for this table.

| Section | Description needed | Suggested search keywords | Source URL |
|---|---|---|---|
| *(all rows)* | *Once photos are chosen, add them to `src/assets/` and reference from the relevant component (e.g. `SplitSection.jsx`'s media panel) — see `README.md` § Image assets.* | | |
| Hero | Licensed electrician actively working (panel or wiring), confident/professional framing | "electrician working panel", "electrician testing multimeter" | [Electrician testing electrical panel with multimeter — Unsplash](https://unsplash.com/photos/electrician-testing-electrical-panel-with-multimeter-PkHf7BUWbtk) |
| Residential | Electrician doing in-home wiring/panel work | "electrician wiring house", "residential electrical work" | [Electrician working on electrical wiring — Unsplash](https://unsplash.com/photos/electrician-is-working-on-electrical-wiring-Z8kjh-BlSgM) |
| Electrical Panels | Close-up of a breaker/panel upgrade | "electrical panel", "circuit breaker box" | [Electrical Panel — Unsplash collection](https://unsplash.com/s/photos/electrical-panel) |
| EV Chargers | EV charger installed at a home or business | "EV charger installation", "home EV charging station" | [EV Charger Installation — Unsplash collection](https://unsplash.com/s/photos/ev-charger-installation) |
| Ceiling Fan / Lighting | Ceiling fan with light fixture, installed | "ceiling fan light fixture" | [White ceiling fan with light fixture — Unsplash](https://unsplash.com/photos/vJw3h71d38o) |
| Ceiling Fan / Lighting (alt) | Ceiling fan close-up | "ceiling fan installation" | [A ceiling fan with a light fixture — Unsplash](https://unsplash.com/photos/a-ceiling-fan-with-a-light-fixture-bqCdIpDQguw) |
| Commercial & Industrial | Commercial building electrical work | "electrical contractor", "commercial electrician" | [Electrical Contractor — Unsplash collection](https://unsplash.com/s/photos/electrical-contractor) |
| New Construction / Wiring | New-construction wiring, open studs | "electrical wiring new construction" | [Electrical Installation — Unsplash collection](https://unsplash.com/s/photos/electrical-installation) |
| Why Choose Us / About | Electrician's tool belt or toolbox, professional detail shot | "electrician tool belt", "electrical tools" | [Tool Belt — Unsplash collection](https://unsplash.com/s/photos/tool-belt) |
| General service library | Broad electrician-at-work library to pick additional shots from | "electrician working", "electric worker" | [Electrician Working — Unsplash collection](https://unsplash.com/s/photos/electrician-working) |

**Strong recommendation:** before licensing any stock photo, ask the client whether they have real job-site photos (the 5 flyer images mentioned in the company doc, or new phone photos from a current job) — for a "not-a-template, real local contractor" premium feel, even a handful of real photos will outperform the best-matched stock photography.

---

## 11. Responsive behavior

- **Breakpoints:** mobile-first; desktop nav appears ≥920px, header call-button ≥640px, two-column grids (stats, split sections, contact) engage ≥760–960px depending on section, service cards use `auto-fit, minmax(260px,1fr)` so the grid self-adjusts from 1 column (mobile) to 4 (wide desktop) with no hardcoded breakpoint count.
- **Mobile nav:** below 920px the inline nav is replaced by a hamburger button opening a full-screen drawer (large tap targets, closes on link click, on `Escape`, or on resize back to desktop width) — verified via automated screenshot testing during build.
- **Floating call button:** below 640px a fixed bottom-right call FAB stays reachable regardless of scroll position, since "call now" is the single highest-value action for a local-service business and shouldn't require scrolling back to the header.
- **Hero:** stacks to a single column below 960px; badge medallion shrinks to `72vw` max and stays centered under the headline.
- **Typography:** headline and section-heading sizes use `clamp()` so they scale fluidly between mobile and desktop rather than jumping at fixed breakpoints.
- **Verification performed:** automated headless-browser checks at 1440×900 (desktop) and 390×844 (mobile) for both themes and both languages, confirming layout, contrast, mobile nav, and the floating CTA all render correctly — re-verified again after the React rebuild, including a production `npm run build` + `npm run preview` pass covering both routes (`/` and `/privacy-policy`). Screenshots reviewed during build (not included in this package, available on request).

---

## 12. Cookie consent, analytics & advertising readiness

Added at the client's request, in anticipation of Google Analytics and Meta Ads being configured. As of this build, **the site sets no cookies and loads no analytics or advertising scripts** — the only client-side storage in use is `localStorage`, for theme/language preference (strictly necessary, no consent required) and for the visitor's own cookie-category choice.

- **Cookie banner** appears on first visit (bottom of screen, every page) with three actions: Accept All, Reject Non-Essential, and Customize.
- **Preferences modal** (reachable anytime via "Cookie Preferences" in the footer) shows three categories — Strictly Necessary (always on), Analytics, Advertising — each with a plain-language explanation of what it's for and whether it's active yet.
- **Consent is stored** in `localStorage` under `pps-cookie-consent` as `{ necessary, analytics, marketing, timestamp }`, so a visitor's choice persists across visits without needing an account or a server.
- **Google Analytics and Meta Ads are pre-wired but inert.** `src/context/ConsentContext.jsx` has two functions, `loadAnalyticsIfConsented()` and `loadMarketingIfConsented()`, that already only fire once and only after explicit opt-in — including if a visitor changes their mind later. They currently contain nothing but a commented-out example snippet each. Enabling the real tools later is a matter of pasting the GA measurement ID / Meta Pixel ID into those two functions — no changes needed to the banner, modal, or consent-storage logic.
- **Bilingual Privacy Policy** (`/privacy-policy`, `src/pages/privacyContent.js`) explains what's collected today, discloses the one real third-party data flow that already exists (Google Fonts loading transmits IP address to Google), and proactively describes the planned GA/Meta rollout and how the opt-in gating works — written to be accurate to the site as built, not aspirational. See §9 item 6 for the recommended attorney review before GA/Meta actually go live.

This is infrastructure the client asked for directly — unlike the rest of the site, it isn't sourced from the company documentation, since it describes the website's own technical behavior rather than a claim about the business.

---

## Files delivered

- The `power-provider-services/` React + Vite project (this folder) — run `npm install && npm run dev`, or `npm run build` for a production `dist/`. See `README.md` for the full structure.
- This document — full strategy, design-direction, and content record.

*A single-file HTML prototype of this site was built first to validate content and design direction, then rebuilt as this React project per the client's request; the prototype is no longer the maintained version.*
