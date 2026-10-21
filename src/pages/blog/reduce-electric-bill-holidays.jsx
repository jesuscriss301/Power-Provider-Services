import BlogPost, { FAQ } from "../../components/BlogPost.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

const faqs = [
  { q: "How much energy do Christmas lights use?", a: "Incandescent Christmas lights use 40–50 watts per 100-light string. LED Christmas lights use 4–5 watts for the same 100-light string — about 90% less energy. A display with 10 incandescent strings running 6 hours per night for 30 days uses roughly 90 kWh. The same display with LEDs uses about 9 kWh. At $0.13/kWh (Florida average), that's a difference of over $10 just for the lights — more for larger displays." },
  { q: "Does Duke Energy offer time-of-use rates that can help during the holidays?", a: "Duke Energy Florida's residential TOU (Time-of-Use) rate plan charges higher rates during peak hours (typically 6am–10am and 6pm–10pm on weekdays) and lower rates off-peak. For holiday cooking and baking, running the oven during off-peak hours (evenings or weekends) can reduce costs. Ask Duke Energy about their current rate plans." },
  { q: "Does cooking use a lot of electricity?", a: "A standard electric oven uses 2,000–5,000 watts. Running it for 4 hours on Thanksgiving uses 8–20 kWh — $1–2.60 at Florida rates. A slow cooker or Instant Pot uses 700–1,200 watts for the same 4 hours — 2.8–4.8 kWh, or $0.36–0.62. For large holiday meals with multiple dishes, the difference adds up across the season." },
  { q: "What is a smart plug and how does it reduce holiday lighting costs?", a: "A smart plug is an outlet adapter that lets you control any plugged-in device from your phone or with a voice assistant. For holiday lights, set a schedule so they turn on at dusk and off at a set time — avoiding leaving them on all night. Many smart plugs also show energy consumption, so you can see exactly what your display costs." },
  { q: "Does having guests during the holidays significantly increase my electric bill?", a: "Yes. Extra people mean more hot showers (water heater), more cooking, more laundry, more TV and device charging, and rooms that were previously unused now needing HVAC conditioning. In Florida, running AC for additional occupied rooms can add $20–50 to a monthly bill for a week-long visit, depending on the home size and insulation." },
];

export default function HolidayElectricBill() {
  const { lang } = useLanguage();
  return (
    <BlogPost
      slug="reduce-electric-bill-holidays"
      titleEn="How to Reduce Your Electric Bill During the Holidays"
      titleEs="Cómo Reducir tu Factura de Electricidad en las Fiestas"
      descEn="Practical tips for Orlando homeowners to keep electricity costs down during the holiday season — LED lights, smart plugs, cooking efficiency, and HVAC."
      descEs="Consejos prácticos para propietarios en Orlando para reducir el costo de electricidad durante las fiestas — luces LED, enchufes inteligentes, cocina eficiente y HVAC."
      eyebrowEn="Energy Savings" eyebrowEs="Ahorro de Energía"
      relatedLinks={[
        { to: "/smart-home",        enLabel: "Smart Home Install",   esLabel: "Hogar Inteligente" },
        { to: "/outlet-installation",enLabel: "Outlet Installation", esLabel: "Tomacorrientes" },
      ]}
    >
      {lang === "es" ? (
        <>
          <p>Las fiestas de fin de año traen más decoraciones, más cocina, más visitas y más dispositivos encendidos — lo que se traduce directamente en una factura eléctrica más alta. Estos son los cambios más efectivos para mantenerla bajo control.</p>
          <h2>Iluminación navideña: LED vs. incandescente</h2>
          <p>Las luces navideñas incandescentes consumen entre 40 y 50 vatios por cadena de 100 luces. Las LED usan solo 4 a 5 vatios para la misma cadena — aproximadamente el <strong>90% menos de energía</strong>. Si todavía usas luces incandescentes, reemplazarlas por LED es la inversión con mayor retorno. Agrega un enchufe inteligente con temporizador para que se apaguen solas a medianoche, no al amanecer.</p>
          <h2>Cocción eficiente durante las fiestas</h2>
          <p>Un horno eléctrico estándar consume entre 2,000 y 5,000 vatios. Para la misma tarea de cocción, una olla de cocción lenta o un Instant Pot usa entre 700 y 1,200 vatios. Durante las fiestas, donde hay múltiples platos para preparar, usar electrodomésticos de menor consumo para los platos que lo permitan puede reducir significativamente el uso del horno. En Florida, si Duke Energy tiene tarifas por uso en horas pico, cocinar fuera de esas horas también ayuda.</p>
          <h2>HVAC con visitas</h2>
          <p>Las visitas de familiares significan habitaciones adicionales con HVAC activo. Ajusta los termostatos de las habitaciones de huéspedes solo cuando estén ocupadas. Mantén las puertas de habitaciones sin usar cerradas para no enfriar o calentar espacios vacíos. En Florida, el AC en diciembre puede seguir siendo necesario — un termostato inteligente (como Ecobee o Nest) que aprende los horarios puede ahorrar 10–15% en costos de HVAC.</p>
          <h2>Iluminación general y enchufes inteligentes</h2>
          <p>Si aún tienes bombillas incandescentes en la casa, reemplazarlas por LED A19 (10W vs 60W) es uno de los cambios de mayor impacto. Los enchufes inteligentes con monitoreo de energía te permiten ver exactamente cuánto consume cada decoración y programar apagados automáticos.</p>
        </>
      ) : (
        <>
          <p>The holiday season brings more decorations, more cooking, more guests, and more devices running — which translates directly to a higher electric bill. Here are the most effective changes to keep it under control.</p>
          <h2>Holiday Lighting: LED vs. Incandescent</h2>
          <p>Incandescent Christmas lights consume 40–50 watts per 100-light string. LEDs use just 4–5 watts for the same string — about <strong>90% less energy</strong>. If you still use incandescent lights, switching to LEDs is the highest-ROI change. Add a smart plug with a timer so they turn off automatically at midnight, not at dawn.</p>
          <h2>Efficient Holiday Cooking</h2>
          <p>A standard electric oven uses 2,000–5,000 watts. A slow cooker or Instant Pot uses 700–1,200 watts for the same task. During the holidays, with multiple dishes to prepare, using lower-consumption appliances for dishes that allow it can significantly reduce oven use. In Florida, if Duke Energy offers TOU rates, cooking outside peak hours also helps.</p>
          <h2>HVAC with Guests</h2>
          <p>Family guests mean additional rooms with active HVAC. Adjust guest room thermostats only when occupied. Keep doors to unused rooms closed so you're not conditioning empty spaces. In Florida, AC in December may still be necessary — a smart thermostat (Ecobee or Nest) that learns schedules can save 10–15% on HVAC costs.</p>
          <h2>General Lighting and Smart Plugs</h2>
          <p>If you still have incandescent bulbs in the house, replacing them with LED A19 bulbs (10W vs 60W) is one of the highest-impact changes. Smart plugs with energy monitoring let you see exactly what each decoration consumes and program automatic shut-offs.</p>
        </>
      )}
      <FAQ items={faqs} />
    </BlogPost>
  );
}
