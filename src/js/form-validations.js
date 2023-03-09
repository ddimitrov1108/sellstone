import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
  fullName: yup
    .string()
    .matches(/^[a-z ,.'-]+$/i, "Невалидно поле")
    .test("fullNameSplitCheck", "Име и Фамилия са задължителни", (value) => {
      console.log(value);
      return value.split(' ').length;
    })
    .max(40, "Максимум 40 символа")
    .required("Полето е задължително"),
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
