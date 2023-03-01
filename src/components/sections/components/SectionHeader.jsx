import clsx from "clsx";

export default function SectionHeader({ children, className }) {
  return (
    <h1
      className={clsx(
        "section-header text-center text-3xl sm:text-5xl font-semibold pb-2 mb-12",
        className
      )}
    >
      {children}
    </h1>
  );
}
