import { useLanguage } from "../context/LanguageContext.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { IconPhone, IconMail, IconClock } from "./icons.jsx";

export default function Contact() {
  const { t } = useLanguage();
  const head = useReveal();
  const card = useReveal();
  const form = useReveal();

  return (
    <section className="section section-bg-alt" id="contact">
      <div className="container">
        <div ref={head.ref} className={`section-head center ${head.className}`}>
          <p className="eyebrow">{t("contact.eyebrow")}</p>
          <h2>{t("contact.h2")}</h2>
          <p>{t("contact.body")}</p>
        </div>
        <div className="contact-grid">
          <div ref={card.ref} className={`contact-card ${card.className}`}>
            <div className="contact-row">
              <IconPhone width={20} height={20} />
              <div>
                <div className="small-print">{t("contact.phoneLabel")}</div>
                <a href="tel:+14075922900">(407) 592-2900</a>
              </div>
            </div>
            <div className="contact-row">
              <IconMail width={20} height={20} />
              <div>
                <div className="small-print">{t("contact.emailLabel")}</div>
                <a href="mailto:powerproviderservices@gmail.com">powerproviderservices@gmail.com</a>
              </div>
            </div>
            <div className="contact-row" style={{ alignItems: "flex-start" }}>
              <IconClock width={20} height={20} style={{ marginTop: 2 }} />
              <div style={{ width: "100%" }}>
                <div className="small-print">{t("contact.hoursLabel")}</div>
                <table className="hours-table">
                  <tbody>
                    <tr>
                      <td>{t("contact.hours.weekdays")}</td>
                      <td style={{ textAlign: "right" }}>{t("contact.hours.weekdaysVal")}</td>
                    </tr>
                    <tr>
                      <td>{t("contact.hours.sunday")}</td>
                      <td style={{ textAlign: "right" }}>{t("contact.hours.sundayVal")}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <form
            ref={form.ref}
            className={`contact-card ${form.className}`}
            action="mailto:powerproviderservices@gmail.com"
            method="post"
            encType="text/plain"
          >
            <h3 style={{ marginBottom: "1em" }}>{t("contact.formTitle")}</h3>
            <label className="visually-hidden" htmlFor="cf-name">
              {t("contact.formName")}
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              className="form-field"
              placeholder={t("contact.formName")}
              required
            />
            <label className="visually-hidden" htmlFor="cf-phone">
              {t("contact.formPhone")}
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              className="form-field"
              placeholder={t("contact.formPhone")}
            />
            <label className="visually-hidden" htmlFor="cf-msg">
              {t("contact.formMsg")}
            </label>
            <textarea
              id="cf-msg"
              name="message"
              rows={4}
              className="form-field"
              placeholder={t("contact.formMsg")}
              style={{ marginBottom: 16 }}
            />
            <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
              {t("contact.formSubmit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
