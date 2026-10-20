import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "What types of outdoor lighting do you install?",
    a: "We install a wide range of exterior lighting: security floodlights and motion-activated lights, pathway and landscape lighting, post lights and pole lights, soffit and fascia lights, string light circuits for patios and pergolas, garage and driveway lighting, and exterior outlet circuits for seasonal or decorative lighting. We also handle the conduit and circuit work for low-voltage landscape lighting systems.",
  },
  {
    q: "Do I need a permit for outdoor lighting installation in Orlando?",
    a: "New outdoor circuits — any new wiring run from the panel to exterior fixtures — require an electrical permit in Florida. Simple fixture replacements on an existing circuit typically do not. We confirm at the estimate whether your specific project requires a permit and handle the filing.",
  },
  {
    q: "Can you install outdoor lighting on a new circuit?",
    a: "Yes. If your existing exterior circuits are full or you want dedicated circuits for landscape, security, or decorative lighting, we run a new circuit from your electrical panel to the outdoor location. This is the safest and most flexible approach, and it's what we recommend for permanent landscape or security lighting.",
  },
  {
    q: "What is the difference between line-voltage and low-voltage outdoor lighting?",
    a: "Line-voltage outdoor lighting runs at 120V from your home's electrical panel — it's what security floodlights, post lights, and porch lights use. Low-voltage lighting (typically 12V) uses a transformer plugged into an outdoor outlet and is common for pathway and landscape accent lighting. We install both, including the outdoor circuits and outlets that both systems need.",
  },
  {
    q: "Can you add an outdoor outlet for string lights or a patio?",
    a: "Yes. Outdoor outlets must be GFCI-protected per Florida electrical code and are a common request for patios, pergolas, and pool decks. We run a new circuit or add a GFCI outlet to an existing circuit, install a weatherproof cover, and ensure the work is permitted and code-compliant.",
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
  name: "Outdoor Lighting Installation",
  serviceType: "Outdoor & Landscape Lighting",
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
  url: `${BASE}/outdoor-lighting`,
};

export default function OutdoorLighting() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Iluminacion Exterior en Orlando, FL | Power Provider Services"
      : "Outdoor Lighting Installation in Orlando, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Instalacion de iluminacion exterior, de seguridad y de paisajismo en Orlando, Apopka y el Centro de la Florida. Circuitos nuevos, focos de seguridad, tomacorrientes exteriores. Estimados gratis — (407) 592-2900."
      : "Outdoor, security, and landscape lighting installation in Orlando, Apopka & Central Florida. New circuits, security floodlights, patio outlets. Licensed work. Free estimates — (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/outdoor-lighting`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/outdoor-lighting`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">
            {lang === "es" ? "Iluminacion Exterior" : "Outdoor Lighting"}
          </p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Iluminacion Exterior en Orlando, FL"
              : "Outdoor Lighting Installation in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Instalamos iluminacion exterior para seguridad, paisajismo y comodidad en hogares y negocios de Orlando, Apopka, Pine Castle, Belle Isle y el Centro de la Florida. Circuitos nuevos, focos de movimiento, luces de camino y tomacorrientes exteriores — trabajo con licencia y estimado gratis."
              : "We install exterior lighting for security, landscaping, and comfort at homes and businesses in Orlando, Apopka, Pine Castle, Belle Isle and Central Florida. New circuits, motion floodlights, pathway lights, and patio outlets — licensed work, free estimates."}
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
              ? "Tipos de iluminacion exterior que instalamos"
              : "Types of Outdoor Lighting We Install"}
          </h2>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li><strong>Iluminacion de seguridad:</strong> focos con sensor de movimiento, camaras con luz integrada, iluminacion de perimetro</li>
                <li><strong>Iluminacion de paisajismo:</strong> luces de camino, iluminacion de arboles y jardin, iluminacion de fachada</li>
                <li><strong>Iluminacion de cochera y entrada:</strong> luces de poste, faroles, iluminacion de toldo</li>
                <li><strong>Iluminacion de patio y pergola:</strong> circuitos para luces de cuerda, iluminacion de cubierta o terraza</li>
                <li><strong>Tomacorrientes exteriores GFCI:</strong> para patio, jardin, piscina o zona de parrilla</li>
                <li><strong>Iluminacion comercial exterior:</strong> senalizacion, estacionamientos, fachadas de negocios</li>
              </>
            ) : (
              <>
                <li><strong>Security lighting:</strong> motion-activated floodlights, camera lights, perimeter lighting</li>
                <li><strong>Landscape lighting:</strong> pathway lights, tree and garden uplighting, facade lighting</li>
                <li><strong>Garage and entry lighting:</strong> post lights, lanterns, soffit lighting</li>
                <li><strong>Patio and pergola lighting:</strong> string light circuits, deck and terrace lighting</li>
                <li><strong>Exterior GFCI outlets:</strong> for patio, garden, pool deck, or grill area</li>
                <li><strong>Commercial exterior lighting:</strong> signage, parking lots, business facades</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Por que la iluminacion exterior necesita un electricista licenciado"
              : "Why Outdoor Lighting Needs a Licensed Electrician"}
          </h2>
          <p>
            {lang === "es"
              ? "La iluminacion exterior esta expuesta a lluvia, humedad, calor intenso y posibles danos fisicos. El codigo electrico de Florida exige que los circuitos y tomacorrientes exteriores sean GFCI, que el cableado exterior este en conduit o use cable apto para exterior (UF-B), y que cualquier circuito nuevo lleve permiso. Como electricistas licenciados en Orlando, hacemos el trabajo correctamente: evaluamos la capacidad del panel, corremos el circuito con el cableado adecuado e instalamos los tomacorrientes GFCI donde corresponde."
              : "Outdoor lighting is exposed to rain, humidity, intense heat, and physical damage. Florida electrical code requires exterior circuits and outlets to be GFCI-protected, exterior wiring to be in conduit or use outdoor-rated cable (UF-B), and any new circuit to carry a permit. As licensed electricians in Orlando, we do the work correctly: assess panel capacity, run the circuit with appropriate wiring, and install GFCI outlets where required."}
          </p>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "Iluminacion solar vs. iluminacion electrica"
              : "Solar vs. Electric Outdoor Lighting"}
          </h2>
          <p>
            {lang === "es"
              ? "Las luces solares son faciles de instalar y no requieren electricista, pero dependen de luz solar directa, su bateria pierde capacidad con el tiempo, y el nivel de luz que producen es significativamente menor. Para iluminacion de seguridad, garaje, fachada o areas donde necesitas luz confiable todos los dias del anio, la iluminacion electrica conectada a un circuito dedicado es la opcion superior."
              : "Solar lights are easy to install and need no electrician, but they depend on direct sunlight, their batteries lose capacity over time, and light output is significantly lower than electric lights. For security, garage, facade, or areas where you need reliable light every day of the year, electric lighting on a dedicated circuit is the superior option."}
          </p>
        </div>
      </section>

      <section className="section section-bg-alt" id="faq-outdoor-lighting">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>
            {lang === "es"
              ? "Preguntas Frecuentes — Iluminacion Exterior"
              : "Frequently Asked Questions — Outdoor Lighting"}
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
        <Link to="/smart-home" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Hogar Inteligente" : "Smart Home"}
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
