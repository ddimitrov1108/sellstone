import clsx from "clsx";

export default function Label({ children, className, ...restProps }) {
  return (
    <div className={clsx("min-w-fit pb-1.5", className)} {...restProps}>
      <label className="min-w-fit text-sm text-black-light">{children}</label>
    </div>
  );
}
