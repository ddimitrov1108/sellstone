import clsx from "clsx";

export default function Label({ text, className, ...restProps }) {
  return (
    <div className={clsx("min-w-fit pb-1.5", className)} {...restProps}>
      <span className="min-w-fit text-sm">{text}</span>
    </div>
  );
}
