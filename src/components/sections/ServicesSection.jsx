import webDesignWebp from "../../assets/web-design.webp";
import graphicDesignWebp from "../../assets/graphic-design.webp";
import multimediaWebp from "../../assets/multimedia.webp";
import webSupportWebp from "../../assets/web-support.webp";
import socialMediaMarketingWebp from "../../assets/social-media-marketing.webp";
import webSeoWebp from "../../assets/web-seo.webp";
import contentMarketingWebp from "../../assets/content-marketing.webp";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ServiceCard from "../ServiceCard";
import { v4 as uuidv4 } from "uuid";

const servicesArr = [
  {
    id: uuidv4(),
    name: "Уеб Дизайн",
    img: { src: webDesignWebp, alt: "web-design.webp" },
    description:
      "Дизайнът не е само начина, по който сайтът изглежда, а и начина, по който работи. Ако имате нужда от уникален и печеливш уеб дизайн, вие сте на правилното място.",
  },
  {
    id: uuidv4(),
    name: "Графичен Дизайн",
    img: { src: graphicDesignWebp, alt: "graphic-design.webp" },
    description:
      "Всичко, от което се нуждаете, за да изградите корпоративната си идентичност е тук! Изработваме лого, визитни картички, брошури, плакати, флаери и всички необходими елементи за вашия бизнес.",
  },
  {
    id: uuidv4(),
    name: "Мултимедия",
    img: { src: multimediaWebp, alt: "multimedia.webp" },
    description:
      "Мултимедията е атрактивен похват за представяне на съдържание на аудиторията по удобен, достъпен и ангажиращ начин.",
  },
  {
    id: uuidv4(),
    name: "Уеб Поддръжка",
    img: { src: webSupportWebp, alt: "web-support.webp" },
    description:
      "Качествената поддръжка на уеб сайта Ви е от ключово значение за популярността и имиджа на бизнес Ви. Професионалното управление на сайта води до подобряването на структурата, съдържанието, оптимизацията и класирането в търсачките.",
  },
  {
    id: uuidv4(),
    name: "Маркетинг в Социалните Мрежи",
    img: { src: socialMediaMarketingWebp, alt: "social-media-marketing.webp" },
    description:
      "Социалните мрежи са най-използваният инструмент в онлайн пространството, както за лична облага, така и за професионални цели и нужди. Ще се погрижим вашият бизнес да придобие видимост в набор от социални мрежи.",
  },
  {
    id: uuidv4(),
    name: "Уеб SEO",
    img: { src: webSeoWebp, alt: "web-seo.webp" },
    description:
      "SEO е процес на оптимизация на вашия уебсайт, за да се увеличи неговата видимост и популярност в Google търсачката по съответната нисша. Вашият бизнес ще бъде по откриваем спрямо потребителските заявки за търсене.",
  },
  {
    id: uuidv4(),
    name: "Контент маркетинг",
    img: { src: contentMarketingWebp, alt: "content-marketing.webp" },
    description:
      "Неразделна част от фирмената идентичност е маркетингът на съдържанието. Контент маркетингът обобщава в себе си това, чрез което дефинирате бизнеса си, като обхваща текстове, изображения, видеа и всичко, което публикувате в онлайн пространството.",
  },
];

export default function ServicesSection() {
  return (
    <div
      id="services"
      className="round-top-on-entry round-bottom-on-entry bg-black-main px-4 mobile-l:px-8 py-12 mt-12"
    >
      <Section>
        <SectionHeader className="text-headerText text-center xl:text-left">
          Нашите услуги
        </SectionHeader>

        <div className="flex flex-wrap gap-10 items-stetch justify-center">
          {servicesArr.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
