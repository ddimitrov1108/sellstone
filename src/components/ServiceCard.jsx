export default function ServiceCard({ service = null }) {
  return (
    <div className="service-card select-none transition-all gap-6 grid items-center justify-center md:p-8 bg-white rounded-md w-full min-h-[460px] md:max-w-[330px] lg:max-w-[360px] md:shadow-lg border border-transparent md:hover:border-gold-main">
      <div className="w-24 h-24 mx-auto rounded-full bg-alternative p-4 mt-2">
        {service?.icon}
      </div>
      <span className="w-fit mx-auto text-center truncate ... font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
        {service?.name}
      </span>
      <p className="min-h-[200px] text-black-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita ullam
        nobis omnis reprehenderit aspernatur asperiores fuga delectus voluptate.
        Odit nesciunt expedita, recusandae fugiat a temporibus? Repellat impedit
        ex architecto
      </p>
    </div>
  );
}
