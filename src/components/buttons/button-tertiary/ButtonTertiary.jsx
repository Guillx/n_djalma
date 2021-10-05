export const ButtonTertiary = ({ className, disabled, label }) => {
  return (
    <button
      className={`btn-tertiary ${className} ${
        disabled === true ? "btn-disabled" : ""
      }`}
      disabled={disabled}
    >
      <span className="btn-lb">{label}</span>
    </button>
  );
};
