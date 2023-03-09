import { useEffect } from "react";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

import testimonial1Webp from "../../assets/testimonial-1.webp";
import testimonial2Webp from "../../assets/testimonial-2.webp";
import testimonial3Webp from "../../assets/testimonial-3.webp";
import testimonial4Webp from "../../assets/testimonial-4.webp";
import testimonial5Webp from "../../assets/testimonial-5.webp";
import testimonial6Webp from "../../assets/testimonial-6.webp";

const testimonialsArr = [
  {
    id: uuidv4(),
    name: "Яна Вълчева",
    img: testimonial1Webp,
    description:
      "Трябва да кажа, че бях поразена от резултатите, които постигнахме, работейки със Sellstone. Наистина имах чувството, че имат моите най-добри интереси в сърцето си.",
  },
  {
    id: uuidv4(),
    name: "Стоян Михайлов",
    img: testimonial2Webp,
    description:
      "Като собственик на малък бизнес не бях сигурен как ще протече едно сътрудничество с външна агенция, но за мое щастие си заслужаваше.Те винаги бяха на разположение, за да отговорят на въпросите ми и да предложат насоки.",
  },
  {
    id: uuidv4(),
    name: "Ясен Тодоров",
    img: testimonial3Webp,
    description:
      "Колебах се дали да работя с маркетингова агенция, но този екип ме накара да се чувствам удобно от самото начало.",
  },
  {
    id: uuidv4(),
    name: "Дарин Ангелов",
    img: testimonial4Webp,
    description:
      "Екипът им е не само знаещ и квалифициран, но и приятелски настроен и персонален. Отделиха време да опознаят нашия екип и нашия бизнес, което направи процеса на сътрудничество безпроблемен.",
  },
  {
    id: uuidv4(),
    name: "Александър Димитров",
    img: testimonial5Webp,
    description:
      "От момента, в който започнахме да работим с тази маркетингова агенция, знаех, че сме в добри ръце. Екипът им е страстен за това, което правят и това си личи в работата им.",
  },
  {
    id: uuidv4(),
    name: "Велизара Димова",
    img: testimonial6Webp,
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
    426: {
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
        <SectionHeader className="text-center text-primaryHeaderText pb-0 mb-2">
          Отзиви от наши клиенти
        </SectionHeader>
        <div className="mx-auto w-[40%] md:w-[30%] h-1 bg-gold-main rounded-full"></div>
        <div className="mx-auto min-h-fit py-12">
          <swiper-container
            id="swiperContainerTestimonials"
            autoplay-delay="5000"
            autoplay-disable-on-interaction="false"
          >
            {testimonialsArr.map(({ id, name, img, description }) => (
              <swiper-slide key={id}>
                <div className="w-full bg-black-dark rounded-lg mt-14 ">
                  <div className="mx-auto border-2 w-32 h-32 flex overflow-hidden border-gold-light rounded-full -mt-24">
                    <LazyLoadImage
                      src={img}
                      width="128"
                      height="128"
                      alt="user_pf.webp"
                      className="shadow-md mx-auto bg-black-main object-cover"
                    />
                  </div>

                  <div className="mt-4 min-h-[150px] grow z-30 text-primaryHeaderText p-4 text-sm">
                    {description}
                  </div>

                  <div className="text-center text-primaryHeaderText">
                    <span className="font-semibold text-gold-main">{name}</span>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </Section>
    </div>
  );
}
