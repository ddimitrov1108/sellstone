import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ServiceCard({ data = null }) {
  return (
    <div className="bg-black-dark/20 flex flex-col gap-6 items-center justify-center hidden-section service-card select-none transition-all duration-300  p-6 rounded-2xl w-full md:max-w-[330px] lg:max-w-[330px]">
      <div className="mx-auto rounded-full p-4">
        <LazyLoadImage
          src={data?.img.src}
          alt={data?.img.alt}
          width="64px"
          height="64px"
        />
      </div>
      <span className="text-headerText w-fit mx-auto text-center font-semibold text-lg border-b-2 border-gold-main px-4 py-2">
        {data?.name}
      </span>
      <p className="grow text-center text-sm text-headerText">
        {data?.description}
      </p>
    </div>
  );
}
