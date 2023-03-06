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
          "p-4 text-primaryHeaderText bg-black-dark/20 outline-none border rounded-lg w-full",
          className,
          errors[field.name] && touched[field.name]
            ? " border-error-main focus:outline-error-main"
            : "border-black-light focus:outline-gold-main"
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
