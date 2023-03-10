import ErrorMessage from "./ErrorMessage";
import clsx from "clsx";
import Label from "./Label";

export default function TextField({
  label = "",
  fullWidth = false,
  className,
  field,
  type,
  form: { errors, touched },
  ...restProps
}) {
  return (
    <div className={clsx("py-3.5", fullWidth ? "w-full" : "w-fit")}>
      <Label labelFor={field.name}>{label}</Label>

      <input
        className={clsx(
          "px-4 py-3 border rounded-md w-full text-black-main disabled:bg-white/80",
          className,
          errors[field.name] && touched[field.name]
            ? " border-error-main focus:outline-error-main"
            : "border-black-light/20 focus:outline-gold-main"
        )}
        type={type}
        {...field}
        {...restProps}
      />

      {errors[field.name] && touched[field.name] && (
        <ErrorMessage msg={errors[field.name]} />
      )}
    </div>
  );
}
