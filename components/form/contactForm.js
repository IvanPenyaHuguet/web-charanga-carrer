import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Container from "../layouts/container";
import LogoCorreo from "./../icons/correo";
import InputText from "./inputText";
import user_id from "./../../personal_info";
import validateForm from "../../lib/validateForm";

const loader = (isSubmitting) => {
  if (isSubmitting == true) {
    return <div className="spinner"></div>;
  }
};

const form = () => {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  if (submitted) {
    router.push("/");
  }
  return (
    <Container className="max-w-screen-sm lg:py-6 lg:px-10 md:py-6 md:px-4 py-4 px-2">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          message: "",
        }}
        validate={(values) => {
          return validateForm(values);
        }}
        onSubmit={(values, { setFieldError }) => {
          const template_params = {
            from_name: values.name,
            message_html: values.message,
            from_phone: values.phone,
            from_email: values.email,
          };
          const service_id = "default_service";
          const template_id = "template_bICmePU9";
          return emailjs
            .send(service_id, template_id, template_params, user_id)
            .then(() => {
              setSubmitted(true);
            })
            .catch(() => {
              setFieldError("phone", "Este número no es válido");
            });
        }}
      >
        {({ errors, handleChange, isSubmitting }) => (
          <Form className="flex justify-center shadow-md rounded-lg mx-auto px-8 py-4 border-opacity-100 border-logo3 border-2 w-full lg:w-3/5 text-logo3">
            <div className="flex justify-around flex-col align-center content-center">
              <h2 className="text-center text-2xl">Contáctanos!</h2>
              <InputText
                name="name"
                label="Nombre"
                onChange={handleChange}
                placeholder="Nombre"
                error={errors.name ? " error-input" : ""}
              />
              <ErrorMessage className="" name="name" component="small" />
              <InputText
                name="phone"
                label="Teléfono"
                onChange={handleChange}
                placeholder="Teléfono"
                error={errors.phone ? "error-input" : ""}
              />
              <ErrorMessage name="phone" component="small" />
              <InputText
                name="email"
                label="Correo electrónico"
                type="text"
                onChange={handleChange}
                placeholder="E-Mail"
                error={errors.email ? "error-input" : ""}
              />
              <ErrorMessage name="email" component="small" />
              <InputText
                name="message"
                label="Escribe tu mensaje"
                type="text"
                onChange={handleChange}
                placeholder="Pregúntanos..."
                error={errors.message ? "error-input" : ""}
              />
              <ErrorMessage name="message" component="small" />

              <button
                className="button-new button--itzel mx-auto"
                type="submit"
                disabled={isSubmitting}
              >
                {loader(isSubmitting)}
                <i className="button__icon icon-new fill-current">
                  <LogoCorreo />
                </i>
                <span>Envía</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default form;
