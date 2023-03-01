import Section from "./components/Section";
import viberLogoWebp from "../../assets/viber-logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function PartnersSection() {
  return (
    <div
      id="partners"
      className="border-top-radius-transition-init bg-white px-4 xs:px-8 py-24"
    >
      <Section>
        <div className="flex flex-col gap-12 xl:gap-24 items-center justify-center lg:flex-row md:justify-start  lg:px-12">
          <div className="flex flex-col gap-6 max-h-fit lg:max-w-[500px] xl:max-w-[600px]">
            <div className="flex gap-6 font-semibold text-sm text-gold-main">
              <span>TEAM.</span>
              <span>CUSTOMER.</span>
              <span>COMMUNITY.</span>
            </div>

            <h1 className="section-header md:text-left text-3xl sm:text-5xl font-semibold">
              Работим с най-добрите партньори
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quae accusantium, deleniti voluptate eius explicabo necessitatibus
              facere autem maxime delectus porro perspiciatis vel veritatis est,
              exercitationem laboriosam ullam labore laborum!
            </p>
          </div>

          <div className="grow grid grid-cols-2 gap-12 lg:gap-24">
            {[...Array(6).keys()].map((key) => (
              <a
                key={key}
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="grid justify-center items-center w-fit h-fit"
              >
                <LazyLoadImage
                  src={viberLogoWebp}
                  width="256"
                  height="auto"
                  alt="viber_logo.webp"
                  className=""
                />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
