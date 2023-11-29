function Navbar({ authToken, setModal, modalScreen }) {
  function handleAuth() {
    if (authToken == false) {
      setModal(true);
    }
  }

  return (
    <nav className="w-full px-6 flex justify-between items-center ">
      <div>
        <p className=" text-white font-bold text-2xl">ByteMatch®</p>
      </div>
      <button
        className=" bg-slate-200 text-blue-600 p-4 
       w-32 rounded-full"
        onClick={handleAuth}
        disabled={modalScreen}
      >
        Log in
      </button>
    </nav>
  );
}

export default Navbar;
