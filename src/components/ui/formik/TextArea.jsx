import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";

export default function TextArea({
  label = "",
  fullWidth = false,
  className,
  field,
  form: { errors, touched },
  ...restProps
}) {
  return (
    <div className={clsx("py-3.5", fullWidth ? "w-full" : "w-fit")}>
      <div className="min-w-fit pb-1.5">
        <span className="min-w-fit text-sm">{label}</span>
      </div>

      <textarea
        className={clsx(
          "p-4 focus:outline-gold-main border w-full rounded-md",
          className,
          errors[field.name] && touched[field.name]
            ? " border-error-main focus:outline-error-main"
            : "border-black-light/10 focus:outline-gold-main"
        )}
        {...field}
        {...restProps}
      ></textarea>

      {errors[field.name] && touched[field.name] && (
        <ErrorMessage msg={errors[field.name]} />
      )}
    </div>
  );
}
