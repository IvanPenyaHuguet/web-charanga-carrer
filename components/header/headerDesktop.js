import { useState } from "react";
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
  const [mouseEnterIcon, setMouseEnterIcon] = useState(false);
  return (
    <Container className="flex flex-row h-16 items-center justify-around bg-logo1 p-5">
      <Link href="/">
        <a
          className="flex flex-row items-center justify-between space-x-5 md:space-x-3 text-logo2 fill-current"
          onMouseEnter={() => setMouseEnterIcon(true)}
          onMouseLeave={() => setMouseEnterIcon(false)}
        >
          <div className="pt-2">
            <Logo
              width="80"
              height="80"
              fill={mouseEnterIcon ? "#ffa12e" : "#fff"}
            />
          </div>
          <h1
            className={`font-semibold text-4xl md:text-3xl h1-font tracking-wider "+ ${
              mouseEnterIcon ? "text-logo4" : ""
            }`}
          >
            Charanga Al Carrer
          </h1>
        </a>
      </Link>
      <Nav />
    </Container>
  );
};
export default HeaderDesktop;
