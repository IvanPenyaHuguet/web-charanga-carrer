import { memo } from "react";
import Nav from "./navMobile";
import Container from "../layouts/container";
import Logo from "../icons/iconDesktop";
import Link from "next/link";

/**
 * @returns {React.Component} Header mobile
 */
const HeaderMobile = () => {
  return (
    <Container className="flex flex-row-sb-st h-16 items-center justify-around bg-logo1 p-5 z-50">
      <div className="flex flex-row items-center justify-between space-x-5 text-logo2">
        <Logo />
        <h1 className="font-semibold text-3xl">
          <Link href="/">
            <a>Charanga al movil</a>
          </Link>
        </h1>
      </div>
      <Nav />
    </Container>
  );
};
export default memo(HeaderMobile);
