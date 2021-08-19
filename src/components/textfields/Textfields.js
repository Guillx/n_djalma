import Header from "../header/Header";
import SectionTitle from "../header/SectionTitle";

import { TextFieldNoIcon } from "./textfield/textfield-no-icon/TextfieldNoIcon";

function Textfields() {
  return (
    <>
      <div className="body">
        <SectionTitle sectionTitle="Textfields" />
        <Header title="Textfield" />
        <div className="page-content">
          <div className="wrapper-textfield">
            <TextFieldNoIcon
              className="tf-no-icon-empty"
              type="text"
              placeholder="e.g. Text"
            />
          </div>
          <div className="wrapper-textfield">
            <TextFieldNoIcon
              className="tf-error"
              type="text"
              placeholder="e.g. Text"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Textfields;
