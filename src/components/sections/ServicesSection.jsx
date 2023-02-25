import branding from "../../assets/branding.webp";
import creativeProduction from "../../assets/creative-production.webp";
import emailMarketing from "../../assets/email-marketing.webp";
import socialMediaMarketing from "../../assets/social-media-marketing.webp";
import webDesignSeo from "../../assets/web-design-seo.webp";

const categoriesList = [
  {
    name: "Branding / Business Cards",
    icon: <img src={branding} className="select-none" alt="branding_webp" />,
    description: "",
  },
  {
    name: "Creative Production",
    icon: <img src={creativeProduction} className="select-none" alt="creative_production_webp" />,
    description: "",
  },
  {
    name: "Email Marketing",
    icon: <img src={emailMarketing} className="select-none" alt="email_marketing_webp" />,
    description: "",
  },
  {
    name: "Social Media Marketing",
    icon: <img src={socialMediaMarketing} className="select-none" alt="social_media_marketing_webp" />,
    description: "",
  },
  {
    name: "Web Design && SEO",
    icon: <img src={webDesignSeo} className="select-none" alt="web_design_seo_webp" />,
    description: "",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-secondary md:rounded-t-[140px] overflow-hidden">
      <div id="#services" className="mx-auto max-w-7xl px-8 py-12">
        <div className="flex flex-wrap gap-0 md:gap-10 items-center justify-center">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="cursor-pointer transition-all gap-6 grid items-center justify-center md:p-8 bg-white rounded-md w-full min-h-[460px] md:max-w-[330px] lg:max-w-[360px] md:shadow-lg border border-transparent md:hover:border-gold-main"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-alternative p-4 mt-2">
                {category.icon}
              </div>
              <span className="w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
                {category.name}
              </span>
              <p className="min-h-[200px]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Expedita ullam nobis omnis reprehenderit aspernatur asperiores
                fuga delectus voluptate. Odit nesciunt expedita, recusandae
                fugiat a temporibus? Repellat impedit ex architecto
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
