import clsx from "clsx";
import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";
import Label from "./Label";

export default function Select({
  label = "",
  options = [],
  hiddenOptionText = "",
  fullWidth = false,
  className,
  field,
  form: { errors, touched },
  ...restProps
}) {
  return (
    <div className={clsx("py-3.5", fullWidth ? "w-full" : "w-fit")}>
      <Label labelFor={field.name}>{label}</Label>

      <Field
        as="select"
        value={field.value}
        name={field.name}
        className={clsx(
          "px-4 py-3 text-primaryHeaderText bg-black-dark/20 outline-none border rounded-lg w-full",
          className,
          errors[field.name] && touched[field.name]
            ? " border-error-main focus:outline-error-main"
            : "border-black-light focus:outline-gold-main"
        )}
        {...restProps}
      >
        <option value="" hidden>
          {hiddenOptionText}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option} className="text-black-light">
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
