import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { contactUsSchema } from "../../js/form-validations";
import TextField from "../ui/formik/TextField";
import TextArea from "../ui/formik/TextArea";
import Button from "../ui/Button";
import Select from "../ui/formik/Select";

const servicesArr = [
  "Branding / Business Cards",
  "Creative Production",
  "Email Marketing",
  "Social Media Marketing",
  "Web Design & SEO",
];

export default function ContactUsForm() {
  const [formLoading, setFormLoading] = useState(false);

  const submitHandler = (values) => {
    alert("check console");
    console.log(values);
  };

  return (
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
            maxLength={12}
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

        <Button
          type="submit"
          className="flex justify-center md:w-fit ml-auto"
          aria-label="изпрати"
          disabled={formLoading}
          fullWidth
        >
          Изпрати
        </Button>
      </Form>
    </Formik>
  );
}
