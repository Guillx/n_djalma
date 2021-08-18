import Header from "../header/Header";
import SectionTitle from "../header/SectionTitle";
import { TextfieldNoIcon } from "./textfield-no-icon/TextfieldNoIcon";

function Textfield() {
  return (
    <>
      <div className="body">
        <SectionTitle sectionTitle="Textfield" />
        <Header title="Textfield" />
        <div className="page-content">
          <div className="btn-wrapper-textfield">
            <TextfieldNoIcon className="" label="Label" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Textfield;
