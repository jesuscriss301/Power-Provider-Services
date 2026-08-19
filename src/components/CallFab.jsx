import { IconPhone, IconWhatsApp } from "./icons.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

// Mobile-only floating quick-actions (hidden ≥640px — see .mobile-fabs in
// global.css). Desktop uses the WhatsApp button in the header instead
// (see Header.jsx), so the call FAB stays mobile-exclusive.
export default function CallFab() {
  const { t } = useLanguage();

  return (
    <div className="mobile-fabs">
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
