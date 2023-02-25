import { VscClose } from "react-icons/vsc";
import clsx from "clsx";
import Brand from "../Brand";

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
          "z-50 fixed top-0 right-0 w-full sm:w-1/2 h-full bg-black-dark text-white transition-all ease-in-out duration-300",
          open ? "translate-x-0 " : "translate-x-full"
        )}
      >
        <div className="p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <Brand className='sm:hidden'/>
            <button className="text-4xl w-fit ml-auto" onClick={onClose}>
              <VscClose />
            </button>
          </div>

          <div className="h-[75vh] flex flex-col items-center justify-center gap-8 text-lg">
            {navLinks.map((link) => (
              <a
                key={link.navigateTo}
                className="relative group px-4 py-3 cursor-pointer text-center hover:text-gold-main"
                onClick={() => onNavLinkClick(link.navigateTo)}
              >
                <span className="transition-all text-white group-hover:text-gold-main">
                  {link.name}
                </span>
                <div className="absolute bottom-0 right-[50%] transition-all w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
                <div className="absolute bottom-0 left-[50%] transition-all w-0 group-hover:w-[50%] h-0.5 bg-gold-main"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
