import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";

export default function Testimonial() {
  const { t } = useLanguage();
  const head = useReveal();
  const block = useReveal();

  return (
    <section className="section">
      <div className="container">
        <p ref={head.ref} className={`eyebrow ${head.className}`}>
          {t("testi.eyebrow")}
        </p>
        <h2 className="reveal is-visible" style={{ marginBottom: 28 }}>
          {t("testi.h2")}
        </h2>
        <div ref={block.ref} className={`testimonial ${block.className}`}>
          <div className="stars" aria-hidden="true">
            ★★★★★
          </div>
          <blockquote>{t("testi.quote")}</blockquote>
          <cite>{t("testi.cite")}</cite>
        </div>
      </div>
    </section>
  );
}
