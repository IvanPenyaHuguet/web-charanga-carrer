import { useEffect, useState } from "react";
import { initGA, logPageView } from "./setCookies";
import cookieCutter from "cookie-cutter";
import canUseDOM from "./../../lib/canUseDOM";
import CookieBanner from "./cookieBanner";
import CookiesPopup from "./../popups/cookiesPopup";

function Cookies({ onCookiesClick, showCookies }) {
  let cookies = null;
  if (canUseDOM) {
    cookies = cookieCutter.get("CookieConsent");
  }
  const [cookied, setCookied] = useState(cookies);
  const onAcceptClick = () => {
    cookieCutter.set("CookieConsent", "true", {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2)),
    });
    setCookied("true");
  };
  const onDeclineClick = () => {
    cookieCutter.set("CookieConsent", "false", {
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 2)),
    });
    setCookied("false");
  };
  const cookiePopupAccept = () => {
    onAcceptClick();
    onCookiesClick();
  };
  const cookiePopupDecline = () => {
    onDeclineClick();
    onCookiesClick();
  };
  useEffect(() => {
    if (cookied == "true") {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }
      logPageView();
    }
  }, [cookied]);
  return (
    <>
      {cookied == null ? (
        <CookieBanner
          onAcceptClick={onAcceptClick}
          onCookiesClick={onCookiesClick}
        />
      ) : null}
      {showCookies ? (
        <CookiesPopup
          onShowCookies={() => onCookiesClick()}
          onAcceptCookies={() => cookiePopupAccept()}
          onDeclineCookies={() => cookiePopupDecline()}
          cookied={cookied}
        />
      ) : null}
    </>
  );
}
export default Cookies;
