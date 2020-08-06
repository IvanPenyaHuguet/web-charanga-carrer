import { useState } from "react";
import PrivacyPopup from "./../popups/privacyPopup";
import Cookies from "./../cookies/cookies";

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
    <>
      <section className={`lg:pb-24 pb-32 ${className}`}>
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
            onClick={() => onShowCookies()}
          >
            política de cookies
          </div>
          .
        </span>
      </section>
      <Cookies onCookiesClick={onShowCookies} showCookies={showCookies} />
    </>
  );
};
export default politicsFooter;
