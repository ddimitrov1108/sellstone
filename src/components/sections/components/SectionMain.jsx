import clsx from "clsx";

export default function SectionMain({ children, className, ...restProps }) {
  return (
    <div
      className={clsx("transition-all mx-auto max-w-7xl pb-14", className)}
      {...restProps}
    >
      {children}
    </div>
  );
}
