import Slider from "react-slick";
import Container from "./../layouts/container";
import Imagen1 from "./../../images/principal.jpeg";
import Imagen2 from "./../../images/walking.jpeg";
import Imagen3 from "./../../images/wall.jpeg";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";

class carousel extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      centerMode: true,
      swipeToSlide: true,
      lazyLoad: true,
      focusOnSelect: true,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      arrows: true,
      nextArrow: (
        <NextArrow className="transition duration-500 ease-in-out transform hover:translate-x-2 hover:scale-125" />
      ),
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Container cassName="" size="lg">
        <Slider {...settings} className="mx-auto">
          <div>
            <img src={Imagen1} alt="Charanga en el sol." className="px-2" />
          </div>
          <div>
            <img src={Imagen2} alt="Charanga en la calle." className="px-2" />
          </div>
          <div>
            <img src={Imagen3} alt="Imagen en el muro." className="px-2" />
          </div>
          <div>
            <img src={Imagen1} alt="Charanga en el sol." className="px-2" />
          </div>
          <div>
            <img src={Imagen2} alt="Charanga en la calle." className="px-2" />
          </div>
          <div>
            <img src={Imagen3} alt="Imagen en el muro." className="px-2" />
          </div>
        </Slider>
      </Container>
    );
  }
}
export default carousel;
