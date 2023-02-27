import brandingWebp from "../../assets/branding.webp";
import creativeProductionWebp from "../../assets/creative-production.webp";
import emailMarketingWebp from "../../assets/email-marketing.webp";
import socialMediaMarketingWebp from "../../assets/social-media-marketing.webp";
import webDesignSeoWebp from "../../assets/web-design-seo.webp";
import ServiceCard from "../ui/ServiceCard";
import { v4 as uuidv4 } from 'uuid';

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
      className="bg-white sm:bg-secondary lg:rounded-t-[100px] overflow-hidden px-4 xs:px-8 py-12"
    >
      <div className="transition-all mx-auto max-w-7xl">
        <div className="hidden-section section-header text-center sm:text-left text-4xl xs:text-[38px] sm:text-6xl font-semibold pb-2 mb-12 text-black-main">
          Нашите услуги
        </div>
        <div className="flex flex-wrap gap-0 gap-y-4 md:gap-y-10 sm:gap-10 items-center justify-center">
          {servicesArr.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}
