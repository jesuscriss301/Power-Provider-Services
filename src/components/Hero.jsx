import { useLanguage } from "../context/LanguageContext.jsx";
import LightningCanvas from "./LightningCanvas.jsx";
import { IconShield, IconCheck, IconStar } from "./icons.jsx";
import logoHero from "../assets/logo-hero.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="top">
      <LightningCanvas />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div>
          <p className="eyebrow hero-eyebrow">{t("hero.eyebrow")}</p>
          <h1>
            <span>{t("hero.h1a")}</span>
            <span className="hl">{t("hero.h1b")}</span>
            <span>{t("hero.h1c")}</span>
          </h1>
          <p className="hero-sub" dangerouslySetInnerHTML={{ __html: t("hero.sub") }} />
          <div className="hero-ctas">
            <span className="electric-border">
              <a className="btn btn-primary" href="tel:+14075922900">
                {t("hero.ctaPrimary")}
              </a>
            </span>
            <a
              className="btn btn-secondary"
              href="#contact"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.35)" }}
            >
              {t("hero.ctaSecondary")}
            </a>
          </div>
          <div className="hero-trustrow">
            <span className="trust-chip">
              <IconShield width={16} height={16} />
              <span>{t("hero.trust1")}</span>
            </span>
            <span className="trust-chip">
              <IconCheck width={16} height={16} />
              <span>{t("hero.trust2")}</span>
            </span>
            <span className="trust-chip">
              <IconStar width={16} height={16} />
              <span>{t("hero.trust3")}</span>
            </span>
          </div>
        </div>
        <div className="hero-badge-wrap">
          <div className="hero-badge-ring" aria-hidden="true" />
          <img className="hero-badge" src={logoHero} alt="Power Provider Services emblem" width="340" height="340" />
        </div>
      </div>
    </section>
  );
}
