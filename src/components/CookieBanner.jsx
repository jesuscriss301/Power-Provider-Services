import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useConsent } from "../context/ConsentContext.jsx";

export default function CookieBanner() {
  const { t } = useLanguage();
  const { bannerOpen, acceptAll, rejectNonEssential, openPreferences } = useConsent();

  return (
    <div
      id="cookieBanner"
      className={`cookie-banner${bannerOpen ? " open" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label="Cookie notice"
    >
      <h2 style={{ fontSize: "1.05rem", marginBottom: ".4em" }}>{t("cookie.banner.title")}</h2>
      <p>{t("cookie.banner.text")}</p>
      <div className="cookie-banner-actions">
        <button type="button" className="btn btn-primary" onClick={acceptAll}>
          {t("cookie.banner.accept")}
        </button>
        <button type="button" className="btn btn-secondary" onClick={rejectNonEssential}>
          {t("cookie.banner.reject")}
        </button>
        <button type="button" className="btn btn-secondary" onClick={openPreferences}>
          {t("cookie.banner.customize")}
        </button>
        <Link to="/privacy-policy" className="cookie-link-btn" style={{ alignSelf: "center" }}>
          {t("cookie.banner.learnMore")}
        </Link>
      </div>
    </div>
  );
}
