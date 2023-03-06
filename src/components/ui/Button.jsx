import clsx from "clsx";

export default function Button({
  size = "normal",
  fullWidth = false,
  className,
  children,
  ...restProps
}) {
  return (
    <button
      className={clsx(
        "bg-gold-main text-[#181A20] w-fit h-fit rounded-lg px-8 font-semibold text-base",
        className,
        size === "small" ? "py-1.5" : size === "normal" ? "py-2.5" : "py-4",
        fullWidth ? "w-full" : "w-fit"
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}
