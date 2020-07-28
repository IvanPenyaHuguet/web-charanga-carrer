import React from "react";
import ReactDOMServer from "react-dom/server";

/**
 * Svg con el icono indicativo del tipo de error
 * @param {String} type Tipo de error, varía el svg
 * @param {[String]} className Estilos del svg
 */
const TypeSvg = ({ type, className }) => {
  switch (type) {
    case "error":
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <polygon
            points="17.41 16 23.78 9.64 22.36 8.22 16 14.59 9.64 8.22 8.22 9.64 14.59 16 8.22 22.36 9.64 23.78 16 17.41 22.36 23.78 23.78 22.36 17.41 16"
            fill="#f44336"
            fillRule="evenodd"
          />
        </svg>
      );
    case "warn":
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <path
            d="M23,30h2v2H23V30Zm0-14h2V28H23V16Z"
            transform="translate(-8 -8)"
            fill="#ffc107"
            fillRule="evenodd"
          />
        </svg>
      );
    case "success":
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <polygon
            points="12.9 20.37 7.56 15.03 6.14 16.44 12.51 22.8 12.53 22.78 12.92 23.18 25.86 10.24 24.44 8.82 12.9 20.37"
            fill="#8bc34a"
            fillRule="evenodd"
          />
        </svg>
      );
    case "info":
      return (
        <svg className={className} viewBox="0 0 32 32">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <path
            d="M25,21v9H23V22H22V20h3v1Zm-2-5h2v2H23V16ZM21,30h6v2H21V30Z"
            transform="translate(-8 -8)"
            fill="#03a9f4"
            fillRule="evenodd"
          />
        </svg>
      );
  }
};

/**
 * Svg con el icono de cierre de la alerta
 * @param {[String]} className Estilos del svg
 */
const CloseSvg = (className) => (
  <svg {...className} viewBox="0 0 492 491.97">
    <path
      d="M300.19,246l184-184a27,27,0,0,0,0-38L468,7.87a27,27,0,0,0-38.06,0L246,191.82,62.05,7.87a27,27,0,0,0-38,0L7.87,24A26.94,26.94,0,0,0,7.87,62l184,184L7.87,430a27,27,0,0,0,0,38.06L24,484.13a27,27,0,0,0,38,0L246,300.18l184,184A26.68,26.68,0,0,0,449,492h0a26.72,26.72,0,0,0,19-7.85L484.14,468a27,27,0,0,0,0-38.05Z"
      transform="translate(0 -0.02)"
    />
  </svg>
);

/**
 * Componente que renderiza una alerta flotante en el centro de la pantalla.
 * @param {Object} message - Debe recibir al menos un array de mensajes y la colección de estilos indicada
 * 	@param {String} message.title Título que precede al array de mensajes
 * 	@param {[String]} message.data - Array de mensajes a mostrar
 * 	@param {String} message.type - Tipo de mensajes, puede tener los valores (error,warn,success o info)
 * 	@param {Number} [message.timer]  - Duración de la alerta en milisegundos
 */
const createAlert = ({ title, data, type, timer = 4500 }) => {
  if (!data) return false;

  const animationEnd = (element, timer) => {
    setTimeout(() => {
      element.classList.replace("fadeInDown", "fadeOutUp");
      element.addEventListener("animationend", () => element.remove());
      element.removeEventListener("animationend", () => element.remove());
    }, timer);
  };

  const messages = data.map((i, index) => <span key={index}>{i}</span>);
  const className = [
    "fadeInDown",
    "animationAlert",
    "containerAlert",
    `bg-alert-${type}`,
  ].join(" ");
  const main = document.getElementsByTagName("main")[0];

  //Render del html de la alarma
  const html = ReactDOMServer.renderToStaticMarkup(
    <div className={className}>
      <div className="iconWrapperAlert">
        <TypeSvg type={type} className="h-5" />
      </div>
      <div className="wrapperAlert">
        <span>{title}</span>
        {messages}
      </div>
      <a className="closeAlert hvr-icon-pulse-grow">
        <CloseSvg className="h-4 hvr-icon" />
      </a>
    </div>
  );

  main.insertAdjacentHTML("afterbegin", html);

  //Control de los event handlers para múltiples alertas, boton de cierre y cierre automático
  for (let item of main.getElementsByClassName(className)) {
    item.onanimationend = animationEnd(item, timer);
    item.children[2].onclick = () => animationEnd(item, 0);
  }
};

export default createAlert;
