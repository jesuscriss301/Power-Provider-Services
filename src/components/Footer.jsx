import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useConsent } from "../context/ConsentContext.jsx";
import logoHeader from "../assets/logo-header.png";

export default function Footer() {
  const { t } = useLanguage();
  const { openPreferences } = useConsent();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <div className="footer-brand">
            <img src={logoHeader} alt="Power Provider Services LLC" width="40" height="40" />
            <strong>Power Provider Services LLC</strong>
          </div>
          <p style={{ color: "rgba(255,255,255,.65)", maxWidth: "38ch" }}>{t("footer.tagline")}</p>
        </div>

        <div>
          <h3>{t("footer.linksTitle")}</h3>
          <ul>
            <li><a href="#services">{t("nav.services")}</a></li>
            <li><a href="#residential">{t("nav.residential")}</a></li>
            <li><a href="#commercial">{t("nav.commercial")}</a></li>
            <li><a href="#faq">{t("nav.faq")}</a></li>
            <li><a href="#contact">{t("nav.contact")}</a></li>
          </ul>
        </div>

        <div>
          <h3>{t("footer.verifyTitle")}</h3>
          <ul>
            <li>
              <a
                href="https://www.bbb.org/us/fl/orlando/profile/electrician/power-provider-services-llc-0733-235981147"
                target="_blank"
                rel="noopener"
              >
                Better Business Bureau ↗
              </a>
            </li>
            <li>
              <a href="https://www.yelp.com/biz/power-provider-services-apopka-3" target="_blank" rel="noopener">
                Yelp ↗
              </a>
            </li>
            <li>
              <a href="https://network.procore.com/p/power-provider-services-apopka" target="_blank" rel="noopener">
                Procore Network ↗
              </a>
            </li>
            <li>
              <span>{t("footer.licenseLabel")}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          © <span>{year}</span> Power Provider Services LLC. {t("footer.rights")}
        </span>
        <span style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link to="/privacy-policy">{t("footer.privacyLink")}</Link>
          <button type="button" className="cookie-link-btn" style={{ color: "rgba(255,255,255,.7)" }} onClick={openPreferences}>
            {t("footer.cookieLink")}
          </button>
        </span>
        <span>{t("footer.credit")}</span>
      </div>
    </footer>
  );
}
