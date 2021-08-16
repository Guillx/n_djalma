import "./App.css";
import "./components/buttons/buttons.scss";
import { IconButton } from "./components/buttons/icon-button/IconButton";
import { ButtonPrimary } from "./components/buttons/button-primary/ButtonPrimary";
import { ButtonSecondary } from "./components/buttons/button-secondary/ButtonSecondary";
import { ButtonTertiary } from "./components/buttons/button-tertiary/ButtonTertiary";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <div className="body">
        <Header title="Primary Button" />

        <div className="page-content">
          <ButtonPrimary
            className="button-primary"
            label="Label"
            icon="icon-circle icon"
            // disabled="true"
          ></ButtonPrimary>

          <ButtonPrimary
            className="button-primary-destructive"
            label="Label"
            icon="icon-delete icon"
            // disabled="true"
          ></ButtonPrimary>
        </div>

        {/* ***************************************** */}
        <Header title="Secondary Button" />

        <div className="page-content">
          <ButtonSecondary
            className="button-secondary"
            label="Label"
            icon="icon-circle icon"

            // disabled="true"
          ></ButtonSecondary>

          <ButtonSecondary
            className="button-secondary-destructive"
            label="Label"
            icon="icon-delete icon"
            // disabled="true"
          ></ButtonSecondary>
        </div>

        {/* ***************************************** */}
        <Header title="Tertiary Button" />

        <div className="page-content">
          <ButtonTertiary
            buttonClassName="btn-tertiary"
            label="Label"
            // disabled="true"
          ></ButtonTertiary>
        </div>

        {/* ***************************************** */}
        <Header title="Icon Button" />

        <div className="page-content">
          <IconButton
            buttonClassName="btn-icon-container icon-button"
            icon="icon-circle icon"
          ></IconButton>
        </div>
      </div>
    </>
  );
}

export default App;
