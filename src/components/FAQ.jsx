import { useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";

const QUESTIONS = ["faq.q1", "faq.q2", "faq.q3", "faq.q4", "faq.q5", "faq.q6", "faq.q7"];
const ANSWERS = ["faq.a1", "faq.a2", "faq.a3", "faq.a4", "faq.a5", "faq.a6", "faq.a7"];

export default function FAQ() {
  const { t } = useLanguage();
  const head = useReveal();
  const list = useReveal();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section section-bg-alt" id="faq">
      <div className="container" style={{ maxWidth: 860 }}>
        <div ref={head.ref} className={`section-head center ${head.className}`}>
          <p className="eyebrow">{t("faq.eyebrow")}</p>
          <h2>{t("faq.h2")}</h2>
        </div>
        <div ref={list.ref} className={`faq-list ${list.className}`}>
          {QUESTIONS.map((qKey, i) => (
            <details
              key={qKey}
              className="faq-item"
              open={openIndex === i}
              onToggle={(e) => {
                if (e.target.open) setOpenIndex(i);
                else if (openIndex === i) setOpenIndex(null);
              }}
            >
              <summary className="faq-q">
                <span>{t(qKey)}</span>
                <span className="plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="faq-a">{t(ANSWERS[i])}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
