import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "What is a transfer switch and why do I need one?",
    a: "A transfer switch is an electrical device that safely disconnects your home or business from the utility grid before switching to generator power. Without one, backfeeding electricity into the grid can injure utility workers and damage your equipment. Florida electrical code requires a transfer switch or interlock kit for any permanently wired generator connection.",
  },
  {
    q: "What is the difference between an interlock kit and an automatic transfer switch?",
    a: "An interlock kit is a manual solution — it physically prevents the main breaker and generator breaker from being on at the same time, so you manually start the generator and flip the breakers. An automatic transfer switch (ATS) detects a power outage and switches to generator power within seconds, with no manual action. We install both; the right choice depends on your budget and whether you want hands-free operation.",
  },
  {
    q: "What size generator inlet do I need?",
    a: "The inlet size depends on your generator's output and the circuits you want to power. Common options are 30-amp (NEMA L14-30) for portable generators powering essential circuits, and 50-amp (NEMA 14-50) for larger generators. We assess your generator, panel, and power needs and size the inlet correctly.",
  },
  {
    q: "Can I connect a portable generator to my house without an electrician?",
    a: "Not safely or legally. Extension cords plugged into portable generators are only a temporary measure for appliances directly plugged in — they are not a substitute for a whole-house connection. A licensed electrician must install the inlet, wiring, and transfer switch or interlock to meet Florida electrical code and to protect utility workers.",
  },
  {
    q: "Do I need a permit for generator electrical work in Orlando?",
    a: "Yes. An electrical permit is required for the inlet, wiring, and transfer switch installation in Florida. We handle or guide the permitting process so the work is code-compliant and your homeowner's insurance remains valid.",
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
  name: "Generator Electrical Connection",
  serviceType: "Generator Hookup",
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
  url: `${BASE}/generator-hookup`,
};

export default function GeneratorHookup() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Conexion Electrica de Generadores en Orlando, FL | Power Provider Services"
      : "Generator Hookup & Transfer Switch Installation in Orlando, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Instalamos transfer switches, interlock kits e inlets de generadores en Orlando, Apopka y el Centro de la Florida. Electricista licenciado EC13010990. Estimados gratis — (407) 592-2900."
      : "Licensed generator hookup, transfer switch, interlock kit, and inlet installation in Orlando, Apopka & Central Florida. Permit-ready work. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/generator-hookup`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/generator-hookup`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">
            {lang === "es" ? "Conexion de Generadores" : "Generator Hookup"}
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Conexion Electrica de Generadores en Orlando, FL"
              : "Generator Hookup & Transfer Switch Installation in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Instalamos la conexion electrica completa para generadores portatiles y standby: transfer switch, interlock kit e inlet. Trabajo con licencia, con permiso y estimado gratis — para hogares y negocios en Orlando, Apopka y el Centro de la Florida."
              : "We install the complete electrical connection for portable and standby generators: transfer switch, interlock kit, and generator inlet. Licensed, permitted work with free estimates — serving homes and businesses in Orlando, Apopka and Central Florida."}
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
              ? "Que incluye la conexion electrica de un generador"
              : "What Generator Electrical Work Includes"}
          </h2>
          <p>
            {lang === "es"
              ? "Para conectar un generador a tu hogar o negocio de forma segura y legal, se necesita mas que enchufar un cable de extension. El trabajo que realizamos puede incluir:"
              : "Safely and legally connecting a generator to your home or business takes more than an extension cord. The work we do may include:"}
          </p>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Instalacion del inlet (toma exterior) para generadores portatiles — NEMA L14-30 o NEMA 14-50</li>
                <li>Cableado desde el inlet hasta el panel electrico</li>
                <li>Instalacion de interlock kit en el panel (solucion manual que previene retroalimentacion a la red)</li>
                <li>Instalacion de transfer switch manual o automatico (ATS) para generadores standby</li>
                <li>Creacion de un subpanel de cargas esenciales si se desea alimentar solo circuitos especificos</li>
                <li>Gestion del permiso electrico requerido en Florida</li>
              </>
            ) : (
              <>
                <li>Generator inlet installation (exterior inlet box) for portable generators — NEMA L14-30 or NEMA 14-50</li>
                <li>Wiring from the inlet to the electrical panel</li>
                <li>Interlock kit installation at the panel (manual solution that prevents backfeeding the grid)</li>
                <li>Manual or automatic transfer switch (ATS) installation for standby generators</li>
                <li>Essential-load sub-panel if you want to power only specific circuits</li>
                <li>Electrical permit filing required in Florida</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Interlock kit vs. transfer switch"
              : "Interlock Kit vs. Transfer Switch"}
          </h2>
          <p>
            {lang === "es"
              ? "Un interlock kit es una solucion manual y economica: una placa metalica montada en el panel que impide fisicamente que el interruptor principal y el del generador esten encendidos al mismo tiempo. Tu arrancas el generador manualmente y cambias los interruptores. Es seguro, aprobado por codigo y una opcion popular para generadores portatiles."
              : "An interlock kit is a manual, cost-effective solution: a metal plate mounted on your panel that physically prevents the main breaker and generator breaker from being on simultaneously. You start the generator manually and flip the breakers yourself. Safe, code-compliant, and a popular choice for portable generators."}
          </p>
          <p style={{ marginTop: "1rem" }}>
            {lang === "es"
              ? "Un transfer switch automatico (ATS) detecta un apagon y pasa a energia del generador en segundos, sin intervencion manual. Es la opcion ideal para generadores standby (propano o gas natural) y para quienes desean proteccion sin esfuerzo."
              : "An automatic transfer switch (ATS) detects a power outage and switches to generator power within seconds, without any manual action. It's the ideal choice for standby generators (propane or natural gas) and for those who want hands-free protection."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Por que no puedo simplemente conectar el generador con un cable de extension"
              : "Why You Can't Just Use an Extension Cord"}
          </h2>
          <p>
            {lang === "es"
              ? "Conectar un generador directamente al panel sin un sistema de transferencia adecuado causa retroalimentacion electrica a la red de la empresa electrica. Eso puede electrocutar a los tecnicos que trabajan en los cables durante el apagon. Ademas, viola el codigo electrico de Florida y puede invalidar tu seguro. Una instalacion correcta protege tu familia, a los trabajadores de la utilidad y tu propiedad."
              : "Connecting a generator directly to your panel without a proper transfer system causes backfeed into the utility grid. That can electrocute utility workers repairing lines during the outage. It also violates Florida electrical code and can void your homeowner's insurance. A proper installation protects your family, utility workers, and your property."}
          </p>
        </div>
      </section>

      <section className="section section-bg-alt" id="faq-generator">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>
            {lang === "es"
              ? "Preguntas Frecuentes — Conexion de Generadores"
              : "Frequently Asked Questions — Generator Hookup"}
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
        <Link to="/panel-upgrade" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Actualizacion de Paneles" : "Panel Upgrades"}
        </Link>
        {" · "}
        <Link to="/electrical-repair" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Reparaciones" : "Electrical Repair"}
        </Link>
        {" · "}
        <Link to="/ev-charger-installation" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Cargadores EV" : "EV Chargers"}
        </Link>
      </div>
    </main>
  );
}
