import { ButtonPrimary } from "../button-primary/ButtonPrimary";
import { ButtonSecondary } from "../button-secondary/ButtonSecondary";
import { ButtonTertiary } from "../button-tertiary/ButtonTertiary";

export const ButtonGroup = () => {
  return (
    <>
      <ButtonTertiary className="btn-tertiary" label="Label" />
      <ButtonSecondary
        className="button-secondary"
        label="Label"
        icon="icon-circle icon-s"
      />
      <ButtonPrimary
        className="button-primary"
        label="Label"
        icon="icon-circle icon-s"
      />
    </>
  );
};
