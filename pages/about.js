import createAlert from "./../components/layouts/alert";
import Carousel from "./../components/carousel/aboutCarousel";
import Accordion from "./../components/acordion/aboutAccordion";

const about = () => {
  return (
    <>
      <Carousel />
      <Accordion />
      <button
        className="button-new button--itzel mx-auto"
        type="submit"
        onClick={() =>
          createAlert({
            title: "Error en el registro",
            data: ["Ha habido algun problemilla"],
            type: "success",
          })
        }
      >
        <i className="button__icon icon-new fill-current"></i>
        <span>Envía</span>
      </button>
      <br />
    </>
  );
};
export default about;
