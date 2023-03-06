import { useEffect } from "react";
import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import userPfWebp from "../../assets/user-pf.webp";
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
            {[...Array(9).keys()].map((key) => (
              <swiper-slide key={key}>
                <div className="w-full bg-black-dark rounded-lg mt-14">
                  <LazyLoadImage
                    src={userPfWebp}
                    width="128px"
                    height="128px"
                    alt="user_pf.webp"
                    className="shadow-md mx-auto bg-black-main border-2 border-gold-light rounded-full -mt-24"
                  />

                  <div className="mt-4 py-4 flex items-center gap-2">
                    <div className="z-30 text-primaryHeaderText p-4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Eveniet, numquam? Aut sapiente accusantium quas doloribus
                      earum maxime, id distinctio! Corporis facere sint
                      voluptatum nostrum nesciunt ea, debitis hic nihil
                      asperiores repellat facilis delectus veniam quisquam nam
                      sapiente unde? Exercitationem, ducimus!
                    </div>
                  </div>

                  <div className="text-center text-primaryHeaderText">
                    <span className="font-semibold">Daniel Dimitrov,</span>{" "}
                    <span className="text-gold-main"> Bulgaria</span>
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
