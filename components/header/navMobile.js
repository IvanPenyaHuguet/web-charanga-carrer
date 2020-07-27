import Link from "next/link";
import links from "../../lib/linksNav";
import { useState, useEffect, useRef } from "react";
//import Menu from 'react-burger-menu/lib/menus/slide';
import Menu from "react-burger-menu/lib/menus/stack";
//import { stack as Menu } from 'react-burger-menu';
//import img from "../../images/logo.png";
import Logo from "../icons/iconDesktop";

const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setMenuOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);
  return (
    <div ref={ref}>
      <Menu
        right
        noOverlay
        disableOverlayClick
        pageWrapId={"content-wrapper"}
        outerContainerId={"outer-container"}
        isOpen={menuOpen}
        onStateChange={(state) => handleStateChange(state)}
      >
        <Link href="/">
          <a className="px-3 py-2">
            <Logo className="mx-auto my-4" />
            <h3 className="mx-auto text-center text-xl font-bold">
              Charanga al carrer
            </h3>
            <hr />
          </a>
        </Link>
        {getLinks()}
      </Menu>
    </div>
  );
};
const getLinks = () => {
  return links.map((i, index) => (
    <Link key={index} href={i.href}>
      <a className="px-3 py-2" alt={i.text}>
        {i.text}
      </a>
    </Link>
  ));
};
export default NavMobile;
