import PropTypes from "prop-types";

let proptypes = {
  /*
   * La clase del tipo de botón: normal o destructive
   */
  className: PropTypes.string,
  /*
   * Muestra el botón en estado 'disabled'
   */
  disabled: PropTypes.bool,
  /*
   * Nombre del icono
   */
  icon: PropTypes.string,
  /*
   * Label que se mostrará en el botón
   */
  label: PropTypes.string.isRequired,
  /*
   * Click handler
   */
  onClick: PropTypes.func.isRequired,
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
      className={`btn-primary ${className} ${
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

ButtonPrimary.propTypes = proptypes;
