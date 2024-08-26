import { useEffect } from "react";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../constants";

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
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  spaceBetween: 32,
  loop: true,
};

export default function TestimonialsSection() {
  useEffect(() => {
    const swiperEl = document.querySelector("#swiperContainerTestimonials");
    Object.assign(swiperEl, params);

    return () => {};
  }, []);

  return (
    <div className="bg-black-dark px-4 mobile-l:px-8 py-12">
      <Section>
        <SectionHeader className="text-center text-headerText pb-0 mb-2">
          Отзиви от наши клиенти
        </SectionHeader>
        <div className="mx-auto w-[40%] md:w-[30%] h-1 bg-gold-main rounded-full"></div>
        <div className="mx-auto min-h-fit py-12">
          <swiper-container
            id="swiperContainerTestimonials"
            autoplay-delay="5000"
            autoplay-disable-on-interaction="false"
          >
            {testimonials.map((testimonialData) => (
              <swiper-slide key={testimonialData.id}>
                <TestimonialCard data={testimonialData} />
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </Section>
    </div>
  );
}
