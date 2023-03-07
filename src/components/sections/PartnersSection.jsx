import Section from "./components/Section";
import { LazyLoadImage } from "react-lazy-load-image-component";
import devinPng from "../../assets/devin.png";
import lukoilPng from "../../assets/lukoil.png";
import redbullPng from "../../assets/redbull.png";
import kauflandPng from "../../assets/kaufland.png";
import obbPng from "../../assets/obb.png";
import xellaPng from "../../assets/xella.png";
const partnersImgs = [
  devinPng,
  lukoilPng,
  redbullPng,
  kauflandPng,
  obbPng,
  xellaPng,
];

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
              Ние ценим нашите партньорства с разнообразен набор от фирми и
              организации. Те включват малки и средни предприятия, нестопански
              организации, стартиращи фирми и по-големи корпорации в различни
              индустрии.
            </p>
          </div>

          <div className="w-full flex flex-wrap items-center text-center justify-center gap-y-8 gap-x-4 md:gap-12">
            {partnersImgs.map((img, index) => (
              <a
                key={index}
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mx-auto w-[20%] h-fit"
              >
                <LazyLoadImage
                  src={img}
                  width="256"
                  height="auto"
                  alt="partner_logo.webp"
                  className=""
                  style={{
                    filter:
                      "invert(67%) sepia(4%) saturate(1022%) hue-rotate(176deg) brightness(82%) contrast(88%)",
                  }}
                />
              </a>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
