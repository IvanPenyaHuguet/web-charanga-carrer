import Carousel from "./../components/carousel/aboutCarousel";
import Accordion from "./../components/acordion/aboutAccordion";
import Container from "./../components/layouts/container";
import { useState } from "react";
import PrivacyPopup from "../components/popups/privacyPopup";

const about = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const onShowPrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
  const [showCookies, setShowCookies] = useState(false);
  const onShowCookies = () => {
    setShowCookies(!showCookies);
  };
  return (
    <Container className="lg:w-4/5 mx-auto w-11/12">
      <article>
        <h2 className="text-center text-4xl text-logo3 font-bold py-6">
          ¿Qué podemos decir sobre nosotros?
        </h2>
        <Carousel />
        <section>
          <p>
            Somos un pequeño grupo charanguero de músicos de estudiantes del
            conservatorio alto palancia, que hemos creado este grupo de charanga
            con tal de disfruta y hacer que otros disfruten con nuestra música
            mientras terminamos la formación de músicos profesionales. Ahora
            bien, contamos con experiencia tocando en grupos reducidos y
            animando fiestas de todo tipo, ya sean fallas como fiestas taurinas.
          </p>
        </section>
        <section className="py-6">
          <Accordion />
        </section>
        <section className="pb-16">
          {showPrivacy ? (
            <PrivacyPopup onShowPrivacy={() => onShowPrivacy()} />
          ) : null}
          <span>
            Consulte además nuestra{" "}
            <div
              className="italic underline text-advise cursor-pointer inline"
              onClick={() => onShowPrivacy()}
            >
              política de privacidad
            </div>{" "}
            y nuestra{" "}
            <div
              className="italic underline text-advise cursor-pointer inline"
              onClick={() => {}}
            >
              política de cookies
            </div>
            .
          </span>
        </section>
      </article>
    </Container>
  );
};
export default about;
