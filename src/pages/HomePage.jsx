import Navbar from "../components/Navbar";
import AuthModalScreen from "../components/AuthModalScreen";
import { useState } from "react";
function HomePage() {
  const authToken = false;
  const [ModalScreen, setModalScreen] = useState(false);
  const [isSignedUp, setSignedUp] = useState(true);

  const handleClick = () => {
    console.log("I have been clicked");
    setModalScreen(true);
    setSignedUp(true);
  };

  return (
    <div className="h-screen w-screen bg-[url('src/images/home-page.jpg')] bg-cover">
      <div className="h-screen w-screen fixed bg-gradient-to-b from-black ... ">
        <Navbar
          setModal={setModalScreen}
          ModalScreen={ModalScreen}
          setSignedUp={setSignedUp}
          minimal={false}
        />

        <section className="h-screen w-auto relative z-0 flex-1 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className=" font-extrabold text-9xl text-white">
              Find your Byte®
            </h1>
            <button
              className=" bg-blue-500 rounded-full mt-10 p-4 text-white w-48 hover:bg-blue-300"
              onClick={handleClick}
            >
              {authToken ? "Sign Out" : "Create an Account"}
            </button>
            {ModalScreen && (
              <AuthModalScreen
                showModal={setModalScreen}
                isSignedUp={isSignedUp}
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
