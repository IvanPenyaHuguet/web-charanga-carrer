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
    <Container className="flex flex-row h-16 items-start xs:justify-start justify-between bg-logo1 z-50">
      <Link href="/" className="">
        <a className="flex flex-row flex-no-wrap items-center justify-between mr-20 xm:space-x-4 text-logo2 ml-4">
          <div className="pt-2">
            <Logo width="60" height="60" />
          </div>
          <h1 className="font-semibold xs:text-xl text-2xl h1-font">
            Charanga Al Carrer
          </h1>
        </a>
      </Link>
      <Nav />
    </Container>
  );
};
export default memo(HeaderMobile);
