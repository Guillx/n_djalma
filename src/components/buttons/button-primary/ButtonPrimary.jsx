export const ButtonPrimary = ({
  className,
  disabled,
  icon,
  label,
  handleClick,
}) => {
  return (
    <button className={className} onClick={handleClick} disabled={disabled}>
      <i className={icon}></i>
      <span className="btn-label">{label}</span>
    </button>
  );
};
