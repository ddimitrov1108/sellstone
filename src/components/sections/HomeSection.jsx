import Button from "../ui/Button";
import { scrollSectionIntoView } from "../../js/scrollIntoView";

export default function HomeSection() {
  const buttonClickHandler = () => scrollSectionIntoView("contact-us")

  return (
    <div
      id="home"
      className="bg-black-dark text-white h-screen grid items-center py-14 px-4 xs:px-8"
    >
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid space-y-16 items-center">
          <p className="text-[35px] xs:text-[38px] sm:text-7xl leading-snug sm:leading-snug font-semibold">
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

            <Button onClick={buttonClickHandler}>Свържи се с нас</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
