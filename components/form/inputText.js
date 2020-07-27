const inputText = ({ label, name, onChange, placeholder, error = "" }) => {
  return (
    <div className="flex flex-wrap justify-bewtween content-center flex-row lg:space-x-8 space-x-2">
      <label htmlFor={name} className="">
        {label}:
      </label>
      <input
        name={name}
        id={name}
        type="text"
        className={`border-solid border-logo3 border-2 rounded-lg border-opacity-50 w-full focus:border-4 focus:border-opacity-100 focus:shadow-outline ${error}`}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};
export default inputText;
