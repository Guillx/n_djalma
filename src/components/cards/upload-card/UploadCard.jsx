export const UploadCard = ({ className, card, icon }) => {
  return (
    <div className={className}>
      <div className={card}>
        <i className={icon}></i>
      </div>
    </div>
  );
};
