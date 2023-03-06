import webDesignWebp from "../../assets/web-design.webp";
import digitalMarketingWebp from "../../assets/digital-marketing.webp";
import graphicDesignWebp from "../../assets/graphic-design.webp";
import multimediaWebp from "../../assets/multimedia.webp";
import webSupportWebp from "../../assets/web-support.webp";
import socialMediaMarketingWebp from "../../assets/social-media-marketing.webp";
import webSeoWebp from "../../assets/web-seo.webp";
import contentMarketingWebp from "../../assets/content-marketing.webp";
import SectionHeader from "./components/SectionHeader";
import Section from "./components/Section";
import ServiceCard from "../ui/ServiceCard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { v4 as uuidv4 } from "uuid";

const servicesArr = [
  {
    id: uuidv4(),
    name: "Уеб Дизайн",
    icon: (
      <LazyLoadImage
        src={webDesignWebp}
        width="64px"
        height="64px"
        alt="web-design.webp"
      />
    ),
    description:
      "Дизайнът не е само начина, по който сайтът изглежда, а и начина, по който работи. Ако имате нужда от уникален и печеливш уеб дизайн, вие сте на правилното място.",
  },
  {
    id: uuidv4(),
    name: "Дигитален Маркетинг",
    icon: (
      <LazyLoadImage
        src={digitalMarketingWebp}
        width="64px"
        height="64px"
        alt="digital-marketing.webp"
      />
    ),
    description:
      "За да имате нужната онлайн видимост, трябва да се класирате сред първите резултати на търсенето в Google. Ние можем да ви помогнем да достигате успешно до вашите клиенти.",
  },
  {
    id: uuidv4(),
    name: "Графичен Дизайн",
    icon: (
      <LazyLoadImage
        src={graphicDesignWebp}
        width="64px"
        height="64px"
        alt="graphic-design.webp"
      />
    ),
    description:
      "Всичко, от което се нуждаете, за да изградите корпоративната си идентичност е тук! Изработваме лого, визитни картички, брошури, плакати, флаери и всички необходими елементи за вашия бизнес.",
  },
  {
    id: uuidv4(),
    name: "Мултимедия",
    icon: (
      <LazyLoadImage
        src={multimediaWebp}
        width="64px"
        height="64px"
        alt="multimedia.webp"
      />
    ),
    description:
      "Мултимедията е атрактивен похват за представяне на съдържание на аудиторията по удобен, достъпен и ангажиращ начин.",
  },
  {
    id: uuidv4(),
    name: "Уеб Поддръжка",
    icon: (
      <LazyLoadImage
        src={webSupportWebp}
        width="64px"
        height="64px"
        alt="web-support.webp"
      />
    ),
    description:
      "Качествената поддръжка на уеб сайта ви е от ключово значение за популярността и имиджа на бизнес ви. Професионалното управление на сайта води до подобряването на структурата, съдържанието, оптимизацията и класирането в търсачките.",
  },
  {
    id: uuidv4(),
    name: "Маркетинг в Социалните Мрежи",
    icon: (
      <LazyLoadImage
        src={socialMediaMarketingWebp}
        width="64px"
        height="64px"
        alt="social-media-marketing.webp"
      />
    ),
    description:
      "Качествената поддръжка на уеб сайта ви е от ключово значение за популярността и имиджа на бизнес ви. Професионалното управление на сайта води до подобряването на структурата, съдържанието, оптимизацията и класирането в търсачките.",
  },
  {
    id: uuidv4(),
    name: "Уеб SEO",
    icon: (
      <LazyLoadImage
        src={webSeoWebp}
        width="64px"
        height="64px"
        alt="web-seo.webp"
      />
    ),
    description:
      "Скоростта на уеб сайта е от голямо значение за търсачките и потребителите. След като ускорим сайта ви, вие незабавно ще усетите разликата. Ще ви предоставим доклад за състоянието преди и след това, за да сте сигурни в ползите от работата ни.",
  },
  {
    id: uuidv4(),
    name: "Контент маркетинг",
    icon: (
      <LazyLoadImage
        src={contentMarketingWebp}
        width="64px"
        height="64px"
        alt="content-marketing.webp"
      />
    ),
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
        <SectionHeader className="text-primaryHeaderText text-center xl:text-left">
          Нашите услуги
        </SectionHeader>

        <div className="flex flex-wrap gap-10 items-stetch justify-center">
          {servicesArr.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>
    </div>
  );
}
