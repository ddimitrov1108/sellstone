import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Brand from "../ui/Brand";
import MobileNavigation from "./MobileNavigation";
import { FaRegSun, FaRegMoon } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import Link from "../ui/Link";
import { v4 as uuidv4 } from "uuid";
import clsx from "clsx";
import { ThemeContext } from "../../App";

export const navLinks = [
  { id: uuidv4(), name: "Начало", href: "/" },
  { id: uuidv4(), name: "Услуги", href: "services" },
  { id: uuidv4(), name: "Портфолио", href: "portfolio" },
  { id: uuidv4(), name: "Партньори", href: "partners" },
  { id: uuidv4(), name: "Екип", href: "our-team" },
];

export default function HeaderNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState("scroll-up");
  const [yValue, setYValue] = useState(window.scrollY);
  const themeContext = useContext(ThemeContext);

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
          "bg-black-dark transform transition-all duration-500 z-40 fixed top-0 left-0 right-0 px-4 py-4 mobile-l:px-8",
          scrollDir === "scroll-down" ? "-translate-y-40" : "translate-y-0",
          yValue ? "shadow-md py-3" : "md:py-6"
        )}
      >
        <div className="mx-auto w-full max-w-7xl flex items-center justify-between">
          <a href="/">
            <Brand />
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(({ id, name, href }) => (
              <Link key={id} to={href} text={name} />
            ))}
          </nav>

          <NavLink
            to={"/contact-us"}
            className="hidden lg:block bg-gold-main !text-black-main px-4 py-3 rounded-md font-semibold"
          >
            Свържи се с нас
          </NavLink>

          <div className="flex items-center gap-4">
            <button
              className="text-2xl p-2 rounded-full hover:bg-black-light/30 transition-all text-white hover:text-gold-main"
              onClick={themeContext.toggleTheme}
            >
              {themeContext.theme === "dark" ? <FaRegSun /> : <FaRegMoon />}
            </button>

            <HiOutlineBars3BottomRight
              className="header-links lg:hidden text-4xl cursor-pointer text-secondary"
              onClick={toggleMobileMenu}
            />
          </div>
        </div>
      </header>
    </>
  );
}
