import Popup from "./popup";
import Container from "./../layouts/container";
import { PrivacyPolitic } from "../../personal_info";

const privacyPopup = ({ onShowPrivacy }) => {
  return (
    <Popup onClick={() => onShowPrivacy()}>
      <Container className="lg:p-10 mx-auto p-5">
        <PrivacyPolitic />
      </Container>
      <div className="relative bottom-0 w-full flex justify-center pb-10">
        <button
          className="border-solid border-logo3 text-logo3 mx-auto border-2 rounded w-1/5 mini-w-8 hover:bg-logo3 hover:text-logo2"
          onClick={() => onShowPrivacy()}
        >
          Aceptar
        </button>
      </div>
    </Popup>
  );
};
export default privacyPopup;
