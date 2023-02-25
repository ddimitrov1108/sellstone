import { HiOutlineLightBulb } from "react-icons/hi";

const categoriesList = [
  { name: "Branding / Online Business Cards", icon: <HiOutlineLightBulb /> },
  { name: "Creative Production", icon: <HiOutlineLightBulb /> },
  { name: "Email Marketing", icon: <HiOutlineLightBulb /> },
  { name: "Social Media Marketing", icon: <HiOutlineLightBulb /> },
  { name: "Web Design && SEO", icon: <HiOutlineLightBulb /> },
];

export default function ServicesSection() {
  return (
    <div>
      {/* <div id="#services" className="mx-auto max-w-7xl min-h-[800px] rounded-xl">
        <div className="flex gap-6 justify-betweeen">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="gap-6 flex flex-col items-center justify-center p-6 shadow-md bg-white rounded-md w-full max-w-[260px]"
            >
              <div className="text-7xl">{category.icon}</div>
              <span className="text-center grow">{category.name}</span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
