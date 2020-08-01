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
    <Container className="mx-auto pb-4">
      <div className="flex flex-col justify-center align-center bg-cover banner-image">
        <p className="flex justify-center content-center items-center align-center uppercase text-6xl h-64 w-2/5 font-semibold text-black text-center">
          <span>Charanga al carrer</span>
        </p>
      </div>
    </Container>
  );
};

export default ImageBanner;
