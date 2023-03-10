import { useEffect } from "react";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import TestimonialCard from "../TestimonialCard";
import testimonial1Webp from "../../assets/testimonial-1.webp";
import testimonial2Webp from "../../assets/testimonial-2.webp";
import testimonial3Webp from "../../assets/testimonial-3.webp";
import testimonial4Webp from "../../assets/testimonial-4.webp";
import testimonial5Webp from "../../assets/testimonial-5.webp";
import testimonial6Webp from "../../assets/testimonial-6.webp";
import { v4 as uuidv4 } from "uuid";

const testimonialsArr = [
  {
    id: uuidv4(),
    name: "Яна Вълчева",
    img: { src: testimonial1Webp, alt: "testimonial-1.webp" },
    description:
      "Трябва да кажа, че бях поразена от резултатите, които постигнахме, работейки със Sellstone. Наистина имах чувството, че имат моите най-добри интереси в сърцето си.",
  },
  {
    id: uuidv4(),
    name: "Стоян Михайлов",
    img: { src: testimonial2Webp, alt: "testimonial-2.webp" },
    description:
      "Като собственик на малък бизнес не бях сигурен как ще протече едно сътрудничество с външна агенция, но за мое щастие си заслужаваше.Те винаги бяха на разположение, за да отговорят на въпросите ми и да предложат насоки.",
  },
  {
    id: uuidv4(),
    name: "Ясен Тодоров",
    img: { src: testimonial3Webp, alt: "testimonial-3.webp" },
    description:
      "Колебах се дали да работя с маркетингова агенция, но този екип ме накара да се чувствам удобно от самото начало.",
  },
  {
    id: uuidv4(),
    name: "Дарин Ангелов",
    img: { src: testimonial4Webp, alt: "testimonial-4.webp" },
    description:
      "Екипът им е не само знаещ и квалифициран, но и приятелски настроен и персонален. Отделиха време да опознаят нашия екип и нашия бизнес, което направи процеса на сътрудничество безпроблемен.",
  },
  {
    id: uuidv4(),
    name: "Александър Димитров",
    img: { src: testimonial5Webp, alt: "testimonial-5.webp" },
    description:
      "От момента, в който започнахме да работим с тази маркетингова агенция, знаех, че сме в добри ръце. Екипът им е страстен за това, което правят и това си личи в работата им.",
  },
  {
    id: uuidv4(),
    name: "Велизара Димова",
    img: { src: testimonial6Webp, alt: "testimonial-6.webp" },
    description:
      "Като нов собственик на бизнес не бях сигурна откъде да започна. Техният екип отдели време да изслуша моите идеи и ми помогна да изградя силно онлайн присъствие.",
  },
];

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
            {testimonialsArr.map((testimonialData) => (
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
