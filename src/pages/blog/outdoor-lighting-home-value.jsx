import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqs = [
  { q: "How much does outdoor lighting increase home value?", a: "Studies on outdoor lighting and home value consistently show a positive impact. The American Society of Landscape Architects notes that exterior lighting is among the top outdoor features buyers want. Properly designed exterior lighting can add 1–5% to home value depending on the quality of installation and the market. The ROI is especially high in Florida, where outdoor living is year-round." },
  { q: "Does outdoor security lighting actually deter crime?", a: "Yes, when properly positioned. The Crime Prevention Through Environmental Design (CPTED) principle of lighting holds that well-lit properties are significantly less attractive to burglars and vandals. Motion-activated floodlights are particularly effective because they surprise would-be intruders and draw attention. The FBI Uniform Crime Report consistently shows property crime rates are lower in well-lit areas." },
  { q: "What type of outdoor lighting adds the most curb appeal?", a: "Layered lighting adds the most visual impact: path lights to define walkways, uplighting to highlight trees and architectural features, and entry lighting (post lights, coach lights) to make the home's entry welcoming. For maximum curb appeal in the Florida market, LED lighting with a warm color temperature (2700K–3000K) is preferred over cool white." },
  { q: "Is outdoor lighting a good investment for rental properties?", a: "Yes. Exterior lighting reduces liability (well-lit pathways reduce trip-and-fall risk), deters vandalism and break-ins, and makes the property more attractive to quality tenants. For commercial properties, exterior lighting is often a code requirement. The operational cost with LED lighting is minimal — typically less than $5/month for a full exterior lighting system." },
  { q: "Do I need a permit to add an outdoor light fixture in Florida?", a: "Replacing an existing outdoor fixture on the same circuit typically does not require a permit. Installing a new circuit for outdoor lighting does require a permit and a licensed electrician. Adding exterior GFCI outlets (required by code for outdoor locations in Florida) also requires a permit. We confirm the permit requirements at the estimate." },
];

export default function OutdoorLightingValue() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="outdoor-lighting-home-value"
      titleEn="How Outdoor Lighting Increases Home Security and Property Value"
      titleEs="Cómo la Iluminación Exterior Aumenta la Seguridad y el Valor de tu Propiedad"
      descEn="Data on outdoor lighting's impact on crime deterrence, curb appeal, and property value in Florida — by a licensed Orlando electrician."
      descEs="Datos sobre el impacto de la iluminación exterior en la disuasión del crimen, el atractivo visual y el valor de la propiedad en Florida — por un electricista licenciado en Orlando."
      eyebrowEn="Home Security & Value" eyebrowEs="Seguridad y Valor"
      relatedLinks={[
        { to: "/outdoor-lighting",  enLabel: "Outdoor Lighting Service", esLabel: "Servicio de Iluminación Exterior" },
        { to: "/smart-home",        enLabel: "Smart Home",               esLabel: "Hogar Inteligente" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>La iluminación exterior es una de las mejoras con mayor retorno en términos de seguridad, atractivo visual y valor de la propiedad — y una de las más subestimadas por los propietarios en Florida. Aquí está la evidencia y cómo maximizar el impacto.</p>
          <h2>Seguridad: la iluminación como disuasivo del crimen</h2>
          <p>El principio CPTED (Crime Prevention Through Environmental Design — Prevención del Crimen a través del Diseño Ambiental) está bien establecido en la literatura criminológica: las propiedades bien iluminadas son significativamente menos atractivas para ladrones y vándalos. Los focos activados por movimiento son particularmente efectivos porque sorprenden a los intrusos y atraen la atención de vecinos. El Informe Uniforme del FBI muestra consistentemente tasas de delitos contra la propiedad más bajas en áreas bien iluminadas. Para propiedades en Florida, donde el calor tropical crea vegetación densa que puede servir de cobertura, la iluminación perimetral es especialmente relevante.</p>
          <h2>Valor de reventa: atractivo visual y funcional</h2>
          <p>La Sociedad Americana de Arquitectos Paisajistas señala la iluminación exterior como una de las características exteriores más deseadas por los compradores. Una iluminación exterior bien diseñada puede agregar entre el <strong>1% y el 5% al valor de la propiedad</strong>. En Florida, donde la vida al aire libre es posible todo el año, el atractivo de un exterior bien iluminado tiene más peso que en estados donde los inviernos hacen que los compradores presten menos atención al exterior.</p>
          <h2>Diseño por capas: el enfoque profesional</h2>
          <p>La iluminación exterior más efectiva usa tres capas: <strong>iluminación funcional</strong> (entradas, garaje, caminos), <strong>iluminación de seguridad</strong> (focos de movimiento perimetrales), y <strong>iluminación de acento</strong> (árboles, fachada, jardín). Las tres capas juntas crean el impacto visual que los compradores perciben como "propiedad bien mantenida y segura".</p>
          <h2>Costo operativo con LED: mínimo</h2>
          <p>Con luminarias LED modernas, el costo operativo de un sistema de iluminación exterior completo es típicamente <strong>menos de $5 por mes</strong>. Un foco de seguridad LED de 20W activado por movimiento 4 veces por noche (60 segundos cada vez) usa aproximadamente 2.4 Wh por día — casi nada. La inversión inicial en instalación correcta con circuitos dedicados y materiales de calidad se recupera con creces en seguridad, valor y costo operativo mínimo.</p>
        </>
      ) : (
        <>
          <p>Outdoor lighting is one of the highest-ROI improvements for security, curb appeal, and property value — and one of the most underestimated by Florida homeowners. Here's the evidence and how to maximize the impact.</p>
          <h2>Security: Lighting as a Crime Deterrent</h2>
          <p>The CPTED (Crime Prevention Through Environmental Design) principle is well established in criminological literature: well-lit properties are significantly less attractive to burglars and vandals. Motion-activated floodlights are particularly effective because they surprise intruders and draw neighbors' attention. The FBI Uniform Crime Report consistently shows lower property crime rates in well-lit areas. For Florida properties, where tropical heat creates dense vegetation that can provide cover, perimeter lighting is especially relevant.</p>
          <h2>Resale Value: Visual and Functional Appeal</h2>
          <p>The American Society of Landscape Architects identifies exterior lighting as one of the most desired outdoor features by buyers. Well-designed exterior lighting can add <strong>1–5% to property value</strong>. In Florida, where outdoor living is possible year-round, the appeal of a well-lit exterior carries more weight than in states where winters reduce buyers' attention to the outside.</p>
          <h2>Layered Lighting: The Professional Approach</h2>
          <p>The most effective exterior lighting uses three layers: <strong>functional lighting</strong> (entries, garage, pathways), <strong>security lighting</strong> (perimeter motion floodlights), and <strong>accent lighting</strong> (trees, facade, garden). All three layers together create the visual impact buyers perceive as "well-maintained, safe property."</p>
          <h2>Operating Cost with LED: Minimal</h2>
          <p>With modern LED fixtures, the operating cost of a complete exterior lighting system is typically <strong>under $5 per month</strong>. A 20W LED security floodlight triggered by motion 4 times per night (60 seconds each) uses approximately 2.4 Wh per day — nearly nothing. The upfront investment in proper installation with dedicated circuits and quality materials is recovered many times over in security, value, and minimal operating cost.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
