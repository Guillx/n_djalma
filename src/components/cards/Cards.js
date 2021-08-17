import Header from "../header/Header";
import { UploadCard } from "./upload-card/UploadCard";
import "./cards.scss";

function Cards() {
  return (
    <div className="body">
      <Header title="Upload Card" />
      <div className="page-content">
        <div className="btn-wrapper-m">
          <UploadCard
            className="upload-card"
            card=""
            // disabled="true"
          ></UploadCard>
        </div>

        <div className="btn-wrapper-m">
          <UploadCard
            className="upload-card"

            // disabled="true"
          ></UploadCard>
        </div>
      </div>

      {/* ***************************************** */}
    </div>
  );
}

export default Cards;
