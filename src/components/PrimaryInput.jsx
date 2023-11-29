function PrimaryInput({ placeholder, type }) {
  return (
    <>
      <input
        placeholder={placeholder}
        className=" p-4 w-[300px] rounded-2xl border-2 border-blue-950"
        type={type}
      ></input>
    </>
  );
}

export default PrimaryInput;
