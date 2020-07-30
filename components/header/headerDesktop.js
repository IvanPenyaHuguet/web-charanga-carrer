import Nav from "./navDesktop";
import Container from "../layouts/container";
import Logo from "../icons/iconDesktop";
import Link from "next/link";

/**
 * @todo
 * Header for desktop versions (md,lg)
 * @returns {React.Component} Header desktop
 */
const HeaderDesktop = () => {
  return (
    <Container className="flex flex-row-sb-st h-16 items-center justify-around bg-logo1 p-5">
      <div className="flex flex-row items-center justify-between space-x-5 text-logo2">
        <Logo />
        <h1 className="font-semibold text-xl h1-font">
          <Link href="/">
            <a>Charanga al carrer</a>
          </Link>
        </h1>
      </div>
      <Nav />
    </Container>
  );
};
export default HeaderDesktop;
