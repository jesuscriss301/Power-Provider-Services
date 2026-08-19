import { IconPhone, IconWhatsApp } from "./icons.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

// Floating quick-actions, right edge of the screen (not in the nav).
// WhatsApp shows on every screen size; the Call FAB is mobile-only
// (hidden ≥640px — see .fab-call in global.css).
export default function CallFab() {
  const { t } = useLanguage();

  return (
    <div className="floating-fabs">
      <a
        className="fab fab-whatsapp"
        href="https://wa.me/14075922900"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("a11y.whatsapp")}
      >
        <IconWhatsApp width={26} height={26} />
      </a>
      <a className="fab fab-call" href="tel:+14075922900" aria-label={t("a11y.call")}>
        <IconPhone width={24} height={24} />
      </a>
    </div>
  );
}
