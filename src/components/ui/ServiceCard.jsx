export default function ServiceCard({ data = null }) {
  return (
    <div className="bg-black-dark/20 flex flex-col gap-6 items-center justify-center hidden-section service-card select-none transition-all duration-300  p-6 rounded-lg w-full md:max-w-[330px] lg:max-w-[330px]">
      <div className="mx-auto rounded-full p-4">{data?.icon}</div>
      <span className="text-primaryHeaderText w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
        {data?.name}
      </span>
      <p className="grow text-center text-sm text-primaryHeaderText">
        {data?.description}
      </p>
    </div>
  );
}
