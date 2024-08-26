import Section from "../sections/components/Section";
import Brand from "../ui/Brand";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";
import { contactUs, socials } from "../constants";

export default function FooterNavigation() {
  return (
    <div className="bg-black-dark px-4 mobile-l:px-8 py-10 md:py-16">
      <Section>
        <div className="flex flex-wrap gap-16">
          <div className="grid gap-8">
            <Brand />
            <p className="text-sm max-w-[420px] text-primaryText">
              За да имате нужната видимост в онлайн пространството Ви трябва
              правилния маркетинг специалист. Ние ще Ви помогнем да достигнете
              успешно до вашите клиенти.
            </p>

            <div className="mt-8 flex gap-2">
              {socials.map(({ id, name, href, icon }) => (
                <a
                  key={id}
                  href={href}
                  title={name}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg text-xl text-headerText hover:text-gold-main transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-headerText">Навигация</span>
            <div className="grid gap-2 text-primaryText text-sm">
              {navLinks.map(({ id, name, href }) => (
                <NavLink key={id} to={href} className="hover:text-gold-main">
                  {name}
                </NavLink>
              ))}
            </div>
          </div>

          <div className="grid w-full md:max-w-[240px] gap-2">
            <span className="text-2xl text-headerText">Адрес</span>
            <div className="grid gap-2">
              {contactUs.map(({ id, name, text, icon }) => (
                <div
                  key={id}
                  title={name}
                  className="min-w-fit flex items-start gap-2 text-primaryText"
                >
                  <div className="text-base">{icon}</div>
                  <div className="flex flex-col gap-1 text-[#B7BDC6] text-sm">
                    {text.map((t, i) => (
                      <span key={i} className="text-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
