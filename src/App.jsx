import { useEffect } from "react";
import HeaderNavigation from "./components/navigation/HeaderNavigation";
import HomeSection from "./components/sections/HomeSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactUsSection from "./components/sections/ContactUsSection";
import { useLocation } from "react-router-dom";
import OurTeamSection from "./components/sections/OurTeamSection";
import PortfolioSection from "./components/sections/PortfolioSection";
import PartnersSection from "./components/sections/PartnersSection";
import FooterNavigation from "./components/navigation/FooterNavigation";
import { register } from "swiper/element/bundle";
import TestimonialsSection from "./components/sections/TestimonialsSection";

register();

function App() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      const domElement = document.getElementById(
        location.pathname === "/" ? "home" : location.pathname.substring(1)
      );

      if (domElement) domElement.scrollIntoView();
    }, 100);
  }, [location]);

  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-section");
          entry.target.classList.remove("hidden-section");
        }
      });
    });

    let roundTopBorderObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rounded-border-top");
          return;
        }

        entry.target.classList.remove("rounded-border-top");
      });
    });

    let roundBottomBorderObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("rounded-border-bottom");
          return;
        }

        entry.target.classList.remove("rounded-border-bottom");
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-section");
    const roundTopBorderElementsOnEntry = document.querySelectorAll(
      ".round-top-on-entry"
    );
    const roundBottomBorderElementsOnEntry = document.querySelectorAll(
      ".round-bottom-on-entry"
    );

    hiddenElements.forEach((el) => observer.observe(el));

    roundTopBorderElementsOnEntry.forEach((el) =>
      roundTopBorderObserver.observe(el)
    );

    roundBottomBorderElementsOnEntry.forEach((el) =>
      roundBottomBorderObserver.observe(el)
    );

    return () => {
      observer = null;
      roundTopBorderObserver = null;
      roundBottomBorderObserver = null;
    };
  }, []);

    return (
      <>
        <HeaderNavigation />
        <HomeSection />
        <ServicesSection />
        <TestimonialsSection />
        <OurTeamSection />
        <ContactUsSection />
        <FooterNavigation />
      </>
  );


  // return (
  //     <>
  //       <HeaderNavigation />
  //       <HomeSection />
  //       <ServicesSection />
  //       <PortfolioSection />
  //       <TestimonialsSection />
  //       <PartnersSection />
  //       <OurTeamSection />
  //       <ContactUsSection />
  //       <FooterNavigation />
  //     </>
  // );
}

export default App;
