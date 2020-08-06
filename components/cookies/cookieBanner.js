import Container from "./../layouts/container";

const cookieBanner = ({ onAcceptClick, onDeclineClick, onCookiesClick }) => {
  return (
    <div className="cookie-banner">
      <Container className="flex justify-between content-center mx-8">
        <span className="text-justify self-center">
          Este sitio utiliza cookies para mejorar la experiencia de los
          usuarios. Puedes consultarlos en nuestra{" "}
          <div
            className="italic underline text-advise cursor-pointer inline font-semibold"
            onClick={() => onCookiesClick()}
          >
            política de cookies
          </div>
          .
        </span>
        <div className="flex flex-wrap justify-between w-2/6 lg:justify-end lg:space-x-4 content-center ml-6">
          <button
            onClick={() => onAcceptClick()}
            className="border-2 border-solid border-logo4 text-logo4 rounded-lg w-32 my-1 font-bold"
          >
            Aceptar
          </button>
          <button
            className="border-2 border-solid border-black text-black rounded-lg w-32 my-1"
            onClick={() => onCookiesClick()}
          >
            Configurar
          </button>
        </div>
      </Container>
    </div>
  );
};
export default cookieBanner;
