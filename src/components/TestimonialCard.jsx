import { LazyLoadImage } from "react-lazy-load-image-component";

export default function TestimonialCard({ data = null }) {
  return (
    <div className="w-full bg-black-dark rounded-lg mt-14 ">
      <div className="mx-auto border-2 w-32 h-32 flex overflow-hidden border-gold-light rounded-full -mt-24">
        <LazyLoadImage
          src={data?.img.src}
          alt={data?.img.alt}
          width="128px"
          height="128px"
          className="shadow-md mx-auto bg-black-main object-cover"
        />
      </div>

      <div className="text-center mt-4 min-h-[150px] grow z-30 text-headerText p-4 text-sm">
        {data?.description}
      </div>

      <div className="text-center text-headerText">
        <span className="font-semibold text-gold-main">{data?.name}</span>
      </div>
    </div>
  );
}
