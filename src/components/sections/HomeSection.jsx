import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function HomeSection() {
  return (
    <div
      id="home"
      className="bg-black-dark text-white h-screen grid items-center py-14 px-4 xs:px-8"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid space-y-16 items-center">
          <p className="text-[35px] sm:text-7xl leading-snug sm:leading-snug font-semibold">
            Evolve together.
            <br />
            <span className="text-gold-main">Digitally.</span>
          </p>

          <div className="flex flex-col gap-12">
            <p className="max-w-[500px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              autem doloribus quas accusantium dolores impedit deleniti
              explicabo enim, perferendis nostrum?
            </p>

            <NavLink to="/contact-us">
              <Button size="large">Свържи се с нас</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
