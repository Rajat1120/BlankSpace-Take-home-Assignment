function Button({ children, onClick, variant = "primary", className }) {
  const base = `px-3 py-3  font-medium ${className}`;
  const styles = {
    primary: `${base} bg-white text-gray-800 hover:bg-gray-100 transition-all duration-200`,
    secondary: `${base} bg-white text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button onClick={onClick} className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;
