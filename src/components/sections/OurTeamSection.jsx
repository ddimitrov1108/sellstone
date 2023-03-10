import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import EmployeeCard from "../EmployeeCard";
import projectManagerWebp from "../../assets/project-manager.webp";
import copyWriterWebp from "../../assets/copywriter.webp";
import mediaCreatorWebp from "../../assets/media-creator.webp";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

const teamArr = [
  {
    id: uuidv4(),
    img: {
      src: projectManagerWebp,
      alt: "project-manager.webp",
    },
    name: "Джем Асенов",
    title: "Project Manager",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: {
      src: copyWriterWebp,
      alt: "copywriter.webp",
    },
    name: "Виктор Димитров",
    title: "Copywriter",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: {
      src: mediaCreatorWebp,
      alt: "media-creator.webp",
    },
    name: "Георги Тодоров",
    title: "Media Creator",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
];

export default function OurTeamSection() {
  return (
    <div
      id="our-team"
      className="bg-black-main overflow-hidden px-4 mobile-l:px-8 py-12"
    >
      <Section>
        <SectionHeader className="text-headerText">Нашият екип</SectionHeader>

        <div className="flex flex-col lg:flex-row gap-6 gap-y-10 items-center justify-center">
          {teamArr.map((employeeData) => (
            <EmployeeCard key={employeeData.id} data={employeeData} />
          ))}
        </div>
      </Section>
    </div>
  );
}
