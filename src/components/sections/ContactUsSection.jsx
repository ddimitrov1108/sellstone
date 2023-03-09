import addressWebp from "../../assets/location.webp";
import phoneWebp from "../../assets/phone.webp";
import emailWebp from "../../assets/email.webp";
import ContactUsForm from "../forms/ContactUsForm";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

const contactUs = [
  {
    id: uuidv4(),
    name: "Address",
    text: "Бургас, с. Желязово",
    icon: (
      <LazyLoadImage
        src={addressWebp}
        width="32px"
        height="32px"
        alt="creative_production.webp"
      />
    ),
  },
  {
    id: uuidv4(),
    name: "Phone",
    text: "+359 878499892",
    icon: (
      <LazyLoadImage
        src={phoneWebp}
        width="32px"
        height="32px"
        alt="creative_production.webp"
        className=""
      />
    ),
  },
  {
    id: uuidv4(),
    name: "Email",
    text: "support@sellstone.eu",
    icon: (
      <LazyLoadImage
        src={emailWebp}
        width="32px"
        height="32px"
        alt="creative_production.webp"
      />
    ),
  },
];

export default function ContactUsSection() {
  return (
    <div
      id="contact-us"
      className="round-bottom-on-entry bg-black-main overflow-hidden px-4 mobile-l:px-8 py-12"
    >
      <Section>
        <SectionHeader className="text-primaryHeaderText text-center xl:text-left">
          Свържете се с нас
        </SectionHeader>

        <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-fit flex flex-col items-start lg:items-center gap-6">
            {contactUs.map(({ id, name, text, icon }) => (
              <div
                key={id}
                className="hidden lg:flex flex-row justify-start lg:flex-col gap-4 items-center text-center"
              >
                <div className="mx-auto rounded-full p-4 mt-2 min-w-fit">
                  {icon}
                </div>
                <div className="text-primaryHeaderText font-semibold">{name}</div>
                <div className="text-[#B7BDC6] text-sm">{text}</div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block h-[400px] w-1 bg-gold-main rounded-full"></div>

          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
      </Section>
    </div>
  );
}
