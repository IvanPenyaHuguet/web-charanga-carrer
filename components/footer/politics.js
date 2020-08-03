import { useState } from "react";
import PrivacyPopup from "./../popups/privacyPopup";

const politicsFooter = ({ className = "" }) => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const onShowPrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
  const [showCookies, setShowCookies] = useState(false);
  const onShowCookies = () => {
    setShowCookies(!showCookies);
  };
  return (
    <section className={`pb-16 ${className}`}>
      {showPrivacy ? (
        <PrivacyPopup onShowPrivacy={() => onShowPrivacy()} />
      ) : null}
      <span>
        Consulte además nuestra{" "}
        <div
          className="italic underline text-advise cursor-pointer inline"
          onClick={() => onShowPrivacy()}
        >
          política de privacidad
        </div>{" "}
        y nuestra{" "}
        <div
          className="italic underline text-advise cursor-pointer inline"
          onClick={() => {}}
        >
          política de cookies
        </div>
        .
      </span>
    </section>
  );
};
export default politicsFooter;
