import branding from "../../assets/branding.webp";
import creativeProduction from "../../assets/creative-production.webp";
import emailMarketing from "../../assets/email-marketing.webp";
import socialMediaMarketing from "../../assets/social-media-marketing.webp";
import webDesignSeo from "../../assets/web-design-seo.webp";

const categoriesList = [
  {
    name: "Branding / Business Cards",
    icon: <img src={branding} alt="branding_webp" />,
  },
  {
    name: "Creative Production",
    icon: <img src={creativeProduction} alt="creative_production_webp" />,
  },
  {
    name: "Email Marketing",
    icon: <img src={emailMarketing} alt="email_marketing_webp" />,
  },
  {
    name: "Social Media Marketing",
    icon: (
      <img src={socialMediaMarketing} alt="social_media_marketing_webp" />
    ),
  },
  {
    name: "Web Design && SEO",
    icon: <img src={webDesignSeo} alt="web_design_seo_webp" />,
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-white md:rounded-t-[100px] lg:rounded-t-[140px] overflow-hidden">
      <div id="#services" className="mx-auto max-w-7xl py-14">
        <div className="flex flex-wrap gap-x-10 gap-y-14 items-center justify-center">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="gap-6 grid items-center justify-center p-8 bg-white rounded-md w-full max-w-[360px] lg:max-w-[400px] md:shadow-lg"
            >
              <div className="w-20 h-20 pb-4 mx-auto">{category.icon}</div>
              <span className="w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
                {category.name}
              </span>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Adipisci mollitia dicta iste sed minus architecto non debitis
                minima nostrum ad pariatur, odio quidem nam amet provident
                possimus perferendis autem? Labore porro consequatur explicabo
                maxime voluptates, quia eligendi dolores eos. Ipsam.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
