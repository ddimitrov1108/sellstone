import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="min-h-[1024px] bg-white overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Нашите проекти</SectionHeader>
        <div className="flex flex-col gap-24 items-center justify-start even:justify-end">
          {[1, 2, 3].map((i, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </Section>
    </div>
  );
}
