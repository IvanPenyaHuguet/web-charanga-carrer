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
    <Container className="flex flex-row h-16 items-center justify-around bg-logo1 z-50">
      <Link href="/">
        <a className="flex flex-row flex-no-wrap items-center justify-between space-x-2 text-logo2">
          <div className="pt-2">
            <Logo width="60" height="60" />
          </div>
          <h1 className="font-semibold text-2xl h1-font">Charanga Al Carrer</h1>
        </a>
      </Link>
      <Nav />
    </Container>
  );
};
export default memo(HeaderMobile);
