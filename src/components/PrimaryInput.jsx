function PrimaryInput({ placeholder, type, id, onChange, required, styles }) {
  return (
    <>
      <input
        id={id}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className={styles}
        type={type}
      ></input>
    </>
  );
}

export default PrimaryInput;
