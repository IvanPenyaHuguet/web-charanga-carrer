import Slider from "react-slick";
import Container from "./../layouts/container";
import Logo from "./../../images/logo.jpg";
import NextArrow from "./nextArrow";
import PrevArrow from "./prevArrow";

class carousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
        <Slider {...settings} className="w-1/2 mx-auto">
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
          <div>
            <img src={Logo} alt="Wow" className="h-20" />
          </div>
        </Slider>
      </Container>
    );
  }
}
export default carousel;
