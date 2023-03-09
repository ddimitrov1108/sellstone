import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { contactUsSchema } from "../../js/form-validations";
import TextField from "../ui/formik/TextField";
import TextArea from "../ui/formik/TextArea";
import Button from "../ui/Button";
import Select from "../ui/formik/Select";
import successWebp from "../../assets/success.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const servicesArr = [
  "Уеб Дизайн",
  "Графичен Дизайн",
  "Мултимедия",
  "Уеб Поддръжка",
  "Маркетинг в Социалните Мрежи",
  "Уеб SEO",
  "Контент маркетинг",
];

export default function ContactUsForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formLoading, setFormLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState("");

  const submitHandler = async (values) => {
    setFormLoading(true);
    setFormError("");

    if (!executeRecaptcha) {
      setFormError("Execute recaptcha not yet available");
      setFormLoading(false);
      return;
    }

    const token = await executeRecaptcha();

    if (token) {
      let form = new FormData();
      form.append("fullName", values.fullName);
      form.append("email", values.email);
      form.append("phoneNumber", values.phoneNumber);
      form.append("categoryType", servicesArr.indexOf(values.categoryType));
      form.append("description", values.description);
      form.append("token", token);

      await axios
        .post("/mailer.php", form, {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        })
        .then(() => {
          setFormLoading(false);
          setFormSuccess(true);
        })
        .catch((err) => {
          console.log(err);
          setFormLoading(false);
          setFormError("Не успяхме да изпратим вашето съобщение.");
        });
    } else {
      setFormError("You must confirm you are not a robot");
    }

    values.fullName = "";
    values.email = "";
    values.phoneNumber = "";
    values.categoryType = "";
    values.description = "";
  };

  return !formLoading && formSuccess ? (
    <div className="w-full grid justify-center items-center p-4 text-center">
      <LazyLoadImage
        src={successWebp}
        width="64"
        height="64"
        alt="success.webp"
        className="mx-auto"
      />
      <div className="text-lg mt-8 text-primaryHeaderText">
        Вашето запитване беше изпратено успешно!
      </div>

      <div className="mt-2 text-[#B7BDC6]">
        Ще се свържем с Вас в най-кратък срок
      </div>

      <Button
        onClick={() => setFormSuccess(false)}
        className="mx-auto mt-8"
        aria-label="Изпрати ново запитване"
      >
        Изпрати ново запитване
      </Button>
    </div>
  ) : (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        phoneNumber: "",
        categoryType: "",
        description: "",
      }}
      validationSchema={contactUsSchema}
      onSubmit={submitHandler}
    >
      <Form>
        {formError && (
          <div className="mb-4 px-2 py-4 text-error-main">{formError}</div>
        )}
        <div className="flex flex-col md:flex-row justify-between md:gap-x-10">
          <Field
            id="fullName"
            name="fullName"
            type="text"
            label="Вашите Имена"
            placeholder="D. Dimitrov"
            maxLength={40}
            component={TextField}
            disabled={formLoading}
            fullWidth
          />

          <Field
            id="email"
            name="email"
            type="email"
            label="Имейл Адрес"
            placeholder="name@address.com"
            maxLength={60}
            component={TextField}
            disabled={formLoading}
            fullWidth
          />
        </div>

        <div className="flex flex-col md:flex-row justify-between md:gap-x-10">
          <Field
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            label="Телефон"
            placeholder="+359..."
            maxLength={32}
            component={TextField}
            disabled={formLoading}
            fullWidth
          />

          <Field
            id="categoryType"
            name="categoryType"
            type="select"
            label="Услуга"
            hiddenOptionText="Изберете категория"
            options={servicesArr}
            component={Select}
            fullWidth
          />
        </div>

        <Field
          id="description"
          name="description"
          label="Допълнителни пояснения и въпроси"
          component={TextArea}
          rows={6}
          disabled={formLoading}
          fullWidth
        />

        <div className="flex flex-col md:flex-row items-center justify-between">
          <Button
            type="submit"
            className="mt-5 md:mt-0 flex justify-center md:w-fit ml-auto"
            aria-label="изпрати"
            disabled={formLoading}
            fullWidth
          >
            Изпрати
          </Button>
        </div>
      </Form>
    </Formik>
  );
}
