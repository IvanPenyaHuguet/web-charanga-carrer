import Link from "next/link";
import SocialNetworks from "./../../lib/socialNetworks";
import Container from "./../layouts/container";

const footerMobile = () => {
  return (
    <Container className="flex bg-logo1 justify-around self-center content-center items-center text-logo1d z-footer">
      {getLinks()}
    </Container>
  );
};
const getLinks = () => {
  return SocialNetworks.map((i, index) => (
    <Link key={index} href={i.href}>
      <a
        className="flex items-center justify-center px-3 py-2 space-x-2"
        alt={i.text}
      >
        <i className="fill-current">{i.icon}</i>
      </a>
    </Link>
  ));
};
export default footerMobile;
