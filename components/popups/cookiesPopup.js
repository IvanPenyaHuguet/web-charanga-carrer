import Popup from "./popup";
import Container from "./../layouts/container";

const privacyPopup = ({
  onShowCookies,
  onAcceptCookies,
  onDeclineCookies,
  cookied,
}) => {
  return (
    <Popup onClick={() => onShowCookies()}>
      <Container className="lg:p-10 mx-auto p-5">
        <article className="text-justify">
          <h2 className="text-center text-logo3 text-2xl pb-4">
            Política de cookies
          </h2>
          <section>
            <h3 className="text-xl">1. Información general</h3>
            <section className="pl-5 my-6">
              <p>
                Esta web se basa en la utilización de cookies para mejorar la
                experiencia del usuario. Las cookies son una herramienta que
                utilizan las aplicaciones web para almacenar cierta información
                sobre sus visitantes, esta información es utilizada
                posteriormente para mejorar la experiencia en la aplicación.
                <br />
                <br />
              </p>
              <p>
                Esta información puede incluir cosas como las páginas visitadas,
                fecha y hora de la visita, tiempo en la página. NO se puede
                extraer información personal ni información dentro del
                dispositivo del navegante ya que son gestionadas directamente
                por el navegador web (Chrome, Firefox, Edge...).
                <br />
              </p>
            </section>
          </section>
          <section>
            <h3 className="text-xl">2. Cookies utilizadas</h3>
            <section className="pl-5 my-6">
              <p>
                En función de la finalidad de las cookies, existen diferentes
                tipos, en esta web se utilizan:
                <br />
                <br />
              </p>
              <em className="font-bold text-xl pl-4 mt-8">Cookies técnicas</em>
              <br />
              <br />
              <p className="pl-4">
                Cookies imprescindibles para el correcto funcionamiento de la
                web y los servicios que ofrece, tales como mantener una sesión o
                controlar el acceso a la información.
                <br />
              </p>
              <p className="mt-6">
                <table className="w-full text-center">
                  <tr className="font-bold text-lg border-black border-solid border-b-2">
                    <td className="px-1">Nombre</td>
                    <td className="px-1">Titular</td>
                    <td className="px-1">Duración</td>
                    <td className="px-1">Finalidad</td>
                  </tr>
                  <tr>
                    <td>CookieConsent</td>
                    <td>Charanga al carrer</td>
                    <td>2 años</td>
                    <td>Guardas las preferencias de cookies</td>
                  </tr>
                </table>
                <br />
              </p>
              <em className="font-bold text-xl pl-4 mt-8">
                Cookies de análisis
              </em>
              <br />
              <br />
              <p className="pl-4">
                Cookies que de forma totalmente anónima permitem realizar
                métricas del sitio web para cuestiones de rendimiento, como
                conocer el número de visitas, el número de accesos a las
                diferentes páginas. Está totalmente prohibido recoger
                información de carácter personal en estas cookies.
                <br />
              </p>
              <p className="mt-6">
                <table className="w-full text-center">
                  <tr className="font-bold text-lg border-black border-solid border-b-2">
                    <td className="px-1">Nombre</td>
                    <td className="px-1">Titular</td>
                    <td className="px-1">Duración</td>
                    <td className="px-1">Finalidad</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google</td>
                    <td>2 años</td>
                    <td>Distinguir usuarios</td>
                  </tr>
                  <tr>
                    <td>_gid</td>
                    <td>Google</td>
                    <td>24 horas</td>
                    <td>Distinguir usuarios</td>
                  </tr>
                  <tr>
                    <td>_gat</td>
                    <td>Google</td>
                    <td>1 minuto</td>
                    <td>Limita el porcentaje de solcitudes</td>
                  </tr>
                </table>
              </p>
              <br />
              <p className="pl-4">
                Durante la realización de pruebas se puede modificar
                ocasionalmente la configuración de cookies y que no aparezcan de
                forma detallado en esta política. Es importante que sepas que en
                ningún caso estás cookies comprometerán a tu privacidad y que su
                duración será limitada y de forma provisional.
                <br />
              </p>
            </section>
            <section>
              <h3 className="text-xl">3. Opciones como usuario</h3>
              <section className="pl-5 my-6">
                <p>
                  Al navegar esta web se mostrará un aviso para aceptar o
                  configuras las cookies cumpliendo con la legislación vigente,
                  también puedes configurar las cookies utilizadas en esta
                  propia página si es la primera vez que la visitas.
                  <br />
                  <br />
                </p>
                <p>
                  Hay dos opciones actualmente, en el caso de rechazas las
                  cookies sólamente se utilizarán las cookies técnicas
                  necesarias para el funcionamiento. Por otro lado, en caso de
                  aceptarlas, recibirás la experiencia completa de la web
                  aceptando también las cookies de análisis de terceros.
                  <br />
                  <br />
                </p>
                <p>
                  En cualquier momento puedes consultar las cookie, ya que los
                  navegadores son completamente transparentes en el asunto.
                  Puedes además, consultar las cookies de cada web, configurar
                  que se te comunique cuando se quiera utilizar una cookies o
                  que rechace directamente las cookies.
                  <br />
                  <br />
                </p>
                <p>
                  En caso de realizarse algún cambio ne esta política de
                  cookies, se informará del cambioa los usuarios y se solicitará
                  de nuevo los consentimientos que se pudieran haber otorgado.
                </p>
              </section>
            </section>
          </section>
        </article>
      </Container>
      {cookied == null ? (
        <div className="w-full flex justify-around pb-10 lg:p-10 mx-auto p-5">
          <button
            className="border-solid border-logo3 text-logo3  mx-auto border-2 rounded w-1/5 mini-w-8 hover:bg-logo3 hover:text-logo2"
            onClick={() => onDeclineCookies()}
          >
            Rechazar
          </button>
          <button
            className="border-solid border-logo3 text-logo3 mx-auto font-bold border-2 rounded w-1/5 mini-w-8 hover:bg-logo3 hover:text-logo4"
            onClick={() => onAcceptCookies()}
          >
            Aceptar
          </button>
        </div>
      ) : (
        <div className="w-full flex justify-center pb-10">
          <button
            className="border-solid border-logo3 text-logo3 mx-auto border-2 rounded w-1/5 mini-w-8 hover:bg-logo3 hover:text-logo2"
            onClick={() => onShowCookies()}
          >
            Cerrar
          </button>
        </div>
      )}
    </Popup>
  );
};
export default privacyPopup;
