import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/[\p{Letter}\p{Mark}\s-]+/gu, "Невалидно поле")
    .max(40, "Максимум 40 символа")
    .required("Полето е задължително")
    .trim(),
  email: yup
    .string()
    .email("Невалидно поле")
    .matches(/^(?!.*@[^,]*,)/, "Невалидно поле")
    .max(60, "Максимум 60 символа")
    .required("Полето е задължително"),
  phoneNumber: yup
    .string()
    .matches(
      /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,7}$/,
      "Невалидно поле"
    )
    .max(32, "Максимум 32 символа")
    .required("Полето е задължително"),
  categoryType: yup.string().required("Полето е задължително"),
  description: yup.string().required("Полето е задължително").max(1024),
});
