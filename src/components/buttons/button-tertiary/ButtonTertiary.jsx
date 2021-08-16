export const ButtonTertiary = ({ buttonClassName, disabled, label }) => {
  return (
    <div className="btn-wrapper">
      <button className={buttonClassName} disabled={disabled}>
        <span className="btn-label">{label}</span>
      </button>
    </div>
  );
};
