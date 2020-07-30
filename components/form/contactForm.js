import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { useRouter } from "next/router";
import Container from "../layouts/container";
import LogoCorreo from "./../icons/correo";
import InputText from "./inputText";
import user_id from "./../../personal_info";
import validateForm from "../../lib/validateForm";
import createAlert from "./../layouts/alert";

const loader = (isSubmitting) => {
  if (isSubmitting == true) {
    return <div className="spinner"></div>;
  }
};

const form = ({ onShowPrivacy }) => {
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();
  if (submitted) {
    createAlert({
      title: "Gracias por contactar!",
      data: ["En breve nos pondremos en contacto"],
      type: "success",
    });
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
          terms: false,
        }}
        validate={(values) => {
          return validateForm(values);
        }}
        onSubmit={(values) => {
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
            .catch(() =>
              createAlert({
                title: "¡Ha habido un error!",
                data: ["Lo sentimos, inténtelo más tarde."],
                type: "error",
              })
            );
        }}
      >
        {({ errors, handleChange, isSubmitting }) => (
          <Form className="flex justify-center shadow-md rounded-lg mx-auto px-8 py-4 border-opacity-100 border-logo3 border-2 w-full lg:w-3/5 text-logo3 fadeInLeft">
            <div className="flex justify-around flex-col align-center content-center">
              <h2 className="text-center text-2xl">Contáctanos!</h2>
              <InputText
                name="name"
                label="Nombre"
                onChange={handleChange}
                placeholder="Nombre"
                error={errors.name ? "error-input" : ""}
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
                onChange={handleChange}
                placeholder="E-Mail"
                error={errors.email ? "error-input" : ""}
              />
              <ErrorMessage name="email" component="small" />
              <div className="flex flex-wrap justify-bewtween content-center flex-row lg:space-x-8 space-x-2">
                <label htmlFor="message" className="">
                  Escribe tu mensaje:
                </label>
                <Field
                  component="textarea"
                  name="message"
                  id="message"
                  rows="2"
                  placeholder="Pregúntanos..."
                  className={`border-solid resize-none border-logo3 border-2 rounded-lg border-opacity-50 w-full focus:border-4 focus:border-opacity-100 focus:shadow-outline h-32 ${
                    errors.message ? "error-input" : ""
                  }`}
                />
              </div>
              <ErrorMessage name="message" component="small" />
              <div className="space-x-2">
                <Field type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                  He leído y aceptado las{" "}
                  <div
                    className="italic underline text-advise cursor-pointer inline"
                    onClick={() => onShowPrivacy()}
                  >
                    condiciones de privacidad
                  </div>
                  .
                </label>
              </div>
              <ErrorMessage name="terms" component="small" />
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
              <span className="">* Estos campos son obligatorios.</span>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default form;
/*
                <input
                  name="message"
                  id="message"
                  type="textarea"
                  rows="20"
                  cols="50"
                  className={`border-solid border-logo3 border-2 rounded-lg border-opacity-50 w-full focus:border-4 focus:border-opacity-100 focus:shadow-outline h-32 ${
                    errors.message ? "error-input" : ""
                  }`}
                  onChange={handleChange}
                  placeholder="Pregúntanos..."
                />*/
