function Navbar({ minimal, setModal, modalScreen, setSignedUp }) {
  function handleAuth() {
    setModal(true);
    setSignedUp(false);
  }
  const authToken = false;
  return (
    <nav className="w-full mt-6 px-6 flex  justify-between items-center ">
      <div className="flex flex-row justify-between text-lg items-center">
        <img
          className="w-10 h-10 align-center"
          src="/src/images/byte-logo.png"
        ></img>
        <span
          className={`font-bold  cursor-pointer ${
            minimal === true ? "text-black" : "text-white"
          } `}
        >
          ByteMatch
        </span>
      </div>
      <ul className="text-white flex flex-row gap-7 cursor-pointer">
        <li>
          <a href="#">Download</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Learn</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      {!authToken && !minimal && (
        <button
          className=" bg-slate-200 text-blue-600  p-4
       w-32 rounded-3xl "
          onClick={handleAuth}
          disabled={modalScreen}
        >
          Log in
        </button>
      )}
    </nav>
  );
}

export default Navbar;
