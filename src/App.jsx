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

    const hiddenElements = document.querySelectorAll(".hidden-section");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer = null;
    };
  }, []);

  return (
    <>
      <HeaderNavigation />
      <HomeSection />
      <ServicesSection />
      <PortfolioSection />
      <PartnersSection/>
      <OurTeamSection />
      <ContactUsSection />
      <FooterNavigation/>
    </>
  );
}

export default App;
