import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";

const faqs = [
  { q: "Who is allowed to do electrical work in Florida?", a: "Florida requires a licensed Electrical Contractor (EC license issued by the State of Florida DBPR) for most electrical work. Homeowners may do their own electrical work on their primary residence in some counties, but they must still pull a permit and pass inspection. Tenants and landlords hiring unlicensed workers face fines and potential liability." },
  { q: "What electrical work requires a permit in Florida?", a: "Any new circuit, service upgrade, panel replacement, subpanel installation, wiring for a new circuit (EV charger, generator inlet, dedicated appliance circuit), or modification to existing wiring requires a permit. Simple like-for-like fixture replacements on an existing circuit (changing a light fixture or outlet cover) generally do not." },
  { q: "How much does an electrical permit cost in Orange County, FL?", a: "Residential electrical permit fees in Orange County typically range from $75 to $200 depending on the scope of work. Commercial permits are calculated differently and can be higher. Contact Orange County Building Division or ask your electrician — we include permit costs in our estimates." },
  { q: "What is the homeowner exemption in Florida electrical code?", a: "Florida Statute 489.103(7) allows homeowners to apply for a permit and perform electrical work on their own primary residence without a contractor's license — but only for improvements to the home they actually live in. The work still requires a permit and must pass inspection. This exemption does not apply to investment properties or rental units." },
  { q: "What happens if electrical work fails inspection?", a: "If work fails inspection, the inspector issues a correction notice describing what must be fixed. The electrician corrects the issues and requests a re-inspection. Repeated failures can result in additional fees. The work cannot be covered by drywall or finishes until it passes all required inspections." },
];

export default function FloridaPermitLaws() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="florida-electrical-permit-laws"
      titleEn="Florida Electrical Permit Laws Explained"
      titleEs="Leyes de Permisos Eléctricos en Florida: Todo lo que Debes Saber"
      descEn="What Florida homeowners and contractors need to know about electrical permits, licenses, and the homeowner exemption — by a licensed Orlando electrician."
      descEs="Lo que propietarios y contratistas deben saber sobre permisos eléctricos, licencias y la exención para propietarios en Florida — por un electricista licenciado en Orlando."
      eyebrowEn="Florida Electrical Law" eyebrowEs="Ley Eléctrica en Florida"
      relatedLinks={[
        { to: "/panel-upgrade",          enLabel: "Panel Upgrades",     esLabel: "Actualización de Paneles" },
        { to: "/ev-charger-installation",enLabel: "EV Charger Install", esLabel: "Cargadores EV" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>En Florida, la mayor parte del trabajo eléctrico — desde instalar un nuevo circuito hasta reemplazar un panel — requiere dos cosas: un contratista con <strong>licencia EC (Electrical Contractor)</strong> expedida por el DBPR del Estado de Florida, y un <strong>permiso municipal o del condado</strong> antes de comenzar. Estas reglas existen para proteger al propietario, a los futuros compradores y a los trabajadores de la empresa eléctrica.</p>
          <h2>¿Qué trabajo requiere permiso?</h2>
          <p>Requieren permiso: cualquier circuito nuevo, actualización del servicio eléctrico (100A → 200A), reemplazo del panel principal, instalación de subpaneles, cableado para cargadores EV, inlets de generador, circuitos dedicados para electrodomésticos grandes, y cualquier modificación del cableado existente. <em>No</em> requieren permiso los reemplazos directos de accesorios en el mismo circuito (cambiar una lámpara o una tapa de tomacorriente).</p>
          <h2>La exención para propietarios (Florida Statute 489.103)</h2>
          <p>La ley de Florida permite que el propietario que vive en su residencia principal solicite el permiso y realice el trabajo eléctrico sin licencia de contratista. El trabajo sigue requiriendo permiso e inspección. Esta exención <strong>no aplica</strong> a propiedades de inversión, propiedades en alquiler, ni a trabajo realizado por inquilinos.</p>
          <h2>Contratistas sin licencia: riesgos reales</h2>
          <p>Contratar un electricista sin licencia en Florida puede resultar en: trabajo que no pasa inspección (que luego tienes que pagar para rehacer), seguros que niegan reclamos, problemas al vender la propiedad (el trabajo sin permiso debe declararse), y multas del condado de hasta $250 por día por cada violación. El precio más bajo de un contratista sin licencia casi siempre sale más caro a largo plazo.</p>
        </>
      ) : (
        <>
          <p>In Florida, most electrical work — from installing a new circuit to replacing a panel — requires two things: a licensed <strong>Electrical Contractor (EC license issued by Florida DBPR)</strong>, and a <strong>permit from the city or county</strong> before work begins. These rules exist to protect homeowners, future buyers, and utility workers.</p>
          <h2>What Work Requires a Permit?</h2>
          <p>Permits are required for: any new circuit, service upgrade (100A → 200A), main panel replacement, subpanel installation, EV charger wiring, generator inlet circuits, dedicated appliance circuits, and any modification to existing wiring. <em>Not</em> required: direct like-for-like fixture replacements on an existing circuit (swapping a light fixture or outlet cover).</p>
          <h2>The Homeowner Exemption (Florida Statute 489.103)</h2>
          <p>Florida law allows a homeowner living in their primary residence to apply for the permit and perform the electrical work themselves without a contractor's license. The work still requires a permit and must pass inspection. This exemption <strong>does not apply</strong> to investment properties, rental properties, or work done by tenants.</p>
          <h2>Unlicensed Contractors: Real Risks</h2>
          <p>Hiring an unlicensed electrician in Florida can result in work that fails inspection (which you then pay to redo), insurance claim denials, problems when selling (unpermitted work must be disclosed), and county fines of up to $250 per day per violation. The lower price of an unlicensed contractor almost always costs more in the long run.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
