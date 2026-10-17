import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "What type of EV charger do I need at home?",
    a: "Most homeowners benefit most from a Level 2 charger (240V), which can fully charge an electric vehicle overnight. A Level 1 charger uses a standard 120V outlet and is slow — typically adding only 3–5 miles of range per hour. We assess your panel, wiring, and vehicle to recommend the right solution.",
  },
  {
    q: "Is a dedicated circuit required for an EV charger?",
    a: "Yes. A Level 2 EV charger requires a dedicated 240V circuit, properly sized and wired to your electrical panel. Sharing a circuit with other appliances is a code violation and a fire risk.",
  },
  {
    q: "Does Duke Energy or OUC offer incentives for EV charger installation in Orlando?",
    a: "Duke Energy Florida offers a Charger Prep Credit for make-ready electrical work (wiring, circuit, panel upgrades) for Level 2 or higher chargers, plus an Off-Peak Charging Credit of $7.50/month. OUC offers a $200 rebate on EV purchase or lease. Ask us for the current program details at the time of your estimate.",
  },
  {
    q: "How long does EV charger installation take?",
    a: "A straightforward residential installation — new dedicated circuit from an existing panel to the charger location — typically takes 2–4 hours. Longer runs, panel upgrades, or sub-panel work add time. We give you a clear estimate before any work starts.",
  },
  {
    q: "Do I need a permit to install an EV charger in Orlando?",
    a: "Yes. An electrical permit is required for new circuits in Florida. We handle or guide the permit process so the installation meets code and your homeowner's insurance remains valid.",
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
  name: "EV Charger Installation",
  serviceType: "EV Charger Installation",
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
  url: `${BASE}/ev-charger-installation`,
};

export default function EVCharger() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Instalación de Cargadores EV en Orlando, FL | Power Provider Services"
      : "EV Charger Installation in Orlando & Apopka, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Instalamos cargadores para vehículos eléctricos (Level 2) en Orlando, Apopka y el Centro de la Florida. Electricista con licencia EC13010990. Estimados gratis — (407) 592-2900."
      : "Licensed EV charger installation in Orlando, Apopka & Central Florida. Level 2 chargers, dedicated circuits, permit-ready work. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/ev-charger-installation`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/ev-charger-installation`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">EV Charger Installation</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Instalación de Cargadores EV en Orlando, FL"
              : "EV Charger Installation in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Instalamos cargadores para vehículos eléctricos (Level 2, 240V) en hogares y negocios de Orlando, Apopka, Pine Castle, Belle Isle y el área del Centro de la Florida. Trabajo con licencia, con estimado gratis y manejo de permisos."
              : "We install Level 2 (240V) electric vehicle chargers in homes and businesses across Orlando, Apopka, Pine Castle, Belle Isle and the greater Central Florida area. Licensed work, free estimates, permit-ready."}
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

      {/* What the work includes */}
      <section className="section">
        <div className="container" style={{ maxWidth: 860 }}>
          <h2>
            {lang === "es"
              ? "¿Qué incluye la instalación de un cargador EV?"
              : "What EV Charger Installation Includes"}
          </h2>
          <p>
            {lang === "es"
              ? "Una instalación correcta de cargador EV no es solo conectar un cable. El trabajo que realizamos incluye:"
              : "A proper EV charger installation is more than plugging in a cable. The work we do includes:"}
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Evaluación del panel eléctrico para confirmar capacidad disponible</li>
                <li>Instalación de un circuito dedicado de 240V (dimensionado para tu vehículo y cargador)</li>
                <li>Tendido del cableado desde el panel hasta la ubicación del cargador (garaje, cochera o zona de estacionamiento)</li>
                <li>Montaje y conexión del cargador (NEMA 14-50, NEMA 6-50 o EVSE con cable)</li>
                <li>Prueba del circuito y del cargador antes de entregar el trabajo</li>
                <li>Documentación para el permiso eléctrico requerido en Florida</li>
              </>
            ) : (
              <>
                <li>Panel assessment to confirm available capacity</li>
                <li>Dedicated 240V circuit installation (sized for your vehicle and charger)</li>
                <li>Running wiring from the panel to the charger location (garage, carport, or parking area)</li>
                <li>Charger mounting and wiring (NEMA 14-50, NEMA 6-50, or hardwired EVSE)</li>
                <li>Circuit and charger testing before handoff</li>
                <li>Documentation for the electrical permit required in Florida</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "¿Cuándo hace falta actualizar el panel para un cargador EV?"
              : "When Do You Need a Panel Upgrade for an EV Charger?"}
          </h2>
          <p>
            {lang === "es"
              ? "Un cargador Level 2 requiere un circuito de 240V de entre 30A y 50A. Si tu panel eléctrico ya está casi lleno o tiene capacidad total de 100A o menos, puede que no tenga espacio para ese circuito adicional. En esos casos, evaluamos si se puede abrir espacio en el panel existente o si se necesita una actualización o un subpanel. Siempre te explicamos las opciones antes de que empiece cualquier trabajo."
              : "A Level 2 charger requires a 240V circuit of 30–50 amps. If your electrical panel is nearly full or has a total capacity of 100 amps or less, it may not have room for the new circuit. In those cases, we evaluate whether space can be freed in the existing panel or whether an upgrade or sub-panel is needed. We always walk you through the options before any work begins."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es" ? "Incentivos disponibles en el área de Orlando" : "Available Incentives in the Orlando Area"}
          </h2>
          <p>
            {lang === "es"
              ? "Si eres cliente de Duke Energy Florida, el programa Charger Prep Credit cubre parte del costo del trabajo eléctrico de preparación (circuito, cableado, actualizaciones de panel) para cargadores Level 2 o superiores. También existe un crédito mensual de $7.50 por cargar fuera de horas pico. Los clientes de OUC pueden acceder a un reembolso de $200 por la compra o arrendamiento de un vehículo eléctrico. Los programas cambian; pídenos los detalles actuales al momento de tu estimado."
              : "Duke Energy Florida's Charger Prep Credit covers a portion of the electrical make-ready work (circuit, wiring, panel upgrades) for Level 2 or higher chargers. There's also an Off-Peak Charging Credit of $7.50/month for charging during off-peak hours. OUC customers may access a $200 rebate on EV purchase or lease. Programs change — ask us for current details at your estimate."}
          </p>
          <p style={{ fontSize: "0.85rem", color: "var(--pps-text-muted)" }}>
            {lang === "es"
              ? "Fuentes: comunicado de prensa de Duke Energy Florida (18 mar 2025); sitio web de OUC, sección de incentivos para EV."
              : "Sources: Duke Energy Florida press release (Mar 18, 2025); OUC website, EV incentives section."}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-bg-alt" id="faq-ev">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>{lang === "es" ? "Preguntas Frecuentes — Cargadores EV" : "Frequently Asked Questions — EV Chargers"}</h2>
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
