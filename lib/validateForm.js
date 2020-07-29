import validator from "validator";

const validateForm = (values) => {
  const errors = {};
  if (validator.isEmpty(values.email)) {
    errors.email = "Correo obligatorio.";
  } else if (!validator.isEmail(values.email)) {
    errors.email = "Correo no válido.";
  }
  if (
    !validator.isEmpty(values.phone) &&
    !validator.isMobilePhone(values.phone, "es-ES")
  ) {
    errors.phone = "Teléfono no válido.";
  }
  if (validator.isEmpty(values.name)) {
    errors.name = "Necesitamos tu nombre.";
  }
  if (validator.isEmpty(values.message)) {
    errors.message = "Escríbenos tu consulta.";
  }
  if (values.terms === false) {
    errors.terms = "Es necesario aceptar las condiciones.";
  }
  return errors;
};
export default validateForm;
