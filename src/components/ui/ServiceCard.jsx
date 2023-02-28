export default function ServiceCard({ service = null }) {
  return (
    <div className="hidden-section service-card select-none transition-all duration-300 gap-6 grid items-center justify-center sm:p-8 bg-white rounded-md w-full md:max-w-[330px] lg:max-w-[360px]">
      <div className="mx-auto rounded-full bg-alternative p-4">
        {service?.icon}
      </div>
      <span className="w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2 truncate ...">
        {service?.name}
      </span>
      <p className="text-sm md:text-base text-black-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam
        nobis omnis reprehenderit aspernatur asperiores fuga delectus voluptate.
        Odit nesciunt expedita, recusandae fugiat a temporibus? Repellat impedit
        ex architecto
      </p>
    </div>
  );
}
