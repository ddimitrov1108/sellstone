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
  // useEffect(() => {
  //   const swiperEl = document.querySelector("#swiperContainerPartners");
  //   Object.assign(swiperEl, params);

  //   return () => {};
  // }, []);

  // return (
  //   <div
  //     id="partners"
  //     className="border-top-radius-transition-init bg-white px-4 xs:px-8 py-12"
  //   >
  //     <Section>
  //       <SectionHeader className="xl:text-left">Партньори</SectionHeader>

  //       <div className="mx-auto py-12">
  //         <swiper-container
  //           className="h-44"
  //           id="swiperContainerPartners"
  //           autoplay-delay="4000"
  //           autoplay-disable-on-interaction="false"
  //         >
  //           {[...Array(9).keys()].map((key) => (
  //             <swiper-slide key={key}>
  //               <div className="mx-auto max-w-[240px] w-full">
  //                 <LazyLoadImage src={viberLogoWebp} alt="viber_logo_png" />
  //               </div>
  //             </swiper-slide>
  //           ))}
  //         </swiper-container>
  //       </div>
  //     </Section>
  //   </div>
  // );

  return (
    <div
      id="partners"
      className="border-top-radius-transition-init bg-white px-4 xs:px-8 py-12 pt-16"
    >
      <Section>
        <div className="flex flex-col gap-12 xl:gap-24 items-center justify-center lg:flex-row md:justify-start  lg:px-12">
          <div className="flex flex-col gap-6 max-h-fit lg:max-w-[500px] xl:max-w-[600px]">
            <div className="flex gap-6 font-semibold text-sm text-gold-main">
              <span>TEAM.</span>
              <span>CUSTOMER.</span>
              <span>COMMUNITY.</span>
            </div>

            <SectionHeader className="xs:text-left pb-0 mb-0">
              Работим с най-добрите партньори
            </SectionHeader>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              quae accusantium, deleniti voluptate eius explicabo necessitatibus
              facere autem maxime delectus porro perspiciatis vel veritatis est,
              exercitationem laboriosam ullam labore laborum!
            </p>
          </div>

          <div className="grow grid grid-cols-2 gap-24">
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
