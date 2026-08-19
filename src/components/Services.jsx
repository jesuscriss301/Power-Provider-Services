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
  { icon: IconPanel, key: "svc1" },
  { icon: IconBolt, key: "svc2" },
  { icon: IconLightbulb, key: "svc3" },
  { icon: IconOutlet, key: "svc4" },
  { icon: IconWire, key: "svc5" },
  { icon: IconEvCharger, key: "svc6" },
  { icon: IconCircuit, key: "svc7" },
  { icon: IconFan, key: "svc8" },
  { icon: IconBuilding, key: "svc9" },
  { icon: IconConstruction, key: "svc10" },
];

function ServiceCard({ Icon, titleKey, descKey }) {
  const { t } = useLanguage();
  const { ref, className } = useReveal();
  return (
    <article ref={ref} className={`card ${className}`}>
      <div className="card-icon">
        <Icon width={24} height={24} />
      </div>
      <h3>{t(titleKey)}</h3>
      <p>{t(descKey)}</p>
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
          {SERVICES.map(({ icon, key }) => (
            <ServiceCard key={key} Icon={icon} titleKey={`${key}.title`} descKey={`${key}.desc`} />
          ))}
        </div>
      </div>
    </section>
  );
}
