import brandingWebp from "../../assets/branding.webp";
import creativeProductionWebp from "../../assets/creative-production.webp";
import emailMarketingWebp from "../../assets/email-marketing.webp";
import socialMediaMarketingWebp from "../../assets/social-media-marketing.webp";
import webDesignSeoWebp from "../../assets/web-design-seo.webp";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ServiceCard from "../ui/ServiceCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

const servicesArr = [
  {
    id: uuidv4(),
    name: "Branding / Business Cards",
    icon: (
      <LazyLoadImage
        src={brandingWebp}
        width="64px"
        height="64px"
        alt="branding.webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Creative Production",
    icon: (
      <LazyLoadImage
        src={creativeProductionWebp}
        width="64px"
        height="64px"
        alt="creative_production.webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Email Marketing",
    icon: (
      <LazyLoadImage
        src={emailMarketingWebp}
        width="64px"
        height="64px"
        alt="email_marketing.webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Social Media Marketing",
    icon: (
      <LazyLoadImage
        src={socialMediaMarketingWebp}
        width="64px"
        height="64px"
        alt="social_media_marketing.webp"
      />
    ),
    description: "",
  },
  {
    id: uuidv4(),
    name: "Web Design & SEO",
    icon: (
      <LazyLoadImage
        src={webDesignSeoWebp}
        width="64px"
        height="64px"
        alt="web_design_seo.webp"
      />
    ),
    description: "",
  },
];

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="round-top-on-entry bg-white px-4 mobile-l:px-8 py-12 mt-12"
    >
      <Section>
        <SectionHeader className="text-center xl:text-left">
          Нашите услуги
        </SectionHeader>

        <div className="flex flex-wrap gap-10 items-center justify-center lg:justify-start">
          {servicesArr.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
