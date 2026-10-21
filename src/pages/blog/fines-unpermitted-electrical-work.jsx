import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqs = [
  { q: "How much are fines for unpermitted electrical work in Florida?", a: "Orange County and City of Orlando can assess fines starting at $250 per day per violation. For major violations (unsafe conditions), fines can escalate significantly. Additionally, Florida Statute 489.127 requires that after-the-fact permits carry a fee of double the original permit fee." },
  { q: "Can insurance deny a claim because of unpermitted electrical work?", a: "Yes. Florida homeowner's insurance policies typically exclude damage caused by work that was not properly permitted and inspected. If a fire starts in an area with unpermitted wiring, the insurer can deny the claim — even for damage unrelated to the electrical work." },
  { q: "Does unpermitted work affect the sale of my home in Florida?", a: "Yes. Florida law requires sellers to disclose known unpermitted work. Buyers' inspectors and lenders often find it. FHA and VA loans require the work to be permitted or the issue to be resolved before closing. Unpermitted work can kill a sale or require significant price reductions." },
  { q: "What is a Citizens 4-point inspection and how does unpermitted work affect it?", a: "A Citizens Insurance 4-point inspection evaluates four systems: roof, plumbing, HVAC, and electrical. Unpermitted panels, Federal Pacific or Zinsco panels, or wiring that doesn't meet code can cause Citizens to deny or cancel coverage — which is required by most Florida mortgage lenders." },
  { q: "Can I get an after-the-fact permit for unpermitted electrical work?", a: "Yes, in most Florida jurisdictions you can apply for a retroactive permit. The inspector will evaluate the work; if it passes, the permit is issued. If it doesn't pass, you'll need to bring the work up to code. After-the-fact permit fees are typically double the standard fee per Florida law." },
];

export default function FinesUnpermitted() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="fines-unpermitted-electrical-work"
      titleEn="Fines for Unpermitted Electrical Work in Florida"
      titleEs="Multas por Trabajo Eléctrico sin Permiso en Florida"
      descEn="What fines, insurance risks, and real estate problems come from unpermitted electrical work in Florida — and how to fix it."
      descEs="Qué multas, riesgos de seguro y problemas inmobiliarios genera el trabajo eléctrico sin permiso en Florida — y cómo solucionarlo."
      eyebrowEn="Florida Electrical Code" eyebrowEs="Código Eléctrico de Florida"
      relatedLinks={[
        { to: "/panel-upgrade", enLabel: "Panel Upgrades", esLabel: "Actualización de Paneles" },
        { to: "/blog/florida-electrical-permit-laws", enLabel: "Florida Permit Laws", esLabel: "Leyes de Permisos" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>El trabajo eléctrico sin permiso en Florida no es solo una infracción administrativa — puede costarle miles de dólares, hacerle perder su seguro y complicar enormemente la venta de su propiedad. Estas son las consecuencias reales.</p>
          <h2>Multas del condado y del municipio</h2>
          <p>Orange County y la Ciudad de Orlando pueden imponer multas de <strong>$250 por día por cada violación</strong>. En casos de condiciones peligrosas (cortocircuito activo, panel obsoleto), las multas pueden escalar. Florida Statute 489.127 también exige que los permisos retroactivos (after-the-fact) cuesten el <strong>doble de la tarifa normal</strong>.</p>
          <h2>Rechazo de reclamos de seguro</h2>
          <p>Las pólizas de seguro para propietarios en Florida excluyen típicamente los daños causados por trabajo que no fue debidamente permitido e inspeccionado. Si un incendio comienza en una zona con cableado sin permiso, la aseguradora puede negar el reclamo, incluso si el daño no tiene relación directa con el trabajo eléctrico.</p>
          <h2>Impacto en la venta de la propiedad</h2>
          <p>La ley de Florida exige que los vendedores declaren el trabajo sin permiso conocido. Los inspectores de compradores y los prestamistas de FHA/VA lo detectan frecuentemente. En muchos casos, el trabajo sin permiso paraliza el cierre de la venta o requiere reducciones de precio significativas — o que el vendedor pague para regularizarlo antes del cierre.</p>
          <h2>Inspección de 4 puntos de Citizens Insurance</h2>
          <p>Citizens Insurance y la mayoría de las aseguradoras en Florida exigen una <em>inspección de 4 puntos</em> (techo, plomería, HVAC, eléctrico) en propiedades de más de cierta antigüedad. Un panel sin permiso, un Federal Pacific Stab-Lok o cableado que no cumple código puede resultar en la <strong>negación o cancelación del seguro</strong>, que los prestamistas hipotecarios requieren.</p>
        </>
      ) : (
        <>
          <p>Unpermitted electrical work in Florida isn't just a paperwork violation — it can cost thousands in fines, void your insurance, and seriously complicate selling your property. Here are the real consequences.</p>
          <h2>County and City Fines</h2>
          <p>Orange County and the City of Orlando can assess fines of <strong>$250 per day per violation</strong>. For dangerous conditions (active short circuits, obsolete panels), fines escalate. Florida Statute 489.127 also requires after-the-fact permits to cost <strong>double the standard fee</strong>.</p>
          <h2>Insurance Claim Denials</h2>
          <p>Florida homeowner's insurance policies typically exclude damage caused by work that was not properly permitted and inspected. If a fire starts in an area with unpermitted wiring, the insurer can deny the claim — even if the damage isn't directly related to the electrical work.</p>
          <h2>Real Estate Sale Impact</h2>
          <p>Florida law requires sellers to disclose known unpermitted work. Buyers' inspectors and FHA/VA lenders find it frequently. In many cases, unpermitted work stops a closing or requires significant price reductions — or the seller pays to legalize it before closing.</p>
          <h2>Citizens Insurance 4-Point Inspection</h2>
          <p>Citizens Insurance and most Florida insurers require a <em>4-point inspection</em> (roof, plumbing, HVAC, electrical) on older properties. An unpermitted panel, Federal Pacific Stab-Lok, or non-code wiring can result in <strong>insurance denial or cancellation</strong> — which mortgage lenders require.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
