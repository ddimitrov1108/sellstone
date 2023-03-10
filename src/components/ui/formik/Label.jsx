import clsx from "clsx";

export default function Label({ labelFor, children, className, ...restProps }) {
  return (
    <div className={clsx("min-w-fit pb-1.5", className)} {...restProps}>
      <label htmlFor={labelFor} className="min-w-fit text-sm text-headerText">{children}</label>
    </div>
  );
}
