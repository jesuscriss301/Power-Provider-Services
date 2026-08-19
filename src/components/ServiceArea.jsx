import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import logoHero from "../assets/logo-hero.png";

export default function ServiceArea() {
  const { t } = useLanguage();
  const { ref, className } = useReveal();

  return (
    <section className="section">
      <div className="container">
        <div ref={ref} className={`area-panel ${className}`}>
          <div>
            <p className="eyebrow">{t("area.eyebrow")}</p>
            <h2>{t("area.h2")}</h2>
            <p>{t("area.body")}</p>
            <div className="badge-row">
              <a
                className="badge-link"
                href="https://www.bbb.org/us/fl/orlando/profile/electrician/power-provider-services-llc-0733-235981147"
                target="_blank"
                rel="noopener"
              >
                <span>{t("area.badge.bbb")}</span> ↗
              </a>
              <a
                className="badge-link"
                href="https://www.yelp.com/biz/power-provider-services-apopka-3"
                target="_blank"
                rel="noopener"
              >
                <span>{t("area.badge.yelp")}</span> ↗
              </a>
              <a
                className="badge-link"
                href="https://network.procore.com/p/power-provider-services-apopka"
                target="_blank"
                rel="noopener"
              >
                <span>{t("area.badge.procore")}</span> ↗
              </a>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={logoHero}
              alt="Power Provider Services LLC"
              width="220"
              height="220"
              style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,.25))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
