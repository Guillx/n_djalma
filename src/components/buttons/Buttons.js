import Header from "../header/Header";
import SectionTitle from "../header/SectionTitle";

import { IconButton } from "./icon-button/IconButton";
import { ButtonPrimary } from "./button-primary/ButtonPrimary";
import { ButtonSecondary } from "./button-secondary/ButtonSecondary";
import { ButtonTertiary } from "./button-tertiary/ButtonTertiary";
import { ButtonGroup } from "./button-group/ButtonGroup";
import { ButtonCanvasControls } from "./button-canvas-control/ButtonCanvasControls";

function Buttons() {
  function clickPrimary(e) {
    e.preventDefault();
    alert("Primary Button! 🤟");
  }
  function clickPrimaryDestructive(e) {
    e.preventDefault();
    alert("Primary Button destructive! 💣");
  }

  return (
    <>
      <div className="body">
        <SectionTitle sectionTitle="Buttons" />
        <Header title="Primary Button" />
        <div className="page-content">
          <div className="btn-wrapper-s">
            <ButtonPrimary
              className="button-primary"
              label="Label"
              icon="icon-circle icon-s"
              handleClick={clickPrimary}
              // disabled="true"
            ></ButtonPrimary>
          </div>

          <div className="btn-wrapper-s">
            <ButtonPrimary
              className="button-primary-destructive"
              label="Label"
              icon="icon-delete icon-s"
              handleClick={clickPrimaryDestructive}
              // disabled="true"
            ></ButtonPrimary>
          </div>
        </div>

        {/* ***************************************** */}
        <Header title="Secondary Button" />
        <div className="page-content">
          <div className="btn-wrapper-s">
            <ButtonSecondary
              className="button-secondary"
              label="Label"
              icon="icon-circle icon-s"
              // disabled="true"
            ></ButtonSecondary>
          </div>

          <div className="btn-wrapper-s">
            <ButtonSecondary
              className="button-secondary-destructive"
              label="Label"
              icon="icon-delete icon-s"
              // disabled="true"
            ></ButtonSecondary>
          </div>
        </div>

        {/* ***************************************** */}
        <Header title="Tertiary Button" />
        <div className="page-content">
          <div className="btn-wrapper-s">
            <ButtonTertiary
              className="btn-tertiary"
              label="Label"
              // disabled="true"
            ></ButtonTertiary>
          </div>
        </div>

        {/* ***************************************** */}
        <Header title="Icon Button" />
        <div className="page-content">
          <div className="btn-wrapper-s">
            <IconButton
              className="btn-icon-container"
              icon="icon-circle icon-s"
            ></IconButton>
          </div>
        </div>

        {/* ***************************************** */}
        <Header title="Button Group" />
        <div className="page-content">
          <div className="btn-wrapper-l">
            <ButtonGroup></ButtonGroup>
          </div>
        </div>

        {/* ***************************************** */}
        <Header title="Button Canvas Control" />
        <div className="page-content">
          <div className="btn-wrapper-m">
            <ButtonCanvasControls />
          </div>
        </div>

        {/* ***************************************** */}
      </div>
    </>
  );
}

export default Buttons;
