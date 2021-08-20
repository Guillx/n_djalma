import { useForm } from "react-hook-form";

export const TextFieldNoIcon = ({ className, type, placeholder }) => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm();

  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-textfield">
      <label className={`label-textfield ${errors.testText && "error-label"}`}>
        Label
      </label>
      <input
        name="requiredField"
        type={type}
        placeholder={placeholder}
        className={`tf-no-icon-empty ${errors.testText && "error-input"}`}
        {...register("testText", { required: true })}
      />
      {errors.testText?.type === "required" && (
        <p className="error-text-textfiel">This would be some error text</p>
      )}

      <br />

      <button type="submit" className="btn-send-form">
        Enviar
      </button>

      {/* <button type="submit" className="btn-success">
        V
      </button>
      <button type="submit" className="btn-error">
        X
      </button> */}
    </form>
  );
};
