import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function MobileNav({ open, onClose }) {
  const { t } = useLanguage();

  const navLinks = [
    ["#services", "nav.services"],
    ["#residential", "nav.residential"],
    ["#commercial", "nav.commercial"],
    ["#process", "nav.process"],
    ["#faq", "nav.faq"],
    ["#contact", "nav.contact"],
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 920) onClose();
    }
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <nav id="mobileNav" className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
      <ul>
        {navLinks.map(([href, key]) => (
          <li key={key}>
            <a href={href} onClick={onClose}>
              {t(key)}
            </a>
          </li>
        ))}
      </ul>
      <a className="btn btn-primary" style={{ width: "100%" }} href="tel:+14075922900" onClick={onClose}>
        {t("hero.ctaPrimary")}
      </a>
    </nav>
  );
}
