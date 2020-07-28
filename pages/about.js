import createAlert from "./../components/layouts/alert";
import Carousel from "./../components/carousel/aboutCarousel.js";

const about = () => {
  return (
    <>
      <Carousel />
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
    </>
  );
};
export default about;
