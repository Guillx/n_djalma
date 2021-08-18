import PropTypes from "prop-types";

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

ButtonPrimary.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  icon: PropTypes.symbol.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
