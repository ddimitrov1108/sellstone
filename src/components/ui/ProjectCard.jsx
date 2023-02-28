import portfolioTemplateWebp from "../../assets/project-template.webp";

export default function ProjectCard() {
  return (
    <div className="hidden-section project-card group relative w-full flex flex-col-reverse md:flex-row md:odd:flex-row-reverse md:even:text-right">
      <div className="project-card-info z-30 md:absolute md:top-0 lg:top-4 xl:top-12 md:group-odd:left-4 md:group-even:right-4">
        <div className="py-1 text-gold-dark">Featured Project</div>
        <div className="text-2xl font-semibold text-black-main mb-4">
          Project Name
        </div>
        <div className="md:shadow-lg text-sm lg:text-base min-w-full text-black-main md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] md:p-4 md:bg-secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          suscipit illum omnis veniam, aperiam facilis eveniet earum debitis
          tenetur voluptas ullam quod tempora ea, distinctio molestiae fugiat
          repellendus inventore error?
        </div>
      </div>

      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
        className="project-card-img relative rounded-md md:max-w-[60%] h-auto"
      >
        <img src={portfolioTemplateWebp} className="w-full" alt="test" />
      </a>
    </div>
  );
}
