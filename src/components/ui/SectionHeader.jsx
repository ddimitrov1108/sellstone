import clsx from "clsx";

export default function SectionHeader({ children, className }) {
  return (
    <div
      className={clsx(
        "hidden-section section-header text-center sm:text-left text-3xl xs:text-[38px] sm:text-6xl font-semibold pb-2 mb-12 text-black-main",
        className
      )}
    >
      {children}
    </div>
  );
}
