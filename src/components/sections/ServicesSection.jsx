import brandingWebp from "../../assets/branding.webp";
import creativeProductionWebp from "../../assets/creative-production.webp";
import emailMarketingWebp from "../../assets/email-marketing.webp";
import socialMediaMarketingWebp from "../../assets/social-media-marketing.webp";
import webDesignSeoWebp from "../../assets/web-design-seo.webp";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ServiceCard from "../ui/ServiceCard";
import { v4 as uuidv4 } from "uuid";

const servicesArr = [
  {
    id: uuidv4(),
    name: "Branding / Business Cards",
    icon: (
      <img src={brandingWebp} width="64px" height="64px" alt="branding_webp" />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Creative Production",
    icon: (
      <img
        src={creativeProductionWebp}
        width="64px"
        height="64px"
        alt="creative_production_webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Email Marketing",
    icon: (
      <img
        src={emailMarketingWebp}
        width="64px"
        height="64px"
        alt="email_marketing_webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Social Media Marketing",
    icon: (
      <img
        src={socialMediaMarketingWebp}
        width="64px"
        height="64px"
        alt="social_media_marketing_webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Web Design & SEO",
    icon: (
      <img
        src={webDesignSeoWebp}
        width="64px"
        height="64px"
        alt="web_design_seo_webp"
      />
    ),
    description: "",
  },
];

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="bg-white px-4 xs:px-8 py-12"
    >
      <Section>
        <SectionHeader>Нашите услуги</SectionHeader>

        <div className="flex flex-wrap gap-10 items-center justify-start">
          {servicesArr.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
