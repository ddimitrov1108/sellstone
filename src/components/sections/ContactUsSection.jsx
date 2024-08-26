
import ContactUsForm from "../forms/ContactUsForm";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ContactUsDetails from "../cards/ContactUsDetails";
import { contactUs } from "../constants";

export default function ContactUsSection() {
  return (
    <div
      id="contact-us"
      className="round-bottom-on-entry bg-black-main overflow-hidden px-4 mobile-l:px-8 py-12"
    >
      <Section>
        <SectionHeader className="text-headerText text-center xl:text-left">
          Свържете се с нас
        </SectionHeader>

        <div className="flex flex-col-reverse items-center lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-fit flex flex-col items-start lg:items-center gap-6">
            {contactUs.map((contactData) => (
              <ContactUsDetails key={contactData.id} data={contactData} />
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
