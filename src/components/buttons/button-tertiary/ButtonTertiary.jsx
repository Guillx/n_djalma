export const ButtonTertiary = ({ className, disabled, label }) => {
  return (
    <button className={className} disabled={disabled}>
      <span className="btn-label">{label}</span>
    </button>
  );
};
