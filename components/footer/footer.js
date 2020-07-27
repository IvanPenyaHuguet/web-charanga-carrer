import React, { useContext } from "react";

import FooterDesktop from "./footerDesktop";
import FooterMobile from "./footerMobile";

import { ResponsiveContext } from "../../lib/context";

/**
 * Component that chooses the header to be rendered
 * @returns {React.Component} Header
 */
const Footer = () => {
  const { resolution } = useContext(ResponsiveContext);

  switch (resolution) {
    case "lg":
    case "md":
      return <FooterDesktop />;
    default:
      return <FooterMobile />;
  }
};

export default Footer;
