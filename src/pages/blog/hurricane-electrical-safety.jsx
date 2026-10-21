import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqs = [
  { q: "Is it safe to use a generator inside my garage during a hurricane?", a: "No. Running a generator inside a garage — even with the door open — is extremely dangerous. Generators produce carbon monoxide (CO), a colorless, odorless gas that kills quickly in enclosed spaces. The CDC reports that portable generators cause more CO deaths than any other consumer product. Always operate generators at least 20 feet from doors, windows, and vents, with exhaust pointed away from the home." },
  { q: "What should I do with electrical appliances before a hurricane?", a: "Unplug all non-essential appliances and electronics before a storm hits. Surge protectors help but are not designed for direct lightning strikes. Unplug TVs, computers, and other electronics to protect them from power surges when utility power is restored. Large appliances (refrigerator, washer) are usually left plugged in — at minimum use a quality surge protector for electronics." },
  { q: "Can I touch my electrical panel after flooding?", a: "No. If your home has experienced any flooding — even a few inches of water — do not turn power back on and do not touch the electrical panel until a licensed electrician has inspected the wiring, outlets, panel, and all electrical components. Water and electricity together are deadly, and flooded wiring can start fires even after the water recedes." },
  { q: "How do I safely restore power after a hurricane?", a: "Only restore power once your utility (Duke Energy or OUC) has confirmed the lines in your area are safe. Before flipping the main breaker, do a visual inspection for obvious damage (burnt insulation, damaged panel, smell of burning). If your home flooded, have a licensed electrician inspect before restoring power. Turn on circuits one at a time from the sub-breakers before the main." },
  { q: "Why do I need a transfer switch if I have a generator?", a: "Without a transfer switch or interlock kit, connecting a generator to your home's wiring can backfeed electricity into the utility grid — which can electrocute utility workers repairing lines in your neighborhood during the outage. It's also illegal. A transfer switch or interlock kit safely isolates your home from the grid before generator power is applied." },
];

export default function HurricaneElectricalSafety() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="hurricane-electrical-safety"
      titleEn="Hurricane Electrical Safety: Before, During & After the Storm"
      titleEs="Seguridad Eléctrica en Huracanes: Antes, Durante y Después de la Tormenta"
      descEn="Essential electrical safety guide for Florida homeowners during hurricane season — generator safety, what to do during a power outage, and how to safely restore power."
      descEs="Guía esencial de seguridad eléctrica para propietarios en Florida durante la temporada de huracanes — seguridad del generador, qué hacer durante un apagón y cómo restaurar el servicio."
      eyebrowEn="Hurricane Safety" eyebrowEs="Seguridad en Huracanes"
      relatedLinks={[
        { to: "/generator-hookup",   enLabel: "Generator Hookup",   esLabel: "Conexión de Generadores" },
        { to: "/electrical-repair",  enLabel: "Electrical Repair",  esLabel: "Reparaciones Eléctricas" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>Florida es uno de los estados con mayor actividad de huracanes en EE.UU. Como propietario en Orlando o el área metropolitana, tener un plan eléctrico antes de que llegue una tormenta puede ser la diferencia entre un inconveniente y una tragedia.</p>
          <h2>Antes de la tormenta</h2>
          <p><strong>Desconecta los electrónicos.</strong> Las sobretensiones cuando regresa la energía son una de las causas más comunes de daño a equipos electrónicos después de una tormenta. Desconecta televisores, computadoras, consolas y electrodomésticos pequeños antes de que llegue el huracán. Una regleta con supresor de picos ayuda pero no protege contra golpes de rayo directos.<br/><br/>
          <strong>Conoce tu interruptor principal.</strong> Sabe exactamente dónde está tu panel eléctrico y cómo cortar el suministro. Si la tormenta va a ser severa y tu casa está en zona de inundación, puede ser prudente cortar el suministro principal antes de evacuar.</p>
          <h2>Durante la tormenta y el apagón</h2>
          <p><strong>Generadores:</strong> Nunca operes un generador portátil dentro de casa, en el garaje (aunque la puerta esté abierta), ni en áreas cerradas. El monóxido de carbono (CO) que emiten es inodoro, incoloro y puede matar en minutos. Ubica el generador a al menos 6 metros (20 pies) de puertas y ventanas. <strong>No conectes el generador directamente al panel sin un transfer switch o interlock kit</strong> — puedes electrocutar a técnicos de la empresa eléctrica que estén trabajando en los cables de tu zona.<br/><br/>
          <strong>Líneas caídas:</strong> Trata cualquier cable caído como si estuviera energizado. No lo toques, no permitas que nadie lo toque, y llama al 911 y a tu empresa eléctrica.</p>
          <h2>Después de la tormenta</h2>
          <p>Antes de restaurar la energía principal: inspecciona visualmente el panel buscando daños, olor a quemado o componentes mojados. Si tu hogar se inundó, <strong>no restaures la energía</strong> hasta que un electricista licenciado haya inspeccionado todo el sistema. El agua en el cableado puede causar incendios incluso después de que el agua retroceda. Restaura los circuitos de a uno cuando el servicio regrese, para detectar problemas antes de que se conviertan en emergencias.</p>
        </>
      ) : (
        <>
          <p>Florida is one of the most hurricane-active states in the US. As a homeowner in Orlando or the metro area, having an electrical plan before a storm arrives can be the difference between an inconvenience and a tragedy.</p>
          <h2>Before the Storm</h2>
          <p><strong>Unplug electronics.</strong> Power surges when electricity returns are one of the most common causes of equipment damage after a storm. Unplug TVs, computers, consoles, and small appliances before the hurricane arrives. A surge protector strip helps, but doesn't protect against direct lightning strikes.<br/><br/>
          <strong>Know your main breaker.</strong> Know exactly where your electrical panel is and how to cut the main power. If the storm will be severe and your home is in a flood zone, cutting the main breaker before evacuating may be prudent.</p>
          <h2>During the Storm and Outage</h2>
          <p><strong>Generators:</strong> Never operate a portable generator inside the house, in the garage (even with the door open), or in enclosed areas. The carbon monoxide (CO) they emit is odorless, colorless, and can kill in minutes. Position the generator at least 20 feet from doors and windows. <strong>Never connect the generator directly to the panel without a transfer switch or interlock kit</strong> — you can electrocute utility workers repairing lines in your neighborhood.<br/><br/>
          <strong>Downed lines:</strong> Treat any downed wire as live. Don't touch it, don't let anyone touch it, and call 911 and your utility company.</p>
          <h2>After the Storm</h2>
          <p>Before restoring main power: visually inspect the panel for damage, burning smell, or wet components. If your home flooded, <strong>do not restore power</strong> until a licensed electrician has inspected the entire electrical system. Water in wiring can cause fires even after the water recedes. Restore circuits one at a time when service returns, to catch problems before they become emergencies.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
