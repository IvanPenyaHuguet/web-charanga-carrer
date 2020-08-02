import { useState } from "react";

const inputText = ({ label, name, onChange, placeholder, error = "" }) => {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <div className="flex flex-wrap justify-bewtween content-center flex-row space-x-2">
      <label
        htmlFor={name}
        className={isFocus ? "lost-form-label" : "form-label"}
      >
        {label}
      </label>
      <input
        name={name}
        id={name}
        type="text"
        className={`normal-input ${error} floating-label`}
        onChange={onChange}
        placeholder={isFocus ? placeholder : ""}
        onFocus={() => setIsFocus(true)}
      />
    </div>
  );
};
export default inputText;
