function Button({ children, onClick, variant = "primary", className }) {
  const base = "px-3 py-3 cursor-pointer font-medium";
  const styles = {
    primary: `${base} bg-white text-gray-800 hover:bg-gray-100 transition-all duration-200`,
    secondary: `${base} bg-white    text-gray-800`,
  };

  return (
    <button onClick={onClick} className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
