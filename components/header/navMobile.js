import Link from "next/link";
import links from "../../lib/linksNav";
import { useState, useEffect, useRef } from "react";
//import Menu from 'react-burger-menu/lib/menus/slide';
import Menu from "react-burger-menu/lib/menus/stack";
import Logo from "../icons/iconDesktop";

/**
 * @todo Cerrar al clicar en un enlace
 */
const NavMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mouseEnterIcon, setMouseEnterIcon] = useState(false);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };
  const onLinkClick = () => {
    setMenuOpen(false);
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
          <a
            className="px-3 py-2 hover:text-logo4"
            onMouseEnter={() => setMouseEnterIcon(true)}
            onMouseLeave={() => setMouseEnterIcon(false)}
            onClick={() => onLinkClick()}
          >
            <div className="mx-auto w-1/2">
              <Logo
                className="mx-auto my-4"
                fill={mouseEnterIcon ? "#ffa12e" : "#fff"}
              />
            </div>
            <h3 className="mx-auto text-center text-2xl h1-font">
              Charanga al carrer
            </h3>
            <hr />
          </a>
        </Link>
        {getLinks(onLinkClick)}
      </Menu>
    </div>
  );
};
const getLinks = (onLinkClick) => {
  return links.map((i, index) => (
    <Link key={index} href={i.href}>
      <a
        className="px-3 py-2 font-bold hover:text-logo4"
        alt={i.text}
        onClick={() => onLinkClick()}
      >
        {i.text}
      </a>
    </Link>
  ));
};
export default NavMobile;
