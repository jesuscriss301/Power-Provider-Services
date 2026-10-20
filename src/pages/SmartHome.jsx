import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "What smart switches and dimmers do you install?",
    a: "We install smart switches and dimmers from brands including Lutron Caseta, Leviton Decora Smart, and compatible devices for Amazon Alexa, Google Home, and Apple HomeKit ecosystems. We recommend what works reliably with your existing wiring and your preferred voice assistant or app.",
  },
  {
    q: "Do smart switches require a neutral wire?",
    a: "Most smart switches require a neutral wire (white wire) in the switch box. Many older homes were wired without a neutral at the switch location. We assess your existing wiring during the estimate — and can run the neutral wire if needed, or recommend no-neutral-required options like certain Lutron Caseta switches.",
  },
  {
    q: "Can you install smart switches throughout the whole house at once?",
    a: "Yes. We can plan and install smart switches in multiple rooms in a single visit, which is the most cost-efficient approach. We coordinate the work to minimize disruption and leave you with a fully working system — paired to your app and tested before we leave.",
  },
  {
    q: "Will my smart switches still work if the internet goes down?",
    a: "Physical toggle and dimmer functions always work regardless of internet connectivity. Remote control via app, voice commands, and automations require an internet connection (and for some systems, a smart home hub). We can explain exactly which features work offline for any system we install.",
  },
  {
    q: "Do I need a permit to install smart switches in Orlando?",
    a: "Replacing existing switches with smart switches in the same box typically does not require a permit. Running new wiring or adding circuits does require a permit. We confirm at the estimate whether your specific project needs one.",
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
  name: "Smart Home Electrical Installation",
  serviceType: "Smart Home Automation",
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
  url: `${BASE}/smart-home`,
};

export default function SmartHome() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Instalacion de Hogar Inteligente en Orlando, FL | Power Provider Services"
      : "Smart Home Electrical Installation in Orlando, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Instalamos interruptores y dimmers inteligentes (Lutron, Leviton) compatibles con Alexa, Google Home y Apple HomeKit en Orlando, Apopka y el Centro de la Florida. Estimados gratis — (407) 592-2900."
      : "Licensed smart switch and dimmer installation (Lutron Caseta, Leviton Decora Smart) compatible with Alexa, Google Home & HomeKit in Orlando, Apopka & Central Florida. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/smart-home`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/smart-home`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">
            {lang === "es" ? "Hogar Inteligente" : "Smart Home"}
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Instalacion de Hogar Inteligente en Orlando, FL"
              : "Smart Home Electrical Installation in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Instalamos interruptores y dimmers inteligentes de marcas como Lutron Caseta y Leviton Decora Smart, compatibles con Amazon Alexa, Google Home y Apple HomeKit. Servicio con licencia para hogares en Orlando, Apopka, Pine Castle, Belle Isle y el Centro de la Florida."
              : "We install smart switches and dimmers from Lutron Caseta, Leviton Decora Smart, and compatible brands — working with Amazon Alexa, Google Home, and Apple HomeKit. Licensed service for homes in Orlando, Apopka, Pine Castle, Belle Isle and greater Central Florida."}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a className="btn btn-primary" href="tel:+14075922900">
              {lang === "es" ? "Llama o Envia un Texto — (407) 592-2900" : "Call or Text — (407) 592-2900"}
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
              ? "Que instalamos para la automatizacion del hogar"
              : "What We Install for Home Automation"}
          </h2>
          <p>
            {lang === "es"
              ? "La automatizacion del hogar empieza en el cableado. Como electricistas licenciados, hacemos el trabajo que los productos de bricolaje no pueden: verificar si tu cableado existente es compatible, correr el cableado adicional que haga falta y dejar el sistema completamente funcional."
              : "Home automation starts at the wiring. As licensed electricians, we do the work that DIY products cannot: verify whether your existing wiring is compatible, run any additional wiring needed, and leave the system fully working."}
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Interruptores inteligentes (Lutron Caseta, Leviton Decora Smart, Kasa, Zooz)</li>
                <li>Dimmers inteligentes para iluminacion regulable</li>
                <li>Interruptores de 3 y 4 vias inteligentes (para escaleras o habitaciones con multiples puntos de control)</li>
                <li>Tomacorrientes inteligentes y con USB integrado</li>
                <li>Instalacion del hub o puente de control (Lutron Smart Bridge, Leviton Hub)</li>
                <li>Cableado de neutral donde sea necesario para dispositivos modernos</li>
                <li>Integracion y emparejamiento con Alexa, Google Home o Apple HomeKit</li>
              </>
            ) : (
              <>
                <li>Smart switches (Lutron Caseta, Leviton Decora Smart, Kasa, Zooz)</li>
                <li>Smart dimmers for dimmable lighting</li>
                <li>3-way and 4-way smart switches (for stairs or rooms with multiple control points)</li>
                <li>Smart outlets and outlets with integrated USB charging</li>
                <li>Smart hub installation (Lutron Smart Bridge, Leviton Hub)</li>
                <li>Neutral wire run where needed for modern devices</li>
                <li>App pairing and integration with Alexa, Google Home, or Apple HomeKit</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Por que contratar un electricista para instalar interruptores inteligentes"
              : "Why Hire an Electrician for Smart Switch Installation"}
          </h2>
          <p>
            {lang === "es"
              ? "Los videos de YouTube hacen que el reemplazo de interruptores parezca sencillo, pero hay varios problemas comunes que solo un electricista puede resolver: cableado sin neutral, cajas de interruptores sobrecargadas, cableado de aluminio en hogares mas antiguos, o circuitos que no estan correctamente etiquetados en el panel. Hacemos el trabajo con licencia, que es lo que exige el codigo de Florida."
              : "YouTube tutorials make switch replacement look simple, but several common issues require a licensed electrician: missing neutral wire, overcrowded switch boxes, aluminum wiring in older homes, or circuits not correctly labeled at the panel. We do the work under license, which Florida code requires."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Que marca de interruptores inteligentes recomendamos"
              : "Which Smart Switch Brand We Recommend"}
          </h2>
          <p>
            {lang === "es"
              ? "Para la mayoria de los hogares en Central Florida recomendamos Lutron Caseta. Es uno de los pocos sistemas que no requiere neutral en todos sus modelos (importante en casas mas antiguas), funciona sin depender de Internet (tiene su propio protocolo de radio Clear Connect), y tiene una trayectoria de confiabilidad probada. Para quienes prefieren productos compatibles directamente con Google Home o Alexa sin un hub adicional, Leviton Decora Smart Wi-Fi es una solida alternativa."
              : "For most Central Florida homes, we recommend Lutron Caseta. It's one of the few systems that doesn't require a neutral wire on all models (important in older homes), operates without relying on the internet (it uses its own Clear Connect radio protocol), and has a proven reliability track record. For direct compatibility with Google Home or Alexa without an extra hub, Leviton Decora Smart Wi-Fi is a solid alternative."}
          </p>
        </div>
      </section>

      <section className="section section-bg-alt" id="faq-smart-home">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>
            {lang === "es"
              ? "Preguntas Frecuentes — Hogar Inteligente"
              : "Frequently Asked Questions — Smart Home"}
          </h2>
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
          {lang === "es" ? "← Volver al inicio" : "← Back to home"}
        </Link>
        {" · "}
        <Link to="/outdoor-lighting" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Iluminacion Exterior" : "Outdoor Lighting"}
        </Link>
        {" · "}
        <Link to="/outlet-installation" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Tomacorrientes" : "Outlet Installation"}
        </Link>
        {" · "}
        <Link to="/ev-charger-installation" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Cargadores EV" : "EV Chargers"}
        </Link>
      </div>
    </main>
  );
}
