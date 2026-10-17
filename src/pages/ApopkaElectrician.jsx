import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "Do you serve Apopka, FL for residential electrical work?",
    a: "Yes. Power Provider Services serves Apopka and the surrounding Orange County and Seminole County areas for residential, commercial and industrial electrical work — panel upgrades, EV chargers, outlets, wiring, lighting and troubleshooting.",
  },
  {
    q: "Where is your office and how far do you travel to Apopka?",
    a: "Our office is at 8018 Sunport Dr Ste 204, Orlando, FL 32809 (south Orlando). Apopka is approximately 20–25 miles north, and we serve the area regularly.",
  },
  {
    q: "Are you licensed to do electrical work in Apopka, FL?",
    a: "Yes. Power Provider Services LLC holds Florida Electrical Contractor License EC13010990, which covers the entire state of Florida including Apopka and all of Orange County.",
  },
  {
    q: "What electrician services do you offer in Apopka?",
    a: "We offer the full range: panel upgrades and meter changes, EV charger installation, outlets and switches, wiring and rewiring, interior and exterior lighting, ceiling fans, dedicated appliance circuits, troubleshooting and repairs, and commercial and industrial electrical work.",
  },
  {
    q: "How do I get an estimate for electrical work in Apopka?",
    a: "Call or text (407) 592-2900 or email powerproviderservices@gmail.com. Estimates are always free with no obligation.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Power Provider Services LLC",
  description: "Licensed electrician serving Apopka, FL and the greater Orlando area since 2019.",
  telephone: "+1-407-592-2900",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8018 Sunport Dr Ste 204",
    addressLocality: "Orlando",
    addressRegion: "FL",
    postalCode: "32809",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", "name": "Apopka" },
    { "@type": "City", "name": "Orlando" },
    { "@type": "Place", "name": "Central Florida" },
  ],
  url: `${BASE}/apopka-electrician`,
};

export default function ApopkaElectrician() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Electricista en Apopka, FL | Power Provider Services"
      : "Electrician in Apopka, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Electricista con licencia en Apopka, FL. Actualización de paneles, cargadores EV, tomacorrientes, cableado, iluminación. Licencia EC13010990. Estimados gratis — llama al (407) 592-2900."
      : "Licensed electrician serving Apopka, FL. Panel upgrades, EV chargers, outlets, wiring, lighting. License EC13010990. Free estimates — call or text (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/apopka-electrician`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/apopka-electrician`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">{lang === "es" ? "Apopka, FL" : "Apopka, FL"}</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Electricista en Apopka, FL"
              : "Electrician in Apopka, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Power Provider Services es un contratista eléctrico con licencia en Florida (EC13010990) que atiende a Apopka, FL y el área del Centro de la Florida desde 2019. Servicios residenciales, comerciales e industriales — estimados siempre gratis."
              : "Power Provider Services is a licensed Florida electrical contractor (EC13010990) serving Apopka, FL and the greater Central Florida area since 2019. Residential, commercial and industrial electrical work — always a free estimate."}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a className="btn btn-primary" href="tel:+14075922900">
              {lang === "es" ? "Llama o Envía un Texto — (407) 592-2900" : "Call or Text — (407) 592-2900"}
            </a>
            <a className="btn btn-secondary" href="#contact">
              {lang === "es" ? "Solicita tu Estimado Gratis" : "Get Your Free Estimate"}
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>
            {lang === "es"
              ? "Servicios eléctricos que ofrecemos en Apopka"
              : "Electrical Services We Offer in Apopka, FL"}
          </h2>
          <p>
            {lang === "es"
              ? "Atendemos la gama completa de necesidades eléctricas en Apopka y sus alrededores:"
              : "We handle the full range of electrical needs in Apopka and surrounding areas:"}
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li><Link to="/panel-upgrade" style={{ color: "var(--pps-red-text)" }}>Actualización de paneles y cambios de medidor</Link></li>
                <li><Link to="/ev-charger-installation" style={{ color: "var(--pps-red-text)" }}>Instalación de cargadores para vehículos eléctricos (EV)</Link></li>
                <li><Link to="/outlet-installation" style={{ color: "var(--pps-red-text)" }}>Instalación y reemplazo de tomacorrientes e interruptores</Link></li>
                <li><Link to="/electrical-repair" style={{ color: "var(--pps-red-text)" }}>Diagnóstico y reparaciones eléctricas</Link></li>
                <li>Iluminación interior y exterior</li>
                <li>Cableado y recableado</li>
                <li>Circuitos dedicados para electrodomésticos</li>
                <li>Instalación de ventiladores de techo</li>
                <li>Trabajo eléctrico comercial e industrial</li>
                <li>Nueva construcción y remodelaciones</li>
              </>
            ) : (
              <>
                <li><Link to="/panel-upgrade" style={{ color: "var(--pps-red-text)" }}>Panel upgrades & meter changes</Link></li>
                <li><Link to="/ev-charger-installation" style={{ color: "var(--pps-red-text)" }}>EV charger installation</Link></li>
                <li><Link to="/outlet-installation" style={{ color: "var(--pps-red-text)" }}>Outlet & switch installation</Link></li>
                <li><Link to="/electrical-repair" style={{ color: "var(--pps-red-text)" }}>Electrical troubleshooting & repairs</Link></li>
                <li>Interior & exterior lighting</li>
                <li>Wiring & rewiring</li>
                <li>Dedicated appliance circuits</li>
                <li>Ceiling fan installation</li>
                <li>Commercial & industrial electrical</li>
                <li>New construction & remodels</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Por qué elegir Power Provider Services en Apopka"
              : "Why Choose Power Provider Services in Apopka"}
          </h2>
          <p>
            {lang === "es"
              ? "Desde 2019, Power Provider Services ha completado trabajos residenciales, comerciales e industriales en Apopka, Orlando y el Centro de la Florida. Nuestra licencia estatal (EC13010990) cubre todo el estado de Florida. Somos una empresa con calificación BBB A+ y 5 estrellas en Yelp. Cada estimado es gratis y sin compromiso."
              : "Since 2019, Power Provider Services has completed residential, commercial and industrial electrical work in Apopka, Orlando and the greater Central Florida area. Our state license (EC13010990) covers all of Florida. We hold a BBB A+ rating and a 5-star Yelp rating. Every estimate is free with no obligation."}
          </p>

          <div style={{ marginTop: "2rem", display: "flex", gap: 16, flexWrap: "wrap" }}>
            <div style={{ padding: "16px 24px", borderRadius: "var(--radius-md)", border: "1px solid var(--pps-border)", background: "var(--pps-surface)" }}>
              <strong>License</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>FL EC13010990</p>
            </div>
            <div style={{ padding: "16px 24px", borderRadius: "var(--radius-md)", border: "1px solid var(--pps-border)", background: "var(--pps-surface)" }}>
              <strong>BBB Rating</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>A+</p>
            </div>
            <div style={{ padding: "16px 24px", borderRadius: "var(--radius-md)", border: "1px solid var(--pps-border)", background: "var(--pps-surface)" }}>
              <strong>In Business Since</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>2019</p>
            </div>
            <div style={{ padding: "16px 24px", borderRadius: "var(--radius-md)", border: "1px solid var(--pps-border)", background: "var(--pps-surface)" }}>
              <strong>Hours</strong>
              <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>Mon–Sat 8 AM – 4:30 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>{lang === "es" ? "Preguntas Frecuentes — Electricista en Apopka" : "Frequently Asked Questions — Apopka Electrician"}</h2>
          <div className="faq-list">
            {faqs.map(({ q, a }, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-q">
                  <span>{q}</span>
                  <span className="plus" aria-hidden="true">+</span>
                </summary>
                <div className="faq-a">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <LocationMap />

      <div className="container" style={{ padding: "24px 24px" }}>
        <Link to="/" style={{ color: "var(--pps-red-text)", textDecoration: "none", fontWeight: 600 }}>
          ← {lang === "es" ? "Volver al inicio" : "Back to home"}
        </Link>
        {" · "}
        <Link to="/ev-charger-installation" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Cargadores EV" : "EV Chargers"}
        </Link>
        {" · "}
        <Link to="/panel-upgrade" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Actualización de Paneles" : "Panel Upgrades"}
        </Link>
        {" · "}
        <Link to="/outlet-installation" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Tomacorrientes" : "Outlet Installation"}
        </Link>
        {" · "}
        <Link to="/electrical-repair" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Reparaciones" : "Electrical Repair"}
        </Link>
      </div>
    </main>
  );
}
