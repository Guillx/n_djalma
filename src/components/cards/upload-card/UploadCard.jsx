export const UploadCard = ({
  className,
  uploadCardTop,
  icon,
  fileName,
  progressBar,
  xIcon,
}) => {
  return (
    <div className={className}>
      <div className={uploadCardTop}>
        <i className={icon}></i>
        <p className="upload-card-filename">{fileName}</p>
        <i className="icon-dismiss icon-xs"></i>
      </div>

      <div className={progressBar}></div>
    </div>
  );
};
