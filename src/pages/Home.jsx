import { usePageMeta } from "../hooks/usePageMeta.js";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import Hero from "../components/Hero.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import Services from "../components/Services.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import SplitSection from "../components/SplitSection.jsx";
import SpotlightPair from "../components/SpotlightPair.jsx";
import Process from "../components/Process.jsx";
import Testimonial from "../components/Testimonial.jsx";
import FAQ from "../components/FAQ.jsx";
import ServiceArea from "../components/ServiceArea.jsx";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { IconBolt, IconConstruction } from "../components/icons.jsx";
import ElectricBorder from "../components/ElectricBorder.jsx";
import residentialPhoto from "../assets/residential-kitchen-pendant-lighting.jpg";
import commercialPhoto from "../assets/commercial-retail-lighting-maintenance.jpg";

const SIDEBAR_ARTICLES = [
  {
    slug: "florida-electrical-permit-laws",
    enTitle: "Florida Electrical Permit Laws: What Every Homeowner Should Know",
    esTitle: "Leyes de Permisos Eléctricos en Florida",
    enDesc: "When you need a permit, what happens if you skip it, and how we handle it for you.",
    esDesc: "Cuándo necesitas un permiso y qué pasa si lo omites.",
    enCat: "Florida Laws",
    esCat: "Leyes de Florida",
    color: "#c0392b",
    image: "https://cdn.pixabay.com/photo/2017/09/16/14/33/electrician-2755685_640.jpg",
  },
  {
    slug: "hurricane-electrical-safety",
    enTitle: "Hurricane Electrical Safety: Before, During & After the Storm",
    esTitle: "Seguridad Eléctrica en Huracanes: Antes, Durante y Después",
    enDesc: "Generator safety, backfeed dangers, and when to call an electrician after flooding.",
    esDesc: "Seguridad del generador y cuándo llamar al electricista después de un huracán.",
    enCat: "Safety",
    esCat: "Seguridad",
    color: "#1a6b8a",
    image: "https://cdn.pixabay.com/photo/2017/01/29/21/54/hurricane-2019494_640.jpg",
  },
  {
    slug: "ev-charger-home-value",
    enTitle: "Does an EV Charger Increase Home Value?",
    esTitle: "¿Un Cargador EV Aumenta el Valor de tu Propiedad?",
    enDesc: "Zillow data, Duke Energy incentives, and what buyers in Orlando expect.",
    esDesc: "Datos de Zillow, incentivos de Duke Energy y lo que esperan los compradores.",
    enCat: "Home Value",
    esCat: "Valor de Propiedad",
    color: "#27ae60",
    image: "https://cdn.pixabay.com/photo/2019/06/15/20/21/electric-car-4276419_640.jpg",
  },
];

function ArticleCard({ article, lang }) {
  return (
    <Link to={`/blog/${article.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <ElectricBorder color="#c8161d">
      <div style={{
        borderRadius: 8,
        overflow: "hidden",
        border: "1px solid var(--pps-border, rgba(255,255,255,.1))",
        marginBottom: 16,
        transition: "transform .18s ease, box-shadow .18s ease",
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,.2)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = ""; }}
      >
        {/* Article image */}
        <div style={{ height: 130, overflow: "hidden", position: "relative" }}>
          {article.image
            ? <img
                src={article.image}
                alt={lang === "es" ? article.esTitle : article.enTitle}
                loading="lazy"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            : <div style={{
                height: "100%",
                background: `linear-gradient(135deg, ${article.color}dd, ${article.color}88)`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#fff",
                  textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {lang === "es" ? article.esCat : article.enCat}
                </span>
              </div>
          }
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: `linear-gradient(transparent, ${article.color}bb)`,
            padding: "20px 12px 8px",
          }}>
            <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#fff",
              textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {lang === "es" ? article.esCat : article.enCat}
            </span>
          </div>
        </div>
        {/* Text */}
        <div style={{ padding: "14px 14px 12px", background: "var(--pps-surface)" }}>
          <p style={{
            margin: "0 0 6px",
            fontSize: "0.88rem",
            fontWeight: 700,
            lineHeight: 1.4,
            color: "var(--pps-text)",
          }}>
            {lang === "es" ? article.esTitle : article.enTitle}
          </p>
          <p style={{
            margin: "0 0 10px",
            fontSize: "0.78rem",
            lineHeight: 1.5,
            color: "var(--pps-text-muted)",
          }}>
            {lang === "es" ? article.esDesc : article.enDesc}
          </p>
          <span style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "var(--pps-red-text)",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}>
            {lang === "es" ? "Leer →" : "Read →"}
          </span>
        </div>
      </div>
      </ElectricBorder>
    </Link>
  );
}

function HomeBlogSidebar() {
  const { lang } = useLanguage();
  return (
    <aside className="home-blog-sidebar">
      <p style={{
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "var(--pps-text-muted)",
        margin: "0 0 6px",
      }}>
        {lang === "es" ? "DEL BLOG" : "FROM THE BLOG"}
      </p>
      <p style={{
        fontSize: "0.82rem",
        color: "var(--pps-text-muted)",
        margin: "0 0 20px",
        lineHeight: 1.5,
      }}>
        {lang === "es"
          ? "Guías prácticas sobre electricidad en Florida."
          : "Short reads on electrical work in Florida."}
      </p>

      {SIDEBAR_ARTICLES.map(article => (
        <ArticleCard key={article.slug} article={article} lang={lang} />
      ))}

      <Link
        to="/blog"
        style={{
          display: "block",
          textAlign: "center",
          marginTop: 8,
          padding: "10px",
          border: "1.5px solid var(--pps-border)",
          borderRadius: 6,
          fontSize: "0.82rem",
          fontWeight: 700,
          color: "var(--pps-text-muted)",
          textDecoration: "none",
        }}
      >
        {lang === "es" ? "Ver todos los artículos →" : "View all articles →"}
      </Link>
    </aside>
  );
}

export default function Home() {
  usePageMeta("meta.title", "meta.description");

  return (
    <div className="home-layout">
      <main id="main">
        <Hero />
        <StatsStrip />
        <Services />
        <WhyChooseUs />
        <SplitSection id="residential" prefix="res" Icon={IconBolt} image={residentialPhoto} chipCount={6} />
        <SplitSection id="commercial" altBg reverse prefix="com" Icon={IconConstruction} image={commercialPhoto} chipCount={5} />
        <SpotlightPair />
        <Process />
        <Testimonial />
        <FAQ />
        <ServiceArea />
        <Contact />
        <LocationMap />
      </main>
      <HomeBlogSidebar />
    </div>
  );
}
