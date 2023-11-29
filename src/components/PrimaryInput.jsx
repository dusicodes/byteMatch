function PrimaryInput({ placeholder, type, id, onChange, required }) {
  return (
    <>
      <input
        id={id}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className=" p-4 w-[300px] rounded-2xl border-2 border-blue-950"
        type={type}
      ></input>
    </>
  );
}

export default PrimaryInput;
