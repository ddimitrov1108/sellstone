import { partners } from "../constants";
import Section from "./components/Section";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PartnersSection() {
  return (
    <div
      id="partners"
      className="round-top-on-entry bg-black-main px-4 mobile-l:px-8 py-12 md:py-24"
    >
      <Section>
        <div className="flex flex-col gap-6 gap-y-16 items-center justify-center lg:flex-row md:justify-start md:px-12">
          <div className="flex flex-col gap-4 md:gap-6 max-h-fit lg:max-w-[600px] px-4 md:px-0">
            <div className="flex gap-6 font-semibold text-sm text-gold-main">
              <span>TEAM.</span>
              <span>CUSTOMER.</span>
              <span>COMMUNITY.</span>
            </div>

            <h1 className="text-headerText section-header md:text-left text-3xl sm:text-5xl font-semibold">
              Партньорите, с които работим
            </h1>

            <p className="text-[#B7BDC6]">
              Ние ценим нашите партньорства с разнообразен набор от фирми и
              организации. Те включват малки и средни предприятия, нестопански
              организации, стартиращи фирми и по-големи корпорации в различни
              индустрии.
            </p>
          </div>

          <div className="w-full flex flex-wrap items-center text-center justify-center gap-y-8 gap-x-12">
            {partners.map(({ id, href, img, alt }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center w-[20%] h-fit"
              >
                <LazyLoadImage
                  src={img}
                  alt={alt}
                  width="256"
                  height="auto"
                  className="img-filter-hover"
                />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
