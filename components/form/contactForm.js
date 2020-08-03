import { useState } from "react";
import emailjs from "emailjs-com";
import { Formik, Form, ErrorMessage, Field } from "formik";
import getIP from "./../../lib/getIp";
import { useRouter } from "next/router";
import Container from "../layouts/container";
import LogoCorreo from "./../icons/correo";
import InputText from "./inputText";
import { user_id } from "./../../personal_info";
import validateForm from "../../lib/validateForm";
import createAlert from "./../layouts/alert";
import InputTextArea from "./inputTextArea";

/**
 * Función para cargar un loader cuando se envía el formulario
 * @param {boolean} isSubmitting Si está enviando el formulario es true
 */

const loader = (isSubmitting) => {
  if (isSubmitting == true) {
    return <div className="spinner"></div>;
  }
};
/**
 * Función del formulario
 * @param {function} param0 Muestra los términos de privacidad
 * @todo Animación de los input cuando pierden el focus para que los label vuelvan al sitio original
 */
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
          const user_ip = getIP();
          return emailjs
            .send(service_id, template_id, template_params, user_id, user_ip)
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
        {({ errors, handleChange, isSubmitting, touched }) => (
          <Form className="flex justify-center shadow-md rounded-lg mx-auto px-8 py-4 border-opacity-100 border-logo3 border-2 w-full lg:w-3/5 text-logo3 fadeInLeft">
            <div className="flex justify-around flex-col align-center content-center space-y-1">
              <h2 className="text-center text-3xl h2-font font-medium">
                ¡Contáctanos!
              </h2>
              <InputText
                name="name"
                label="Nombre *"
                onChange={handleChange}
                placeholder="Nombre"
                error={
                  errors.name && touched.name ? "error-input" : "no-error-input"
                }
              />
              <ErrorMessage
                className=""
                name="name"
                component="small"
                className="form-error-message"
              />
              <InputText
                name="phone"
                label="Teléfono"
                onChange={handleChange}
                placeholder="Teléfono"
                error={
                  errors.phone && touched.phone
                    ? "error-input"
                    : "no-error-input"
                }
              />
              <ErrorMessage
                name="phone"
                component="small"
                className="form-error-message"
              />
              <InputText
                name="email"
                label="Correo electrónico *"
                onChange={handleChange}
                placeholder="E-Mail"
                error={
                  errors.email && touched.email
                    ? "error-input"
                    : "no-error-input"
                }
              />
              <ErrorMessage
                name="email"
                component="small"
                className="form-error-message"
              />
              <InputTextArea
                onChange={handleChange}
                error={
                  errors.message && touched.message
                    ? "error-input"
                    : "no-error-input"
                }
              />
              <ErrorMessage
                name="message"
                component="small"
                className="form-error-message"
              />
              <div className="space-x-2">
                <Field type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                  He leído y aceptado la{" "}
                  <div
                    className="italic underline text-advise cursor-pointer inline"
                    onClick={() => onShowPrivacy()}
                  >
                    política de privacidad
                  </div>
                  .
                </label>
              </div>
              <ErrorMessage
                name="terms"
                component="small"
                className="form-error-message"
              />
              <button
                className="button-new button--itzel mx-auto"
                type="submit"
                disabled={isSubmitting}
              >
                {loader(isSubmitting)}
                <i className="button__icon icon-new fill-current">
                  <LogoCorreo />
                </i>
                <span>Enviar</span>
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
