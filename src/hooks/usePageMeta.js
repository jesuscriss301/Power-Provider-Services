import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../context/LanguageContext.jsx";

/**
 * Sets <title>, <meta description>, <link rel="canonical"> and OG tags for the
 * current page and language. Use the `Helmet` export for service pages that
 * need per-page values injected directly (no dictionary key needed).
 */
export function usePageMeta(titleKey, descKey) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t(titleKey);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(descKey));
  }, [t, lang, titleKey, descKey]);
}

export { Helmet };
