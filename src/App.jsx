import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { ConsentProvider } from "./context/ConsentContext.jsx";
import { useLanguage } from "./context/LanguageContext.jsx";
import Header from "./components/Header.jsx";
import MobileNav from "./components/MobileNav.jsx";
import CallFab from "./components/CallFab.jsx";
import Footer from "./components/Footer.jsx";
import CookieBanner from "./components/CookieBanner.jsx";
import CookieModal from "./components/CookieModal.jsx";
import Home from "./pages/Home.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function SkipLink() {
  const { t } = useLanguage();
  return (
    <a className="skip-link" href="#main">
      {t("a11y.skip")}
    </a>
  );
}

function Layout() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <SkipLink />
      <Header navOpen={navOpen} onOpenMobileNav={() => setNavOpen((v) => !v)} />
      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
      <CallFab />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <Footer />
      <CookieBanner />
      <CookieModal />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <ConsentProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </ConsentProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
