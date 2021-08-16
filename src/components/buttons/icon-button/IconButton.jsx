export const IconButton = ({ buttonClassName, icon }) => {
  return (
    <div className="btn-wrapper">
      <button className={buttonClassName}>
        <i className={icon}></i>
      </button>
    </div>
  );
};
