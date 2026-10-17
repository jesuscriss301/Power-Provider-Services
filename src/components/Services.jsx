import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import {
  IconPanel,
  IconBolt,
  IconLightbulb,
  IconOutlet,
  IconWire,
  IconEvCharger,
  IconCircuit,
  IconFan,
  IconBuilding,
  IconConstruction,
} from "./icons.jsx";

const SERVICES = [
  { icon: IconPanel, key: "svc1", link: "/panel-upgrade" },
  { icon: IconBolt, key: "svc2", link: "/electrical-repair" },
  { icon: IconLightbulb, key: "svc3" },
  { icon: IconOutlet, key: "svc4", link: "/outlet-installation" },
  { icon: IconWire, key: "svc5" },
  { icon: IconEvCharger, key: "svc6", link: "/ev-charger-installation" },
  { icon: IconCircuit, key: "svc7" },
  { icon: IconFan, key: "svc8" },
  { icon: IconBuilding, key: "svc9" },
  { icon: IconConstruction, key: "svc10" },
];

function ServiceCard({ Icon, titleKey, descKey, link }) {
  const { t, lang } = useLanguage();
  const { ref, className } = useReveal();
  return (
    <article ref={ref} className={`card ${className}`}>
      <div className="card-icon">
        <Icon width={24} height={24} />
      </div>
      <h3>{t(titleKey)}</h3>
      <p>{t(descKey)}</p>
      {link && (
        <Link
          to={link}
          style={{ fontSize: ".85rem", fontWeight: 600, color: "var(--pps-red-text)", textDecoration: "none" }}
        >
          {lang === "es" ? "Más información →" : "Learn more →"}
        </Link>
      )}
    </article>
  );
}

export default function Services() {
  const { t } = useLanguage();
  const head = useReveal();

  return (
    <section className="section" id="services">
      <div className="container">
        <div ref={head.ref} className={`section-head center ${head.className}`}>
          <p className="eyebrow">{t("services.eyebrow")}</p>
          <h2>{t("services.h2")}</h2>
          <p>{t("services.sub")}</p>
        </div>
        <div className="grid grid-services">
          {SERVICES.map(({ icon, key, link }) => (
            <ServiceCard key={key} Icon={icon} titleKey={`${key}.title`} descKey={`${key}.desc`} link={link} />
          ))}
        </div>
      </div>
    </section>
  );
}
