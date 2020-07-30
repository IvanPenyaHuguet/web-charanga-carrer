import { useState } from "react";
import ImageBanner from "../components/home/ImageBanner";
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
      <ImageBanner />
      <Form onShowPrivacy={() => onShowPrivacy()} />
    </>
  );
};
export default contact;
