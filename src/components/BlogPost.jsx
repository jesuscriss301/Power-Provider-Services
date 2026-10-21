import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "./Contact.jsx";
import LocationMap from "./LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

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
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">{lang === "es" ? eyebrowEs : eyebrowEn}</p>
          <h1 style={{ fontSize: "clamp(1.75rem,3.5vw,2.8rem)", marginBottom: "0.5em" }}>{title}</h1>
          <p style={{ fontSize: "1.05rem", maxWidth: "65ch", color: "var(--pps-text-muted)" }}>{desc}</p>
        </div>
      </section>

      {/* Article body */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          {children}
        </div>
      </section>

      {/* Related links */}
      {relatedLinks.length > 0 && (
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
      )}

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
