import clsx from "clsx";

export default function SectionMain({ children, className, ...restProps }) {
  return (
    <div
      className={clsx("transition-all mx-auto max-w-7xl pb-8", className)}
      {...restProps}
    >
      {children}
    </div>
  );
}
