import { ButtonPrimary } from "../button-primary/ButtonPrimary";
import { ButtonSecondary } from "../button-secondary/ButtonSecondary";
import { ButtonTertiary } from "../button-tertiary/ButtonTertiary";

export const ButtonGroup = () => {
  return (
    <>
      <ButtonTertiary className="btn-tertiary mr-7" label="Label" />
      <ButtonSecondary
        className="button-secondary mr-7"
        label="Label"
        icon="icon-circle icon-s"
      />
      <ButtonPrimary
        className="button-primary mr-7"
        label="Label"
        icon="icon-circle icon-s"
      />
    </>
  );
};
