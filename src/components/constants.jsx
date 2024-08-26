import webDesignWebp from "../assets/services/web-design.webp";
import graphicDesignWebp from "../assets/services/graphic-design.webp";
import multimediaWebp from "../assets/services/multimedia.webp";
import webSupportWebp from "../assets/services/web-support.webp";
import socialMediaMarketingWebp from "../assets/services/social-media-marketing.webp";
import webSeoWebp from "../assets/services/web-seo.webp";
import contentMarketingWebp from "../assets/services/content-marketing.webp";
import devinWebp from "../assets/sponsors/devin.webp";
import lukoilWebp from "../assets/sponsors/lukoil.webp";
import redbullWebp from "../assets/sponsors/redbull.webp";
import kauflandWebp from "../assets/sponsors/kaufland.webp";
import obbWebp from "../assets/sponsors/obb.webp";
import xellaWebp from "../assets/sponsors/xella.webp";
import testimonial1Webp from "../assets/testimonials/testimonial-1.webp";
import testimonial2Webp from "../assets/testimonials/testimonial-2.webp";
import testimonial3Webp from "../assets/testimonials/testimonial-3.webp";
import testimonial4Webp from "../assets/testimonials/testimonial-4.webp";
import testimonial5Webp from "../assets/testimonials/testimonial-5.webp";
import testimonial6Webp from "../assets/testimonials/testimonial-6.webp";
import userPfWebp from "../assets/user-pf.webp";
import addressWebp from "../assets/utils/address.webp";
import phoneWebp from "../assets/utils/phone.webp";
import emailWebp from "../assets/utils/email.webp";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

export const navLinks = [
  { id: uuidv4(), name: "Начало", href: "/" },
  { id: uuidv4(), name: "Услуги", href: "services" },
  { id: uuidv4(), name: "Партньори", href: "partners" },
  { id: uuidv4(), name: "Екип", href: "our-team" },
];

export const services = [
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

export const partners = [
  {
    id: uuidv4(),
    href: "http://www.devin-bg.com/en/",
    img: devinWebp,
    alt: "devin.webp",
  },
  {
    id: uuidv4(),
    href: "https://lukoil.bg/bg/",
    img: lukoilWebp,
    alt: "lukoil.webp",
  },
  {
    id: uuidv4(),
    href: "https://www.redbull.com/bg-bg",
    img: redbullWebp,
    alt: "redbull.webp",
  },
  {
    id: uuidv4(),
    href: "https://www.kaufland.bg/",
    img: kauflandWebp,
    alt: "kaufland.webp",
  },
  { id: uuidv4(), href: "https://www.ubb.bg/", img: obbWebp, alt: "obb.webp" },
  {
    id: uuidv4(),
    href: "https://www.xella.bg/",
    img: xellaWebp,
    alt: "xella.webp",
  },
];

export const testimonials = [
  {
    id: uuidv4(),
    name: "Яна Вълчева",
    img: { src: testimonial1Webp, alt: "testimonial-1.webp" },
    description:
      "Трябва да кажа, че бях поразена от резултатите, които постигнахме, работейки със Sellstone. Наистина имах чувството, че имат моите най-добри интереси в сърцето си.",
  },
  {
    id: uuidv4(),
    name: "Стоян Михайлов",
    img: { src: testimonial2Webp, alt: "testimonial-2.webp" },
    description:
      "Като собственик на малък бизнес не бях сигурен как ще протече едно сътрудничество с външна агенция, но за мое щастие си заслужаваше.Те винаги бяха на разположение, за да отговорят на въпросите ми и да предложат насоки.",
  },
  {
    id: uuidv4(),
    name: "Ясен Тодоров",
    img: { src: testimonial3Webp, alt: "testimonial-3.webp" },
    description:
      "Колебах се дали да работя с маркетингова агенция, но този екип ме накара да се чувствам удобно от самото начало.",
  },
  {
    id: uuidv4(),
    name: "Дарин Ангелов",
    img: { src: testimonial4Webp, alt: "testimonial-4.webp" },
    description:
      "Екипът им е не само знаещ и квалифициран, но и приятелски настроен и персонален. Отделиха време да опознаят нашия екип и нашия бизнес, което направи процеса на сътрудничество безпроблемен.",
  },
  {
    id: uuidv4(),
    name: "Александър Димитров",
    img: { src: testimonial5Webp, alt: "testimonial-5.webp" },
    description:
      "От момента, в който започнахме да работим с тази маркетингова агенция, знаех, че сме в добри ръце. Екипът им е страстен за това, което правят и това си личи в работата им.",
  },
  {
    id: uuidv4(),
    name: "Велизара Димова",
    img: { src: testimonial6Webp, alt: "testimonial-6.webp" },
    description:
      "Като нов собственик на бизнес не бях сигурна откъде да започна. Техният екип отдели време да изслуша моите идеи и ми помогна да изградя силно онлайн присъствие.",
  },
];

export const team = [
  {
    id: uuidv4(),
    img: {
      src: userPfWebp,
      alt: "project-manager.webp",
    },
    name: "Джем Асенов",
    title: "Project Manager",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: {
      src: userPfWebp,
      alt: "copywriter.webp",
    },

    name: "Виктор Димитров",
    title: "Copywriter",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
  {
    id: uuidv4(),
    img: {
      src: userPfWebp,
      alt: "media-creator.webp",
    },

    name: "Георги Тодоров",
    title: "Media Creator",
    socials: [
      {
        url: "https://www.instagram.com/",
        icon: <FaInstagram />,
      },
      {
        url: "https://www.linkedin.com/feed",
        icon: <FaLinkedinIn />,
      },
      { url: "https://twitter.com/", icon: <FaTwitter /> },
    ],
  },
];

export const contactUs = [
  {
    id: uuidv4(),
    name: "Address",
    text: ["София, Бизнес Парк"],
    img: { src: addressWebp, alt: "address.webp" },
  },
  {
    id: uuidv4(),
    name: "Phone",
    text: ["+359 878499321", "+359 886258552"],
    img: { src: phoneWebp, alt: "phone.webp" },
  },
  {
    id: uuidv4(),
    name: "Email",
    text: ["support@sellstone.eu"],
    img: { src: emailWebp, alt: "email.webp" },
  },
];

export const socials = [
  {
    id: uuidv4(),
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: <FaFacebookF />,
  },
  {
    id: uuidv4(),
    name: "Linkedin",
    href: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
  },
  {
    id: uuidv4(),
    name: "Twitter",
    href: "https://www.twitter.com/",
    icon: <FaTwitter />,
  },
];
