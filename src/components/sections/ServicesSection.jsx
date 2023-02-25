import branding from "../../assets/branding.webp";
import creativeProduction from "../../assets/creative-production.webp";
import emailMarketing from "../../assets/email-marketing.webp";
import socialMediaMarketing from "../../assets/social-media-marketing.webp";
import webDesignSeo from "../../assets/web-design-seo.webp";
import ServiceCard from "../ServiceCard";

const servicesArr = [
  {
    name: "Branding / Business Cards",
    icon: <img src={branding} alt="branding_webp" />,
    description: "",
  },
  {
    name: "Creative Production",
    icon: <img src={creativeProduction} alt="creative_production_webp" />,
    description: "",
  },
  {
    name: "Email Marketing",
    icon: <img src={emailMarketing} alt="email_marketing_webp" />,
    description: "",
  },
  {
    name: "Social Media Marketing",
    icon: <img src={socialMediaMarketing} alt="social_media_marketing_webp" />,
    description: "",
  },
  {
    name: "Web Design & SEO",
    icon: <img src={webDesignSeo} alt="web_design_seo_webp" />,
    description: "",
  },
];

export default function ServicesSection() {
  return (
    <div id="services" className="bg-secondary lg:rounded-t-[140px] overflow-hidden px-4 xs:px-8 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-0 md:gap-10 items-center justify-center">
          {servicesArr.map((service, index) => (
            <ServiceCard key={index} service={service}/>
          ))}
        </div>
      </div>
    </div>
  );
}
