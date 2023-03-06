import { VscClose } from "react-icons/vsc";
import Brand from "../ui/Brand";
import Link from "../ui/Link";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function MobileNavigation({
  navLinks = [],
  open,
  onNavLinkClick,
  onClose,
  ...restProps
}) {
  return (
    <div className={clsx("lg:hidden z-50 w-full h-full")} {...restProps}>
      <div
        onClick={onClose}
        className={clsx(
          "z-50 transition-all fixed top-0 right-0 left-0 bottom-0 sm:backdrop-blur-sm bg-black-main/60",
          open ? "block" : "hidden"
        )}
      ></div>
      <div
        className={clsx(
          "z-50 fixed top-0 right-0 w-full sm:w-1/2 h-full bg-black-dark transition-all ease-in-out duration-300",
          open ? "translate-x-0 " : "translate-x-full"
        )}
      >
        <div className="p-6 grid">
          <div className="flex items-center justify-between">
            <Brand className="sm:hidden" />
            <button
              aria-label="Затвори меню"
              className="text-4xl w-fit ml-auto text-primaryHeaderText hover:text-gold-main transition-all"
              onClick={onClose}
            >
              <VscClose />
            </button>
          </div>

          <nav className="h-[80vh] flex flex-col items-center justify-center gap-4 text-lg">
            {navLinks.map(({ id, name, href }) => (
              <Link key={id} to={href} text={name} onClick={onNavLinkClick} />
            ))}
            <NavLink
              to={"/contact-us"}
              className="bg-gold-main !text-black-main px-4 py-3 rounded-lg font-semibold"
            >
              Свържи се с нас
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}
