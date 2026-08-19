import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { IconCheck } from "./icons.jsx";

export default function SplitSection({
  id,
  altBg = false,
  reverse = false,
  Icon,
  prefix,
  chipCount,
  sectionRef,
}) {
  const { t } = useLanguage();
  const copy = useReveal();
  const media = useReveal();

  const chips = Array.from({ length: chipCount }, (_, i) => `${prefix}.chip${i + 1}`);

  return (
    <section ref={sectionRef} className={`section${altBg ? " section-bg-alt" : ""}`} id={id}>
      <div className={`container split${reverse ? " reverse" : ""}`}>
        <div ref={copy.ref} className={copy.className}>
          <p className="eyebrow">{t(`${prefix}.eyebrow`)}</p>
          <h2>{t(`${prefix}.h2`)}</h2>
          <p>{t(`${prefix}.body`)}</p>
          <div className="chip-list">
            {chips.map((key) => (
              <span className="chip" key={key}>
                <IconCheck width={14} height={14} strokeWidth={3} />
                <span>{t(key)}</span>
              </span>
            ))}
          </div>
        </div>
        <div ref={media.ref} className={`split-media ${media.className}`}>
          <Icon width={88} height={88} stroke="var(--pps-brand-black)" strokeWidth={1.4} opacity={0.55} />
          <span className="media-caption">{t(`${prefix}.media`)}</span>
        </div>
      </div>
    </section>
  );
}
