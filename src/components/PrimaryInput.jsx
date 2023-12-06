function PrimaryInput({
  placeholder,
  type,
  id,
  onChange,
  required,
  styles,
  value,
  name,
}) {
  return (
    <>
      <input
        id={id}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className={styles}
        value={value}
        name={name}
        type={type}
      ></input>
    </>
  );
}

export default PrimaryInput;
