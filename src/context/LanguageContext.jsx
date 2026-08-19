import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { I18N } from "../i18n/dictionary.js";

const LanguageContext = createContext(null);

function detectInitialLang() {
  try {
    const saved = localStorage.getItem("pps-lang");
    if (saved === "en" || saved === "es") return saved;
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) — fall through */
  }
  const nav = (navigator.language || "en").toLowerCase();
  return nav.indexOf("es") === 0 ? "es" : "en";
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem("pps-lang", next);
    } catch (e) {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang]);

  const dict = I18N[lang] || I18N.en;
  // t(key) looks up the current-language string; falls back to the key
  // itself (visibly obvious in dev) rather than throwing if a key is missing.
  const t = useCallback((key) => (dict[key] !== undefined ? dict[key] : key), [dict]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
