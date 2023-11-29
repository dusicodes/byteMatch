import PrimaryInput from "./PrimaryInput";

function AuthModalScreen({ showModal }) {
  const handleClose = () => {
    showModal(false);
  };
  const isSignedUp = true;
  const handleSubmit = (e) => {
    e.preventDeafult();
  };
  return (
    <div
      className={`flex flex-col gap-4 bg-slate-100 h-[600px] min-w-[360px] absolute z-0 rounded-3xl items-center`}
    >
      <div className=" p-4 self-end justify-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer "
          onClick={handleClose}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <form
        className="flex flex-col justify-normal gap-5 self-center text-center w-min"
        onSubmit={handleSubmit}
      >
        <h1 className=" font-bold text-4xl ">
          {isSignedUp ? "Create an Account" : "LOG IN"}
        </h1>
        <p>
          By clicking Login, you agree you our terms. Learn how we process your
          data in our Privacy Policy and Cookie Policy.
        </p>

        <PrimaryInput type={"email"} placeholder={"email address"} />
        <PrimaryInput type={"password"} placeholder={"password"} />
        <PrimaryInput type={"password"} placeholder={"repeat passwrod"} />
        <button className=" self-center bg-blue-950 rounded-full p-4 text-white w-48 hover:bg-slate-400">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export default AuthModalScreen;
