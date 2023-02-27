import { useEffect } from "react";
import HeaderNavigation from "./components/navigation/HeaderNavigation";
import HomeSection from "./components/sections/HomeSection";
import ServicesSection from "./components/sections/ServicesSection";
import ContactUsSection from "./components/sections/ContactUsSection";

function App() {
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
      <HeaderNavigation/>

      <main className="grid gap-24">
        <HomeSection/>
        <ServicesSection />
        <ContactUsSection />
      </main>
    </>
  );
}

export default App;
