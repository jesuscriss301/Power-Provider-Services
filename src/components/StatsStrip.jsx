import { useLanguage } from "../context/LanguageContext.jsx";
import { useCountUp } from "../hooks/useCountUp.js";
import { useReveal } from "../hooks/useReveal.js";

function StatBlock({ children }) {
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default function StatsStrip() {
  const { t } = useLanguage();
  const years = useCountUp(6);

  return (
    <section className="stats-strip" aria-label="Trust indicators">
      <div className="container stats-grid">
        <StatBlock>
          <div className="stat-value">
            <span ref={years.ref}>{years.display}</span>
          </div>
          <div className="stat-label">{t("stats.years.label")}</div>
        </StatBlock>

        <StatBlock>
          <div className="stat-value">{t("stats.license.value")}</div>
          <div className="stat-label">{t("stats.license.label")}</div>
        </StatBlock>

        <a
          className="reveal is-visible stat-link"
          href="https://www.bbb.org/us/fl/orlando/profile/electrician/power-provider-services-llc-0733-235981147"
          target="_blank"
          rel="noopener"
        >
          <div className="stat-value">{t("stats.bbb.value")}</div>
          <div className="stat-label">{t("stats.bbb.label")}</div>
        </a>

        <a
          className="reveal is-visible stat-link"
          href="https://www.yelp.com/biz/power-provider-services-apopka-3"
          target="_blank"
          rel="noopener"
        >
          <div className="stat-value">{t("stats.yelp.value")}</div>
          <div className="stat-label">{t("stats.yelp.label")}</div>
        </a>
      </div>
    </section>
  );
}
