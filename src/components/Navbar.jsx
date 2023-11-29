function Navbar({ authToken, setModal, modalScreen, setSignedUp }) {
  function handleAuth() {
    if (authToken == false) {
      setModal(true);
      setSignedUp(false);
    }
  }

  return (
    <nav className="w-full mt-6 px-6 flex justify-between items-center ">
      <div>
        <p className=" text-white font-bold text-2xl cursor-pointer">
          ByteMatch
        </p>
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
      <button
        className=" bg-slate-200 text-blue-600  p-4
       w-32 rounded-3xl "
        onClick={handleAuth}
        disabled={modalScreen}
      >
        Log in
      </button>
    </nav>
  );
}

export default Navbar;
