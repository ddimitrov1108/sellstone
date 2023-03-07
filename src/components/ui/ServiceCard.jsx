export default function ServiceCard({ service = null }) {
  return (
    <div className="bg-black-dark/20 flex flex-col gap-6 items-center justify-center hidden-section service-card select-none transition-all duration-300  p-6 rounded-lg w-full md:max-w-[330px] lg:max-w-[330px]">
      <div className="mx-auto rounded-full p-4">{service.icon}</div>
      <span className="text-primaryHeaderText w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
        {service.name}
      </span>
      <p className="grow text-sm text-primaryHeaderText">
        {service.description}
      </p>
    </div>
  );
}
