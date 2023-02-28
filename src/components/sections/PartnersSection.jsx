import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";

export default function PartnersSection() {
  return (
    <div
      id="partners"
      className="bg-white md:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Партньори</SectionHeader>

        <div className="flex flex-wrap gap-0 gap-y-4 sm:gap-10 items-center justify-center"></div>
      </Section>
    </div>
  );
}