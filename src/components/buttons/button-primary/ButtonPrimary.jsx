export const ButtonPrimary = ({ className, disabled, icon, label }) => {
  return (
    <button className={className} disabled={disabled}>
      <i className={icon}></i>
      <span className="btn-label">{label}</span>
    </button>
  );
};
