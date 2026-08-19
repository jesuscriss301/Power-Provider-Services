import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";

const STEPS = ["step1", "step2", "step3"];

function Step({ stepKey }) {
  const { t } = useLanguage();
  const { ref, className } = useReveal();
  return (
    <div ref={ref} className={`process-step ${className}`}>
      <h3>{t(`${stepKey}.title`)}</h3>
      <p>{t(`${stepKey}.desc`)}</p>
    </div>
  );
}

export default function Process() {
  const { t } = useLanguage();
  const head = useReveal();

  return (
    <section className="section section-bg-alt" id="process">
      <div className="container">
        <div ref={head.ref} className={`section-head center ${head.className}`}>
          <p className="eyebrow">{t("process.eyebrow")}</p>
          <h2>{t("process.h2")}</h2>
        </div>
        <div className="process-steps">
          {STEPS.map((key) => (
            <Step key={key} stepKey={key} />
          ))}
        </div>
      </div>
    </section>
  );
}
