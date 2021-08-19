export const TextFieldNoIcon = ({ className, type, placeholder }) => {
  return (
    <form>
      <input className={className} type={type} placeholder={placeholder} />
    </form>
  );
};
