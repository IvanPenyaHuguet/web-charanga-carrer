import { useState } from "react";
import Form from "../components/form/contactForm";
import PrivacyPopup from "../components/popups/privacyPopup";
import PoliticsFooter from "./../components/footer/politics";
import Container from "./../components/layouts/container";

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
      <Container className="lg:w-3/5 mx-auto px-8 w-full">
        <PoliticsFooter />
      </Container>
    </>
  );
};
export default contact;
