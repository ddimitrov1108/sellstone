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

    let borderTopRadiusObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("transition-border-radius-top");
        else entry.target.classList.remove("transition-border-radius-top");
      });
    });

    let borderBottomRadiusObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("transition-border-radius-bottom");
        else entry.target.classList.remove("transition-border-radius-bottom");
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden-section");
    const borderTopRadiusElementsTransition = document.querySelectorAll(
      ".border-top-radius-transition-init"
    );
    const borderBottomRadiusElementsTransition = document.querySelectorAll(
      ".border-bottom-radius-transition-init"
    );

    hiddenElements.forEach((el) => observer.observe(el));
    borderTopRadiusElementsTransition.forEach((el) =>
      borderTopRadiusObserver.observe(el)
    );
    borderBottomRadiusElementsTransition.forEach((el) =>
      borderBottomRadiusObserver.observe(el)
    );
    return () => {
      observer = null;
      borderTopRadiusObserver = null;
      borderBottomRadiusObserver = null;
    };
  }, []);

  return (
    <>
      <HeaderNavigation />
      <HomeSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <PartnersSection />
      <OurTeamSection />
      <ContactUsSection />
      <FooterNavigation />
    </>
  );
}

export default App;
