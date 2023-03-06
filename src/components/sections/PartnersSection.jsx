import Section from "./components/Section";
import viberLogoWebp from "../../assets/viber-logo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import devinWebp from "../../assets/devin.webp";
import lukoilWebp from "../../assets/lukoil.webp";
import redbullWebp from "../../assets/redbull.webp";

const partnersImgs = [devinWebp, lukoilWebp, redbullWebp];

export default function PartnersSection() {
  return (
    <div
      id="partners"
      className="round-top-on-entry bg-black-main px-4 mobile-l:px-8 py-12 md:py-24"
    >
      <Section>
        <div className="flex flex-col gap-6 items-center justify-center lg:flex-row md:justify-start md:px-12">
          <div className="flex flex-col gap-4 md:gap-6 max-h-fit lg:max-w-[600px] xl:max-w-[700px] px-4 md:px-0">
            <div className="flex gap-6 font-semibold text-sm text-gold-main">
              <span>TEAM.</span>
              <span>CUSTOMER.</span>
              <span>COMMUNITY.</span>
            </div>

            <h1 className="text-primaryHeaderText section-header md:text-left text-3xl sm:text-5xl font-semibold">
              Работим с най-добрите партньори
            </h1>

            <p className="text-[#B7BDC6]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quae accusantium, deleniti voluptate eius explicabo necessitatibus
              facere autem maxime delectus porro perspiciatis vel veritatis est,
              exercitationem laboriosam ullam labore laborum!
            </p>
          </div>

          <div className="w-full flex flex-wrap items-center text-center justify-center gap-y-8 gap-x-4 md:gap-12 lg:gap-16">
            {partnersImgs.map((img, index) => (
              <a
                key={index}
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mx-auto w-[60%] md:w-[40%] h-fit"
              >
                <LazyLoadImage
                  src={img}
                  width="256"
                  height="auto"
                  alt="partner_logo.webp"
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
