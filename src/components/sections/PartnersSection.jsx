import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { register } from "swiper/element/bundle";
import viberLogoPng from "../../assets/viber-logo.png";
import { useEffect } from "react";

register();

const params = {
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
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
  pagination: {
    clickable: true,
  },
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
      className="bg-white md:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Партньори</SectionHeader>

        <div className="mx-auto py-12">
          <swiper-container id="swiperContainerPartners" autoplay-delay="2500">
            {[...Array(10).keys()].map((key) => (
              <swiper-slide key={key}>
                <div className="mx-auto max-w-[240px] w-full">
                  <img src={viberLogoPng} alt="viber_logo_png"/>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </Section>
    </div>
  );
}
