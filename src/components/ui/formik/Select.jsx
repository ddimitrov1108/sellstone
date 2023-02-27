import clsx from "clsx";
import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";

export default function Select({
  label = "",
  options = [],
  fullWidth = false,
  className,
  field,
  form: { errors, touched },
  ...restProps
}) {
  return (
    <div
      className={clsx("py-3.5", fullWidth ? "w-full" : "w-fit")}
      {...restProps}
    >
      <div className="min-w-fit pb-1.5">
        <span className="min-w-fit text-sm">{label}</span>
      </div>

      <Field
        as="select"
        value={null}
        name={field.name}
        className={clsx(
          "px-4 py-3 focus:outline-gold-main focus-within:outline-gold-main border w-full rounded-md",
          className,
          errors[field.name] && touched[field.name]
            ? " border-error-main focus:outline-error-main"
            : "border-black-light/10 focus:outline-gold-main"
        )}
      >
        <option value="" selected hidden>Изберете категория</option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black-main">
            {option}
          </option>
        ))}
      </Field>

      {errors[field.name] && touched[field.name] && (
        <ErrorMessage msg={errors[field.name]} />
      )}
    </div>
  );
}
