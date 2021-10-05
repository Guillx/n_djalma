import PropTypes from "prop-types";

const proptypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // handleClick: PropTypes.func.isRequired,
};

export const ButtonSecondary = ({
  className,
  disabled,
  icon,
  label,
  onClick,
}) => {
  return (
    <button
      className={`btn-secondary ${className} ${
        disabled === true ? "btn-disabled" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      <i className={icon}></i>
      <span className="btn-lb">{label}</span>
    </button>
  );
};

ButtonSecondary.propTypes = proptypes;
