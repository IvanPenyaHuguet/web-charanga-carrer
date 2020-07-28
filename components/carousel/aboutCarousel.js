import Carousel from "./carousel";

const aboutCarousel = () => {
  const Images = [
    {
      original: "./img/logo.jpg",
      originalClass: "border-8",
      description: "Hello",
      sizes: "510x510",
    },
    { original: "./img/logo.jpg" },
    {
      original: "./img/logo.jpg",
      originalTitle: "hi",
    },
  ];

  return <Carousel images={Images} className="carousel" />;
};
export default aboutCarousel;
