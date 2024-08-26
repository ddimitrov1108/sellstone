import Section from "./components/Section";
import SectionHeader from "./components/SectionHeader";
import EmployeeCard from "../cards/EmployeeCard";
import { team } from "../constants";

export default function OurTeamSection() {
  return (
    <div
      id="our-team"
      className="bg-black-main overflow-hidden px-4 mobile-l:px-8 py-12"
    >
      <Section>
        <SectionHeader className="text-headerText">Нашият екип</SectionHeader>

        <div className="flex flex-col lg:flex-row gap-6 gap-y-10 items-center justify-center">
          {team.map((employeeData) => (
            <EmployeeCard key={employeeData.id} data={employeeData} />
          ))}
        </div>
      </Section>
    </div>
  );
}
