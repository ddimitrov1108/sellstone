import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../constants";

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="round-top-on-entry round-bottom-on-entry bg-black-main px-4 mobile-l:px-8 py-12 mt-12"
    >
      <Section>
        <SectionHeader className="text-headerText text-center xl:text-left">
          Нашите услуги
        </SectionHeader>

        <div className="flex flex-wrap gap-10 items-stetch justify-center">
          {services.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
