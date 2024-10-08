import { LazyLoadImage } from "react-lazy-load-image-component";

export default function EmployeeCard({ data = null }) {
  return (
    <div className="opacity-0 hidden-section employee-card p-6 bg-black-dark/20 transition-all duration-300 shadow-md  grid gap-8 rounded-2xl">
      <div className="overflow-hidden w-fit mx-auto p-4 pb-0 rounded-lg">
        <LazyLoadImage
          src={data?.img.src}
          alt={data?.img.alt}
          width="256px"
          height="256px"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="grid items-center gap-4 p-2">
        <div className="grid gap-2">
          <span className="text-headerText text-left text-lg font-semibold truncate ...">
            {data?.name}
          </span>
          <span className="text-gold-main text-left truncate ...">
            {data?.title}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xl transition-all duration-500">
          {data?.socials.map(({ id, url, icon }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="transition-all duration-300 rounded-full p-2 bg-[#1E2329] cursor-pointer text-primaryText hover:text-gold-main"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
