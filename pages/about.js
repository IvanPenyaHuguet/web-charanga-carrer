import Carousel from "./../components/carousel/aboutCarousel";
import Accordion from "./../components/acordion/aboutAccordion";
import Container from "./../components/layouts/container";
import PoliticsFooter from "./../components/footer/politics";

const about = () => {
  return (
    <Container className="lg:w-4/5 mx-auto w-11/12">
      <article>
        <h2 className="text-center text-4xl text-logo3 font-bold py-6 h2-font">
          Nuestro grupo
        </h2>
        <Carousel />
        <section className="text-justify pt-6 text-lg font-medium">
          <p>
            Somos un pequeño grupo charanguero de músicos de estudiantes del
            conservatorio Alto Palancia, que hemos creado este grupo de charanga
            con tal de disfrutar y hacer que otros disfruten con nuestra música
            mientras terminamos la formación de músicos profesionales. Ahora
            bien, contamos con experiencia tocando en grupos reducidos y
            animando fiestas de todo tipo, ya sean fallas como fiestas taurinas.
          </p>
        </section>
        <section className="py-6">
          <Accordion />
        </section>
        <PoliticsFooter />
      </article>
    </Container>
  );
};
export default about;
