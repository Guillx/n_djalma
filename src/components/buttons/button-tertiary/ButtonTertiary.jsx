export const ButtonTertiary = ({ className, disabled, label }) => {
  return (
    <button
      className={`btn-tertiary ${className} ${disabled ? "btn-disabled" : ""}`}
      disabled={disabled}
    >
      <span className="btn-lb">{label}</span>
    </button>
  );
};
