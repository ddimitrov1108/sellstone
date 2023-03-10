export default function ContactUsDetails({ data = null }) {
  return (
    <div className="hidden lg:flex flex-row justify-start lg:flex-col gap-4 items-center text-center">
      <div className="mx-auto rounded-full p-4 mt-2 min-w-fit">
        {data?.icon}
      </div>
      <div className="text-headerText font-semibold">{data?.name}</div>
      <div className="flex flex-col gap-1 text-[#B7BDC6] text-sm">
        {data?.text.map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
