import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useConsent } from "../context/ConsentContext.jsx";

export default function CookieModal() {
  const { t } = useLanguage();
  const { modalOpen, closePreferences, saveConsent, acceptAll, consent } = useConsent();
  const modalRef = useRef(null);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      setAnalytics(!!consent?.analytics);
      setMarketing(!!consent?.marketing);
      modalRef.current?.focus();
    }
  }, [modalOpen, consent]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closePreferences();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closePreferences]);

  return (
    <div
      id="cookieModal"
      className={`cookie-modal-overlay${modalOpen ? " open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) closePreferences();
      }}
    >
      <div
        className="cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookieModalTitle"
        tabIndex={-1}
        ref={modalRef}
      >
        <h2 id="cookieModalTitle">{t("cookie.modal.title")}</h2>
        <p style={{ fontSize: ".9rem" }}>{t("cookie.modal.intro")}</p>

        <div className="cookie-cat">
          <div className="cookie-cat-head">
            <strong>{t("cookie.cat.necessary.title")}</strong>
            <label className="toggle">
              <input type="checkbox" checked disabled aria-label="Strictly necessary (always on)" />
              <span className="track" />
            </label>
          </div>
          <p>{t("cookie.cat.necessary.desc")}</p>
        </div>

        <div className="cookie-cat">
          <div className="cookie-cat-head">
            <strong>{t("cookie.cat.analytics.title")}</strong>
            <label className="toggle">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                aria-label="Analytics cookies"
              />
              <span className="track" />
            </label>
          </div>
          <p>{t("cookie.cat.analytics.desc")}</p>
        </div>

        <div className="cookie-cat">
          <div className="cookie-cat-head">
            <strong>{t("cookie.cat.marketing.title")}</strong>
            <label className="toggle">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                aria-label="Advertising cookies"
              />
              <span className="track" />
            </label>
          </div>
          <p>{t("cookie.cat.marketing.desc")}</p>
        </div>

        <div className="cookie-modal-actions">
          <button type="button" className="btn btn-primary" onClick={() => saveConsent(analytics, marketing)}>
            {t("cookie.modal.save")}
          </button>
          <button type="button" className="btn btn-secondary" onClick={acceptAll}>
            {t("cookie.modal.acceptAll")}
          </button>
          <button type="button" className="btn btn-secondary" onClick={closePreferences}>
            {t("cookie.modal.close")}
          </button>
        </div>
      </div>
    </div>
  );
}
