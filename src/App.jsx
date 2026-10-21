import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
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
import EVCharger from "./pages/EVCharger.jsx";
import PanelUpgrade from "./pages/PanelUpgrade.jsx";
import OutletInstallation from "./pages/OutletInstallation.jsx";
import ElectricalRepair from "./pages/ElectricalRepair.jsx";
import ApopkaElectrician from "./pages/ApopkaElectrician.jsx";
import GeneratorHookup from "./pages/GeneratorHookup.jsx";
import SmartHome from "./pages/SmartHome.jsx";
import OutdoorLighting from "./pages/OutdoorLighting.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Blog from "./pages/Blog.jsx";
import FloridaPermitLaws from "./pages/blog/florida-electrical-permit-laws.jsx";
import FinesUnpermitted from "./pages/blog/fines-unpermitted-electrical-work.jsx";
import EVChargerTypes from "./pages/blog/ev-charger-types-guide.jsx";
import PanelTypes from "./pages/blog/electrical-panel-types-guide.jsx";
import ReduceBillHolidays from "./pages/blog/reduce-electric-bill-holidays.jsx";
import HurricaneSafety from "./pages/blog/hurricane-electrical-safety.jsx";
import PanelUpgradeValue from "./pages/blog/panel-upgrade-home-value.jsx";
import EVChargerValue from "./pages/blog/ev-charger-home-value.jsx";
import SmartHomeValue from "./pages/blog/smart-home-property-value.jsx";
import OutdoorLightingValue from "./pages/blog/outdoor-lighting-home-value.jsx";

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
        <Route path="/ev-charger-installation" element={<EVCharger />} />
        <Route path="/panel-upgrade" element={<PanelUpgrade />} />
        <Route path="/outlet-installation" element={<OutletInstallation />} />
        <Route path="/electrical-repair" element={<ElectricalRepair />} />
        <Route path="/apopka-electrician" element={<ApopkaElectrician />} />
        <Route path="/generator-hookup" element={<GeneratorHookup />} />
        <Route path="/smart-home" element={<SmartHome />} />
        <Route path="/outdoor-lighting" element={<OutdoorLighting />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/florida-electrical-permit-laws" element={<FloridaPermitLaws />} />
        <Route path="/blog/fines-unpermitted-electrical-work" element={<FinesUnpermitted />} />
        <Route path="/blog/ev-charger-types-guide" element={<EVChargerTypes />} />
        <Route path="/blog/electrical-panel-types-guide" element={<PanelTypes />} />
        <Route path="/blog/reduce-electric-bill-holidays" element={<ReduceBillHolidays />} />
        <Route path="/blog/hurricane-electrical-safety" element={<HurricaneSafety />} />
        <Route path="/blog/panel-upgrade-home-value" element={<PanelUpgradeValue />} />
        <Route path="/blog/ev-charger-home-value" element={<EVChargerValue />} />
        <Route path="/blog/smart-home-property-value" element={<SmartHomeValue />} />
        <Route path="/blog/outdoor-lighting-home-value" element={<OutdoorLightingValue />} />
      </Routes>

      <Footer />
      <CookieBanner />
      <CookieModal />
    </>
  );
}

// Matches vite.config.js's `base` — Vite exposes it as import.meta.env.BASE_URL
// ("/power-provider-services/" in production, "/" in local dev) so the router
// and the built asset URLs always agree on the subpath.
const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <ConsentProvider>
            <BrowserRouter basename={basename}>
              <Layout />
            </BrowserRouter>
          </ConsentProvider>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
