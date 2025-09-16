// src/components/common/Input.js

const Input = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  name,
  className = "",
}) => {
  return (
    <div className={`flex flex-col  ${className}`}>
      {label && (
        <label htmlFor={name} className="mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={` rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
};

export default Input;
