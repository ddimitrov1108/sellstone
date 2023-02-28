import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import portfolioTemplateWebp from "../../assets/project-template.webp";

export default function PortfolioSection() {
  return (
    <div
      id="portfolio"
      className="bg-white overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Нашите проекти</SectionHeader>
        <div className="flex flex-col gap-24 items-center justify-start even:justify-end">
          {[1, 2, 3].map((i, index) => (
            <div
              key={index}
              className="group relative w-full flex flex-col-reverse gap-6 lg:flex-row lg:odd:flex-row-reverse even:lg:text-right"
            >
              <div className="z-30 lg:absolute lg:top-4 xl:top-12 group-odd:lg:left-4 group-even:lg:right-4">
                <div className="py-1 text-gold-dark">Featured Project</div>
                <div className="text-2xl font-semibold text-black-main mb-4">
                  Project Name
                </div>
                <div className="text-sm md:text-base min-w-full text-black-light lg:max-w-[540px] xl:max-w-[620px] lg:p-4 lg:bg-secondary">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti suscipit illum omnis veniam, aperiam facilis eveniet
                  earum debitis tenetur voluptas ullam quod tempora ea,
                  distinctio molestiae fugiat repellendus inventore error?
                </div>
              </div>

              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="relative overflow-hidden rounded-md lg:max-w-[60%] h-auto"
              >
                <img src={portfolioTemplateWebp} className="w-full" alt="test" />
                <div className="hidden lg:absolute top-0 right-0 bottom-0 left-0 bg-alternative/40 hover:bg-transparent transition-all duration-300"></div>
              </a>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
