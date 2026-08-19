import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";

function SpotlightCard({ prefix }) {
  const { t } = useLanguage();
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={`card ${className}`} style={{ padding: 40 }}>
      <p className="eyebrow">{t(`${prefix}.eyebrow`)}</p>
      <h2 style={{ fontSize: "1.6rem" }}>{t(`${prefix}.h2`)}</h2>
      <p>{t(`${prefix}.body`)}</p>
    </div>
  );
}

export default function SpotlightPair() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 28 }}>
          <SpotlightCard prefix="ev" />
          <SpotlightCard prefix="panel" />
        </div>
      </div>
    </section>
  );
}
