import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="bg-black-dark h-screen grid items-center py-14 px-4 mobile-l:px-8"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid space-y-12 items-center">
          <h1 className="text-[35px] mobile-m:text-[42px] mobile-l:text-5xl sm:text-6xl md:text-7xl xl:text-8xl leading-snug mobile-m:leading-snug mobile-l:leading-snug sm:leading-snug md:leading-snug xl:leading-snug font-semibold text-primaryHeaderText">
            Evolve together.
            <br /> 
            <span className="text-gold-main">Digitally.</span>
          </h1>

          <div className="flex flex-col gap-12">
            <p className="max-w-[500px] text-primaryHeaderText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              autem doloribus quas accusantium dolores impedit deleniti
              explicabo enim, perferendis nostrum?
            </p>

            <NavLink to="/contact-us" className="max-w-fit">
              <Button size="large" aria-label="Свържи се с нас">
                Свържи се с нас
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
