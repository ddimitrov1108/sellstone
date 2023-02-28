import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";

const teamArr = [
  {
    name: "Michael",
    title: "Web Developer",
    socials: [
      { name: "github", url: "https://github.com/" },
      { name: "linkedin", url: "https://www.linkedin.com/feed" },
      { name: "twitter", url: "https://twitter.com/" },
      { name: "facebook", url: "https://www.facebook.com/" },
    ],
  },
];

export default function OurTeamSection() {
  return (
    <div
      id="our-team"
      className="bg-white md:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Нашият екип</SectionHeader>

        <div className="flex flex-wrap gap-0 gap-y-4 sm:gap-10 items-center justify-center"></div>
      </Section>
    </div>
  );
}
