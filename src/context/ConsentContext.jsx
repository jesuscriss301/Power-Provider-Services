import { createContext, useContext, useState, useCallback, useRef, useEffect } from "react";

const ConsentContext = createContext(null);

const CONSENT_KEY = "pps-cookie-consent";
const CONSENT_VERSION = 1;

function readConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && parsed.version === CONSENT_VERSION) return parsed;
    return null;
  } catch (e) {
    return null;
  }
}

function persistConsent(record) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch (e) {
    /* ignore */
  }
}

/**
 * Consent-gated third-party loaders.
 *
 * Nothing analytics- or marketing-related is loaded by this project today.
 * When Google Analytics and Meta Ads are configured (per the client's
 * request), drop the real snippets into these two functions. They already
 * only run once, and only after the visitor has explicitly opted into that
 * category — including if they change their mind later via
 * "Cookie Preferences" in the footer, which re-runs this same gate.
 */
let analyticsLoaded = false;
function loadAnalyticsIfConsented() {
  if (analyticsLoaded) return;
  analyticsLoaded = true;
  // ---- Google Analytics goes here once configured ----
  // Example (replace G-XXXXXXX with the real measurement ID):
  //
  //   const s = document.createElement("script");
  //   s.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
  //   s.async = true;
  //   document.head.appendChild(s);
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){ window.dataLayer.push(arguments); }
  //   gtag("js", new Date());
  //   gtag("config", "G-XXXXXXX");
}

let marketingLoaded = false;
function loadMarketingIfConsented() {
  if (marketingLoaded) return;
  marketingLoaded = true;
  // ---- Meta (Facebook) Pixel / Meta Ads goes here once configured ----
  // Example (replace XXXXXXXXXXXXXXX with the real Pixel ID):
  //
  //   !(function (f, b, e, v, n, t, s) { ... })(
  //     window, document, "script",
  //     "https://connect.facebook.net/en_US/fbevents.js"
  //   );
  //   window.fbq("init", "XXXXXXXXXXXXXXX");
  //   window.fbq("track", "PageView");
}

export function ConsentProvider({ children }) {
  const [consent, setConsentState] = useState(() => readConsent());
  const [bannerOpen, setBannerOpen] = useState(() => readConsent() === null);
  const [modalOpen, setModalOpen] = useState(false);
  const appliedRef = useRef(false);

  const applyConsent = useCallback((record) => {
    if (record.analytics) loadAnalyticsIfConsented();
    if (record.marketing) loadMarketingIfConsented();
  }, []);

  // Apply whatever was already stored (if anything) on first mount.
  useEffect(() => {
    if (appliedRef.current) return;
    appliedRef.current = true;
    const existing = readConsent();
    if (existing) applyConsent(existing);
  }, [applyConsent]);

  const saveConsent = useCallback(
    (analytics, marketing) => {
      const record = {
        version: CONSENT_VERSION,
        necessary: true,
        analytics: !!analytics,
        marketing: !!marketing,
        timestamp: new Date().toISOString(),
      };
      persistConsent(record);
      setConsentState(record);
      applyConsent(record);
      setBannerOpen(false);
      setModalOpen(false);
      return record;
    },
    [applyConsent]
  );

  const acceptAll = useCallback(() => saveConsent(true, true), [saveConsent]);
  const rejectNonEssential = useCallback(() => saveConsent(false, false), [saveConsent]);
  const openPreferences = useCallback(() => setModalOpen(true), []);
  const closePreferences = useCallback(() => setModalOpen(false), []);

  return (
    <ConsentContext.Provider
      value={{
        consent,
        bannerOpen,
        modalOpen,
        acceptAll,
        rejectNonEssential,
        saveConsent,
        openPreferences,
        closePreferences,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used inside <ConsentProvider>");
  return ctx;
}
