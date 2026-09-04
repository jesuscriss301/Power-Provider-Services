import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { IconPin } from "./icons.jsx";

// Office address, as supplied by the client.
const ADDRESS = "8018 Sunport Dr Ste 204, Orlando, FL 32809";

export default function LocationMap() {
  const { t } = useLanguage();
  const { ref, className } = useReveal();
  const mapQuery = encodeURIComponent(ADDRESS);

  return (
    <section className="section" id="location">
      <div className="container">
        <div ref={ref} className={`area-panel location-panel ${className}`}>
          <div>
            <p className="eyebrow">{t("location.eyebrow")}</p>
            <h2>{t("location.h2")}</h2>
            <p>{t("location.body")}</p>

            <div className="contact-row" style={{ borderBottom: 0, paddingBottom: 0 }}>
              <IconPin width={20} height={20} />
              <div>
                <div className="small-print">{t("location.addressLabel")}</div>
                <address style={{ fontStyle: "normal", fontWeight: 700 }}>{ADDRESS}</address>
              </div>
            </div>

            <div className="badge-row">
              <a
                className="badge-link"
                href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                target="_blank"
                rel="noopener"
              >
                <span>{t("location.directions")}</span> ↗
              </a>
            </div>
          </div>

          <div className="location-map-wrap">
            <iframe
              title="Power Provider Services LLC — office location map"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
