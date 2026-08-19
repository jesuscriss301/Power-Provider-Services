import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { IconPhone, IconSun, IconMoon } from "./icons.jsx";
import logoHeader from "../assets/logo-header.png";

export default function Header({ onOpenMobileNav, navOpen }) {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    ["#services", "nav.services"],
    ["#residential", "nav.residential"],
    ["#commercial", "nav.commercial"],
    ["#process", "nav.process"],
    ["#faq", "nav.faq"],
    ["#contact", "nav.contact"],
  ];

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/#top">
          <img src={logoHeader} alt="Power Provider Services LLC logo" width="44" height="44" />
          <span className="brand-name">
            Power Provider Services
            <small>LLC · Electrical Contractor</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <ul>
            {navLinks.map(([href, key]) => (
              <li key={key}>
                <a href={href}>{t(key)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <div className="lang-toggle" role="group" aria-label={t("lang.toggleLabel")}>
            <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>
              EN
            </button>
            <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>
              ES
            </button>
          </div>

          <button
            type="button"
            className="icon-toggle"
            aria-label={t("theme.toggleLabel")}
            onClick={toggleTheme}
          >
            {theme === "dark" ? <IconSun /> : <IconMoon />}
          </button>

          <a className="btn btn-primary header-call" href="tel:+14075922900">
            <IconPhone width={16} height={16} />
            <span>{t("nav.callBtn")}</span>
          </a>

          <button
            type="button"
            className="icon-toggle nav-toggle"
            aria-label="Menu"
            aria-expanded={navOpen}
            aria-controls="mobileNav"
            onClick={onOpenMobileNav}
          >
            <span aria-hidden="true">
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
