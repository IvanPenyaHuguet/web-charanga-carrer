import { useContext } from "react";
import { ResponsiveContext } from "../../lib/context";
import Cross from "./../icons/cross";

const popup = ({ children, onClick }) => {
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
      <div className={responsiveCSS()}>
        <div
          className="closing-cross text-black fill-current"
          onClick={() => onClick()}
        >
          <Cross />
        </div>
        {children}
      </div>
    </div>
  );
};
export default popup;
