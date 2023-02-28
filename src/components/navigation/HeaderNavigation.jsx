import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "../ui/Brand";
import MobileNavigation from "./MobileNavigation";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Link from "../ui/Link";
import clsx from "clsx";

const navLinks = [
  { name: "Начало", href: "/", navigateTo: "home" },
  { name: "Услуги", href: "services", navigateTo: "services" },
  { name: "Портфолио", href: "portfolio", navigateTo: "portfolio" },
  { name: "Партньори", href: "partners", navigateTo: "artners" },
  { name: "Екип", href: "our-team", navigateTo: "our-team" },
];

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(window.scrollY);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

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
        onNavLinkClick={closeMobileMenu}
        onClose={toggleMobileMenu}
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
              <Link
                key={link.href}
                to={link.href}
                text={link.name}
              />
            ))}

            <NavLink
              to={"/contact-us"}
              className="bg-gold-main !text-black-main px-4 py-3 rounded-md font-semibold"
            >
              Свържи се с нас
            </NavLink>
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
