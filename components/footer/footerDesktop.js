import Link from "next/link";
import SocialNetworks from "../../lib/socialNetworks";
import Container from "../layouts/container";

const footerDesktop = () => {
  return (
    <Container className="flex bg-logo1 justify-around self-center content-center items-center text-logo1d">
      <span className="">Síguenos en nuestras redes: </span>
      {getLinks()}
    </Container>
  );
};
const getLinks = () => {
  return SocialNetworks.map((i, index) => (
    <Link key={index} href={i.href}>
      <a
        className="flex items-center justify-center px-3 py-2 space-x-2 transition duration-500 ease-in-out transform hover:scale-125"
        alt={i.text}
      >
        <i className="fill-current">{i.icon}</i>
        <span>{i.text}</span>
      </a>
    </Link>
  ));
};
export default footerDesktop;
