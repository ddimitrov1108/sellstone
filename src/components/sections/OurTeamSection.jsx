import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import userPfWebp from "../../assets/user-pf.webp";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";
import EmployeeCard from "../ui/EmployeeCard";

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
    <div
      id="our-team"
      className="bg-black-main overflow-hidden px-4 mobile-l:px-8 py-12"
    >
      <Section>
        <SectionHeader className="text-primaryHeaderText">
          Нашият екип
        </SectionHeader>

        <div className="flex flex-col md:flex-row gap-14 gap-y-10 items-center justify-center">
          {teamArr.map((employee) => (
            <EmployeeCard key={employee} data={employee} />
          ))}
        </div>
      </Section>
    </div>
  );
}
