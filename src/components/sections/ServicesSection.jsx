import branding from "../../assets/branding.webp";
import creativeProduction from "../../assets/creative-production.webp";
import emailMarketing from "../../assets/email-marketing.webp";
import socialMediaMarketing from "../../assets/social-media-marketing.webp";
import webDesignSeo from "../../assets/web-design-seo.webp";

const categoriesList = [
  {
    name: "Branding / Business Cards",
    icon: <img src={branding} alt="branding_webp" />,
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis dolor, libero sunt facere eligendi laudantium corrupti nemo repellendus labore, quia minima cum provident, consectetur beatae quo voluptatibus blanditiis molestiae illum voluptatum? Saepe quo facilis magnam, quod molestiae delectus nisi reiciendis?`,
  },
  {
    name: "Creative Production",
    icon: <img src={creativeProduction} alt="creative_production_webp" />,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis magni quae modi perspiciatis quos sed.",
  },
  {
    name: "Email Marketing",
    icon: <img src={emailMarketing} alt="email_marketing_webp" />,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam nobis omnis reprehenderit aspernatur asperiores fuga delectus voluptate. Odit nesciunt expedita, recusandae fugiat a temporibus? Repellat impedit ex architecto ",
  },
  {
    name: "Social Media Marketing",
    icon: <img src={socialMediaMarketing} alt="social_media_marketing_webp" />,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat asperiores tenetur explicabo mollitia, hic accusamus inventore nesciunt eos magnam voluptates! Impedit recusandae facere suscipit cupiditate.",
  },
  {
    name: "Web Design && SEO",
    icon: <img src={webDesignSeo} alt="web_design_seo_webp" />,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, perferendis minus ad voluptatem, maxime aperiam quas quisquam delectus aliquam, animi asperiores. Error officia laborum nesciunt quisquam adipisci impedit, ut placeat.",
  },
];

export default function ServicesSection() {
  return (
    <div className="bg-secondary rounded-t-[140px] overflow-hidden px-4">
      <div id="#services" className="mx-auto max-w-7xl py-14">
        <div className="flex flex-wrap gap-x-4 lg:gap-x-10 gap-4 md:gap-y-14 items-center justify-center">
          {categoriesList.map((category, index) => (
            <div
              key={index}
              className="transition-all gap-6 grid items-center justify-center p-8 bg-white rounded-md w-full h-[380px] max-w-[360px] lg:max-w-[400px] md:shadow-lg border border-transparent hover:border-gold-main"
            >
              <div className="w-20 h-20 pb-4 mx-auto">{category.icon}</div>
              <span className="w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
                {category.name}
              </span>
              <p className="text-sm min-h-[200px]">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
