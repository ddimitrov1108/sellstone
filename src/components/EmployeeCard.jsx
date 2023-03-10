import { LazyLoadImage } from "react-lazy-load-image-component";

export default function EmployeeCard({ data = null }) {
  return (
    <div className="opacity-0 hidden-section employee-card p-6 bg-black-dark/20 transition-all duration-300 shadow-md  grid gap-8 rounded-lg">
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
          {data?.socials.map(({ url, icon }) => (
            <div key={url} className="p-2 rounded-full bg-[#1E2329] group cursor-pointer">
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="transition-all duration-300 rounded-full text-primaryText group-hover:text-gold-main"
              >
                {icon}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
