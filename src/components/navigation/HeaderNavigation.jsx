import { useEffect, useState } from "react";
import Brand from "../Brand";
import MobileNavigation from "./MobileNavigation";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import clsx from "clsx";

const navLinks = [
  { name: "Home", navigateTo: "home" },
  { name: "Services", navigateTo: "services" },
  { name: "Portfolio", navigateTo: "portfolio" },
  { name: "Customers", navigateTo: "customers" },
  { name: "Our Team", navigateTo: "ourteam" },
];

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(window.scrollY);

  const scrollSectionIntoView = (sectionId) => {
    const domElement = document.getElementById(sectionId);

    if (domElement) domElement.scrollIntoView();
  };

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  const onMobileNavLinkClick = (sectionId) => {
    if (sectionId) scrollSectionIntoView(sectionId);

    setIsOpen(false);
  };

  useEffect(() => {
    const href = window.location.href;
    const pathName = href.substring(href.lastIndexOf("/") + 1);

    if (navLinks.findIndex((link) => link.href === pathName))
      scrollSectionIntoView(pathName);
  }, []);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }

      setScrollDir(scrollY > lastScrollY ? "scroll-down" : "scroll-up");
      setYValue(scrollY);
      setIsOpen(false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);

  return (
    <>
      <MobileNavigation
        navLinks={navLinks}
        open={isOpen}
        onNavLinkClick={onMobileNavLinkClick}
        onClose={() => setIsOpen(!isOpen)}
      />

      <header
        className={clsx(
          "transform transition-all duration-500 bg-black-dark z-40 fixed top-0 left-0 right-0 px-4 py-4 xs:px-8",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-md py-3" : "md:py-6"
        )}
      >
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
          <Brand />
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.navigateTo}
                className="relative group px-4 py-3 cursor-pointer"
                onClick={() => scrollSectionIntoView(link.navigateTo)}
              >
                <span className="transition-all text-white group-hover:text-gold-main">
                  {link.name}
                </span>
                <div className="absolute bottom-0 right-[50%] transition-all w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
                <div className="absolute bottom-0 left-[50%] transition-all w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
              </a>
            ))}
          </nav>

          <HiOutlineBars3BottomRight
            className="header-links lg:hidden text-4xl cursor-pointer text-secondary"
            onClick={toggleMobileMenu}
          />
        </div>
      </header>
    </>
  );
}
