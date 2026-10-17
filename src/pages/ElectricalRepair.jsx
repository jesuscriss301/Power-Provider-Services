import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "What should I do during a power failure or power outage?",
    a: "First, check your breaker panel for any tripped breakers (they'll be in the middle or OFF position) and reset them. If all breakers are fine, check whether your neighbors also lost power — this points to a utility outage, not your wiring. For a utility outage, contact your provider (Duke Energy or OUC). If the problem is only in your home and breakers keep tripping, or if you smell burning, see sparks, or notice a warm outlet or panel, call us immediately at (407) 592-2900. We handle electrical troubleshooting and repairs Monday–Saturday, 8:00 AM–4:30 PM.",
  },
  {
    q: "Why does my circuit breaker keep tripping?",
    a: "A breaker trips when a circuit draws more current than it's rated for (overload), when there's a short circuit, or when there's a ground fault. If a breaker trips repeatedly under normal load — not when you run a high-draw appliance — it often means the circuit is undersized, there's a wiring issue, or the breaker itself is worn out. We diagnose the root cause before recommending a fix.",
  },
  {
    q: "What causes flickering lights?",
    a: "Occasional flickering when a large appliance starts (AC, refrigerator, dryer) is normal as the compressor draws a surge of current. Persistent flickering or flickering across multiple circuits can indicate loose connections, an undersized service, or wiring issues — all of which need a licensed electrician to evaluate.",
  },
  {
    q: "Is a burning smell from an outlet or switch an emergency?",
    a: "Yes. A burning smell from an outlet, switch, or panel is a warning sign of overheating wiring or a failing device. Turn off the circuit at the breaker (or the main breaker if you're not sure which one), do not use the outlet until it's inspected, and call a licensed electrician. Do not ignore this — electrical fires can start inside walls without visible flames.",
  },
  {
    q: "Do you do same-day electrical repairs?",
    a: "We work Monday–Saturday, 8:00 AM–4:30 PM. For urgent safety issues, call or text (407) 592-2900 and we will do our best to schedule you as quickly as possible.",
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
  name: "Electrical Troubleshooting & Repair",
  serviceType: "Electrical Repair",
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
  url: `${BASE}/electrical-repair`,
};

export default function ElectricalRepair() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Reparaciones Eléctricas en Orlando, FL | Power Provider Services"
      : "Electrical Repair & Troubleshooting in Orlando, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Diagnóstico y reparación de fallas eléctricas en Orlando, Apopka y el Centro de la Florida. Electricista con licencia EC13010990. Lun–Sáb 8 AM–4:30 PM. Estimados gratis — (407) 592-2900."
      : "Licensed electrical troubleshooting and repair in Orlando, Apopka & Central Florida. Power failures, tripping breakers, flickering lights, burned outlets. Mon–Sat 8 AM–4:30 PM. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/electrical-repair`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/electrical-repair`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">{lang === "es" ? "Diagnóstico y Reparaciones" : "Troubleshooting & Repairs"}</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Reparaciones Eléctricas en Orlando, FL"
              : "Electrical Repair in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Diagnosticamos y reparamos fallas eléctricas en hogares y negocios de Orlando, Apopka, Pine Castle, Belle Isle y el Centro de la Florida. Apagones, breakers disparados, luces que parpadean, tomacorrientes quemados — de lunes a sábado, 8 AM–4:30 PM."
              : "We diagnose and repair electrical problems in homes and businesses across Orlando, Apopka, Pine Castle, Belle Isle and the greater Central Florida area. Power failures, tripped breakers, flickering lights, burned outlets — Monday–Saturday, 8 AM–4:30 PM."}
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
          <h2>{lang === "es" ? "Problemas eléctricos que resolvemos" : "Electrical Problems We Solve"}</h2>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Pérdida de energía en parte o toda la vivienda</li>
                <li>Breakers que se disparan repetidamente bajo carga normal</li>
                <li>Luces que parpadean o voltaje inestable</li>
                <li>Tomacorrientes o interruptores que no funcionan</li>
                <li>Tomacorrientes o paneles con olor a quemado, calientes al tacto o con señales de arco eléctrico</li>
                <li>Cortocircuitos y fallas de tierra</li>
                <li>Pérdida de energía solo en la mitad de la casa (a menudo un problema del medidor o del servicio de la empresa eléctrica)</li>
                <li>Problemas después de una tormenta o daño por rayo</li>
              </>
            ) : (
              <>
                <li>Loss of power to part or all of the home or business</li>
                <li>Breakers that trip repeatedly under normal load</li>
                <li>Flickering lights or unstable voltage</li>
                <li>Outlets or switches that don't work</li>
                <li>Outlets or panels that smell like burning, feel warm, or show signs of arcing</li>
                <li>Short circuits and ground faults</li>
                <li>Power loss to only half the house (often a meter or utility service issue)</li>
                <li>Problems after a storm or lightning strike</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es" ? "¿Qué pasa con las fallas eléctricas?" : "Power Failure Near Me — What We Can Do"}
          </h2>
          <p>
            {lang === "es"
              ? "No todas las fallas eléctricas son del mismo tipo. Algunas son de la empresa de servicio eléctrico (Duke Energy, OUC), y nosotros no controlamos esas. Pero muchas fallas que parecen 'apagones' son en realidad problemas internos del sistema eléctrico de la vivienda: un breaker principal disparado, una falla de tierra, un daño en el medidor o en el acometida del servicio. Diagnosticamos cuál es cuál y solucionamos lo que está dentro de tu sistema. Para problemas de la empresa eléctrica, te decimos cómo reportar y qué esperar."
              : "Not all power failures are the same. Some are utility outages (Duke Energy, OUC) — those are outside our control. But many failures that feel like 'outages' are actually internal problems: a tripped main breaker, a ground fault, damage to the meter or service entrance. We diagnose which is which and fix what's inside your system. For true utility issues, we'll tell you how to report and what to expect."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es" ? "Horario y contacto" : "Hours & Contact"}
          </h2>
          <p>
            {lang === "es"
              ? "Atendemos de lunes a sábado, 8:00 AM–4:30 PM. Para problemas urgentes de seguridad eléctrica, llama o envía un texto al (407) 592-2900 y te atendemos lo antes posible."
              : "We work Monday–Saturday, 8:00 AM–4:30 PM. For urgent electrical safety problems, call or text (407) 592-2900 and we'll get to you as quickly as possible."}
          </p>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>{lang === "es" ? "Preguntas Frecuentes — Reparaciones Eléctricas" : "Frequently Asked Questions — Electrical Repair"}</h2>
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
      </div>
    </main>
  );
}
