import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

/** Sets document.title + meta description for the current page/language. */
export function usePageMeta(titleKey, descKey) {
  const { t, lang } = useLanguage();

  useEffect(() => {
    document.title = t(titleKey);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", t(descKey));
  }, [t, lang, titleKey, descKey]);
}
