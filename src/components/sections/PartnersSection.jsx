import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import viberLogoWebp from "../../assets/viber-logo.webp";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const params = {
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    426: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  spaceBetween: 30,
  loop: true,
};

export default function PartnersSection() {
  useEffect(() => {
    const swiperEl = document.querySelector("#swiperContainerPartners");
    Object.assign(swiperEl, params);

    return () => {};
  }, []);

  return (
    <div
      id="partners"
      className="border-top-radius-transition-init bg-white px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader className="xl:text-left">Партньори</SectionHeader>

        <div className="mx-auto py-12">
          <swiper-container
            className="h-44"
            id="swiperContainerPartners"
            autoplay-delay="2500"
            autoplay-disable-on-interaction="false"
          >
            {[...Array(9).keys()].map((key) => (
              <swiper-slide key={key}>
                <div className="mx-auto max-w-[240px] w-full">
                  <LazyLoadImage src={viberLogoWebp} alt="viber_logo_png" />
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </Section>
    </div>
  );
}
