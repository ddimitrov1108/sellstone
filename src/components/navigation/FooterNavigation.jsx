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
import { v4 as uuidv4 } from "uuid";
import { navLinks } from "./HeaderNavigation";

const socialLinks = [
  {
    id: uuidv4(),
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    id: uuidv4(),
    name: "Twitter",
    href: "https://www.twitter.com/",
    icon: <FaTwitter />,
  },
];

const contactUs = [
  {
    id: uuidv4(),
    name: "Location",
    text: "175 5th Ave Premium Area, New York, NY 10010, United States",
    icon: <FaLocationArrow />,
  },
  {
    id: uuidv4(),
    name: "Phone",
    text: "+123(0123456789)",
    icon: <FaPhone className="rotate-90" />,
  },
  {
    id: uuidv4(),
    name: "Email",
    text: "supportbdthemes@gmail.com",
    icon: <FaMailBulk />,
  },
];

export default function FooterNavigation() {
  return (
    <div className="bg-black-dark px-4 mobile-l:px-8 py-10 md:py-16">
      <Section>
        <div className="flex flex-wrap gap-16">
          <div className="grid gap-8">
            <Brand />
            <p className="text-sm max-w-[420px] text-white/40">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="mt-8 flex gap-2">
              {socialLinks.map(({ id, name, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  title={name}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-md text-xl bg-gold-main border border-gold-main hover:bg-black-dark hover:text-white transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-white">Explore</span>
            <div className="grid gap-2 text-white/40 text-sm">
              {navLinks.map(({ id, name, href }) => (
                <NavLink key={id} to={href} className="hover:text-gold-main">
                  {name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-white">Address</span>
            <div className="grid gap-2 text-white/40">
              {contactUs.map(({ id, name, text, icon }) => (
                <div
                  key={id}
                  title={name}
                  className="min-w-fit flex items-center gap-2"
                >
                  <div className="text-base">{icon}</div>
                  <span className="text-white/40 text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
