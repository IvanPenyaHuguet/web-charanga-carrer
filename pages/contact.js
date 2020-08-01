import { useState } from "react";
import Form from "../components/form/contactForm";
import PrivacyPopup from "../components/popups/privacyPopup";

const contact = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const onShowPrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };

  return (
    <>
      {showPrivacy ? (
        <PrivacyPopup onShowPrivacy={() => onShowPrivacy()} />
      ) : null}
      <Form onShowPrivacy={() => onShowPrivacy()} />
    </>
  );
};
export default contact;
