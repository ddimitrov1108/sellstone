import { useEffect } from "react";
import HeaderNavigation from "./components/navigation/HeaderNavigation";
import HomeSection from "./components/sections/HomeSection";
import ServicesSection from "./components/sections/ServicesSection";

function App() {
  const scrollSectionIntoView = (sectionId) => {
    const domElement = document.getElementById(sectionId);

    if (domElement) domElement.scrollIntoView();
  };

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
      <HeaderNavigation scrollSectionIntoView={scrollSectionIntoView}/>

      <main className="grid gap-24">
        <HomeSection />
        <ServicesSection />
      </main>
    </>
  );
}

export default App;
