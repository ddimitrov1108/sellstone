import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import { v4 as uuidv4 } from "uuid";
import userPfPng from "../../assets/user-pf.png";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const teamArr = [
  {
    id: uuidv4(),
    img: (
      <img src={userPfPng} width="256px" height="256px" alt="happy-person" />
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
      <img src={userPfPng} width="256px" height="256px" alt="happy-person" />
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
      <img src={userPfPng} width="256px" height="256px" alt="happy-person" />
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
    <div
      id="our-team"
      className="bg-white overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader className="xl:text-left">Нашият екип</SectionHeader>

        <div className="flex flex-col md:flex-row gap-14 gap-y-4 items-center justify-center">
          {teamArr.map((employee) => (
            <div
              key={employee.id}
              className="bg-white md:shadow-lg overflow-hidden hidden-section employee-card grid gap-6 rounded-md p-4"
            >
              <div className="relative overflow-hidden w-fit mx-auto p-4 pb-0 bg-alternative rounded-md">
                {employee.img}
                <div className="group absolute top-0 right-0 bottom-0 left-0 hover:bg-alternative/60 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center gap-4 text-3xl transform transition-all duration-500 translate-y-40 group-hover:translate-y-0">
                    {employee.socials.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-all duration-300"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid items-center gap-2">
                <span className="w-fit mx-auto text-center text-lg font-semibold truncate ...">
                  {employee.name}
                </span>
                <span className="text-black-main/80 w-fit mx-auto text-center truncate ...">
                  {employee.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
