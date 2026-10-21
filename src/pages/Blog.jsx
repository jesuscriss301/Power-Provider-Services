import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";
import Contact from "../components/Contact.jsx";
import ElectricBorder from "../components/ElectricBorder.jsx";

const BASE = "https://www.powerproviderservices.com";

const ARTICLES = [
  {
    slug: "florida-electrical-permit-laws",
    image: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755685_640.jpg",
    enTitle: "Florida Electrical Permit Laws: What Every Homeowner Should Know",
    esTitle: "Leyes de Permisos Eléctricos en Florida: Lo Que Todo Propietario Debe Saber",
    enDesc: "When you need a permit, how to get one, and what happens if you skip it.",
    esDesc: "Cuándo necesitas un permiso, cómo obtenerlo y qué pasa si lo omites.",
    eyebrow: "Leyes / Laws",
  },
  {
    slug: "fines-unpermitted-electrical-work",
    image: "https://cdn.pixabay.com/photo/2015/12/07/10/49/electrician-1080554_640.jpg",
    enTitle: "Fines for Unpermitted Electrical Work in Florida",
    esTitle: "Multas por Trabajo Eléctrico Sin Permiso en Florida",
    enDesc: "Up to $250/day in fines, insurance denials, and forced teardowns.",
    esDesc: "Hasta $250/día en multas, rechazo de seguros y demoliciones forzadas.",
    eyebrow: "Leyes / Laws",
  },
  {
    slug: "ev-charger-types-guide",
    image: "https://cdn.pixabay.com/photo/2019/11/19/07/39/current-gas-station-4636710_640.jpg",
    enTitle: "EV Charger Types: Level 1, Level 2 & DC Fast Charging Explained",
    esTitle: "Tipos de Cargadores EV: Nivel 1, Nivel 2 y Carga Rápida DC",
    enDesc: "Which charger is right for your home and vehicle in Orlando, FL.",
    esDesc: "Qué cargador es el correcto para tu hogar y vehículo en Orlando.",
    eyebrow: "Guía / Guide",
  },
  {
    slug: "electrical-panel-types-guide",
    image: "https://cdn.pixabay.com/photo/2016/02/18/02/58/electrician-1206468_640.jpg",
    enTitle: "Electrical Panel Types: Which Are Safe and Which Are Not",
    esTitle: "Tipos de Paneles Eléctricos: Cuáles Son Seguros y Cuáles No",
    enDesc: "Federal Pacific, Zinsco, Square D, Eaton — a plain-English comparison.",
    esDesc: "Federal Pacific, Zinsco, Square D, Eaton — comparación en lenguaje simple.",
    eyebrow: "Guía / Guide",
  },
  {
    slug: "reduce-electric-bill-holidays",
    image: "https://cdn.pixabay.com/photo/2020/12/20/10/01/christmas-lights-5846566_640.jpg",
    enTitle: "How to Reduce Your Electric Bill During the Holidays in Florida",
    esTitle: "Cómo Reducir tu Factura Eléctrica en las Fiestas en Florida",
    enDesc: "LED lighting, smart plugs, TOU rates, and HVAC tips for the season.",
    esDesc: "Iluminación LED, enchufes inteligentes, tarifas TOU y consejos de HVAC.",
    eyebrow: "Ahorro / Savings",
  },
  {
    slug: "hurricane-electrical-safety",
    image: "https://cdn.pixabay.com/photo/2017/01/29/21/54/hurricane-2019494_640.jpg",
    enTitle: "Hurricane Electrical Safety: Before, During & After the Storm",
    esTitle: "Seguridad Eléctrica en Huracanes: Antes, Durante y Después",
    enDesc: "Generator safety, backfeed dangers, and when to call an electrician after flooding.",
    esDesc: "Seguridad del generador, peligros de retroalimentación y cuándo llamar al electricista.",
    eyebrow: "Seguridad / Safety",
  },
  {
    slug: "panel-upgrade-home-value",
    image: "https://cdn.pixabay.com/photo/2016/09/23/14/51/florida-home-1689857_640.jpg",
    enTitle: "How a Panel Upgrade Increases Your Home Value in Florida",
    esTitle: "Cómo el Upgrade de Panel Aumenta el Valor de tu Propiedad en Florida",
    enDesc: "4-point inspections, FHA/VA loans, and the ROI of upgrading to 200A.",
    esDesc: "Inspecciones de 4 puntos, préstamos FHA/VA y el ROI de un upgrade a 200A.",
    eyebrow: "Valor / Value",
  },
  {
    slug: "ev-charger-home-value",
    image: "https://cdn.pixabay.com/photo/2019/06/15/20/21/electric-car-4276419_640.jpg",
    enTitle: "Does an EV Charger Increase Home Value?",
    esTitle: "¿Un Cargador EV Aumenta el Valor de tu Propiedad?",
    enDesc: "Zillow data, Duke Energy incentives, and what buyers in Orlando expect.",
    esDesc: "Datos de Zillow, incentivos de Duke Energy y lo que esperan los compradores.",
    eyebrow: "Valor / Value",
  },
  {
    slug: "smart-home-property-value",
    image: "https://cdn.pixabay.com/photo/2018/01/21/09/59/smart-home-3096219_640.jpg",
    enTitle: "How Smart Home Upgrades Affect Property Value",
    esTitle: "Cómo las Mejoras de Hogar Inteligente Afectan el Valor de la Propiedad",
    enDesc: "NAR survey results, Lutron vs Leviton ROI, and which upgrades matter most.",
    esDesc: "Resultados de encuestas NAR, ROI de Lutron vs Leviton y qué mejoras importan más.",
    eyebrow: "Valor / Value",
  },
  {
    slug: "outdoor-lighting-home-value",
    image: "https://cdn.pixabay.com/photo/2014/05/06/21/20/garden-339230_640.jpg",
    enTitle: "Outdoor Lighting and Home Value: What Electricians Know",
    esTitle: "Iluminación Exterior y Valor de Propiedad: Lo Que Saben los Electricistas",
    enDesc: "CPTED principles, curb appeal, and the ROI of a professional lighting circuit.",
    esDesc: "Principios CPTED, atractivo visual y el ROI de un circuito de iluminación profesional.",
    eyebrow: "Valor / Value",
  },
];

export default function Blog() {
  const { lang } = useLanguage();

  return (
    <main id="main">
      <Helmet>
        <title>
          {lang === "es"
            ? "Recursos y Artículos Eléctricos — Power Provider Services"
            : "Electrical Resources & Articles — Power Provider Services"}
        </title>
        <meta
          name="description"
          content={
            lang === "es"
              ? "Guías, leyes, consejos y datos sobre electricidad en Orlando y Florida — por Power Provider Services."
              : "Electrical guides, Florida laws, tips and data for Orlando homeowners — by Power Provider Services."
          }
        />
        <link rel="canonical" href={`${BASE}/blog`} />
      </Helmet>

      {/* Hero */}
      <section className="section" style={{ paddingTop: 80, paddingBottom: 48, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 1100 }}>
          <p className="eyebrow">{lang === "es" ? "Recursos" : "Resources"}</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: "0.4em" }}>
            {lang === "es" ? "Artículos y Guías Eléctricas" : "Electrical Articles & Guides"}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--pps-text-muted)", maxWidth: "60ch", margin: 0 }}>
            {lang === "es"
              ? "Información práctica sobre leyes eléctricas en Florida, tipos de equipos, seguridad y cómo los servicios eléctricos afectan el valor de tu propiedad."
              : "Practical information about Florida electrical laws, equipment types, safety, and how electrical work affects your property value."}
          </p>
        </div>
      </section>

      {/* Article grid */}
      <section className="section">
        <div className="container" style={{ maxWidth: 1100 }}>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {ARTICLES.map((article) => (
              <li key={article.slug}>
                <Link to={`/blog/${article.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
                  <ElectricBorder color="#c8161d" style={{ height: "100%" }}>
                  <div className="article-card">
                    {article.image && (
                      <div style={{ margin: "-22px -20px 16px", overflow: "hidden", borderRadius: "10px 10px 0 0" }}>
                        <img
                          src={article.image}
                          alt={lang === "es" ? article.esTitle : article.enTitle}
                          loading="lazy"
                          style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
                        />
                      </div>
                    )}
                    <p className="eyebrow" style={{ marginBottom: 4, fontSize: "0.75rem" }}>
                      {article.eyebrow}
                    </p>
                    <h3>{lang === "es" ? article.esTitle : article.enTitle}</h3>
                    <p className="article-desc">
                      {lang === "es" ? article.esDesc : article.enDesc}
                    </p>
                    <span className="read-more">
                      {lang === "es" ? "Leer más →" : "Read more →"}
                    </span>
                  </div>
                  </ElectricBorder>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact />
    </main>
  );
}
