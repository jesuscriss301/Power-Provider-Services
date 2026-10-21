import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";
import { Link } from "react-router-dom";

const BASE = "https://www.powerproviderservices.com";

export default function Blog() {
  const { lang } = useLanguage();
  return (
    <main id="main">
      <Helmet>
        <title>{lang === "es" ? "Recursos y Artículos — Power Provider Services" : "Electrical Resources & Articles — Power Provider Services"}</title>
        <meta name="description" content={lang === "es" ? "Guías, leyes, consejos y datos sobre electricidad en Orlando y Florida — por Power Provider Services." : "Electrical guides, Florida laws, tips and data for Orlando homeowners — by Power Provider Services."} />
        <link rel="canonical" href={`${BASE}/blog`} />
      </Helmet>

      <section className="section" style={{ paddingTop: 80, paddingBottom: 48, background: "var(--pps-surface)" }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <p className="eyebrow">{lang === "es" ? "Recursos" : "Resources"}</p>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            {lang === "es" ? "Artículos y Guías Eléctricas" : "Electrical Articles & Guides"}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--pps-text-muted)", maxWidth: "60ch" }}>
            {lang === "es"
              ? "Información práctica sobre leyes eléctricas en Florida, tipos de equipos, seguridad y cómo los servicios eléctricos afectan el valor de tu propiedad."
              : "Practical information about Florida electrical laws, equipment types, safety, and how electrical work affects your property value."}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 24 }}>
            {lang === "es" ? (
              <>
          <li key="florida-electrical-permit-laws"><Link to="/blog/florida-electrical-permit-laws" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Leyes de Permisos Eléctricos en Florida</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="fines-unpermitted-electrical-work"><Link to="/blog/fines-unpermitted-electrical-work" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Multas por Trabajo Eléctrico sin Permiso en Florida</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="ev-charger-types-guide"><Link to="/blog/ev-charger-types-guide" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Tipos de Cargadores EV: Guía Completa</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="electrical-panel-types-guide"><Link to="/blog/electrical-panel-types-guide" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Tipos de Paneles Eléctricos: Cuáles Son Seguros</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="reduce-electric-bill-holidays"><Link to="/blog/reduce-electric-bill-holidays" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Cómo Reducir tu Factura de Electricidad en las Fiestas</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="hurricane-electrical-safety"><Link to="/blog/hurricane-electrical-safety" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Seguridad Eléctrica en Huracanes: Antes, Durante y Después</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="panel-upgrade-home-value"><Link to="/blog/panel-upgrade-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>¿Un Panel Upgrade Aumenta el Valor de tu Propiedad?</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="ev-charger-home-value"><Link to="/blog/ev-charger-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Cómo un Cargador EV Aumenta el Valor de tu Casa</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="smart-home-property-value"><Link to="/blog/smart-home-property-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Mejoras de Hogar Inteligente que Aumentan el Valor</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
          <li key="outdoor-lighting-home-value"><Link to="/blog/outdoor-lighting-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Recursos</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Cómo la Iluminación Exterior Aumenta la Seguridad y el Valor</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Leer más →</span></div></Link></li>
              </>
            ) : (
              <>
          <li key="florida-electrical-permit-laws"><Link to="/blog/florida-electrical-permit-laws" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Florida Electrical Permit Laws Explained</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="fines-unpermitted-electrical-work"><Link to="/blog/fines-unpermitted-electrical-work" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Fines for Unpermitted Electrical Work in Florida</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="ev-charger-types-guide"><Link to="/blog/ev-charger-types-guide" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>EV Charger Types: Level 1, Level 2 & DCFC Guide</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="electrical-panel-types-guide"><Link to="/blog/electrical-panel-types-guide" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Electrical Panel Types: Which Are Safe & Which to Replace</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="reduce-electric-bill-holidays"><Link to="/blog/reduce-electric-bill-holidays" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>How to Reduce Your Electric Bill During the Holidays</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="hurricane-electrical-safety"><Link to="/blog/hurricane-electrical-safety" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Hurricane Electrical Safety: Before, During & After the Storm</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="panel-upgrade-home-value"><Link to="/blog/panel-upgrade-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Does a Panel Upgrade Increase Home Value?</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="ev-charger-home-value"><Link to="/blog/ev-charger-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>How an EV Charger Increases Your Home Value</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="smart-home-property-value"><Link to="/blog/smart-home-property-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>Smart Home Upgrades That Increase Property Value</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
          <li key="outdoor-lighting-home-value"><Link to="/blog/outdoor-lighting-home-value" style={{textDecoration:"none"}}><div className="article-card"><p className="eyebrow" style={{marginBottom:4}}>Resources</p><h3 style={{fontSize:"1.1rem",marginBottom:8}}>How Outdoor Lighting Increases Home Security & Value</h3><span style={{color:"var(--pps-red-text)",fontWeight:600}}>Read more →</span></div></Link></li>
              </>
            )}
          </ul>
        </div>
      </section>
    </main>
  );
}
