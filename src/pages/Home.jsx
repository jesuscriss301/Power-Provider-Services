import { usePageMeta } from "../hooks/usePageMeta.js";
import Hero from "../components/Hero.jsx";
import StatsStrip from "../components/StatsStrip.jsx";
import Services from "../components/Services.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import SplitSection from "../components/SplitSection.jsx";
import SpotlightPair from "../components/SpotlightPair.jsx";
import Process from "../components/Process.jsx";
import Testimonial from "../components/Testimonial.jsx";
import FAQ from "../components/FAQ.jsx";
import ServiceArea from "../components/ServiceArea.jsx";
import Contact from "../components/Contact.jsx";
import LocationMap from "../components/LocationMap.jsx";
import { IconBolt, IconConstruction } from "../components/icons.jsx";
import residentialPhoto from "../assets/residential-kitchen-pendant-lighting.jpg";
import commercialPhoto from "../assets/commercial-retail-lighting-maintenance.jpg";

export default function Home() {
  usePageMeta("meta.title", "meta.description");

  return (
    <main id="main">
      <Hero />
      <StatsStrip />
      <Services />
      <WhyChooseUs />
      <SplitSection id="residential" prefix="res" Icon={IconBolt} image={residentialPhoto} chipCount={6} />
      <SplitSection id="commercial" altBg reverse prefix="com" Icon={IconConstruction} image={commercialPhoto} chipCount={5} />
      <SpotlightPair />
      <Process />
      <Testimonial />
      <FAQ />
      <ServiceArea />
      <Contact />
      <LocationMap />
    </main>
  );
}
