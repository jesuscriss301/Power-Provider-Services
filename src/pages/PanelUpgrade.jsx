import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "How do I know if I need an electrical panel upgrade?",
    a: "Common signs include: breakers that trip frequently, a panel older than 25–30 years, a fuse box (not breakers), lights that flicker when appliances run, you want to add a major appliance or EV charger but the panel is full, or your homeowner's insurer is requiring an inspection or flagging your current panel.",
  },
  {
    q: "What is a 4-point inspection and will my panel pass?",
    a: "A 4-point inspection covers four systems: roof, HVAC, plumbing, and electrical. The Florida Citizens 4-point form (Insp4pt 03 25) checks for aluminum wiring issues, knob-and-tube wiring, cloth-sheathed wiring, double-tapped breakers, and other hazards. Older Federal Pacific Stab-Lok panels are often flagged by insurers. A licensed electrician must document any remediation for single-strand aluminum wiring. We can assess your panel and provide documentation for insurers.",
  },
  {
    q: "How much does a panel upgrade cost in Orlando?",
    a: "Panel upgrade costs vary depending on the current panel size, the target capacity (100A, 150A, 200A), the condition of the wiring and meter base, and permit fees. We provide a free, no-obligation estimate with all costs detailed before any work begins.",
  },
  {
    q: "Will I need a permit for a panel upgrade?",
    a: "Yes. A panel upgrade is a major electrical project that requires a permit and inspection in Florida. We handle or guide the permit process to ensure the work meets code.",
  },
  {
    q: "How long does a panel upgrade take?",
    a: "A standard panel replacement typically takes one full day. More complex situations — older wiring, meter base replacement, or coordination with the utility for a disconnect — may take longer. We give you a timeline at the estimate.",
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
  "@type": "Service",
  name: "Electrical Panel Upgrade",
  serviceType: "Electrical Panel Upgrade & Meter Change",
  provider: {
    "@type": "Electrician",
    name: "Power Provider Services LLC",
    telephone: "+1-407-592-2900",
    address: {
      "@type": "PostalAddress",
      streetAddress: "8018 Sunport Dr Ste 204",
      addressLocality: "Orlando",
      addressRegion: "FL",
      postalCode: "32809",
      addressCountry: "US",
    },
  },
  areaServed: ["Orlando, FL", "Apopka, FL", "Central Florida"],
  url: `${BASE}/panel-upgrade`,
};

export default function PanelUpgrade() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Actualización de Panel Eléctrico en Orlando, FL | Power Provider Services"
      : "Electrical Panel Upgrade in Orlando & Apopka, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Reemplazo y actualización de paneles eléctricos en Orlando, Apopka y el Centro de la Florida. Electricista con licencia EC13010990. Inspecciones de 4 puntos, permisos incluidos. Estimados gratis."
      : "Licensed electrical panel upgrades in Orlando, Apopka & Central Florida. Panel replacement, meter changes, 4-point inspection documentation. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/panel-upgrade`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/panel-upgrade`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">
            {lang === "es" ? "Actualización de Paneles" : "Panel Upgrades & Meter Changes"}
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Actualización de Panel Eléctrico en Orlando, FL"
              : "Electrical Panel Upgrade Near Me — Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Reemplazamos y actualizamos paneles eléctricos en Orlando, Apopka, Pine Castle, Belle Isle y el Centro de la Florida. Trabajo con licencia, permisos incluidos, documentación para inspecciones de seguro."
              : "We replace and upgrade electrical panels in Orlando, Apopka, Pine Castle, Belle Isle and the greater Central Florida area. Licensed work, permit-ready, with documentation for insurance 4-point inspections."}
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

      {/* Content */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>{lang === "es" ? "¿Cuándo hace falta actualizar el panel?" : "When Does a Panel Need to Be Upgraded?"}</h2>
          <p>
            {lang === "es"
              ? "El panel eléctrico es el corazón de tu sistema eléctrico. Un panel desactualizado o subdimensionado puede provocar desde breakers que se disparan constantemente hasta riesgos reales de incendio. Los escenarios más comunes que requieren una actualización:"
              : "The electrical panel is the heart of your electrical system. An outdated or undersized panel can cause anything from constantly tripping breakers to a genuine fire risk. The most common situations that require an upgrade:"}
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Breakers que se disparan frecuentemente bajo demanda normal</li>
                <li>Panel de 60A o 100A que ya no es suficiente para el hogar actual</li>
                <li>Caja de fusibles (no de breakers) — las aseguradoras suelen rechazarla</li>
                <li>Paneles Federal Pacific Stab-Lok o Zinsco, señalados como peligrosos</li>
                <li>Quieres agregar un cargador EV, una piscina, o un sistema de HVAC nuevo</li>
                <li>Tu aseguradora requiere una inspección de 4 puntos o te pide actualizar el panel</li>
              </>
            ) : (
              <>
                <li>Breakers that trip frequently under normal load</li>
                <li>A 60A or 100A panel that no longer meets your home's demand</li>
                <li>A fuse box (not breakers) — most insurers will not accept these</li>
                <li>Federal Pacific Stab-Lok or Zinsco panels, which are flagged as fire hazards</li>
                <li>You want to add an EV charger, pool, or new HVAC system</li>
                <li>Your insurer is requiring a 4-point inspection or asking you to upgrade</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es" ? "Paneles y la inspección de 4 puntos" : "Panels and the 4-Point Inspection"}
          </h2>
          <p>
            {lang === "es"
              ? "En Florida, las aseguradoras a menudo exigen una inspección de 4 puntos para asegurar casas de más de cierta antigüedad. El formulario estándar (Citizens Insp4pt 03 25) cubre techo, HVAC, plomería y sistema eléctrico. En el sistema eléctrico se verifican: tipo y estado del panel, doble conexión de breakers, tipo de cableado (aluminio de un solo hilo, cableado con aislamiento de tela, tubo y perilla), y otros riesgos. Si el panel o el cableado presenta problemas, un electricista con licencia debe documentar la remediación para que la cobertura continúe."
              : "In Florida, insurers often require a 4-point inspection for homes over a certain age. The standard form (Citizens Insp4pt 03 25) covers roof, HVAC, plumbing, and electrical. On the electrical side, it checks: panel type and condition, double-tapped breakers, wiring type (single-strand aluminum, cloth-sheathed, knob-and-tube), and other hazards. If the panel or wiring raises issues, a licensed electrician must document the remediation for the coverage to continue."}
          </p>
          <p>
            {lang === "es"
              ? "Podemos evaluar tu panel, realizar el trabajo necesario y proporcionar la documentación requerida por tu aseguradora."
              : "We can assess your panel, perform the needed work, and provide the documentation your insurer requires."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es" ? "¿Qué incluye la actualización de panel?" : "What Panel Upgrade Work Includes"}
          </h2>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Evaluación del panel y capacidad actuales</li>
                <li>Reemplazo del panel por uno nuevo de la capacidad adecuada (100A, 150A o 200A)</li>
                <li>Reconexión de todos los circuitos existentes al nuevo panel</li>
                <li>Cambio de base del medidor si es necesario</li>
                <li>Coordinación con la empresa de servicio eléctrico para el desconexión y reconexión</li>
                <li>Obtención del permiso eléctrico e inspección por el municipio</li>
              </>
            ) : (
              <>
                <li>Assessment of your current panel and capacity</li>
                <li>Replacement with a new panel of the appropriate capacity (100A, 150A, or 200A)</li>
                <li>Reconnection of all existing circuits to the new panel</li>
                <li>Meter base replacement if needed</li>
                <li>Coordination with the utility for the disconnect and reconnect</li>
                <li>Electrical permit and municipal inspection</li>
              </>
            )}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg-alt" id="faq-panel">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>{lang === "es" ? "Preguntas Frecuentes — Paneles Eléctricos" : "Frequently Asked Questions — Panel Upgrades"}</h2>
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
          {lang === "es" ? "Instalación de Cargadores EV" : "EV Charger Installation"}
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
