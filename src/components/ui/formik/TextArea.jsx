import clsx from "clsx";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

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
      <Label labelFor={field.name}>{label}</Label>

      <textarea
        className={clsx(
          "p-4 focus:outline-gold-main border w-full rounded-md disabled:bg-white/80",
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
