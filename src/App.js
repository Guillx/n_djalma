import "./App.css";
import "./components/buttons/buttons.scss";

import Header from "./components/header/Header";

import { IconButton } from "./components/buttons/icon-button/IconButton";
import { ButtonPrimary } from "./components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "./components/buttons/button-secondary/ButtonSecondary";
import { ButtonTertiary } from "./components/buttons/button-tertiary/ButtonTertiary";
import { ButtonGroup } from "./components/buttons/button-group/ButtonGroup";
import { ButtonCanvasControls } from "./components/buttons/button-canvas-controls/ButtonCanvasControls";

function App() {
  return (
    <>
      <div className="body">
        <Header title="Primary Button" />
        <div className="page-content">
          <div className="btn-wrapper-s">
            <ButtonPrimary
              className="button-primary"
              label="Label"
              icon="icon-circle icon-s"
              // disabled="true"
            ></ButtonPrimary>
          </div>

          <div className="btn-wrapper-s">
            <ButtonPrimary
              className="button-primary-destructive"
              label="Label"
              icon="icon-delete icon-s"
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
      </div>
    </>
  );
}

export default App;
