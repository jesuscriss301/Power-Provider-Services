import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { Link } from "react-router-dom";

const faqs = [
  { q: "What is the best EV charger for home use?", a: "For most homeowners, a hardwired Level 2 EVSE (or a NEMA 14-50 outlet paired with a portable EVSE) is the best choice. Level 2 chargers add 20–35 miles of range per hour, so a fully depleted battery is ready overnight. Popular residential EVSEs include the JuiceBox 40, ChargePoint Home Flex, Emporia EV Charger, and Tesla Wall Connector (which works with all EVs via J1772 adapter)." },
  { q: "How long does it take to charge an EV with a Level 2 charger?", a: "A Level 2 charger typically adds 20–35 miles of range per hour, depending on the charger's amperage and the car's onboard charger capacity. A 40-amp charger at 240V delivers about 9.6 kW; most mid-size EVs with a 75–80 kWh battery would be fully charged from empty in 8–10 hours — easily done overnight." },
  { q: "Can I install a NEMA 14-50 outlet myself instead of a hardwired charger?", a: "The outlet itself requires a permit and a licensed electrician in Florida for the new circuit. A NEMA 14-50 is a 50-amp, 240V outlet — the same used for electric stoves and dryers. It gives you flexibility to use a portable EVSE and is slightly less expensive than a hardwired charger install. We install both." },
  { q: "Does a Level 2 charger require a panel upgrade?", a: "It depends on your panel's available capacity. A Level 2 charger at 40 amps requires a 50-amp breaker slot. If your panel has open slots and sufficient total capacity, no upgrade is needed. If the panel is full (common in 100-amp panels in older homes), a panel upgrade or load management device may be needed." },
  { q: "What is the difference between J1772, CCS, and NACS connectors?", a: "J1772 is the standard Level 1 and Level 2 home charging connector used by all non-Tesla EVs in North America (and Tesla with an adapter). CCS (Combined Charging System) adds DC fast charging to the J1772 port. NACS (North American Charging Standard) is Tesla's connector, now adopted by Ford, GM, Rivian, and others for future vehicles. For home charging, J1772 Level 2 EVSE works with all current EVs." },
];

export default function EVChargerTypes() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="ev-charger-types-guide"
      titleEn="EV Charger Types: Level 1, Level 2 & DCFC — Complete Guide"
      titleEs="Tipos de Cargadores para Autos Eléctricos: Level 1, Level 2 y DCFC"
      descEn="Everything Orlando homeowners need to know about EV charger types, connectors, speeds, and what to install at home."
      descEs="Todo lo que los propietarios en Orlando deben saber sobre tipos de cargadores EV, conectores, velocidades y qué instalar en casa."
      eyebrowEn="EV Charger Guide" eyebrowEs="Guía de Cargadores EV"
      relatedLinks={[
        { to: "/ev-charger-installation", enLabel: "EV Charger Installation", esLabel: "Instalación de Cargadores EV" },
        { to: "/panel-upgrade",           enLabel: "Panel Upgrades",          esLabel: "Actualización de Paneles" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>Si estás considerando un auto eléctrico o ya tienes uno, entender los tipos de cargadores disponibles es el primer paso para elegir la instalación correcta en tu hogar. Aquí está la guía completa.</p>
          <h2>Level 1 — El más lento (120V, estándar)</h2>
          <p>El Level 1 usa un tomacorriente doméstico estándar de 120V. No requiere electricista ni instalación especial. Agrega entre <strong>3 y 5 millas de autonomía por hora</strong> de carga — lo que significa que para recargar completamente un vehículo con batería de 60 kWh, necesitarías entre 40 y 50 horas. Es útil como solución de emergencia o para vehículos híbridos enchufables con baterías pequeñas. Para la mayoría de usuarios de EV puro, es insuficiente.</p>
          <h2>Level 2 — El estándar para el hogar (240V)</h2>
          <p>El Level 2 usa un circuito dedicado de 240V (el mismo voltaje que tu secadora o estufa eléctrica). Agrega entre <strong>20 y 35 millas de autonomía por hora</strong>, con cargadores de entre 32A y 50A. Un vehículo con batería de 75 kWh se carga completamente en 8 a 10 horas — de noche a mañana. Este es el estándar recomendado para uso doméstico y lo que instalamos en Power Provider Services. Requiere un circuito dedicado con permiso.</p>
          <h2>DCFC (DC Fast Charging) — Solo para estaciones públicas</h2>
          <p>Los cargadores de carga rápida en CC operan entre 50 kW y 350 kW y pueden llevar la batería al 80% en 20 a 40 minutos. Son estaciones comerciales (Tesla Supercharger, Electrify America, EVgo, ChargePoint) — no son para instalación residencial. Su costo y requisitos de infraestructura eléctrica (transformador propio, servicio trifásico) los hacen impracticables en hogares.</p>
          <h2>Conectores: J1772, CCS y NACS</h2>
          <p>El conector <strong>J1772</strong> es el estándar de Level 1 y Level 2 para todos los EVs no Tesla en Norteamérica. <strong>CCS</strong> añade carga DC rápida. <strong>NACS</strong> (conector de Tesla, ahora adoptado por Ford, GM, Rivian y otros) se está convirtiendo en el nuevo estándar. Para carga doméstica Level 2, cualquier EVSE J1772 funciona con todos los EVs actuales.</p>
        </>
      ) : (
        <>
          <p>If you're considering an electric vehicle or already own one, understanding EV charger types is the first step to choosing the right home installation. Here's the complete guide.</p>
          <h2>Level 1 — The Slowest (120V, Standard Outlet)</h2>
          <p>Level 1 uses a standard 120V household outlet. No electrician or special installation needed. It adds <strong>3–5 miles of range per hour</strong> — meaning a full charge on a 60 kWh battery takes 40–50 hours. Useful as an emergency backup or for plug-in hybrids with small batteries. For most full-EV owners, it's insufficient.</p>
          <h2>Level 2 — The Home Standard (240V)</h2>
          <p>Level 2 uses a dedicated 240V circuit (same voltage as your dryer or electric stove). It adds <strong>20–35 miles of range per hour</strong>, with chargers ranging from 32A to 50A. A vehicle with a 75 kWh battery charges fully in 8–10 hours — overnight. This is the recommended home standard and what we install. Requires a dedicated circuit and permit.</p>
          <h2>DCFC (DC Fast Charging) — Commercial Stations Only</h2>
          <p>DC fast chargers operate at 50–350 kW and can charge a battery to 80% in 20–40 minutes. These are commercial stations (Tesla Supercharger, Electrify America, EVgo, ChargePoint) — not for residential installation. Their cost and electrical infrastructure requirements make them impractical for homes.</p>
          <h2>Connectors: J1772, CCS, and NACS</h2>
          <p>The <strong>J1772</strong> connector is the Level 1 and Level 2 standard for all non-Tesla EVs in North America. <strong>CCS</strong> adds DC fast charging capability. <strong>NACS</strong> (Tesla's connector, now adopted by Ford, GM, Rivian and others) is becoming the new standard. For home Level 2 charging, any J1772 EVSE works with all current EVs.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
