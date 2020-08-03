import { useState } from "react";
import { Field } from "formik";

/**
 * Función que devuelve el input de textarea para el formulario, donde se escribe al consulta
 * @param {function} onChange Que debe suceder cuando sucede un cambio en el texto
 *  @param {string} error Las clases de css que deben cargarse dependiendo si tiene error o no
 */
const inputTextArea = ({ onChange, error = "" }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex flex-wrap justify-bewtween content-center flex-row space-x-2">
      <label
        htmlFor="message"
        className={isFocus ? "lost-form-label" : "form-label"}
      >
        Escribe tu mensaje *
      </label>
      <Field
        component="textarea"
        name="message"
        id="message"
        rows="2"
        placeholder={isFocus ? "Pregúntanos..." : ""}
        className={`resize-none normal-input h-32 floating-label ${error}`}
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
      />
    </div>
  );
};
export default inputTextArea;
