import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { privacyContent } from "./privacyContent.js";

function Block({ block }) {
  if (block.h3) return <h3>{block.h3}</h3>;
  if (block.p) return <p>{block.p}</p>;
  if (block.ul) {
    return (
      <ul>
        {block.ul.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    );
  }
  if (block.table) {
    return (
      <table className="legal-table">
        <thead>
          <tr>
            {block.table.head.map((h, j) => (
              <th key={j}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.table.rows.map((row, r) => (
            <tr key={r}>
              {row.map((cell, c) => (
                <td key={c}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return null;
}

export default function PrivacyPolicy() {
  const { t, lang } = useLanguage();
  usePageMeta("privacy.meta.title", "privacy.meta.description");

  const sections = privacyContent[lang] || privacyContent.en;
  const disclaimer =
    lang === "es"
      ? "Esta página se ofrece únicamente con fines informativos generales y no constituye asesoría legal. Para garantizar el cumplimiento total de las leyes aplicables (incluyendo, cuando corresponda, GDPR o leyes de privacidad estatales de EE. UU.), recomendamos que esta política sea revisada por un abogado — especialmente antes de activar Google Analytics o Meta Ads."
      : "This page is provided for general informational purposes only and does not constitute legal advice. To ensure full compliance with applicable law (including, where relevant, GDPR or U.S. state privacy laws), we recommend this policy be reviewed by an attorney — especially before Google Analytics or Meta Ads are switched on.";

  return (
    <main id="main">
      <section className="legal-hero">
        <div className="container">
          <p className="eyebrow" style={{ color: "var(--pps-on-gradient-accent)" }}>
            {t("privacy.hero.eyebrow")}
          </p>
          <h1>{t("privacy.hero.h1")}</h1>
          <p>{t("privacy.hero.updated")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-body">
          <p>
            <Link to="/">{t("privacy.backHome")}</Link>
          </p>

          <div className="legal-note">{disclaimer}</div>

          {sections.map((section, i) => (
            <div key={i}>
              <h2>{section.h2}</h2>
              {section.blocks.map((block, j) => (
                <Block block={block} key={j} />
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
