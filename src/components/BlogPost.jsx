import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import LocationMap from "./LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

// Master list of all articles — used to populate the sidebar
const ALL_ARTICLES = [
  {
    slug: "florida-electrical-permit-laws",
    image: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755685_640.jpg",
    enTitle: "Florida Electrical Permit Laws: What Every Homeowner Should Know",
    esTitle: "Leyes de Permisos Eléctricos en Florida: Lo Que Todo Propietario Debe Saber",
    enDesc: "When you need a permit, how to get one, and the risks of skipping it.",
    esDesc: "Cuándo necesitas permiso, cómo obtenerlo y los riesgos de omitirlo.",
  },
  {
    slug: "fines-unpermitted-electrical-work",
    image: "https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg",
    enTitle: "Fines for Unpermitted Electrical Work in Florida",
    esTitle: "Multas por Trabajo Eléctrico Sin Permiso en Florida",
    enDesc: "Up to $250/day in fines, insurance denials, and forced teardowns.",
    esDesc: "Hasta $250/día en multas, rechazo de seguros y demoliciones forzadas.",
  },
  {
    slug: "ev-charger-types-guide",
    image: "https://cdn.pixabay.com/photo/2019/11/19/07/39/current-gas-station-4636710_640.jpg",
    enTitle: "EV Charger Types: Level 1, Level 2 & DC Fast Charging Explained",
    esTitle: "Tipos de Cargadores EV: Nivel 1, Nivel 2 y Carga Rápida DC",
    enDesc: "Which charger is right for your home and vehicle in Orlando, FL.",
    esDesc: "Qué cargador es el correcto para tu hogar y vehículo en Orlando, FL.",
  },
  {
    slug: "electrical-panel-types-guide",
    image: "https://cdn.pixabay.com/photo/2016/02/18/02/58/electrician-1206468_640.jpg",
    enTitle: "Electrical Panel Types: Which Are Safe and Which Are Not",
    esTitle: "Tipos de Paneles Eléctricos: Cuáles Son Seguros y Cuáles No",
    enDesc: "Federal Pacific, Zinsco, and modern safe panels compared.",
    esDesc: "Federal Pacific, Zinsco y paneles modernos seguros comparados.",
  },
  {
    slug: "reduce-electric-bill-holidays",
    image: "https://cdn.pixabay.com/photo/2020/12/20/10/01/christmas-lights-5846566_640.jpg",
    enTitle: "How to Reduce Your Electric Bill During the Holidays in Florida",
    esTitle: "Cómo Reducir tu Factura Eléctrica en las Fiestas en Florida",
    enDesc: "LED lighting, smart plugs, TOU rates, and HVAC tips for the season.",
    esDesc: "Iluminación LED, enchufes inteligentes, tarifas TOU y consejos de HVAC.",
  },
  {
    slug: "hurricane-electrical-safety",
    image: "https://cdn.pixabay.com/photo/2017/01/29/21/54/hurricane-2019494_640.jpg",
    enTitle: "Hurricane Electrical Safety: Before, During & After the Storm",
    esTitle: "Seguridad Eléctrica en Huracanes: Antes, Durante y Después",
    enDesc: "Generator safety, backfeed dangers, and when to call an electrician after flooding.",
    esDesc: "Seguridad del generador, peligros de retroalimentación y cuándo llamar al electricista.",
  },
  {
    slug: "panel-upgrade-home-value",
    image: "https://cdn.pixabay.com/photo/2016/09/23/14/51/florida-home-1689857_640.jpg",
    enTitle: "How a Panel Upgrade Increases Your Home Value in Florida",
    esTitle: "Cómo el Upgrade de Panel Aumenta el Valor de tu Propiedad en Florida",
    enDesc: "4-point inspections, FHA/VA loans, and ROI on a 200A panel upgrade.",
    esDesc: "Inspecciones de 4 puntos, préstamos FHA/VA y el ROI de un upgrade a 200A.",
  },
  {
    slug: "ev-charger-home-value",
    image: "https://cdn.pixabay.com/photo/2019/06/15/20/21/electric-car-4276419_640.jpg",
    enTitle: "Does an EV Charger Increase Home Value?",
    esTitle: "¿Un Cargador EV Aumenta el Valor de tu Propiedad?",
    enDesc: "Zillow data, Duke Energy incentives, and what buyers in Orlando expect.",
    esDesc: "Datos de Zillow, incentivos de Duke Energy y lo que esperan los compradores.",
  },
  {
    slug: "smart-home-property-value",
    image: "https://cdn.pixabay.com/photo/2018/01/21/09/59/smart-home-3096219_640.jpg",
    enTitle: "How Smart Home Upgrades Affect Property Value",
    esTitle: "Cómo las Mejoras de Hogar Inteligente Afectan el Valor de la Propiedad",
    enDesc: "NAR surveys, Lutron vs Leviton ROI, and which upgrades matter most.",
    esDesc: "Encuestas NAR, ROI de Lutron vs Leviton y qué mejoras importan más.",
  },
  {
    slug: "outdoor-lighting-home-value",
    image: "https://cdn.pixabay.com/photo/2014/05/06/21/20/garden-339230_640.jpg",
    enTitle: "Outdoor Lighting and Home Value: What Electricians Know",
    esTitle: "Iluminación Exterior y Valor de Propiedad: Lo Que Saben los Electricistas",
    enDesc: "CPTED, curb appeal, and the ROI of a professional lighting circuit.",
    esDesc: "CPTED, atractivo visual y el ROI de un circuito de iluminación profesional.",
  },
];

function Sidebar({ currentSlug, lang }) {
  // Show 3 articles that are not the current one
  const picks = ALL_ARTICLES.filter(a => a.slug !== currentSlug).slice(0, 3);

  return (
    <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Recent articles */}
      <div style={{
        background: "var(--pps-surface)",
        border: "1px solid var(--pps-border, rgba(0,0,0,.08))",
        borderRadius: 10,
        overflow: "hidden",
      }}>
        <div style={{
          background: "var(--pps-red)",
          padding: "12px 18px",
        }}>
          <p style={{ margin: 0, color: "#fff", fontWeight: 700, fontSize: "0.95rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {lang === "es" ? "Artículos Recientes" : "Recent Articles"}
          </p>
        </div>
        <div style={{ padding: "4px 0" }}>
          {picks.map(article => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              style={{
                display: "block",
                padding: "14px 18px",
                borderBottom: "1px solid var(--pps-border, rgba(0,0,0,.06))",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                {article.image && (
                  <img
                    src={article.image}
                    alt=""
                    loading="lazy"
                    style={{ width: 64, height: 48, objectFit: "cover", borderRadius: 4, flexShrink: 0 }}
                  />
                )}
                <div>
                  <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "0.88rem", lineHeight: 1.4, color: "var(--pps-text)" }}>
                    {lang === "es" ? article.esTitle : article.enTitle}
                  </p>
                  <p style={{ margin: 0, fontSize: "0.78rem", color: "var(--pps-text-muted)", lineHeight: 1.4 }}>
                    {lang === "es" ? article.esDesc : article.enDesc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div style={{ padding: "12px 18px" }}>
            <Link to="/blog" style={{
              fontSize: "0.85rem",
              color: "var(--pps-red-text)",
              fontWeight: 600,
              textDecoration: "none",
            }}>
              {lang === "es" ? "Ver todos los artículos →" : "View all articles →"}
            </Link>
          </div>
        </div>
      </div>

      {/* CTA box */}
      <div style={{
        background: "var(--pps-red)",
        borderRadius: 10,
        padding: "22px 18px",
        textAlign: "center",
      }}>
        <p style={{ margin: "0 0 6px", color: "#fff", fontWeight: 700, fontSize: "1.05rem" }}>
          {lang === "es" ? "¿Necesitas un electricista?" : "Need an electrician?"}
        </p>
        <p style={{ margin: "0 0 16px", color: "rgba(255,255,255,.85)", fontSize: "0.88rem" }}>
          {lang === "es"
            ? "Servicio con licencia en Orlando y el Centro de la Florida. Estimado gratis."
            : "Licensed service in Orlando & Central Florida. Free estimates."}
        </p>
        <a
          href="tel:+14075922900"
          style={{
            display: "block",
            background: "#c8161d",
            color: "var(--pps-red)",
            fontWeight: 700,
            padding: "10px 0",
            borderRadius: 6,
            textDecoration: "none",
            fontSize: "0.95rem",
            marginBottom: 8,
          }}
        >
          (407) 592-2900
        </a>
        <a
          href="#contact"
          style={{
            display: "block",
            background: "transparent",
            border: "1.5px solid rgba(255,255,255,.7)",
            color: "#fff",
            fontWeight: 600,
            padding: "9px 0",
            borderRadius: 6,
            textDecoration: "none",
            fontSize: "0.88rem",
          }}
        >
          {lang === "es" ? "Solicitar estimado gratis" : "Get a free estimate"}
        </a>
      </div>
    </aside>
  );
}

export default function BlogPost({
  slug,
  titleEn, titleEs,
  descEn, descEs,
  eyebrowEn = "Resources", eyebrowEs = "Recursos",
  children,
  relatedLinks = [],
}) {
  const { lang } = useLanguage();
  const title = lang === "es" ? titleEs : titleEn;
  const desc  = lang === "es" ? descEs  : descEn;
  const canonical = `${BASE}/blog/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: titleEn,
    description: descEn,
    publisher: {
      "@type": "Organization",
      name: "Power Provider Services LLC",
      url: BASE,
    },
    url: canonical,
  };

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 48, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <p className="eyebrow">{lang === "es" ? eyebrowEs : eyebrowEn}</p>
          <h1 style={{ fontSize: "clamp(1.75rem,3.5vw,2.8rem)", marginBottom: "0.5em", maxWidth: "70ch" }}>{title}</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "65ch", color: "var(--pps-text-muted)" }}>{desc}</p>
        </div>
      </section>

      {/* Article body + sidebar */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 40,
          }}
          className="blog-layout"
          >
            {/* Main content */}
            <article>
              {children}
            </article>

            {/* Sidebar */}
            <Sidebar currentSlug={slug} lang={lang} />
          </div>
        </div>
      </section>

      {/* Related links breadcrumb */}
      <div className="container" style={{ padding: "0 24px 32px" }}>
        <Link to="/" style={{ color: "var(--pps-red-text)", textDecoration: "none", fontWeight: 600 }}>
          {lang === "es" ? "← Inicio" : "← Home"}
        </Link>
        {" · "}
        <Link to="/blog" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Todos los artículos" : "All articles"}
        </Link>
        {relatedLinks.map(({ to, enLabel, esLabel }, i) => (
          <span key={i}>
            {" · "}
            <Link to={to} style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
              {lang === "es" ? esLabel : enLabel}
            </Link>
          </span>
        ))}
      </div>

      <Contact />
      <LocationMap />
    </main>
  );
}

export function FAQ({ items }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
  const { lang } = useLanguage();
  return (
    <section className="section section-bg-alt" style={{ margin: "0 -24px", padding: "40px 24px" }}>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <p className="eyebrow">FAQ</p>
      <h2>{lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}</h2>
      <div className="faq-list">
        {items.map(({ q, a }, i) => (
          <details key={i} className="faq-item">
            <summary className="faq-q">
              <span>{q}</span>
              <span className="plus" aria-hidden="true">+</span>
            </summary>
            <div className="faq-a">{a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}
