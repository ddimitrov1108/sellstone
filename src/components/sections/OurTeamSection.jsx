import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import userPfWebp from "../../assets/user-pf.webp";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

const teamArr = [
  {
    id: uuidv4(),
    img: (
      <LazyLoadImage
        src={userPfWebp}
        width="256px"
        height="256px"
        alt="user_pf.webp"
      />
    ),
    name: "Daniel Dimitrov",
    title: "Web Developer",
    socials: [
      {
        id: uuidv4(),
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        id: uuidv4(),
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { id: uuidv4(), url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: (
      <LazyLoadImage
        src={userPfWebp}
        width="256px"
        height="256px"
        alt="user_pf.webp"
      />
    ),
    name: "Daniel Dimitrov",
    title: "Web Developer",
    socials: [
      {
        id: uuidv4(),
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        id: uuidv4(),
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { id: uuidv4(), url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: (
      <LazyLoadImage
        src={userPfWebp}
        width="256px"
        height="256px"
        alt="user_pf.webp"
      />
    ),
    name: "Daniel Dimitrov",
    title: "Web Developer",
    socials: [
      {
        id: uuidv4(),
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        id: uuidv4(),
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { id: uuidv4(), url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
];

export default function OurTeamSection() {
  return (
    <div id="our-team" className="bg-white overflow-hidden px-4 xs:px-8 py-12">
      <Section>
        <SectionHeader className="">Нашият екип</SectionHeader>

        <div className="flex flex-col md:flex-row gap-14 gap-y-10 items-center justify-center">
          {teamArr.map(({ id, img, name, title, socials }) => (
            <div
              key={id}
              className="opacity-0 p-6 bg-white transition-all duration-300 shadow-lg overflow-hidden hidden-section employee-card grid gap-2 rounded-md"
            >
              <div className="overflow-hidden w-fit mx-auto p-4 pb-0 bg-alternative rounded-md">
                {img}
              </div>
              <div className="grid items-center gap-4 p-2">
                <div className="grid gap-2">
                  <span className="text-left text-lg font-semibold truncate ...">
                    {name}
                  </span>
                  <span className="text-left text-black-main/40 truncate ...">
                    {title}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-2xl transition-all duration-500">
                  {socials.map(({ id, url, icon }) => (
                    <a
                      key={id}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 text-black-light/60 rounded-full hover:text-gold-main"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
