import React from "react";
import Container from "./../layouts/container";
//import Logo from '../icons/logodesktop';

/*const ImageBanner = ({ children = Default() }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/img/fondoBanner.jpg')",
        height: "10rem",
        width: "100%",
        backgroundPositionY: "0",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};*/
const ImageBanner = () => {
  return (
    <Container className="mx-auto py-4">
      <div className="flex flex-col justify-start align-center pt-5 bg-cover h-40 banner-image">
        <p className="flex flex-col justify-center align-center uppercase text-6xl font-semibold text-black text-center">
          <span>Charanga al carrer</span>
        </p>
      </div>
    </Container>
  );
};

export default ImageBanner;
