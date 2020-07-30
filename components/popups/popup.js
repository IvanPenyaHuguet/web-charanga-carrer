import { useContext } from "react";
import { ResponsiveContext } from "../../lib/context";

const popup = ({ title, onButtonClick, children, buttonName = "Aceptar" }) => {
  const { resolution } = useContext(ResponsiveContext);

  const responsiveCSS = () => {
    switch (resolution) {
      case "lg":
      case "md":
        return "popup_inner_lg";
      case "sm":
        return "popup_inner_sm";
      default:
        return "popup_inner_xs";
    }
  };

  return (
    <div className="popup">
      <div className={responsiveCSS()}>{children}</div>
    </div>
  );
};
export default popup;
