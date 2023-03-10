import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Link({
  to = "/",
  text = "link",
  className,
  ...restProps
}) {
  return (
    <NavLink
      to={to}
      className={clsx("relative group px-4 py-3 cursor-pointer", className)}
      {...restProps}
    >
      <span className="transition-all text-headerText group-hover:text-gold-main ">
        {text}
      </span>
      <div className="absolute bottom-0 right-[50%] transition-all duration-300 w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
      <div className="absolute bottom-0 left-[50%] transition-all duration-300 w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
    </NavLink>
  );
}
