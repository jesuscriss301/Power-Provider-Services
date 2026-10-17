import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";

const BASE = "https://www.powerproviderservices.com";

const faqs = [
  {
    q: "How much does outlet installation cost in Orlando?",
    a: "The cost depends on the location, wire run length, outlet type, and whether a new dedicated circuit is needed. A simple replacement is the least expensive option; adding a new outlet in a location with no nearby wiring costs more. We provide a free estimate before any work starts.",
  },
  {
    q: "Can I replace a 2-prong outlet with a 3-prong GFCI outlet myself?",
    a: "Outlet replacements in Florida require a licensed electrician or a licensed homeowner performing work on their own primary residence. Beyond licensing, incorrectly wired GFCI outlets can trip under normal use or, worse, fail to trip when they should. A licensed electrician ensures the outlet is wired correctly and grounded or protected per code.",
  },
  {
    q: "What is a GFCI outlet and where are they required?",
    a: "A GFCI (Ground Fault Circuit Interrupter) outlet monitors current flow and shuts off power instantly if it detects a ground fault — protecting you from electric shock near water. Florida code requires GFCI protection in bathrooms, kitchens (within 6 feet of a sink), garages, outdoor locations, and other specified areas.",
  },
  {
    q: "What is a AFCI outlet or breaker?",
    a: "An AFCI (Arc Fault Circuit Interrupter) detects dangerous electrical arcing — a common cause of house fires — and cuts power before the arc ignites something. Florida code requires AFCI protection in bedrooms and other living areas in new construction and major renovations.",
  },
  {
    q: "Do you install outdoor outlets?",
    a: "Yes. Outdoor outlet installation requires a weatherproof in-use cover and GFCI protection. We run the circuit from the panel, set the box, and ensure everything meets code for outdoor use.",
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
  name: "Outlet Installation",
  serviceType: "Outlet & Switch Installation",
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
  url: `${BASE}/outlet-installation`,
};

export default function OutletInstallation() {
  const { lang } = useLanguage();

  const title =
    lang === "es"
      ? "Instalación de Tomacorrientes en Orlando, FL | Power Provider Services"
      : "Outlet Installation in Orlando, FL | Power Provider Services";
  const desc =
    lang === "es"
      ? "Instalación y reemplazo de tomacorrientes e interruptores en Orlando y el Centro de la Florida. GFCI, AFCI, exteriores. Electricista con licencia EC13010990. Estimados gratis — (407) 592-2900."
      : "Licensed outlet installation and replacement in Orlando & Central Florida. GFCI, AFCI, outdoor outlets, new circuits. Free estimates — call or text (407) 592-2900.";

  return (
    <main id="main">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={`${BASE}/outlet-installation`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={`${BASE}/outlet-installation`} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 64, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">{lang === "es" ? "Tomacorrientes e Interruptores" : "Outlets & Switches"}</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3.2rem)", marginBottom: "0.5em" }}>
            {lang === "es"
              ? "Instalación de Tomacorrientes en Orlando, FL"
              : "Outlet Installation in Orlando, FL"}
          </h1>
          <p style={{ fontSize: "1.1rem", maxWidth: "65ch" }}>
            {lang === "es"
              ? "Instalamos y reemplazamos tomacorrientes e interruptores en hogares y negocios de Orlando, Apopka, Pine Castle, Belle Isle y el Centro de la Florida. GFCI, AFCI, exteriores, USB — trabajo con licencia y estimados gratis."
              : "We install and replace outlets and switches in homes and businesses across Orlando, Apopka, Pine Castle, Belle Isle and the greater Central Florida area. GFCI, AFCI, outdoor, USB outlets — licensed work, free estimates."}
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
          <h2>{lang === "es" ? "Tipos de trabajo que realizamos" : "Types of Outlet Work We Do"}</h2>
          <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", color: "var(--pps-text-muted)", lineHeight: 2 }}>
            {lang === "es" ? (
              <>
                <li>Reemplazo de tomacorrientes de 2 pines por GFCI de 3 pines</li>
                <li>Instalación de nuevos tomacorrientes en ubicaciones sin cableado existente</li>
                <li>Tomacorrientes GFCI en baños, cocinas, garajes y exteriores (requerido por código)</li>
                <li>Tomacorrientes AFCI en dormitorios y áreas de estar (requerido en nuevas construcciones)</li>
                <li>Tomacorrientes exteriores con tapa a prueba de intemperie</li>
                <li>Tomacorrientes USB y de carga rápida</li>
                <li>Reemplazo o reubicación de interruptores de luz</li>
                <li>Interruptores de tres vías (para controlar una luz desde dos puntos)</li>
                <li>Tomacorrientes de 240V para electrodomésticos grandes (secadora, estufa eléctrica)</li>
              </>
            ) : (
              <>
                <li>Replacing 2-prong outlets with 3-prong GFCI outlets</li>
                <li>Adding new outlets where no wiring exists</li>
                <li>GFCI outlets in bathrooms, kitchens, garages, and outdoors (code-required)</li>
                <li>AFCI outlets or breakers in bedrooms and living areas (new construction)</li>
                <li>Outdoor outlets with weatherproof in-use covers</li>
                <li>USB and fast-charge outlets</li>
                <li>Light switch replacement or relocation</li>
                <li>3-way switches (to control a light from two locations)</li>
                <li>240V outlets for large appliances (dryer, electric range)</li>
              </>
            )}
          </ul>

          <h2 style={{ marginTop: "2rem" }}>
            {lang === "es"
              ? "¿Cuándo es mejor agregar un circuito nuevo?"
              : "When Should You Add a New Circuit Instead?"}
          </h2>
          <p>
            {lang === "es"
              ? "A veces, añadir un simple tomacorriente no es suficiente. Si el circuito existente ya está cargado (breakers que se disparan, voltaje bajo cuando hay varios aparatos conectados), lo más seguro es agregar un circuito dedicado desde el panel. También es obligatorio para electrodomésticos grandes como secadoras, hornos eléctricos, refrigeradores de alta capacidad, y sistemas de aire acondicionado. Evaluamos tu situación y te recomendamos la solución más segura y económica."
              : "Sometimes adding an outlet alone isn't the right answer. If the existing circuit is already loaded (tripping breakers, low voltage when multiple devices run), the safer fix is a dedicated circuit from the panel. A dedicated circuit is also required for large appliances like dryers, electric ranges, high-capacity refrigerators, and air handlers. We assess your situation and recommend the safest, most cost-effective solution."}
          </p>
        </div>
      </section>

      <section className="section section-bg-alt">
        <div className="container" style={{ maxWidth: 860 }}>
          <p className="eyebrow">FAQ</p>
          <h2>{lang === "es" ? "Preguntas Frecuentes — Tomacorrientes" : "Frequently Asked Questions — Outlet Installation"}</h2>
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
        <Link to="/electrical-repair" style={{ color: "var(--pps-text-muted)", textDecoration: "none" }}>
          {lang === "es" ? "Reparaciones" : "Electrical Repair"}
        </Link>
      </div>
    </main>
  );
}
