import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqs = [
  { q: "Is a Federal Pacific Electric (Stab-Lok) panel dangerous?", a: "According to the Consumer Product Safety Commission and multiple fire investigation studies, Federal Pacific Electric Stab-Lok panels have a documented history of breaker failures — breakers that don't trip during an overload or short circuit. The CPSC investigated them in the 1980s. Most electricians, home inspectors, and insurance companies consider them a fire risk and recommend replacement. Citizens Insurance and many Florida insurers will not insure a home with a Stab-Lok panel." },
  { q: "How do I know if I have a Federal Pacific or Zinsco panel?", a: "Check your electrical panel. Federal Pacific panels have the brand name 'Federal Pacific Electric' or 'FPE' and breakers labeled 'Stab-Lok' — often red or orange in color. Zinsco panels (also sold as GTE-Sylvania) have breakers in multiple colors (purple, blue, red, green). If you're unsure, send us a photo — we can identify it from the panel photo." },
  { q: "What are safe modern electrical panel brands?", a: "The most widely trusted residential panel brands are Square D (QO and Homeline lines), Eaton (BR and CH lines), and Siemens (PL and ES lines). All three are readily available, UL-listed, and have proven reliability records. We carry and install all three." },
  { q: "Does the type of electrical panel affect my homeowner's insurance in Florida?", a: "Yes, significantly. Citizens Insurance and most Florida insurers require a 4-point inspection for older homes. Panels with known safety issues (Federal Pacific Stab-Lok, Zinsco, Challenger, fuse boxes) are grounds for insurance denial. A modern Square D, Eaton, or Siemens panel will pass the 4-point inspection." },
  { q: "My panel is 100 amps — is that enough for a modern home?", a: "For a small home without electric appliances or EV charging, 100 amps may be sufficient. However, adding an EV charger (40A circuit), electric vehicle charging, electric dryer, electric stove, or air conditioners to a 100-amp panel often leaves insufficient capacity. Most electricians recommend upgrading to 200 amps for modern homes, especially in Florida where AC runs year-round." },
];

export default function PanelTypesGuide() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="electrical-panel-types-guide"
      titleEn="Electrical Panel Types: Which Are Safe and Which to Replace"
      titleEs="Tipos de Paneles Eléctricos: Cuáles Son Seguros y Cuáles Reemplazar"
      descEn="Federal Pacific Stab-Lok, Zinsco, Square D, Eaton, Siemens — a licensed Orlando electrician explains which panels have safety issues and which are reliable."
      descEs="Federal Pacific Stab-Lok, Zinsco, Square D, Eaton, Siemens — un electricista licenciado en Orlando explica qué paneles tienen problemas de seguridad y cuáles son confiables."
      eyebrowEn="Electrical Panel Guide" eyebrowEs="Guía de Paneles Eléctricos"
      relatedLinks={[
        { to: "/panel-upgrade", enLabel: "Panel Upgrade Service", esLabel: "Actualización de Paneles" },
        { to: "/blog/fines-unpermitted-electrical-work", enLabel: "Unpermitted Work Risks", esLabel: "Riesgos sin Permiso" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>No todos los paneles eléctricos son iguales. Algunas marcas fabricadas entre los años 1950 y 1990 tienen defectos documentados de seguridad. Conocer la diferencia puede proteger tu hogar, tu seguro y la venta futura de tu propiedad.</p>
          <h2>Paneles con problemas documentados — Considerar reemplazo</h2>
          <p><strong>Federal Pacific Electric (Stab-Lok):</strong> La Comisión de Seguridad de Productos del Consumidor (CPSC) investigó estos paneles en los años 80. Múltiples estudios documentan fallas en los disyuntores — no cortan el circuito durante sobrecargas o cortocircuitos. Citizens Insurance y la mayoría de las aseguradoras de Florida no aseguran hogares con este panel. Se reconocen por el nombre "Stab-Lok" y disyuntores rojos o naranja.</p>
          <p><strong>Zinsco / GTE-Sylvania:</strong> Disyuntores que se pueden soldar al bus de cobre por corrosión, lo que impide que corten el circuito. También conocidos por fundir o deformarse. Los disyuntores son de múltiples colores (morado, azul, rojo, verde).</p>
          <p><strong>Cajas de fusibles:</strong> No son peligrosas por diseño, pero son obsoletas, limitan la capacidad del servicio a 60A, y no tienen espacio para circuitos modernos. La mayoría de aseguradoras las rechazan.</p>
          <h2>Paneles modernos confiables</h2>
          <p><strong>Square D (líneas QO y Homeline)</strong>, <strong>Eaton (líneas BR y CH)</strong> y <strong>Siemens (líneas PL y ES)</strong> son las marcas residenciales más utilizadas y confiables. Todas están listadas UL, tienen historial de confiabilidad probado y pasan las inspecciones de 4 puntos de las aseguradoras en Florida.</p>
          <h2>¿Cómo saber qué panel tienes?</h2>
          <p>Abre la tapa del panel y busca el nombre de la marca. Si dice "Federal Pacific Electric" o "FPE" con disyuntores marcados "Stab-Lok", o si los disyuntores son de múltiples colores brillantes (Zinsco), es una señal de alerta. Si tienes dudas, envíanos una foto — podemos identificarlo.</p>
        </>
      ) : (
        <>
          <p>Not all electrical panels are created equal. Some brands manufactured between the 1950s and 1990s have documented safety defects. Knowing the difference can protect your home, your insurance, and the future sale of your property.</p>
          <h2>Panels with Documented Issues — Consider Replacement</h2>
          <p><strong>Federal Pacific Electric (Stab-Lok):</strong> The Consumer Product Safety Commission investigated these panels in the 1980s. Multiple studies document breaker failures — breakers that don't trip during overloads or short circuits. Citizens Insurance and most Florida insurers won't insure homes with this panel. Identified by the "Stab-Lok" name and red or orange breakers.</p>
          <p><strong>Zinsco / GTE-Sylvania:</strong> Breakers that can fuse to the copper bus bar through corrosion, preventing them from tripping. Also known for melting or deforming. Breakers are multi-colored (purple, blue, red, green).</p>
          <p><strong>Fuse boxes:</strong> Not inherently dangerous by design, but obsolete, limit service capacity to 60A, and have no space for modern circuits. Most insurers reject them.</p>
          <h2>Reliable Modern Panels</h2>
          <p><strong>Square D (QO and Homeline lines)</strong>, <strong>Eaton (BR and CH lines)</strong>, and <strong>Siemens (PL and ES lines)</strong> are the most widely used and reliable residential brands. All are UL-listed, have proven reliability records, and pass Florida insurer 4-point inspections.</p>
          <h2>How to Identify Your Panel</h2>
          <p>Open your panel cover and look for the brand name. If it says "Federal Pacific Electric" or "FPE" with breakers labeled "Stab-Lok", or if the breakers are multi-colored bright colors (Zinsco), that's a warning sign. If unsure, send us a photo — we can identify it.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
