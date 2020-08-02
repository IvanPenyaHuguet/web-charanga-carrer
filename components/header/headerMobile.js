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
    <Container className="flex flex-row h-16 items-center justify-around bg-logo1 p-1 z-50">
      <div className="flex flex-row items-center justify-between space-x-2 text-logo2">
        <div className="pt-2">
          <Logo width="80" height="80" />
        </div>
        <h1 className="font-semibold text-3xl h1-font">
          <Link href="/">
            <a>Charanga Al Carrer</a>
          </Link>
        </h1>
      </div>
      <Nav />
    </Container>
  );
};
export default memo(HeaderMobile);
