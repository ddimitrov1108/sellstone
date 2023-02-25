export default function HomeSection() {
  return (
    <div className="bg-black-dark text-white h-screen grid items-center pt-10 px-4 md:px-8">
      <div className="w-full mx-auto max-w-7xl">
        <div className="grid space-y-16 items-center">
          <p className="text-[35px] xs:text-[38px] sm:text-7xl leading-snug sm:leading-snug xl:leading-snug font-semibold">
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

            <a
              href="#"
              className="bg-gold-main text-black-dark w-fit h-fit rounded-md px-12 py-4 font-semibold text-lg"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
