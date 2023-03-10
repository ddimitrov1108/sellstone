import { GiMoebiusTriangle } from "react-icons/gi";
import clsx from "clsx";

export default function Brand({ className, ...restProps }) {
  return (
    <div
      className={clsx("flex items-center font-semibold text-2xl", className)}
      {...restProps}
    >
      <GiMoebiusTriangle className="rotate-[45deg] text-gold-dark text-5xl" />
      <span className="text-gold-dark">SELL</span>
      <span className="text-headerText">STONE</span>
    </div>
  );
}
