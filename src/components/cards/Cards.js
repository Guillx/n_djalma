import Header from "../header/Header";
import SectionTitle from "../header/SectionTitle";

import { UploadCard } from "./upload-card/UploadCard";

function Cards() {
  return (
    <div className="body">
      <SectionTitle sectionTitle="Cards" />
      <Header title="Upload Card" />
      <div className="page-content">
        <div className="btn-wrapper-bcc">
          <UploadCard
            className="upload-card-default"
            uploadCardTop="upload-card-top"
            icon="icon-document-excel icon-l"
            fileName="File name"
            progressBar="upload-card-progress-bar-default"
          ></UploadCard>
        </div>

        <div className="btn-wrapper-bcc">
          <UploadCard
            className="upload-card-destructive"
            uploadCardTop="upload-card-top"
            icon="icon-document-excel icon-l"
            fileName="File name"
            progressBar="upload-card-progress-bar-destructive"
          ></UploadCard>
        </div>
      </div>

      {/* ***************************************** */}
    </div>
  );
}

export default Cards;
