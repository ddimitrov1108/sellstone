import addressWebp from "../../assets/location.webp";
import phoneWebp from "../../assets/phone.webp";
import emailWebp from "../../assets/email.webp";
import { v4 as uuidv4 } from "uuid";
import ContactUsForm from "../forms/ContactUsForm";
import SectionHeader from "./components/SectionHeader";
import SectionMain from "./components/SectionMain";

const contactRef = [
  {
    id: uuidv4(),
    name: "Address",
    description: "Burgas, Bulgaria",
    icon: (
      <img
        src={addressWebp}
        width="32px"
        height="32px"
        alt="creative_production_webp"
      />
    ),
  },
  {
    id: uuidv4(),
    name: "Phone",
    description: "+359 888 888 888",
    icon: (
      <img
        src={phoneWebp}
        width="32px"
        height="32px"
        alt="creative_production_webp"
        className=""
      />
    ),
  },
  {
    id: uuidv4(),
    name: "Email",
    description: "loremloremlorem@gmail.com",
    icon: (
      <img
        src={emailWebp}
        width="32px"
        height="32px"
        alt="creative_production_webp"
      />
    ),
  },
];

export default function ContactUsSection() {
  return (
    <div
      id="contact-us"
      className="bg-white sm:bg-secondary md:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <SectionMain>
        <SectionHeader>Свържете се с нас</SectionHeader>

        <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-fit flex flex-col items-start lg:items-center gap-6">
            {contactRef.map((contact) => (
              <div
                key={contact.id}
                className="flex flex-row justify-start lg:flex-col gap-4 items-center text-center"
              >
                <div className="mx-auto rounded-full bg-alternative p-4 mt-2 min-w-fit">
                  {contact.icon}
                </div>
                <div className="hidden lg:block font-semibold">
                  {contact.name}
                </div>
                <div className="text-black-light text-sm">
                  {contact.description}
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block h-[400px] w-0.5 bg-gold-light"></div>

          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
      </SectionMain>
    </div>
  );
}
