import PropTypes from "prop-types";

const proptypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export const ButtonPrimary = ({
  className,
  disabled,
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      className={`btn-primary ${className} ${disabled ? "btn-disabled" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      <i className={icon}></i>
      <span className="btn-label">{label}</span>
    </button>
  );
};

ButtonPrimary.propTypes = proptypes;
