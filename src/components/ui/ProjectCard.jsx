import portfolioTemplateWebp from "../../assets/project-template.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProjectCard() {
  return (
    <div className="hidden-section project-card group relative w-full flex flex-col-reverse md:flex-row md:odd:flex-row-reverse md:even:text-right">
      <div className="project-card-title z-30 md:absolute md:top-0 lg:top-4 xl:top-12 md:group-odd:left-24 md:group-even:right-24">
        <div className="py-1 text-gold-dark">Featured Project</div>
        <div className="text-2xl font-semibold text-primaryHeaderText mb-4">
          Project Name
        </div>
        <div className="opacity-0 project-card-info md:bg-black-dark text-primaryHeaderText rounded-lg sm:shadow-lg text-sm lg:text-base min-w-full md:max-w-[420px] lg:max-w-[520px] xl:max-w-[600px] md:p-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, velit
          ipsam consectetur nihil at incidunt. Aperiam rerum, at delectus
          impedit asperiores doloribus placeat, quidem ullam repudiandae fuga
          quos ex, ea dolorem magni corrupti nesciunt sunt sequi porro
          voluptatum odit. Mollitia!
        </div>
      </div>

      <a
        href="https://www.google.com/"
        target="_blank"
        rel="noreferrer"
        className="opacity-0 overflow-hidden project-card-img relative rounded-lg md:max-w-[60%] h-auto"
        tabIndex={-1}
      >
        <LazyLoadImage
          src={portfolioTemplateWebp}
          width="100%"
          height="100%"
          alt="test"
          className="rounded-lg"
          effect="black-and-white"
        />
      </a>
    </div>
  );
}
