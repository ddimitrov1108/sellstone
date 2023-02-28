import {
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
  FaLocationArrow,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import Section from "../sections/components/Section";
import Brand from "../ui/Brand";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Начало", href: "/" },
  { name: "Услуги", href: "services" },
  { name: "Портфолио", href: "portfolio" },
  { name: "Партньори", href: "partners" },
  { name: "Екип", href: "our-team" },
];

export default function FooterNavigation() {
  return (
    <div className="bg-black-dark px-4 py-6 md:py-16">
      <Section>
        <div className="flex flex-wrap gap-16">
          <div className="grid gap-8">
            <Brand />
            <p className="text-xs md:text-sm max-w-[420px] text-white/40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex gap-2">
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-md text-xl bg-gold-main border border-gold-main hover:bg-black-dark hover:text-white transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-md text-xl bg-gold-main border border-gold-main hover:bg-black-dark hover:text-white transition-all duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.google.com/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-md text-xl bg-gold-main border border-gold-main hover:bg-black-dark hover:text-white transition-all duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-white">Explore</span>
            <div className="grid gap-2 text-white/40">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="hover:text-gold-main"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-white">Address</span>
            <div className="grid gap-2 text-white/40">
              <div className="min-w-fit flex items-center gap-2">
                <div className="text-base">
                  <FaLocationArrow />
                </div>

                <span className="text-white/40">
                  175 5th Ave Premium Area, New York, NY 10010, United States
                </span>
              </div>
              <div className="min-w-fit flex items-center gap-2">
                <div className="text-base">
                  <FaPhone className="rotate-90"/>
                </div>
                <span className="text-white/40">+123(0123456789)</span>
              </div>
              <div className="min-w-fit flex items-center gap-2">
                <div className="text-base">
                  <FaMailBulk />
                </div>
                <span className="text-white/40">supportbdthemes@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
