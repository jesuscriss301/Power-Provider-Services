import { createContext, useContext, useEffect, useState, useCallback } from "react";

const ThemeContext = createContext(null);

function detectInitialTheme() {
  try {
    const saved = localStorage.getItem("pps-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch (e) {
    /* ignore */
  }
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(detectInitialTheme);

  const setTheme = useCallback((next) => {
    setThemeState(next);
    try {
      localStorage.setItem("pps-theme", next);
    } catch (e) {
      /* ignore */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#0D0D0F" : "#F7F7F8");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
