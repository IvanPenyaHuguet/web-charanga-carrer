import React from "react";
import Container from "./../layouts/container";
import FondoWeb from "./../../images/fondoweb.jpg";

const ImageBanner = () => {
  return (
    <Container className="mx-auto pb-4">
      <img src={FondoWeb} alt="Banner charanga" className="w-full h-auto" />
    </Container>
  );
};

export default ImageBanner;
