import clsx from "clsx";

export default function SectionHeader({ children, className, ...restProps }) {
  return (
    <h1
      className={clsx(
        "text-headerText section-header text-3xl sm:text-5xl font-semibold pb-2 mb-12",
        className
      )}
      {...restProps}
    >
      {children}
    </h1>
  );
}
