import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { IconShield, IconCheck, IconClock, IconBuilding, IconBolt, IconPhone } from "./icons.jsx";

const ITEMS = [
  { icon: IconShield, key: "why1" },
  { icon: IconCheck, key: "why2" },
  { icon: IconClock, key: "why3" },
  { icon: IconBuilding, key: "why4" },
  { icon: IconBolt, key: "why5" },
  { icon: IconPhone, key: "why6" },
];

function Feature({ Icon, titleKey, descKey }) {
  const { t } = useLanguage();
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={`feature ${className}`}>
      <Icon width={22} height={22} />
      <div>
        <h3>{t(titleKey)}</h3>
        <p>{t(descKey)}</p>
      </div>
    </div>
  );
}

export default function WhyChooseUs() {
  const { t } = useLanguage();
  const head = useReveal();

  return (
    <section className="section section-bg-alt">
      <div className="container">
        <div ref={head.ref} className={`section-head center ${head.className}`}>
          <p className="eyebrow">{t("why.eyebrow")}</p>
          <h2>{t("why.h2")}</h2>
          <p>{t("why.sub")}</p>
        </div>
        <div className="feature-list">
          {ITEMS.map(({ icon, key }) => (
            <Feature key={key} Icon={icon} titleKey={`${key}.title`} descKey={`${key}.desc`} />
          ))}
        </div>
      </div>
    </section>
  );
}
