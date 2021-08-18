import PropTypes from "prop-types";

export const ButtonSecondary = ({ className, disabled, icon, label }) => {
  return (
    <button className={className} disabled={disabled}>
      <i className={icon}></i>
      <span className="btn-label">{label}</span>
    </button>
  );
};

ButtonSecondary.propTypes = {
  className: PropTypes.string.isRequired,
  disabled: PropTypes.string,
  icon: PropTypes.symbol.isRequired,
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
