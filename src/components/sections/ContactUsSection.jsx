import addressWebp from "../../assets/location.webp";
import phoneWebp from "../../assets/phone.webp";
import emailWebp from "../../assets/email.webp";
import { v4 as uuidv4 } from "uuid";
import ContactUsForm from "../forms/ContactUsForm";

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
      className="min-h-[800px] bg-white sm:bg-secondary lg:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <div className="transition-all mx-auto max-w-7xl">
        <div className="hidden-section section-header text-center sm:text-left text-3xl xs:text-[38px] sm:text-6xl font-semibold pb-2 mb-12 text-black-main">
          Свържете се с нас
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-24">
          <div className="w-full lg:w-fit flex flex-col items-start lg:items-center gap-6">
            {contactRef.map((contact) => (
              <div key={contact.id} className="flex flex-row justify-start lg:flex-col gap-4 items-center text-center">
                <div className="mx-auto rounded-full bg-alternative p-4 mt-2 min-w-fit">
                  {contact.icon}
                </div>
                <div className="hidden lg:block font-semibold">{contact.name}</div>
                <div className="text-black-light">{contact.description}</div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block h-[400px] w-0.5 bg-gold-light"></div>

          <div className="w-full">
            <ContactUsForm />
          </div>
        </div>
      </div>
    </div>
  );
}
